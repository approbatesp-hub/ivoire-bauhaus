import React from "react";

import LogoYango from "../../assets/partenaires/yango.png";
import LogoMoov from "../../assets/partenaires/moov.png";
import LogoMairie from "../../assets/partenaires/mairie.png";
import LogoEcole from "../../assets/partenaires/kadi.jpeg";
import LogoBiotek from "../../assets/partenaires/biotech.png";

const Confiance = () => {
  const clients = [
    {
      name: "Yango",
      logo: LogoYango,
    },
    {
      name: "Moov Africa",
      logo: LogoMoov,
    },
    {
      name: "Mairie de Cocody",
      logo: LogoMairie,
    },
    {
      name: "Kadi's Raouda",
      logo: LogoEcole,
    },
    {
      name: "Bioteck-ci",
      logo: LogoBiotek,
    },
  ];

  return (
    <div>
      <section id="refs" className="py-[30px]  lg:py-[50px] bg-white">
        <div className="max-w-[90%] lg:max-w-[75%] mx-auto lg:px-6 text-center">
          <h4 className="text-[24px] lg:text-3xl font-bold text-slate-800 mb-3 lg:mb-12 uppercase tracking-wide">
            Ils nous font confiance
          </h4>
          {/* Logo Grid - Using placeholders */}
          <div className="grid grid-cols-3 lg:grid-cols-5 items-center gap-6  md:gap-10 justify-center opacity-90 ">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group 
              
                 cursor-pointer "
              >
                {/* Placeholder for Logo */}
                <div className="text-xl bg- font-black text-slate-300 group-hover:text-teal-600 flex flex-col justify-center items-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-[70%] h-[70%] lg:w-50 lg:h-30 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Confiance;
