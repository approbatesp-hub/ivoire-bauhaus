import { useState } from "react";

import { BusFront, ChevronDown, ChevronUp, Download, Zap } from "lucide-react";
import CarJet from "../../assets/support2.png";
const JetExpressDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <section className="">
        <div className="flex flex-col gap-16 items-start bg-white rounded-3xl shadow-xl ">
          {/* TEXTE */}
          <div>
            {/* ACCORDÉON */}
            <div className="p-5 lg:p-12">
              <div className="flex items-center gap-3 mb-3 lg:mb-6">
                <div className="p-3 bg-teal-500 rounded-2xl text-white shadow-lg shadow-teal-500/20">
                  <BusFront className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-teal-600 font-bold text-xs uppercase tracking-widest">
                    Service 05
                  </p>
                  <h3 className="text-lg lg:text-3xl font-black text-slate-900 uppercase">
                    Jet Express
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm lg:text-base mb-2 lg:mb-4 leading-relaxed">
                Augmentez l’impact de votre marque en profitant des espaces
                publicitaires sur notre flotte de bus reliant{" "}
                <span className="font-bold">Abidjan</span> et{" "}
                <span className="font-bold">San Pedro</span>.
              </p>
              <div>
                <div className="h-[150px] lg:h-[200px]  mb-8 ">
                  <img
                    src={CarJet}
                    className="h-full w-full rounded-b-3xl  object-cover"
                    alt=""
                  />
                </div>
              </div>
              {/* Technical Details Accordion */}
              <div className="bg-slate-50 rounded-2xl p-3 lg:p-5 border border-slate-100">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full flex items-center cursor-pointer justify-between font-bold text-slate-900 group text-sm lg:text-base"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-teal-500" />
                    Détails
                  </span>
                  {showDetails ? (
                    <ChevronUp className="text-teal-500" />
                  ) : (
                    <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                  )}
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    showDetails
                      ? "max-h-[500px] mt-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-6 text-sm">
                    <li className="flex gap-4">
                      <div className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
                      <p className="text-slate-600 text-xs lg:text-base">
                        <strong className="text-slate-900">Flotte :</strong>{" "}
                        Composée de 6 véhicules de 62 places et de 2 véhicules
                        de 44 places.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
                      <p className="text-slate-600 text-xs lg:text-base">
                        <strong className="text-slate-900 font-bold items-center gap-1">
                          Visibilité :{" "}
                        </strong>
                        Chaque jour, des centaines de passagers et des milliers
                        d’automobilistes pourront découvrir vos annonces grâce à
                        des supports en film micro-perforé.
                      </p>
                    </li>
                  </ul>
                  <a
                    href="/catalogueIvoire.pdf"
                    download="Catalogue IVOIRE BAUHAUS"
                  >
                    <button className="w-full text-sm lg:text-basex mt-6 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-all active:scale-95 shadow-lg cursor-pointer">
                      <Download className="w-5 h-5 hidden lg:block" />
                      Télécharger le catalogue{" "}
                      <span className="hidden lg:inline">complet</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GALERIE */}
        </div>
      </section>
    </div>
  );
};

export default JetExpressDetails;
