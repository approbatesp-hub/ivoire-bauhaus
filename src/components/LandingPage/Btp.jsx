import { useState } from "react";
import { ShieldCheck, ArrowRight, Users, Home } from "lucide-react";
import SimpleLoader from "../SimpleLoader";
import { Link } from "react-router";

const Btp = ({ homePageThree, texts }) => {
  // const [videoPlayed, setVideoPlayed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <section
        id="promotion-immobiliere"
        className=" py-12 lg:py-24 bg-slate-50"
      >
        <div className="max-w-[90%] lg:max-w-[75%] mx-auto lg:px-6">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-16">
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">
              Service Immobilier
            </span>
            <h3 className="text-[28px] lg:text-5xl font-bold text-slate-900 mt-2 mb-3 lg:mb-6">
              {texts?.mainTitle}
            </h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>

            <p className="mt-4 lg:mt-8 text-slate-600 font-light lg:text-lg lg:max-w-[60%] mx-auto leading-relaxed">
              {texts?.descriptionOne}
              <br />
              <strong className="mt-1 lg:mt-0 inline-block">
                {texts?.descriptionTwo}
              </strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              {!imageLoaded && (
                <div className="relative rounded-lg w-full   h-[260px]  lg:h-[520px] bg-teal-950 animate-pulse flex items-center justify-center">
                  <SimpleLoader />
                </div>
              )}
              {homePageThree?.publicUrl && (
                <img
                  src={homePageThree.publicUrl}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                  className="w-full lg:w-[650px] h-[260px]  lg:h-[520px]  object-cover rounded-xl "
                  alt=""
                />
              )}
            </div>
            {/* Content Column */}
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-white p-3 lg:p-4 rounded-2xl mr-4 lg:mr-6 text-teal-600 shadow-sm border border-slate-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Users className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-slate-800">
                    {texts?.keyPoints[0]?.title}
                  </h4>
                  <p className="text-[15px] lg:text-base text-slate-600 font-light leading-relaxed">
                    {texts?.keyPoints[0]?.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white p-3 lg:p-4 rounded-2xl mr-4 lg:mr-6 text-teal-600 shadow-sm border border-slate-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Home className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-slate-800">
                    {texts?.keyPoints[1]?.title}
                  </h4>
                  <p className="text-[15px] lg:text-base text-slate-600 font-light leading-relaxed">
                    {texts?.keyPoints[1]?.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white p-3 lg:p-4 rounded-2xl mr-4 lg:mr-6 text-teal-600 shadow-sm border border-slate-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className=" w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-slate-800">
                    {texts?.keyPoints[2]?.title}
                  </h4>
                  <p className="text-[15px] lg:text-base text-slate-600 font-light leading-relaxed">
                    {texts?.keyPoints[2]?.description}
                  </p>
                </div>
              </div>

              <div className=" flex flex-col sm:flex-row gap-4">
                <Link
                  to={"/promotionimmobiliere"}
                  className="px-8 py-3 lg:py-4 bg-teal-700 text-white font-bold rounded-xl hover:bg-teal-800 transition-all shadow-lg flex items-center justify-center gap-3 uppercase tracking-wider"
                >
                  Voir nos projets en cours <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Btp;
