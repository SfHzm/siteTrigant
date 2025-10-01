import { useState, useEffect, useRef } from "react";
import groupLogo from "../assets/logo/chateauTrigant.png";
import pessacLogo from "../assets/logo/Logo Pessac-Leognan.png";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Ajouté

  const dropdownRef = useRef(null);
  const location = useLocation();

  // Fermer quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Détecter le scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar justify-center items-start top-0 fixed ${
        scrolled
          ? `${menuOpen ? "bg-transparent" : "bg-menu-scroll"}`
          : "bg-transparent"
      }  `}
      style={{ zIndex: 30 }}
    >
      <div className="navbar-start left-0 top-0 fixed w-fit">
        <div className="relative" ref={dropdownRef}>
          <label className="swap swap-rotate p-1 z-[100] absolute left-0 top-0">
            <input
              type="checkbox"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />

            <svg
              className={`swap-off ${scrolled ? "fill-title" : "fill-bg"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className={`swap-on fill-bg`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu bg-menu absolute top-0 text-white-text divide-y-1 divide-white-text font-artemisia text-sm w-50 h-60 py-12 items-center  my-slide-menu ${
              menuOpen ? "open" : "closed"
            }`}
            style={{ zIndex: 60 }}
          >
            <Link
              to="/"
              className={`link-container ${
                location.pathname === "/" ? "text-accent-gold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              ACCUEIL
            </Link>
            <Link
              to="/histoire"
              className={`link-container ${
                location.pathname === "/histoire" ? "text-accent-gold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              HISTOIRE
            </Link>
            <Link
              to="/mariage"
              className={`link-container ${
                location.pathname === "/mariage" ? "text-accent-gold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              MARIAGES
            </Link>
          </ul>
        </div>
      </div>
      <div
        className={`navbar-center w-fit ${
          menuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <Link to={"/"} className="flex flex-col gap-1.5 items-center">
          <img
            src={groupLogo}
            alt="Group Logo"
            className={`w-40`}
            style={
              scrolled
                ? { filter: "invert(60%) brightness(40%)" }
                : { filter: "invert(0) brightness(2)" }
            }
          />
          <img
            src={pessacLogo}
            alt="Pessac-Leognan Logo"
            className={`w-30`}
            style={
              scrolled
                ? { filter: "invert(60%) brightness(40%)" }
                : { filter: "invert(0) brightness(2)" }
            }
          />
        </Link>
      </div>
    </div>
  );
}
