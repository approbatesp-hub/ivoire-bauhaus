import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { ChevronRight, Building2 } from "lucide-react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Promotion Immobilière", path: "/promotionimmobiliere" },
    { name: "Communication & Pub", path: "/communicationpub" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* TOP BAR */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
            : "bg-transparent py-4"
        }`}
      >
        <nav className=" max-w-[85%] lg:max-w-[90%] mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 lg:gap-3">
            <div className=" w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <img
                src={Logo}
                alt="logo"
                className=" w-5 h-5 lg:w-6 lg:h-6 invert brightness-0"
              />
            </div>
            <span
              className={`font-bold text-lg lg:text-xl transition ${
                scrolled || pathname === "/contact"
                  ? "text-teal-600"
                  : "text-white"
              }`}
            >
              Ivoire Bauhaus
            </span>
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`p-2.5 lg:p-3 rounded-xl transition ${
              scrolled || pathname === "/contact"
                ? "bg-white border border-slate-200"
                : "bg-white/10 border border-white/30 text-white"
            }`}
          >
            <RiMenu3Fill className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "visible opacity-100 backdrop-blur-xl bg-black/70"
            : "invisible opacity-0"
        }`}
      />

      {/* MENU PANEL */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[70%] lg:max-w-sm
        bg-gradient-to-b from-slate-900 to-slate-800
        transition-transform duration-500 ease-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <img
                src={Logo}
                alt="logo"
                className="w-5 h-5 invert brightness-0"
              />
            </div>
            <span className="font-bold text-white text-lg">Ivoire Bauhaus</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            <RiCloseFill className="w-6 h-6" />
          </button>
        </div>

        {/* LINKS */}
        <nav className="p-6 space-y-4 lg:space-y-2">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between p-4 rounded-2xl transition
                ${
                  isActive
                    ? "bg-teal-500/20 border border-teal-500/30 text-white"
                    : "bg-white/5 text-white/80 hover:bg-white/10"
                }`
              }
              style={{
                transitionDelay: `${i * 60}ms`,
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              <span className="lg:text-lg font-medium">{link.name}</span>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </NavLink>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full p-6 border-t border-white/10 text-center">
          <div className="flex justify-center items-center gap-2 text-white/60">
            <Building2 className="w-4 h-4 text-teal-400" />
            <span className="text-sm">Cocody Riviera, Abidjan</span>
          </div>
          <p className="text-xs text-white/40 mt-1">© 2026 Ivoire Bauhaus</p>
        </div>
      </aside>
    </header>
  );
};

export default Header;
