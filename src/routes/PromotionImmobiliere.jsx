import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Home,
  Download,
  Phone,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  LayoutGrid,
} from "lucide-react";

import YoutubeIcon from "../assets/youtube.png";
import Cite from "../assets/citeScreen.png";
import ModalGallery from "../components/ImmoPage/ModalGallery";
import ModalContact from "../components/ImmoPage/ModalContact";
import Localisation from "../components/ImmoPage/Localisation";
import Gallerie from "../components/ImmoPage/Gallerie";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../utils/hooks";
import { setImages } from "../redux/bauhaus";
import useSEO from "../utils/useSEO";

const PromotionPage = () => {
  useSEO({
    title: "Promotion Immobilière | Ivoire Gardens Assinie - Ivoire Bauhaus",
    description:
      "Découvrez Ivoire Gardens à Assinie-Mafia : 24 villas haut de gamme, 16 magasins, piscine et sécurité 24/7. Investissez dans l'immobilier en Côte d'Ivoire avec Ivoire Bauhaus.",
    keywords:
      "Ivoire Gardens, villa Assinie, promotion immobilière Abidjan, terrain Assinie-Mafia, investissement immobilier Côte d'Ivoire, achat villa Côte d'Ivoire, promoteur immobilier Abidjan, résidence haut de gamme Assinie",
    path: "/promotionimmobiliere",
  });
  const [videoPlayed, setVideoPlayed] = useState(false);
  const dispatch = useDispatch();
  const { imagesRedux } = useSelector((state) => state.projet);

  const imageImmoPage = imagesRedux.filter(
    (img) => img.folder === "promotion_immobiliere",
  );

  useEffect(() => {
    if (imageImmoPage.length === 0) {
      getAllImages().then((res) => {
        dispatch(setImages(res));
      });
    }
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      title: "Découverte du projet",
      desc: "Consultation de la brochure, visite virtuelle et analyse de l'emplacement stratégique à Assinie.",
      icon: <LayoutGrid className="w-6 h-6" />,
    },
    {
      title: "Prise de contact",
      desc: "Rencontrez notre équipe pour discuter de vos besoins et obtenir toutes les informations personnalisées.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Réservation",
      desc: "Signature du contrat de réservation et versement du premier acompte pour sécuriser votre bien.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Suivi du processus",
      desc: "Accompagnement administratif et technique jusqu'à la remise des clés de votre propriété.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(null);

  const handleImageClick = (index) => {
    setImageSelected(index);
    setModalOpen(true);
  };

  return (
    <div className="bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* 1. INSTITUTIONAL HEADER */}
      <section className="relative pt-30 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 text-[12px] lg:text-sm font-bold tracking-widest uppercase italic">
                Promoteur Immobilier Agréé
              </span>
            </div> */}
            <h1 className="text-4xl lg:text-7xl font-extrabold text-white mb-4 lg:mb-8 leading-tight">
              Bâtir l'Excellence, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">
                Garantir votre Avenir.
              </span>
            </h1>
            <p className="text-slate-400  lg:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Acteur majeur de l'immobilier en Côte d'Ivoire, nous concevons des
              espaces de vie où modernité rime avec sérénité.
            </p>
            <button
              onClick={() => scrollTo("project")}
              className="px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500 transition-all flex items-center gap-2 group mx-auto md:mx-0"
            >
              Découvrir Ivoire Gardens
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. IVOIRE GARDENS ASSINIE SECTION */}
      <section id="project" className="py-10 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className=" lg:hidden">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 lg:mb-6">
              Présentation du Projet
            </h3>
            <p className="lg:text-lg text-slate-600 leading-relaxed mb-7">
              Situé à 10 minutes d'Assinie, ce projet d'exception offre une
              opportunité rare d'investissement dans l'une des zones les plus
              prisées de la Côte d'Ivoire. <strong>Ivoire Gardens </strong>
              allie une zone commerciale dynamique à un quartier résidentiel
              haut de gamme.
            </p>

            <div className="mb-10  lg:hidden">
              <div
                className="rounded-[10px] h-[250px] md:h-[380px] lg:max-w-[70%] mx-auto relative before:absolute before:bg-linear-to-br before:from-primary/80  before:to-secondary/30 before:inset-0 before:rounded-[10px] before:z-1  cursor-pointer "
                onClick={() => setVideoPlayed(true)}
              >
                {videoPlayed ? (
                  <div className="z-10 relative w-full h-full">
                    {/* Loading indicator */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70 rounded-[10px]">
                      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <iframe
                      src={`https://www.youtube.com/embed//wn9VY43-XSI?autoplay=1&modestbranding=1&rel=0`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-[10px] absolute inset-0 z-20"
                      title={"Video Explicative TIMUTECH"}
                      onLoad={(e) => {
                        // Hide the loading indicator when iframe is loaded
                        e.target.previousSibling.style.display = "none";
                      }}
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      className="rounded-[10px] h-full w-full object-cover "
                      src={Cite}
                      alt="Présentation vidéo du projet Ivoire Gardens Assinie"
                    />
                    <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-[30px]    ">
                      <div className=" w-[30%] mx-auto relative after:absolute after:border-[1.2px] after:border-slate-100  after:-inset-1   after:animate-[ping_1.2s_ease_infinite] after:rounded-full ">
                        <img
                          src={YoutubeIcon}
                          className="w-full   mx-auto  "
                          alt="Lire la vidéo Ivoire Gardens"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 z-10">
                      <div className="px-4 py-2 bg-black/90 rounded-lg z-10">
                        <p className="text-[12px] text-white font-medium">
                          Voir la présentation vidéo
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Project Specs Sidebar */}
            <div className="lg:w-1/3 lg:sticky top-24 w-full">
              <div className="bg-slate-50 p-5 lg:p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  Ivoire Gardens
                </h2>
                <p className="text-teal-600 font-medium mb-5 lg:mb-8 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Assinie-Mafia, Côte d'Ivoire
                </p>

                <div className=" space-y-4 lg:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                        Surface Totale
                      </p>
                      <p className="text-slate-900 font-bold">10 033 m²</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                        Unités
                      </p>
                      <p className="text-slate-900 font-bold">
                        24 Villas + 16 Magasins
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                        Commodités
                      </p>
                      <p className="text-slate-900 font-bold">
                        Piscine, Sécurité 24/7
                      </p>
                    </div>
                  </div>
                </div>

                <hr className=" my-5 lg:my-8 border-slate-200" />

                <div className="space-y-4">
                  <a
                    href="/Ivoiregardens.pdf"
                    download="Brochure Ivoire Gardens.pdf"
                    className="mb-3 block"
                  >
                    <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer">
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                      Télécharger la Brochure
                    </button>
                  </a>

                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="w-full py-3 border-2 border-teal-600  text-slate-800 rounded-xl font-bold hover:bg-teal-600  cursor-pointer transition-all hover:text-white  flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Contactez le conseiller
                  </button>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="mx-auto lg:mx-0 lg:w-2/3">
              <div className="mx-auto ">
                <div className="hidden lg:block">
                  <h3 className="text-4xl font-bold text-slate-900 mb-6">
                    Présentation du Projet
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-7">
                    Situé à Assinie, ce projet d'exception offre une opportunité
                    rare d'investissement dans l'une des zones les plus prisées
                    de la Côte d'Ivoire. <strong>Ivoire Gardens </strong>
                    allie une zone commerciale dynamique à un quartier
                    résidentiel haut de gamme.
                  </p>
                </div>

                {/* Video Feature */}
                <div className="mb-10 hidden lg:block">
                  <div
                    className="rounded-[10px] h-[380px] max-w-[70%] mx-auto relative before:absolute before:bg-linear-to-br before:from-primary/80  before:to-secondary/30 before:inset-0 before:rounded-[10px] before:z-1  cursor-pointer "
                    onClick={() => setVideoPlayed(true)}
                  >
                    {videoPlayed ? (
                      <div className="z-10 relative w-full h-full">
                        {/* Loading indicator */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70 rounded-[10px]">
                          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <iframe
                          src={`https://www.youtube.com/embed//wn9VY43-XSI?autoplay=1&modestbranding=1&rel=0`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-[10px] absolute inset-0 z-20"
                          title={"Video Explicative TIMUTECH"}
                          onLoad={(e) => {
                            // Hide the loading indicator when iframe is loaded
                            e.target.previousSibling.style.display = "none";
                          }}
                        ></iframe>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          className="rounded-[10px] h-full w-full object-cover "
                          src={Cite}
                          alt="Vue aérienne du projet immobilier Ivoire Gardens à Assinie"
                        />
                        <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-[30px]    ">
                          <div className=" w-[20%] mx-auto relative after:absolute after:border-[1.2px] after:border-slate-100  after:-inset-1   after:animate-[ping_1.2s_ease_infinite] after:rounded-full ">
                            <img
                              src={YoutubeIcon}
                              className="w-full   mx-auto  "
                              alt="Icône de lecture de la vidéo"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 z-10">
                          <div className="px-4 py-2 bg-black/90 rounded-lg z-10">
                            <p className="text-white font-medium">
                              Voir la présentation vidéo
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded Photo Gallery */}
                <Gallerie
                  handleImageClick={handleImageClick}
                  images={imageImmoPage}
                />
                {/* Location Map Section */}
                <Localisation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACQUISITION PROCESS */}
      <section className="py-12 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Processus d'Acquisition
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400">
              Suivez ces étapes pour concrétiser votre rêve immobilier.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-teal-500/0 via-teal-500 to-teal-500/0 -translate-x-1/2 hidden md:block"></div>

              <div className=" space-y-9 lg:space-y-12 md:space-y-0">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                    } md:h-60`}
                  >
                    {/* Icon Bubble */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-teal-500 border-4 border-slate-900 z-20 hidden md:flex items-center justify-center text-slate-900 font-bold">
                      {idx + 1}
                    </div>

                    <div className="md:w-1/2 w-full group bg">
                      <div
                        className={`p-5 lg:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-teal-500/50 ${
                          idx % 2 !== 0 ? "md:text-right" : "md:text-left"
                        } text-center`}
                      >
                        <div
                          className={`w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3 lg:mb-6 mx-auto ${
                            idx % 2 !== 0
                              ? "md:ml-auto md:mr-0"
                              : "md:mr-auto md:ml-0"
                          }`}
                        >
                          {step.icon}
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold mb-3">
                          {step.title}
                        </h4>
                        <p className="text-slate-400  text-sm lg:text-base font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-4 lg:px-4 py-12 lg:py-20 text-center">
        <h3 className=" text-2xl lg:text-3xl font-bold mb-4">
          Prêt à sécuriser votre investissement ?
        </h3>
        <p className="text-slate-500 mb-5 lg:mb-8">
          Notre équipe vous accompagne à chaque étape.
        </p>
        <button
          onClick={() => setContactModalOpen(true)}
          className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800"
        >
          Contacter le conseiller
        </button>
      </section>
      {modalOpen && (
        <ModalGallery
          setModalOpen={setModalOpen}
          handleImageClick={handleImageClick}
          imageSelected={imageSelected}
          galleryImages={imageImmoPage}
        />
      )}

      {contactModalOpen && (
        <ModalContact setContactModalOpen={setContactModalOpen} />
      )}
    </div>
  );
};

export default PromotionPage;
