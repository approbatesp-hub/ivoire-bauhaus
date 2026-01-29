import React from "react";

const QuiSOmmesNous = ({ texts }) => {
  return (
    <div id="aPropos">
      <section
        id="about"
        className="py-12 lg:py-24 bg-slate-100 border-t border-slate-200"
      >
        <div className="text-[24px] max-w-[90%] lg:max-w-[75%] mx-auto lg:px-6 text-center leading-relaxed">
          <h3 className="lg:text-3xl font-bold text-slate-900 mb-3 lg:mb-6 uppercase">
            {texts?.mainTitle}
          </h3>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-5 lg:mb-8"></div>
          <p className="text-slate-600 text-base lg:text-xl font-light leading-relaxed">
            {texts?.descriptionOne}
            <br />
            <br />{" "}
            <span className="hidden lg:block">{texts?.descriptionTwo} </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default QuiSOmmesNous;
