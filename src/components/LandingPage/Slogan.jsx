import React from "react";

const Slogan = () => {
  return (
    <section className="py-20 bg-primary text-center border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-20 text-xl md:text-2xl font-light text-white tracking-widest uppercase">
          <span className="flex items-center gap-2">Clarté</span>
          <span className="hidden md:inline text-white">•</span>
          <span className="flex items-center gap-2">Transparence</span>
          <span className="hidden md:inline text-white">•</span>
          <span className="flex items-center gap-2">Livraison</span>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
