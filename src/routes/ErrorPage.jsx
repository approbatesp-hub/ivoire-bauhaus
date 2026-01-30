import React from "react";
import { Link } from "react-router";
import { AlertTriangle, Home, ArrowLeft, RefreshCw } from "lucide-react";
import Logo from "../assets/logo.png";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30 blur-3xl"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Error illustration */}
        <div className="relative inline-block mb-10">
          <div className="absolute -inset-6 bg-gradient-to-r from-teal-300 to-emerald-400 rounded-full opacity-20 blur-2xl"></div>
          <div className="relative w-40 h-40 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center border border-teal-100 shadow-lg">
            <AlertTriangle className="w-20 h-20 text-teal-600 animate-pulse" />
          </div>
        </div>

        {/* Error content */}
        <div className="mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 border border-teal-100">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Page non trouvée
          </span>
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-xl text-slate-700 max-w-xl mx-auto mb-8">
            La page que vous recherchez semble avoir disparu.
            <br className="hidden md:block" />
            Pas d'inquiétude, nous allons vous guider vers le bon chemin.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold text-lg rounded-xl hover:bg-slate-50 transition-all"
          >
            <RefreshCw className="w-5 h-5 mr-2 animate-spin-slow" />
            Actualiser
          </button>
        </div>

        {/* Helpful link */}
        <div className="max-w-md mx-auto">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retourner à la page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
