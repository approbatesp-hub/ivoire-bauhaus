import { useState } from "react";
import {
  Truck,
  Zap,
  Volume2,
  Download,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Image as ImageIcon,
  Play,
  X,
  PlayCircle,
} from "lucide-react";
import { galleryImages2 } from "../../utils/constant";
import ModalGallery from "../ImmoPage/ModalGallery";

const CamionDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(0);
  const [showCarDetails, setShowCarDetails] = useState(false);
  const VideoCam = "/videoCamion.mp4";

  return (
    <section className="lg:max-w-7xl mx-auto px-6 pt-10 pb-10 lg:pb-20 space-y-10 lg:space-y-20">
      {/* VISION */}
      <div className="grid md:grid-cols-3 gap-5 lg:gap-10 items-center">
        <div className="col-span-1 relative">
          <h2 className="text-teal-500  font-black text-3xl lg:text-5xl opacity-20 uppercase -z-10">
            Vision
          </h2>
          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 -mt-8 relative z-10">
            Une Approche Concrète {""}
          </h3>
        </div>
        <p className="md:col-span-2 text-slate-600 lg:text-lg leading-relaxed border-l-4 border-teal-500 pl-6 italic">
          Nous aidons les marques à renforcer leur visibilité grâce à des
          dispositifs publicitaires clairs, visibles et cohérents avec leur
          environnement.
        </p>
      </div>

      {/* CAMION LED */}
      <div className="grid lg:grid-cols-2  lg:gap-16 items-start bg-white rounded-3xl shadow-xl lg:p-10 overflow-hidden">
        {/* TEXTE */}
        <div>
          {/* ACCORDÉON */}
          <div className="p-5 lg:p-12 ">
            <div className="flex items-center gap-3 mb-3 lg:mb-6">
              <div className="p-3 bg-teal-500 rounded-2xl text-white shadow-lg shadow-teal-500/20">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-teal-600 font-bold text-xs uppercase tracking-widest">
                  Service 01
                </p>
                <h3 className="text-lg lg:text-3xl font-black text-slate-900 uppercase">
                  Camion LED Mobile
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm lg:text-base  mb-4 leading-relaxed">
              Une solution d'affichage révolutionnaire. Ce véhicule est un
              puissant outil mobile conçu pour laisser une empreinte mémorable
              et assurer une diffusion optimale de votre message partout en
              ville.
            </p>

            {/* Video Preview Button - beautifully integrated */}
            <div className="mb-5 lg:mb-8">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="group w-full flex items-center justify-between p-3 lg:p-6 bg-gradient-to-r from-slate-900 to-teal-900 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h4 className="text-white font-bold text-sm lg:text-lg">
                      Voir le camion{" "}
                      <span className="hidden lg:inline">en action</span>
                    </h4>
                    <p className="text-teal-200 text-sm hidden lg:block">
                      Cliquez pour visionner
                    </p>
                    <p className="text-teal-200 text-sm hidden lg:block">
                      0.9 s
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-teal-300" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-teal-400 animate-ping opacity-50"></div>
                </div>
              </button>
            </div>

            {/* Technical Details Accordion */}
            <div className="bg-slate-50 rounded-2xl p-3 lg:p-5 border border-slate-100">
              <button
                onClick={() => setShowCarDetails(!showCarDetails)}
                className="w-full flex items-center cursor-pointer justify-between font-bold text-slate-900 group text-sm lg:text-base"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-teal-500" />
                  Description Technique
                </span>
                {showCarDetails ? (
                  <ChevronUp className="text-teal-500" />
                ) : (
                  <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                )}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  showCarDetails
                    ? "max-h-[500px] mt-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-6 text-sm">
                  <li className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-900">
                        Écrans LED géants :
                      </strong>{" "}
                      Visibilité à 270° (20m² au total) avec 1 million de LED
                      pour capter l'attention jour et nuit.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-900 font-bold flex items-center gap-1">
                        <Volume2 className="w-4 h-4" /> Audio intégré :
                      </strong>
                      Deux enceintes haute fidélité pour un impact sonore
                      immersif et ajustable selon l'environnement.
                    </p>
                  </li>
                </ul>
                <a
                  href="/fichecamion.pdf"
                  download="Fiche technique camion LED"
                >
                  <button className="w-full mt-6 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-all active:scale-95 shadow-lg cursor-pointer">
                    <Download className="w-5 h-5" />
                    Télécharger la fiche complète
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* GALERIE */}
        <div>
          <div className="flex items-center justify-between  p-4 lg:p-0  ">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-teal-500" />
              Galerie Photos
            </h4>
            <span className="text-xs text-slate-400 font-semibold">
              {galleryImages2.length} photos
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {galleryImages2.map((img, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-sm cursor-zoom-in border border-slate-100/50 hover:border-teal-300/50 transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  setImageSelected(i);
                  setModalOpen(true);
                }}
              >
                <img
                  src={img.url}
                  alt={`Vue camion LED ${i + 1}`}
                  className="w-full md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <div className="text-white flex items-center gap-1.5 text-sm">
                    <Maximize2 className="w-4 h-4" />
                    <span className="hidden lg:inline">Voir en détail</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Video Thumbnail - matches gallery style */}
            <div
              className="relative group rounded-xl overflow-hidden shadow-sm cursor-pointer border border-slate-100/50 hover:border-teal-300/50 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center"
              onClick={() => setVideoModalOpen(true)}
            >
              <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-4 border-teal-500 flex items-center justify-center mb-1 lg:mb-2 shadow-lg">
                  <Play className="w-6 h-6 text-teal-500 fill-teal-200" />
                </div>
                <span className="font-bold text-slate-800 lg:text-base text-sm">
                  Vidéo démo
                </span>
                <span className="text-xs text-slate-500 mt-1 hidden lg:inline">
                  Cliquez pour jouer
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative b w-full lg:max-w-4xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Fermer la vidéo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative pt-[90.25%] lg:pt-[56.25%] bg-slate-900">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <video
                src={VideoCam}
                autoPlay
                controls
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover lg:object-contain"
                onEnded={() => setTimeout(() => setVideoModalOpen(false), 2000)}
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
              {/* Decorative overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent hidden lg:block">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  Camion LED en action
                </h3>
                <p className="text-white/80 mt-1 max-w-2xl">
                  Découvrez l'impact visuel et sonore de notre camion LED
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setVideoModalOpen(false)}
          ></div>
        </div>
      )}

      {/* Image Gallery Modal */}
      {modalOpen && (
        <ModalGallery
          galleryImages={galleryImages2}
          imageSelected={imageSelected}
          handleImageClick={setImageSelected}
          setModalOpen={setModalOpen}
        />
      )}
    </section>
  );
};

export default CamionDetails;
