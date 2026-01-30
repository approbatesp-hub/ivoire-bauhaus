import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white pt-10 lg:pt-14 pb-10 border-t border-teal-900"
    >
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 mb-8 lg:mb-12">
          {/* Brand */}
          <div>
            <Link to={"/"} className="font-bold text-3xl tracking-tighter mb-6">
              IVOIRE <span className="text-secondary">BAUHAUS</span>
            </Link>
            <p className="text-slate-400 font-light mt-2 lg:mt-0 mb-6 leading-relaxed">
              Votre partenaire de confiance pour l'investissement immobilier et
              la communication stratégique en Côte d'Ivoire.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                target="_blank"
                to="https://www.instagram.com/ivoirebauhaus/"
                className="p-3 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-colors text-slate-400"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=61575648928455#"
                className="p-3 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-colors text-slate-400"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@ivoire.bauhaus"
                className="p-3 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-colors text-slate-400"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/ivoire-bauhaus-group/"
                className="p-3 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-colors text-slate-400"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Contacts */}
          <div className="md:flex md:justify-center w-full md:gap-20 lg:gap-40   ">
            <div>
              <h4 className="font-bold text-lg mb-5 lg:mb-8 uppercase tracking-wider text-secondary">
                Contactez-nous
              </h4>
              <div className="space-y-6 text-slate-300 font-light  ">
                <Link
                  href="tel:+225 07 18 92 00 06"
                  className="flex items-center justify-center lg:justify-start gap-4 hover:text-teal-400 transition-colors group"
                >
                  <div className="bg-slate-800 p-2 rounded group-hover:bg-teal-900 transition-colors">
                    <FaPhone size={18} />
                  </div>
                  +225 07 18 92 00 06
                </Link>
                <Link
                  href="https://wa.me/2250718920006"
                  className="flex items-center justify-center lg:justify-start gap-4 hover:text-teal-400 transition-colors group"
                >
                  <div className="bg-slate-800 p-2 rounded group-hover:bg-teal-900 transition-colors">
                    <FaWhatsapp size={18} />
                  </div>
                  WhatsApp Direct
                </Link>
                <div className="flex items-center justify-center lg:justify-start gap-4 group">
                  <div className="bg-slate-800 p-2 rounded">
                    <FaMapPin size={18} />
                  </div>
                  <p>
                    <span className="hidden lg:inline ">
                      Riviera Palmeraie, SIPIM 4, Cocody <br />
                    </span>
                    <span>Abidjan, Côte d'Ivoire </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-5 lg:mb-8 uppercase lg:text-left md:text-right tracking-wider text-secondary">
                Navigation
              </h4>
              <ul className="space-y-3 text-slate-300 font-light lg:text-left md:text-right ">
                <li>
                  <Link
                    to="/"
                    // onClick={() => scrollToSection("promo")}
                    className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block"
                  >
                    Accueil{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/promotionimmobiliere"
                    // onClick={() => scrollToSection("promo")}
                    className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block"
                  >
                    Promotion Immobilière
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/communicationpub"}
                    // onClick={() => scrollToSection("coms")}
                    className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block"
                  >
                    Communication & Publicité
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/contact"}
                    // onClick={() => scrollToSection("about")}
                    className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
        </div>

        <div className="border-t border-slate-800 pt-8   text-slate-500 text-sm font-light">
          <p className="text-center">
            © {new Date().getFullYear()} Ivoire Bauhaus. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
