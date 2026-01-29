import { Link, Outlet, useLocation, useNavigate } from "react-router";
import {
  Image,
  FileText,
  Lock,
  LogOut,
  Settings,
  Home,
  ChevronRight,
  Shield,
  User,
  Bell,
  Search,
  Grid,
  Users,
  BarChart3,
  Eye,
  Upload,
  Key,
} from "lucide-react";
import { useState } from "react";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      path: "/admin/editiImages",
      label: "Gestion des Images",
      icon: <Image className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      path: "/admin/editText",
      label: "Gestion des Textes",
      icon: <FileText className="w-5 h-5" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },

    {
      path: "/admin/editerMDP",
      label: "Modifier le mot de passe",
      icon: <Lock className="w-5 h-5" />,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 transition-all duration-300 ${
          isSidebarOpen ? "w-72" : "w-20"
        } bg-white border-r border-slate-200 shadow-xl`}
      >
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          {isSidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-slate-900">Admin Panel</h1>
                <p className="text-xs text-slate-500">Ivoire Bauhaus</p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
          )}

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ChevronRight
              className={`w-4 h-4 text-slate-600 transition-transform ${
                isSidebarOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-140px)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? `${item.bgColor} ${item.color} font-semibold shadow-sm`
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isActive ? item.bgColor : "bg-slate-100"
                  } group-hover:scale-110 transition-transform`}
                >
                  <div className={isActive ? item.color : "text-slate-500"}>
                    {item.icon}
                  </div>
                </div>
                {isSidebarOpen && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          {isSidebarOpen ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Admin</p>
                  <p className="text-xs text-slate-500">Super Admin</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-red-600 transition-colors"
                title="Déconnexion"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white font-bold">
                <User className="w-5 h-5" />
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-red-600 transition-colors"
                title="Déconnexion"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "ml-72" : "ml-20"
        }`}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link
                to="/admin/dashboard"
                className="hover:text-primary transition-colors"
              >
                Admin
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-slate-900">
                {navItems.find((item) => item.path === location.pathname)
                  ?.label || "Tableau de bord"}
              </span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {/* Stats Overview */}

          {/* Main Content */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            {/* Content Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {navItems.find((item) => item.path === location.pathname)
                    ?.label || "Tableau de bord"}
                </h2>
                <p className="text-slate-600 mt-2">
                  Gérez le contenu de votre site web Ivoire Bauhaus
                </p>
              </div>
            </div>

            {/* Page Content */}
            <div className="min-h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
