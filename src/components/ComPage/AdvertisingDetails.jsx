import { useEffect, useRef, useState } from "react";
import {
  Download,
  School,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  PhoneCall,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import JetExpressDetails from "./JetExpressDetails";
import PaintBallDetails from "./PaintBallDetails";
import PanneauDetails from "./PanneauDetails";
import ModalContact from "../ImmoPage/ModalContact";

const SwiperSkeletonSlide = () => (
  <div className="relative aspect-video bg-slate-800 animate-pulse" />
);
const AdvertisingDetails = ({ images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      // Update navigation references
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // Initialize navigation
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  const tabUnivInfo = [
    {
      title: "Entrées & Hall d’Accueil",
      info: "Visibilité immédiate grâce à des panneaux et écrans LED positionnés dès l’arrivée sur le campus.",
    },
    {
      title: "Amphithéâtres & Conférences",
      info: "Présence stratégique lors des événements universitaires et rassemblements majeurs.",
    },
    {
      title: "Bibliothèque & Espaces d’Étude",
      info: "Zones à forte fréquentation pour une communication discrète et durable.",
    },
    {
      title: "Cafétéria & Aires de Repos",
      info: "Captation de l’attention dans les moments de détente des étudiants.",
    },
  ];
  const isLoading = images.length === 0;

  return (
    <>
      {/* HERO */}
      {/* DESCRIPTION */}
      <section className="relative py-10 lg:py-20 overflow-hidden bg-linear-to-b from-slate-900 to-teal-950">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-5 lg:mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 mx-auto">
              <School className="w-4 h-4 text-teal-400" />
              <span className=" text-teal-300 text-sm font-medium uppercase tracking-wider">
                Université de San Pedro
              </span>
            </div>

            <h2 className="text-xl lg:text-4xl font-bold text-white mb-4">
              Découvrez nos supports publicitaires
              <br />
              <span className="bg-linear-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                exclusifs sur le campus
              </span>
            </h2>

            <p className="text-slate-300 text-sm lg:text-base max-w-2xl mx-auto">
              Des solutions stratégiques pour une visibilité maximale auprès de
              la communauté universitaire
            </p>
          </div>

          {/* Main Content - Flex Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Image Gallery */}
            <div className="w-[85%] mx-auto lg:mx-0 lg:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 1 },
                    }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={setSwiperInstance}
                    className="university-gallery"
                  >
                    {isLoading
                      ? Array.from({ length: 3 }).map((_, i) => (
                          <SwiperSlide key={i}>
                            <SwiperSkeletonSlide />
                          </SwiperSlide>
                        ))
                      : images.map((item, index) => (
                          <SwiperSlide key={index}>
                            <div className="relative aspect-video overflow-hidden">
                              <img
                                src={item.publicUrl}
                                alt={`Support publicitaire ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                  </Swiper>
                </div>

                {/* Navigation Arrows - Fixed Positioning */}
                <button
                  ref={prevRef}
                  className="absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-teal-500/30 transition-colors z-10"
                  aria-label="Image précédente"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  ref={nextRef}
                  className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-teal-500/30 transition-colors z-10"
                  aria-label="Image suivante"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 my-5">
                {[
                  { value: "20k+", label: "Étudiants" },
                  { value: "100%", label: "Ciblage" },
                  { value: "24/7", label: "Visibilité" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-teal-900/20 border border-teal-500/20"
                  >
                    <p className="text-2xl font-bold text-teal-300">
                      {stat.value}
                    </p>
                    <p className="text-slate-300 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2 space-y-8 hidden lg:block">
              {/* Description Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-xl text-teal-300 shrink-0 mt-1">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Transformation de l'espace universitaire
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      IVOIRE BAUHAUS transforme l'espace universitaire en un
                      véritable levier de communication grâce à des supports
                      innovants : totems, panneaux lumineux, arches
                      publicitaires et bien plus. Offrez à votre marque une
                      visibilité stratégique au cœur de cet environnement
                      dynamique et attractif avec des solutions modernes
                      garantissant un impact maximal.
                    </p>
                  </div>
                </div>
              </div>

              {/* University Locations Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {tabUnivInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-teal-500/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-teal-400 shrink-0"></div>
                      <div>
                        <h4 className="text-white font-bold mb-1 group-hover:text-teal-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/Universitésp.pdf"
              download="catalogue_universite_san_pedro.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-teal-500/30 group mx-auto"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform hidden lg:hidden" />
              Télécharger le catalogue{" "}
              <span className=" hidden lg:inline">complet</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </section>{" "}
      {/* AUTRES SERVICES */}
      <PaintBallDetails />
      <section className="text-center py-8 lg:py-14 px-4 lg:px-0 bg-slate-900  text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-teal-500/20 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl lg:text-4xl font-black mb-6">
            Besoin d’un support publicitaire
          </h2>
          <button
            className="px-12 py-5 bg-teal-500 text-slate-900 rounded-3xl font-black lg:text-xl hover:scale-105 transition-all shadow-2xl shadow-teal-500/40 flex items-center gap-4 mx-auto duration-500"
            onClick={() => setContactModalOpen(!contactModalOpen)}
          >
            <PhoneCall className="w-6 h-6" />
            CONTACTEZ-NOUS
            <span className="hidden lg:block">MAINTENANT</span>
          </button>
        </div>
      </section>
      <div className="pt-8 lg:pt-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Jet Express */}
            <div>
              <PanneauDetails />
            </div>

            {/* Right Column - Paint Ball */}
            <div className="">
              <JetExpressDetails />
            </div>
          </div>
        </div>

        {contactModalOpen && (
          <ModalContact setContactModalOpen={setContactModalOpen} />
        )}
      </div>
    </>
  );
};

export default AdvertisingDetails;
