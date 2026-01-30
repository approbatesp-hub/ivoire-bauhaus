import React, { useState } from "react";
import SimpleLoader from "../SimpleLoader";
import { Link } from "react-router";

const Camion = ({ homePageFour, texts }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <section
        id="coms"
        className=" py-12 lg:py-24 bg-primary text-white relative overflow-hidden"
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-900/20 skew-x-12 transform translate-x-20"></div>

        <div className="max-w-[90%] lg:max-w-[75%] mx-auto lg:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              {/* Image */}
              <div className="relative group w-full">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                {/* Skeleton Loader */}
                {!imageLoaded && (
                  <div className="relative rounded-lg w-full h-[260px]   lg:w-[650px] lg:h-[520px] bg-teal-950 animate-pulse flex items-center justify-center">
                    <SimpleLoader />
                  </div>
                )}

                {/* Real Image */}
                {homePageFour?.publicUrl && (
                  <img
                    src={homePageFour.publicUrl}
                    alt="Camion LED"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                    className={`relative rounded-lg shadow-2xl w-full   h-[260px] lg:w-[650px]   lg:h-[520px] object-cover transition-opacity duration-700 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold tracking-wider text-sm uppercase">
                Visibilité Maximale
              </span>
              <h3 className="text-[28px] lg:text-5xl  font-bold mt-2 mb-3 lg:mb-6">
                {texts?.mainTitle}
              </h3>

              <p className="text-teal-50 font-light lg:text-lg mb-8 leading-relaxed opacity-90">
                {texts?.description}
              </p>

              <ul className="space-y-6 mb-6 lg:mb-10 font-light text-lg">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <span className="text-[15px] lg:text-base ">
                    {texts?.keyPoints[0]}
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <line x1="3" x2="21" y1="9" y2="9" />
                      <line x1="9" x2="9" y1="21" y2="9" />
                    </svg>
                  </div>
                  <span className="text-[15px] lg:text-base ">
                    {texts?.keyPoints[1]}
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M12 2v2" />
                      <path d="M12 22v-2" />
                      <path d="M14 12h8" />
                      <path d="M2 12h2" />
                    </svg>
                  </div>
                  <span className="text-[15px] lg:text-base ">
                    {texts?.keyPoints[2]}
                  </span>
                </li>
              </ul>

              <Link
                to="communicationpub"
                className="px-8 py-3 border border-teal-400 text-secondary font-semibold rounded hover:bg-teal-400 hover:text-teal-950 transition-colors uppercase tracking-wider text-sm"
              >
                Découvrer nos offres
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Camion;
