import mainImg from "../assets/images/23-modified.jpeg";
import vendanges from "../assets/images/vendanges-tracteur.jpg";
import bouteille from "../assets/images/bouteille.jpg";
import cours from "../assets/images/PAULINE & CLÉMENT-11.jpg";
import vigne_gauche from "../assets/decorations/vigne_gauche_rotate.png";
import vigne_droite from "../assets/decorations/vigne_droite_rotate.png";
import jardin_nuit from "../assets/images/jardin_nuit_mariage.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-60">
        <img
          src={mainImg}
          alt="Chateau Trigant"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="carousel w-full mt-[var(--space-small)]">
        <div
          id="slide1"
          className="carousel-item relative w-full flex flex-col justify-center items-center"
        >
          <img
            src={vendanges}
            alt=""
            className="w-70 h-40 shadow-[-28px_28px_0px_-15px_var(--color-accent-gold)]  ml-[14px]"
          />
          <div className="w-80 flex flex-col justify-center items-center">
            <h2 className="mini-title">Titre</h2>
            <p className="mini-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper bibendum nisi ac dapibus. Nam nec ipsum hendrerit,
              blandit nulla eu, consectetur elit. Nam turpis urna, pulvinar non
              efficitur ac, egestas viverra justo. Fusce gravida, diam.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-5/9 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("slide3").scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="btn btn-circle bg-bg border-accent-gold text-accent-gold"
            >
              ❮
            </a>
            <a
              href="#slide2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("slide2").scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="btn btn-circle bg-bg border-accent-gold text-accent-gold"
            >
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full flex flex-col justify-center items-center"
        >
          <div className="relative inline-block">
            <img src={bouteille} alt="" className="w-70 h-40 block" />
            <div
              className="absolute w-75 h-1/2 left-1/2 transform -translate-x-1/2 bottom-[-15px]  bg-accent-gold"
              style={{ zIndex: -12 }}
            ></div>
          </div>

          <div className="w-80 flex flex-col justify-center items-center">
            <h2 className="mini-title">Titre</h2>
            <p className="mini-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper bibendum nisi ac dapibus. Nam nec ipsum hendrerit,
              blandit nulla eu, consectetur elit. Nam turpis urna, pulvinar non
              efficitur ac, egestas viverra justo. Fusce gravida, diam.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-5/9 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("slide1").scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="btn btn-circle bg-bg border-accent-gold text-accent-gold"
            >
              ❮
            </a>
            <a
              href="#slide3"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("slide3").scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="btn btn-circle bg-bg border-accent-gold text-accent-gold"
            >
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full flex flex-col justify-center items-center"
        >
          <img
            src={cours}
            alt=""
            className="w-70 h-40 shadow-[28px_28px_0px_-15px_var(--color-accent-gold)]  ml-[14px]"
          />
          <div className="w-80 flex flex-col justify-center items-center">
            <h2 className="mini-title">Titre</h2>
            <p className="mini-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper bibendum nisi ac dapibus. Nam nec ipsum hendrerit,
              blandit nulla eu, consectetur elit. Nam turpis urna, pulvinar non
              efficitur ac, egestas viverra justo. Fusce gravida, diam.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-5/9 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("slide2").scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="btn btn-circle bg-bg border-accent-gold text-accent-gold"
            >
              ❮
            </a>
            <a
              href="#slide1"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("slide1").scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="btn btn-circle bg-bg border-accent-gold text-accent-gold"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[var(--space-big)]">
        <img src={vigne_gauche} alt="" className="w-40" />
        <img src={vigne_droite} alt="" className="w-40" />
      </div>

      <div className="w-full flex justify-center items-center mt-[var(--space-big)]">
        <div className="flex flex-col items-center w-[90vw] py-[2.5vw] h-fit bg-accent-gold">
          <img src={jardin_nuit} alt="" className="w-[85vw]" />
          <div
            className="w-[90vw] h-2/5 px-[2.5vw] pt-2"
            style={{ zIndex: 12 }}
          >
            <h1 className="font-artemisia text-accent-content">
              Célébrez Votre Union
            </h1>
            <p className="h-fit text-justify text-[0.75rem] font-inter text-accent-content mt-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper bibendum nisi ac dapibus. Nam nec ipsum hendrerit,
              blandit nulla eu, consectetur elit. Fusce gravida, diam.
            </p>
            <Link
              to="/mariage"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-1 rounded-xs border-accent-content text-accent-content font-normal font-abhaya text-sm float-right mt-2.5 p-4"
            >
              En savoir +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
