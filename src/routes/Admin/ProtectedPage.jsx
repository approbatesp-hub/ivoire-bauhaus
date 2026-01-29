import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Building2,
} from "lucide-react";
import Logo from "../../assets/logo.png";
import supabase from "../../config/supabse-client";
import { setAdminStatus } from "../../redux/bauhaus";
const ProtectedPage = ({ children }) => {
  const { adminStatus } = useSelector((state) => state.projet);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const { error: adminError } = await supabase
      .from("Admin")
      .select("*")
      .eq("motDePasse", password)
      .single();

    if (adminError) {
      setError(true);
      setLoading(false);
      return;
    } else {
      dispatch(setAdminStatus(true));
    }
  };

  if (!adminStatus) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-linear(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-emerald-600 flex items-center justify-center shadow-lg">
                <img
                  src={Logo}
                  alt="Ivoire Bauhaus"
                  className="w-12 h-12 invert brightness-0"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center border-4 border-white shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Access Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary/10 to-emerald-500/10 rounded-2xl mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Espace Administrateur
              </h1>
              <p className="text-slate-600">
                Accès sécurisé au panel de gestion
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-shake">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-red-800">
                    Mot de passe incorrect
                  </p>
                  <p className="text-sm text-red-600 mt-1">
                    Veuillez réessayer avec le bon mot de passe.
                  </p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Key className="w-4 h-4 text-slate-500" />
                    Mot de passe administrateur
                  </div>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300"
                    placeholder="Entrez le mot de passe"
                    autoComplete="current-password"
                    required
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-linear-to-r from-primary to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Vérification...</span>
                  </>
                ) : (
                  <>
                    <span>Accéder au panel</span>
                    <CheckCircle className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </button>
            </form>

            {/* Security Info */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <p>
                  Accès restreint à l'équipe administrative d'Ivoire Bauhaus
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="fixed top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen bg-slate-50">{children}</div>;
};

export default ProtectedPage;
