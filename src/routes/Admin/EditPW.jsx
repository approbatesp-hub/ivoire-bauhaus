import React, { useState } from "react";
import {
  Key,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import supabase from "../../config/supabse-client";
import { setAdminStatus } from "../../redux/bauhaus";

const EditPW = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Validate passwords
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    if (passwords.newPassword.length < 6) {
      setError("Le nouveau mot de passe doit contenir au moins 6 caractères.");
      setLoading(false);
      return;
    }

    try {
      // First, verify current password

      const { error: updateError } = await supabase
        .from("Admin")
        .update({ motDePasse: passwords.newPassword })
        .eq("id", 2);

      if (updateError) {
        throw updateError;
      }

      setSuccess(true);
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
        dispatch(setAdminStatus(false));
      }, 3000);
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-slate-200 bg-linear-to-r from-primary/5 to-emerald-50">
            <div className="flex items-center gap-4 ">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-emerald-600 flex items-center justify-center shadow-lg">
                <Key className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                  Modifier le mot de passe
                </h1>
                <p className="text-slate-600">
                  Mettez à jour votre mot de passe d'administration
                </p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="m-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 animate-fade-in">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-emerald-800">
                  Mot de passe modifié avec succès !
                </p>
                <p className="text-sm text-emerald-700 mt-1">
                  Votre nouveau mot de passe est maintenant actif.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mx-6 p-4 mt-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-red-800">Erreur</p>
                <p className="text-sm text-red-700 mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8 pt-4 space-y-6 ">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Nouveau mot de passe
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="Créez un nouveau mot de passe"
                  required
                />
                <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPasswords.new ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Confirmer le nouveau mot de passe
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pl-12 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all ${
                    passwords.confirmPassword &&
                    passwords.newPassword !== passwords.confirmPassword
                      ? "border-red-300"
                      : "border-slate-300"
                  }`}
                  placeholder="Confirmez votre nouveau mot de passe"
                  required
                />
                <CheckCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPasswords.confirm ? (
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
              className="w-full py-4 bg-linear-to-r from-primary to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Modification en cours...</span>
                </>
              ) : (
                <>
                  <span>Modifier le mot de passe</span>
                  <CheckCircle className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPW;
