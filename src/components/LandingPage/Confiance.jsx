import React from "react";
import LogoApprobat from "../../assets/logoApprobat.png";
import LogoTimu from "../../assets/Timutech.svg";

import LogoRose from "../../assets/logoROSE.png";
const Confiance = () => {
  const clients = [
    {
      name: "Approbat Services",
      logo: LogoApprobat,
    },
    {
      name: "Timutech",
      logo: LogoTimu,
    },
    {
      name: "Approbat Services",
      logo: LogoRose,
    },
    {
      name: "Timutech",
      logo: LogoTimu,
    },
  ];

  return (
    <div>
      <section id="refs" className="py-[50px] bg-white">
        <div className="max-w-[90%] lg:max-w-[75%] mx-auto lg:px-6 text-center">
          <h4 className="text-3xl font-bold text-slate-800 mb-12 uppercase tracking-wide">
            Ils nous font confiance
          </h4>
          {/* Logo Grid - Using placeholders */}
          <div className="flex items-center gap-8  justify-center opacity-90 ">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group p-6 grayscale hover:grayscale-0 transition-all duration-300  grid grid-cols-4r cursor-pointer "
              >
                {/* Placeholder for Logo */}
                <div className="text-xl bg- font-black text-slate-300 group-hover:text-teal-600 flex flex-col justify-center items-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-50 h-30 object-contain"
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
