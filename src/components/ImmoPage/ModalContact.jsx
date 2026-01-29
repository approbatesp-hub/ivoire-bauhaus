import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import Director from "../../assets/cisse.jpeg";

const ModalContact = ({ setContactModalOpen }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 backdrop-blur-sm transition-all duration-300">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 relative overflow-hidden animate-fadeIn"
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          {/* Header with gradient */}
          <div className="bg-linear-to-r from-primary to-secondary p-4 lg:p-6 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Coordonnées</h3>
              <button
                onClick={() => setContactModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          </div>

          {/* Director Profile */}
          <div className=" p-4 lg:p-6">
            <div className="flex items-center gap-4 mb-4 lg:mb-6 pb-4 border-b border-slate-200">
              <div className="relative">
                <div className="lg:w-20 lg:h-20 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={Director}
                    alt="M. Oumar Cissé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border-2 border-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900">
                  M. Oumar Cissé
                </h4>
                <p className="text-primary font-semibold text-sm">
                  Directeur Général
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:space-y-4">
              {/* Phone */}
              <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <FaPhone className="text-white text-lg" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-slate-900 mb-1">
                    Téléphone Direct
                  </h5>
                  <a
                    href="tel:+2250718920006"
                    className="text-lg font-bold text-slate-900 hover:text-primary transition-colors block"
                  >
                    +225 07 18 92 00 06
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-slate-900 mb-1">
                    Email Professionnel
                  </h5>
                  <a
                    href="mailto:contact@ivoirebauhaus.com"
                    className="text-primary font-medium hover:text-primary/80 transition-colors break-all"
                  >
                    contact@ivoirebauhaus.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group hidden lg:flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 ">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                </div>
                <div className="flex-1 ">
                  <h5 className="font-semibold text-slate-900 mb-1">
                    Bureau Commercial
                  </h5>
                  <p className="text-slate-900 font-medium text-base">
                    Abidjan, Cocody Riviera Palmeraie non loin de SIPIM 4 BP
                    2721
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Action */}
            <div className="mt-2 lg:mt-4 pt-6 border-t border-slate-200">
              <button
                onClick={() => window.open("https://wa.me/2250718920006")}
                className="w-full py-3 lg:py-4 bg-linear-to-r from-green-500 cursor-pointer to-green-600 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                <span>Contacter via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Close on backdrop click */}
        <div
          className="absolute inset-0 -z-10"
          onClick={() => setContactModalOpen(false)}
        ></div>
      </div>
    </div>
  );
};

export default ModalContact;
