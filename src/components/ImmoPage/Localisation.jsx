import { MapPin, Navigation, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";

const Localisation = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Simulate map loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Location data
  const locationData = {
    address: "Assinie-Mafia, Lagunes, Côte d'Ivoire",

    coordinates: "5.1756349948, -3.5358249250",
    distanceFromAbidjan: "45 minutes",
    nearbyLandmarks: [
      { name: "Plage d'Assinie", distance: "1.2 km" },
      { name: "Centre Commercial", distance: "3.5 km" },
      { name: "Hôpital", distance: "8 km" },
      { name: "Aéroport Félix Houphouët-Boigny", distance: "75 km" },
    ],
  };

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${locationData.coordinates}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className=" w-fit flex items-center justify-center gap-2 px-5 py-2.5 mx-auto rounded-full bg-linear-to-r from-teal-500/10  to-emerald-500/10 border border-teal-200/50 mb-4 backdrop-blur-sm">
        <Maximize2 className="w-4 h-4 text-teal-600" />
        <span className="text-teal-700 font-semibold text-sm tracking-wide">
          LOCALISATION
        </span>
      </div>
      <div className="relative bg-linear-to-b from-white to-slate-50/50 rounded-3xl overflow-hidden border border-slate-200/70 ">
        <div className="relative z-10 ">
          <div className="relative p-6 lg:p-8 bg-linear-to-r from-slate-900 via-slate-800 to-emerald-900 text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative z-10 ">
              <div className="flex items-start flex-col-reverse gap-4  justify-between ">
                <div className="hidden lg:flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div className="">
                    <span className="text-emerald-300 text-sm hidden lg:block font-semibold tracking-wider uppercase">
                      Localisation
                    </span>
                    <h3 className="text-xl lg:text-3xl font-bold mt-1">
                      Emplacement Privilégié
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleDirections}
                  className="px-4 py-2.5 bg-linear-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  Itinéraire
                </button>
              </div>

              <p className="text-slate-300 text-sm mt-4 lg:mt-0 lg:max-w-2xl">
                Cité située à seulement 45 minutes d'Abidjan.
              </p>
            </div>
          </div>

          {/* Map section with enhanced styling */}
          <div className="relative p-3 overflow-hidden bg-slate-100/50 ">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 z-10">
                <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <div className="relative  h-[200px] md:h-[350px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3973.551232711869!2d-3.5358249250175624!3d5.175634994801823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sci!4v1767877024186!5m2!1sfr!2sci"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                allowfullscreen=""
                title="Carte d'emplacement d'Ivoire Gardens à Assinie"
                referrerpolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Localisation;
