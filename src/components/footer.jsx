import pessacLogo from "../assets/logo/LogoPessacBlanc.png";
import groupLogo from "../assets/logo/TrigantBlanc.png";
import chateau from "../assets/logo/chateau_blanc.png";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer w-full h-fit mt-[var(--space-big)] text-white-text gap-0 lg:mt-0">
      <div className="w-[100vw] flex flex-col justify-center items-center bg-accent-gold pt-5 md:py-5">
        <div className="navbar-center flex flex-col w-fit gap-1.5 sm:hidden">
          <img src={groupLogo} alt="Group Logo" className="w-40" />
          <img
            src={pessacLogo}
            alt="Pessac-Leognan Logo"
            className="w-30"
            style={{ filter: "brightness(2)" }}
          />
        </div>

        <div className="flex flex-row gap-8 h-fit">
          <div className="flex flex-col items-start md:w-[30vw] md:items-center md:justify-center">
            <h3 className="font-abhaya-bold text-[1rem] md:text-[1.3rem] md:mb-2 lg:text-[1.6rem]">
              Contact
            </h3>
            <div className="div-container">
              <p className="info md:text-center">Clément Beriot</p>
              <p className="md:text-center">
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

          <div>
            <img
              src={chateau}
              alt=""
              className="hidden md:flex md:w-[30vw] lg:w-[20vw]"
            />
          </div>

          <div className="flex flex-col items-end md:items-center md:w-[30vw] md:justify-center">
            <h3 className="font-abhaya-bold text-[1rem] md:text-[1.3rem] md:mb-2 lg:text-[1.6rem]">
              Adresse
            </h3>
            <div className="div-container text-right md:text-center">
              <p className="info">Château Trigant</p>
              <p className="md:w-fit">
                <a
                  className="info"
                  href="https://maps.app.goo.gl/TBFgrBd4w1gWN7wD7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  149 Avenue des Pyrénées,
                  <br />
                  33140 Villenave d'Ornon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent-gold w-[100vw] items-center pb-5 md:bg-back-footer md:py-4">
        <p className="font-bold text-xs text-center mt-4 w-[100vw] md:mt-0 md:text-[0.8rem]">
          Château Trigant © 2024 - Tous droits réservés - Mentions Légales
        </p>
      </div>
    </footer>
  );
}
