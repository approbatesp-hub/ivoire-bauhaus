import { ShieldCheck } from "lucide-react";
import CamionDetails from "../components/ComPage/CamionDetails";
import AdvertisingDetails from "../components/ComPage/AdvertisingDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllImages } from "../utils/hooks";
import { setImages } from "../redux/bauhaus";
import PrintingDetails from "../components/ComPage/PrintingDetails";

const CommunicationPub = () => {
  const { imagesRedux } = useSelector((state) => state.projet);
  // console.log(imagesRedux);
  const dispatch = useDispatch();

  const imageComPage = imagesRedux.filter(
    (img) => img.folder === "communication",
  );

  useEffect(() => {
    if (imageComPage.length === 0) {
      getAllImages().then((res) => {
        dispatch(setImages(res));
      });
    }
  }, []);
  return (
    <div className="bg-slate-50 min-h-screen  font-sans">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-18 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center mt-5 gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Régie Publicitaire Agréée
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Propulsez votre{" "}
            <span className="text-teal-400 font-outline-2">Visibilité</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto lg:text-lg">
            Des solutions d'affichage innovantes pour connecter votre marque à
            votre audience cible en Côte d’Ivoire.
          </p>
        </div>
      </section>

      <CamionDetails />
      <AdvertisingDetails images={imageComPage} />
      <div>
        <PrintingDetails />
      </div>
    </div>
  );
};

export default CommunicationPub;
