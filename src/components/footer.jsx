import pessacLogo from "../assets/logo/LogoPessacBlanc.png";
import groupLogo from "../assets/logo/TrigantBlanc.png";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer w-full h-fit mt-[var(--space-big)] text-white-text">
      <div className="w-[100vw] flex flex-col justify-center items-center bg-accent-gold py-5">
        <div className="navbar-center flex flex-col w-fit gap-1.5">
          <img src={groupLogo} alt="Group Logo" className="w-40" />
          <img src={pessacLogo} alt="Pessac-Leognan Logo" className="w-30" style={{ filter: "brightness(2)" }}/>
        </div>

        <div className="flex flex-row gap-8 h-fit">
          <div className="flex flex-col items-start">
            <h3 className="font-abhaya-bold text-[1rem]">Contact</h3>
            <div className="div-container">
              <p className="info">Clément Beriot</p>
              <p>
                <a href="tel:0698009092" className="info">
                  06.98.00.90.92
                </a>
              </p>
              <p>
                <a href="mailto:chateautrigant@gmail.com" className="info">
                  chateautrigant@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <h3 className="font-abhaya-bold text-[1rem]">Adresse</h3>
            <div className="div-container text-right">
              <p className="info">Château Trigant</p>
              <p>
                <a className="info" href="https://maps.app.goo.gl/TBFgrBd4w1gWN7wD7" target="_blank" rel="noopener noreferrer">
                  149 Avenue des Pyrénées,
                  <br />
                  33140 Villenave d'Ornon
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="font-bold text-xs text-center mt-4">
          Château Trigant © 2024 - Tous droits réservés - Mentions Légales
        </p>
      </div>
    </footer>
  );
}
