import React, { useState } from "react";
import { galleryImages3 } from "../../utils/constant";
import {
  ChevronDown,
  ChevronUp,
  Download,
  ImageIcon,
  Maximize2,
  Target,
  Zap,
} from "lucide-react";
import ModalGallery from "../ImmoPage/ModalGallery";

const PaintBallDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section className="lg:max-w-7xl mx-auto px-6 pt-10 pb-20 space-y-20">
      {/* CAMION LED */}
      <div className="grid lg:grid-cols-2  lg:gap-16 items-center bg-white rounded-3xl shadow-xl lg:p-10">
        {/* TEXTE */}

        {/* ACCORDÉON */}
        <div className="p-5 lg:p-12 ">
          <div className="flex items-center gap-3 mb-3 lg:mb-6">
            <div className="p-3 bg-teal-500 rounded-2xl text-white shadow-lg shadow-teal-500/20">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-teal-600 font-bold text-xs uppercase tracking-widest">
                Service 03
              </p>
              <h3 className="text-lg lg:text-3xl font-black text-slate-900 uppercase">
                Terrain de Paintball
              </h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm lg:text-base  mb-4 leading-relaxed">
            Saisissez l'opportunité de positionner votre marque au sein d’un
            environnement intense et captivant, en plein cœur de l’action sur
            notre terrain de paintball de{" "}
            <span className="font-bold">3 000 m²</span>, situé à l’
            <span className="font-bold">Hôtel du Golf</span> en Côte
            d’Ivoire.{" "}
          </p>

          {/* Technical Details Accordion */}
          <div className="bg-slate-50 rounded-xl p-3 lg:p-5 border border-slate-100">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex items-center justify-between font-bold text-slate-900 group py-2 text-sm lg:text-base"
            >
              <span className="flex items-center gap-2">
                <Zap className="text-sm lg:text-lg w-4 h-4 text-emerald-500 hidden lg:inline" />
                Opportunités Publicitaires
              </span>
              {showDetails ? (
                <ChevronUp className="text-emerald-500" />
              ) : (
                <ChevronDown className="text-slate-400 group-hover:text-slate-600 transition-transform" />
              )}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                showDetails
                  ? "max-h-[300px] mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-3 text-slate-600 pl-5">
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-emerald-500 before:rounded-full text-xs lg:text-base">
                  <strong className="text-slate-900">fréquentation :</strong>{" "}
                  Chaque semaine, nous accueillons une audience de plus de 500
                  passionnés de sport extrême, des amateurs de sensations fortes
                  et des aventuriers à la recherche d’expériences uniques.
                </li>
                <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-emerald-500 before:rounded-full text-xs lg:text-base">
                  <strong className="text-slate-900">
                    Événements exclusifs :
                  </strong>{" "}
                  Possibilité de parrainer des tournois et d'organiser des
                  activations de marque personnalisées
                </li>
              </ul>
              <a
                href="/paintball.pdf"
                download="OPPORTUNITES_PAINTBALL_IVOIRE_BAUHAUS.pdf"
                className="block mt-5"
              >
                <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all">
                  <Download className="w-4 h-4" />
                  Télécharger la proposition commerciale
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* GALERIE */}
        <div className="p-4 lg:p-0 ">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-teal-500" />
              Galerie
            </h4>
            <span className="text-xs text-slate-400 font-semibold">
              {galleryImages3.length} photos
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages3.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-zoom-in bg"
                onClick={() => {
                  setImageSelected(i);
                  setModalOpen(true);
                }}
              >
                <img
                  src={img.url}
                  alt=""
                  className="rounded-xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
                  <Maximize2 className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <ModalGallery
          galleryImages={galleryImages3}
          imageSelected={imageSelected}
          handleImageClick={setImageSelected}
          setModalOpen={setModalOpen}
        />
      )}
    </section>
  );
};

export default PaintBallDetails;
