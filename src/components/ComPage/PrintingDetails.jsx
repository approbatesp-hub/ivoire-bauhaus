import { useState } from "react";
import {
  Printer,
  ChevronDown,
  ChevronUp,
  Download,
  Package,
  Shirt,
  FlaskConical,
  FileText,
  PenTool,
  CheckCircle,
  Zap,
  Target,
  Building2,
  Users,
  Sparkles,
} from "lucide-react";
import PrintingImage from "../../assets/service6/test2.jpg";

const PrintingDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mt-16 bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-primary/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 lg:mb-12">
            <div className="flex items-center  gap-4 lg:gap-6">
              <div className="p-3 lg:p-4 bg-white text-primary rounded-2xl shadow-2xl shadow-secondary/20">
                <Printer className="lg:w-8 lg:h-8 w-6 h-6 " />
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/20 text-secondary font-bold text-sm uppercase tracking-widest rounded-full mb-3">
                  Service 06
                </span>
                <h2 className="text-xl lg:text-5xl font-black">
                  Impression & Goodies
                </h2>
                <p className="text-slate-300 mt-3 max-w-2xl text-sm lg:text-base">
                  Transformez votre identité visuelle en objets tangibles qui
                  marquent les esprits et renforcent votre présence.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 justify-center  lg:justify-end ">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">
                  20+
                </div>
                <div className="text-sm text-slate-300">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">
                  100%
                </div>
                <div className="text-sm text-slate-300">Personnalisés</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Image & Features */}
            <div>
              {/* Image Container */}
              <div className="relative group lg:mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-2xl z-10"></div>
                <img
                  src={PrintingImage}
                  alt="Goodies et impressions personnalisées"
                  className="w-full h-[200px] lg:h-[320px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hidden lg:block">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">
                        Nos Atouts Exclusifs
                      </h3>
                      <p className="text-sm text-slate-400">
                        Cliquez pour découvrir nos avantages
                      </p>
                    </div>
                  </div>
                  {showDetails ? (
                    <ChevronUp className="w-6 h-6 text-secondary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-secondary transition-colors" />
                  )}
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    showDetails
                      ? "max-h-[600px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3">
                    {[
                      {
                        title: "Qualité Premium Garantie",
                        desc: "Matériaux sélectionnés rigoureusement et finitions soignées pour une excellence durable.",
                      },
                      {
                        title: "Personnalisation Totale",
                        desc: "Design sur mesure adapté parfaitement à votre identité visuelle et vos valeurs.",
                      },
                      {
                        title: "Délais Rapides & Fiables",
                        desc: "Production express sans aucun compromis sur la qualité ou la précision.",
                      },
                      {
                        title: "Prix Transparents & Compétitifs",
                        desc: "Devis clairs et adaptés à tous les budgets, sans surprises ni frais cachés.",
                      },
                    ].map((advantage, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-slate-800/20 rounded-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            {advantage.title}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {advantage.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Products & Details */}
            <div>
              {/* Products Section */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">Nos Produits Phares</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Shirt className="w-5 h-5" />,
                      name: "T-shirts & Polos",
                      desc: "Impression numérique ou sérigraphie",
                    },
                    {
                      icon: <FlaskConical className="w-5 h-5" />,
                      name: "Bouteilles & Gourdes",
                      desc: "Marquage laser ou tampographie",
                    },
                    {
                      icon: <PenTool className="w-5 h-5" />,
                      name: "Stylos & Accessoires",
                      desc: "Personnalisation en série",
                    },
                    {
                      icon: <FileText className="w-5 h-5" />,
                      name: "Flyers & Dépliants",
                      desc: "Impression haute qualité",
                    },
                    {
                      icon: <Package className="w-5 h-5" />,
                      name: "Goodies Événementiels",
                      desc: "Sacs, clés USB, magnets",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-secondary/50 transition-all hover:translate-y-[-2px]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg text-secondary group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion */}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-6 bg-gradient-to-r from-primary/30 to-secondary/20 rounded-2xl p-8 border border-primary/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold lg:mb-3">
                  Prêt à personnaliser votre marque ?
                </h3>
                <p className="text-slate-300 hidden lg:block">
                  Contactez-nous pour un devis personnalisé et des conseils
                  experts.
                </p>
              </div>
              <a
                href="https://wa.me/2250718920006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-secondary hover:text-slate-900 transition-all duration-300 flex items-center gap-3 whitespace-nowrap group">
                  Demander un devis gratuit
                  <ChevronUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintingDetails;
