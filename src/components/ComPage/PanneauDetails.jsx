import {
  ChevronDown,
  ChevronUp,
  Download,
  ImageIcon,
  Maximize2,
  Truck,
  Volume2,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { LuInspectionPanel } from "react-icons/lu";
import Panneau from "../../assets/panneau.jpeg";
const PanneauDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <section>
        <div className="flex flex-col gap-16 items-start bg-white rounded-3xl shadow-xl ">
          {/* TEXTE */}
          <div>
            {/* ACCORDÉON */}
            <div className="p-5 lg:p-12">
              <div className="flex items-center gap-3 mb-3 lg:mb-6">
                <div className="p-3 bg-teal-500 rounded-2xl text-white shadow-lg shadow-teal-500/20">
                  <LuInspectionPanel className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-teal-600 font-bold text-xs uppercase tracking-widest">
                    Service 04
                  </p>
                  <h3 className="text-lg lg:text-3xl font-black text-slate-900 uppercase">
                    Panneau Publicitaire
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm lg:text-base mb-2 lg:mb-4 leading-relaxed">
                Ce panneau publicitaire double face, stratégiquement situé à{" "}
                <span className="font-bold">Cocody Riviera 3</span> sur le toit
                d’une école proche de la cité Sipim 4.
              </p>
              <div>
                <div className="h-[150px] lg:h-[200px]  mb-8 ">
                  <img
                    src={Panneau}
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
                    Description
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
                        <strong className="text-slate-900">Face 1 :</strong>{" "}
                        Offre une vue dégagée sur la cité Sipim 4 et les
                        quartiers résidentiels voisins, touchant un public
                        quotidien estimé à plus de 7 000 véhicules.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
                      <p className="text-slate-600 text-xs lg:text-base">
                        <strong className="text-slate-900 font-bold  items-center gap-1">
                          Face 2 :{" "}
                        </strong>
                        Orientée vers la voie principale menant au CHU d’Angré,
                        une route très fréquentée, idéale pour capter
                        l’attention des automobilistes, piétons et usagers des
                        transports en commun.
                      </p>
                    </li>
                  </ul>
                  <a
                    href="/affiche.pdf"
                    download="Fiche Produit Ivoire Affichage Publicitaire"
                  >
                    <button className="w-full text-sm lg:text-basex mt-6 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-all active:scale-95 shadow-lg cursor-pointer">
                      <Download className="w-5 h-5 hidden lg:block" />
                      Télécharger la fiche{" "}
                      <span className="hidden lg:inline">produit</span>
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

export default PanneauDetails;
