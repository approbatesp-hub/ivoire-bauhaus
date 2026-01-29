import React from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  Phone,
  Clock,
  ChevronRight,
  Sparkles,
  Globe,
  Users,
  Send,
  ArrowRight,
} from "lucide-react";
import { BsTiktok } from "react-icons/bs";

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ivoirebauhaus/",
      gradient: "from-pink-500 to-rose-600",
      label: "@ivoirebauhaus",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61575648928455",
      gradient: "from-blue-600 to-indigo-700",
      label: "Ivoire Bauhaus",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/ivoire-bauhaus-group/",
      gradient: "from-blue-700 to-cyan-600",
      label: "Ivoire Bauhaus Group",
    },
    {
      name: "TikTok",
      icon: BsTiktok,
      url: "https://www.tiktok.com/@ivoire.bauhaus",
      gradient: "from-blue-700 to-pink-600",
      label: "@ivoire.bauhaus",
    },
  ];

  const contactActions = [
    {
      title: "Direct WhatsApp",
      description:
        "Ligne prioritaire pour vos demandes urgentes et conseils immédiats.",
      value: "+225 07 18 92 00 06",
      href: "https://wa.me/2250718920006",
      icon: MessageCircle,
      tag: "Réponse Instantanée",
    },
    {
      title: "Email Officiel",
      description:
        "Pour les dossiers d'architecture, devis détaillés et partenariats.",
      value: "contact@ivoirebauhaus.com",
      href: "mailto:contact@ivoirebauhaus.com",
      icon: Mail,
      gradient: "from-blue-500 to-cyan-600",
      tag: "Business",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white/80 text-slate-900 font-sans overflow-x-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[65%] h-[65%] bg-gradient-to-br from-teal-50/30 via-transparent to-transparent rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] bg-gradient-to-tr from-blue-50/30 via-transparent to-transparent rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-[90%] lg:max-w-[75%] mx-auto pt-25 lg:pt-30 pb-15">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-15 lg:mb-24 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-5 lg:mb-8 text-slate-900 leading-[1.1]">
              Parlons de <br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent italic font-serif font-light tracking-normal pt-2">
                votre projet
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
              Que ce soit pour une résidence privée ou un projet commercial,
              notre équipe s est à votre écoute pour concrétiser vos ambitions.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-slate-900 border text-white border-slate-200 rounded-3xl p-6 lg:p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold ">
                      Engagement Qualité
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Notre promesse d'excellence
                    </p>
                  </div>
                </div>

                <p className="text-[15px] lg:text-base text-slate-400 leading-relaxed mb-5 lg:mb-8">
                  Nos experts vous accompagnent du lundi au samedi pour une
                  prise en charge personnalisée et un suivi attentif de votre
                  projet.
                </p>

                <div className="flex justify-end  ">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    Contactez-Nous
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Interaction Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 lg:mb-20">
          {contactActions.map((action, i) => (
            <a
              key={i}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-7 lg:p-9 rounded-3xl border shadow-xl border-slate-200/50 bg-white/80 backdrop-blur-sm transition-all duration-500 overflow-hidden hover:border-transparent hover:shadow-2xl hover:-translate-y-1.5`}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-between items-center lg:items-start mb-4 lg:mb-10">
                  <div
                    className={`lg:p-4.5 rounded-2xl bg-white shadow-sm group-hover:bg-white group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                  >
                    <action.icon className="w-7 h-7 text-teal-600  transition-colors" />
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <span
                      className={`text-[10px] lg:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-emerald-500 text-white   shadow-sm`}
                    >
                      {action.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 lg:flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-emerald-600 group-hover:text-white transition-all duration-500 hidden ">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-slate-500 transition-colors">
                    {action.title}
                  </h3>
                  <p className=" text-[22px] lg:text-3xl font-bold tracking-tight mb-2 lg:mb-4 group-hover:text-teal-700 transition-colors">
                    {action.value}
                  </p>
                  <p className=" lg:text-lg text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Secondary Info Deck */}
        <div className="bg-white border border-slate-200/50 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

          <div className="grid lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-8 p-7 md:p-12 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 text-teal-500/5 pointer-events-none -rotate-12">
                <Globe className="w-[300px] h-[300px]" strokeWidth={0.5} />
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Location */}
                <div className="space-y-4 lg:space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center text-teal-600 shadow-sm">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 lg:mb-4">
                      Siège Social
                    </h4>
                    <p className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
                      Cocody Riviera <br />
                      Palmeraie, SIPIM 1 <br />
                      <span className="text-teal-600 font-serif italic text-xl">
                        Abidjan, Côte d'Ivoire
                      </span>
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-teal-700 group">
                    Obtenir l'itinéraire
                    <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

                {/* Hours */}
                <div className="space-y-4 lg:space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Disponibilité
                    </h4>
                    <div className="space-y-5">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                        <div>
                          <span className="text-sm font-bold text-slate-500 uppercase tracking-tighter">
                            Lundi — Vendredi
                          </span>
                          <p className="text-slate-400 text-sm mt-1">
                            Toute la journée
                          </p>
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                          08:00 — 18:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                        <div>
                          <span className="text-sm font-bold text-slate-500 uppercase tracking-tighter">
                            Samedi
                          </span>
                          <p className="text-slate-400 text-sm mt-1">
                            Matinée uniquement
                          </p>
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                          09:00 — 14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Social Column */}
            <div className="lg:col-span-4 p-8 md:p-10 lg:p-8 bg-gradient-to-b from-slate-50/50 to-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  NOTRE PRÉSENCE
                </h4>
              </div>

              <div className="space-y-3 mb-5">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block p-4 rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm hover:border-transparent transition-all duration-300 ${
                      i === 0 ? "hover:scale-[1.02]" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                    ></div>

                    <div className="relative flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-4 ">
                        <div
                          className={`p-3.5 rounded-xl bg-gradient-to-br ${social.gradient} text-white shadow-lg`}
                        >
                          <social.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="block font-bold text-slate-900 group-hover:text-slate-600 transition-colors text-base">
                            {social.name}
                          </span>
                          <span className="block text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                            {social.label}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
      </div>

      {/* Floating Action Button for Mobile */}
      <a
        href="https://wa.me/2250718920006"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all md:hidden z-50 border-2 border-white/20"
        aria-label="Contacter par WhatsApp"
      >
        <MessageCircle className="w-8 h-8 animate-bounce" />
        <span className="sr-only">Contacter par WhatsApp</span>
      </a>
    </div>
  );
};

export default Contact;
