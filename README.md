# Trigant - Front + flux Instagram 

## Architecture

Le site est composé de deux parties déployées comme deux conteneurs Docker séparés, reliés par nginx :

```
                         VPS (Docker)
        ┌───────────────────────────────────────────┐
        │                                             │
Client  │   ┌──────────────┐        ┌──────────────┐  │
(navig.)│   │  conteneur   │ /api/* │  conteneur   │  │
  ───────────▶   front     │───────▶│   api        │  │
  requêtes│   (nginx:80)   │ proxy  │ (node:4000)  │  │
        │   │              │        │              │  │
        │   │ sert dist/   │        │ Express      │  │
        │   │ (HTML/JS/CSS │        │ + token      │──┼──▶ Meta Graph API
        │   │  statiques)  │        │  Instagram   │  │    (graph.instagram.com)
        │   └──────────────┘        └──────────────┘  │
        │                                             │
        └───────────────────────────────────────────┘
```

- **`front`** (React + Vite, servi par nginx) : Fichiers 100 % statiques, aucun secret dedans.
- **`api`** (Node/Express, dossier `server/`) : Backend qui va chercher les posts Instagram via l'API Meta et cache le token `INSTAGRAM_ACCESS_TOKEN`. Le front ne l'appelle jamais directement - il passe toujours par `/api/instagram`, que nginx redirige vers ce conteneur.

Le token n'atteint jamais le navigateur : il ne vit que dans le conteneur `api`, jamais dans le bundle JS ni dans les logs nginx.

## Emplacement des fichiers

| Chemin                                  | Rôle                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/`                                  | code du front (React/Vite)                                                                                                                             |
| `src/lib/instagram.js`                  | appelle `/api/instagram` côté client, ne connaît pas le token                                                                                          |
| `src/components/instagram-feed.jsx`     | composant du bloc "Sur Instagram"                                                                                                                      |
| `src/components/instagram-carousel.jsx` | grille/carrousel des posts                                                                                                                             |
| `server/`                               | backend Node (API Instagram)                                                                                                                           |
| `server/index.js`                       | expose la route `GET /api/instagram`                                                                                                                   |
| `server/instagram.js`                   | seul fichier qui lit `INSTAGRAM_ACCESS_TOKEN`, appelle l'API Meta, cache 1h                                                                            |
| `Dockerfile`                            | build du front (inchangé, géré par la pipeline)                                                                                                        |
| `Dockerfile.api`                        | build de l'API (multi-stage)                                                                                                                           |
| `docker-compose.yml`                    | pour tester les deux conteneurs ensemble **en local uniquement** - n'est pas utilisé par la pipeline GitLab (celle-ci déploie via `docker run` en SSH) |
| `nginx/`                                | config nginx utilisée par la pipeline (écrasée par la variable CI/CD `PROD_NGINX_CONF` au build)                                                       |
| `nginxLocal/`                           | copie de la même config nginx, dédiée aux tests locaux (voir plus bas pourquoi)                                                                        |

## Tester en local avec Docker

⚠️ **Le dossier s'appelle `nginxLocal/` et pas `nginx/`.**
Le `Dockerfile` du front fait `mkdir nginx`& `cp ${NGINX_CONF} nginx/nginx.conf`, ce qui provoque une erreur si le dossier `nginx/` existe déjà. Or, pour utiliser la config nginx en local, il faut que le build du front trouve la config au bon endroit. D'où le nom temporaire `nginxLocal/` pour ne pas interférer avec le build de la pipeline.


**Avant de lancer les conteneurs en local**, il faut donc renommer temporairement le dossier pour que le build local trouve la config au bon endroit :

```bash
# Renommer nginxLocal -> nginx pour que le Dockerfile local trouve la conf
mv nginxLocal nginx

# Créer un fichier .env à la racine avec le token (jamais commit)
echo "INSTAGRAM_ACCESS_TOKEN=xxxxx" > .env

# Lancer les deux conteneurs
docker compose up --build
```

Le site est alors accessible sur `http://localhost` (port 80, tel que défini dans `docker-compose.yml`).

**Une fois les tests terminés, remettre le dossier dans son état d'origine** avant de commit/push, pour ne pas perturber la pipeline :

```bash
mv nginx nginxLocal
```

## Variables d'environnement

| Variable                 | Où                                               | Description                                                                                                                                         |
| ------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INSTAGRAM_ACCESS_TOKEN` | `.env` en local / variable CI/CD masquée en prod | Token longue durée (60 jours) de l'app Meta "Trigant" (ou équivalent). Rafraîchi automatiquement toutes les 24h tant que le conteneur `api` tourne. |

Si le flux Instagram meurt malgré le rafraîchissement automatique (token expiré après une longue coupure), il faut en régénérer un : dashboard Meta → app concernée → Cas d'utilisation → Générer un token, puis mettre à jour la variable.

## Comportement de secours

Si le token est absent, expiré, ou que l'API Meta répond en erreur, `getInstagramPosts` renvoie `null` et le front n'affiche pas la partie Instagram : **le site ne casse jamais**, même sans connexion à Instagram.

## Déploiement

Géré par `.gitlab-ci.yml` (pipeline GitLab, hors périmètre front). Deux images sont buildées et poussées (front + api), puis déployées via `docker run` en SSH sur le même réseau Docker, pour que nginx puisse joindre l'API par son nom de conteneur. Voir directement le fichier `.gitlab-ci.yml` pour le détail.
