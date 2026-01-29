import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/query.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 4000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </QueryClientProvider>
  </Provider>
);

// const handleUpload = async (e, sectionId, index) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   const key = `${sectionId}-${index}`;
//   setUploading(key);

//   const validTypes = ["image/png", "image/jpeg", "image/webp"];
//   if (!validTypes.includes(file.type)) {
//     toast.error("Seuls les formats PNG, JPEG et WEBP sont acceptés.");
//     setUploading(null);
//     return;
//   }

//   const folderMap = {
//     landing: "page_accueil",
//     promotion: "promotion_immobiliere",
//     univ: "communication",
//   };

//   try {
//     const resizedImage = await resizeFile(file);
//     const fileName = `${Date.now()}-${file.name}`;

//     const { error } = await supabase.storage
//       .from("bauhausSocket")
//       .upload(`${folderMap[sectionId]}/${fileName}`, resizedImage);

//     if (error) throw error;

//     const { data } = supabase.storage
//       .from("bauhausSocket")
//       .getPublicUrl(`${folderMap[sectionId]}/${fileName}`);

//     /** ✅ SAVE URL TO THE EXACT CARD */
//     setImagesUrl((prev) => ({
//       ...prev,
//       [key]: data.publicUrl,
//     }));

//     toast.success("Image téléchargée avec succès.");
//   } catch (err) {
//     console.error(err);
//     toast.error("Erreur lors du téléchargement.");
//   } finally {
//     setUploading(null);
//   }
// };

// const UploadCard = ({ item, sectionId, index }) => {
//     const key = `${sectionId}-${index}`;
//     const isUploading = uploading === key;
//     const imageUrl = imagesUrl[key];

//     const colorClasses = {
//       blue: "bg-blue-50 text-blue-600 border-blue-400 text-blue-400",
//       emerald:
//         "bg-emerald-50 text-emerald-600 border-emerald-400 text-emerald-400",
//       purple: "bg-purple-50 text-purple-600 border-purple-400 text-purple-400",
//     };

//     const color = colorClasses[sections.find((s) => s.id === sectionId).color];

//     return (
//       <div className="group">
//         <div
//           className={`bg-white border-2 border-dashed border-slate-200 hover:border-teal-400 rounded-xl p-6 transition-all hover:shadow-lg h-full ${
//             isUploading ? "border-teal-400 bg-teal-50" : ""
//           }`}
//         >
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className={`p-2 rounded-lg ${color.split(" ")[0]}`}>
//                 <ImageIcon className="w-4 h-4" />
//               </div>
//               <h4 className="font-semibold text-slate-900">{item.title}</h4>
//             </div>
//           </div>

//           {/* ===== PREVIEW ===== */}
//           <div className="mb-4">
//             <div className="relative aspect-video bg-linear-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden border border-slate-200 group-hover:border-slate-300 transition-colors">
//               {imageUrl ? (
//                 <img
//                   src={imageUrl}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <Camera
//                       className={`w-8 h-8 mx-auto mb-1 ${color.split(" ")[3]}`}
//                     />
//                     <p className="text-xs text-slate-500">Aperçu</p>
//                   </div>
//                 </div>
//               )}

//               {imageUrl && (
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
//                   <Eye className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </div>
//           </div>

//           <label htmlFor={`photo-${sectionId}-${index}`} className="block">
//             <div
//               className={`w-full py-2 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
//                 isUploading
//                   ? "bg-teal-100 text-teal-700 border border-teal-300"
//                   : "bg-linear-to-r from-slate-50 to-slate-100 border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-slate-700 hover:text-teal-600"
//               }`}
//             >
//               {isUploading ? (
//                 <>
//                   <RefreshCw className="w-4 h-4 animate-spin" />
//                   <span className="text-sm font-medium">Téléchargement...</span>
//                 </>
//               ) : (
//                 <>
//                   <ArrowUpCircle className="w-4 h-4" />
//                   <span className="text-sm font-medium">
//                     Choisir un fichier
//                   </span>
//                 </>
//               )}
//             </div>
//           </label>

//           <input
//             type="file"
//             className="hidden"
//             id={`photo-${sectionId}-${index}`}
//             accept="image/*"
//             onChange={(e) => handleUpload(e, sectionId, index)}
//           />
//         </div>
//       </div>
//     );
//   };
