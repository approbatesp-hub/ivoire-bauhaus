import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Banner = ({ homePageOne, homePageTwo }) => {
  return (
    <div className=" h-[100vh] lg:h-[90vh] flex flex-col lg:flex-row ">
      {/* LEFT SIDE */}
      <div className="lg:w-[50%] relative pt-[90px] pb-18 lg:py-0 pl-10 h-full flex flex-col justify-center text-white group overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500  group-hover:scale-105 opacity-80 group-hover:opacity-100 "
          style={{
            backgroundImage: "url(" + homePageOne?.publicUrl + ")",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-br from-primary/95 to-secondary/70  transition-all duration-500"></div>
        <Link
          className="group-hover:scale-105 transition duration-500 z-2"
          to="/promotionimmobiliere"
        >
          <span className="text-white/80 text-sm uppercase tracking-[0.2em] font-light mb-2 lg:mb-4  block">
            Notre expertise
          </span>
          <h1 className="text-3xl leading-9 lg:text-6xl font-bold text-white mb-2 lg:mb-6 lg:leading-tight tracking-tight">
            Promotion
            <br />
            Immobilière
          </h1>
          <p className="text-white/90 text-lg lg:text-xl font-light max-w-lg mb-3 lg:mb-8 leading-relaxed tracking-wide">
            Investissez dans l'avenir avec{" "}
            <span className="font-semibold">nous</span>
          </p>
          <div className=" flex items-center gap-5">
            <span className="text-white font-medium px-6 py-2 lg:py-3 border-2 border-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-primary">
              Decouvrez nos projets
            </span>

            <FaArrowRightLong className="text-2xl" />
          </div>
        </Link>
      </div>
      {/* RIGHT SIDE */}
      <div className="lg:w-[50%] relative pl-10 py-18  lg:py-0 h-full flex flex-col justify-center text-white group overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500  group-hover:scale-105 opacity-80 group-hover:opacity-100 "
          style={{
            backgroundImage: "url(" + homePageTwo?.publicUrl + ")",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/60 to-slate-900  transition-all duration-500"></div>
        <Link
          className="group-hover:scale-105 transition duration-700 z-2"
          to="/communicationpub"
        >
          <span className="text-white/80 text-sm uppercase tracking-[0.2em] font-light mb-2 lg:mb-4 block">
            Notre expertise
          </span>
          <h1 className="text-[28px] leading-9 lg:text-6xl font-bold text-white mb-2 lg:mb-6 lg:leading-tight tracking-tight ">
            Communication
            <br />& Publicité
          </h1>
          <p className="text-white text-lg lg:text-xl font-light max-w-lg mb-3 lg:mb-8 leading-relaxed tracking-wide">
            Votre marque partout où elle doit être vue{" "}
          </p>
          <div className=" flex items-center gap-5">
            <span className="text-white font-medium px-6 py-2 lg:py-3 border-2 border-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
              Voir nos solutions{" "}
            </span>

            <FaArrowRightLong className="text-2xl text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
