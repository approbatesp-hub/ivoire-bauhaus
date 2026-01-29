import { useEffect, useState } from "react";
import { Grid3x3, Maximize2 } from "lucide-react";

/* ---------------- Skeleton ---------------- */

const GallerieSkeleton = () => (
  <div className="pb-12 animate-pulse">
    <div className="text-center mb-5 lg:mb-10">
      <div className="h-10 w-48 mx-auto rounded-full bg-slate-200 mb-4" />
      <div className="h-5 w-2/3 mx-auto bg-slate-200 rounded" />
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="h-[200px] lg:h-[450px] bg-slate-200 rounded-2xl" />
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[216px] bg-slate-200 rounded-xl" />
          ))}
        </div>
      </div>

      <div className="pt-8 border-b pb-10 border-slate-200">
        <div className="h-10 w-48 bg-slate-200 rounded-lg" />
      </div>
    </div>
  </div>
);

/* ---------------- Component ---------------- */

const Gallerie = ({ images = [], handleImageClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  if (isLoading) {
    return <GallerieSkeleton />;
  }

  if (!images.length) {
    return null;
  }

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="text-center mb-5 lg:mb-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200/50 mb-4 backdrop-blur-sm">
          <Maximize2 className="w-4 h-4 text-teal-600" />
          <span className="text-teal-700 font-semibold text-sm tracking-wide">
            GALERIE IMMERSIVE
          </span>
        </div>

        <p className="text-slate-600 max-w-2xl mx-auto lg:text-lg">
          Découvrez chaque détail de notre projet à travers cette collection de
          photos professionnelles
        </p>
      </div>

      {/* Gallery */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Image */}
          <div
            className="lg:w-1/2 relative group cursor-zoom-in"
            onClick={() => handleImageClick(0)}
          >
            <div className="relative h-[200px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images[0].publicUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Vue principale du projet"
              />

              {/* Hover Overlay (RESTORED) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-xl font-bold mb-2">
                        Vue d'ensemble
                      </p>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        Image principale
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-teal-900 transition-colors">
                      <Maximize2 className="w-5 h-5 text-white group-hover:text-teal-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Badge (RESTORED) */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-teal-700">
                  Vue Principale
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {images.slice(1).map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-zoom-in"
                onClick={() => handleImageClick(i + 1)}
              >
                <div className="aspect-square h-[280px] lg:h-[216px]">
                  <img
                    src={img.publicUrl}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={`Vue ${i + 2}`}
                  />
                </div>

                {/* Hover Overlay (RESTORED) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm font-medium">
                        Vue {i + 2}
                      </p>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-8 border-b pb-10 border-slate-200">
          <div className="hidden lg:flex items-center gap-2 text-slate-600">
            <Grid3x3 className="w-4 h-4" />
            <span className="text-sm">Cliquez sur une image pour zoomer</span>
          </div>

          <button
            onClick={() => handleImageClick(0)}
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Maximize2 className="w-4 h-4" />
            Voir en plein écran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
