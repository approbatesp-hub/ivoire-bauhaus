import {
  Image as ImageIcon,
  Home,
  Building2,
  Truck,
  Camera,
  Eye,
  RefreshCw,
  ArrowUpCircle,
  Grid3x3,
  ChevronDown,
  ChevronUp,
  FolderOpen,
  FolderClosed,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getAllImages, getStoragePath, resizeFile } from "../../utils/hooks";
import supabase from "../../config/supabse-client";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import SimpleLoader from "../../components/SimpleLoader";
import { sectionsImages } from "../../utils/constant";
const EditImages = () => {
  const [openSections, setOpenSections] = useState({
    landing: true,
    promotion: true,
    univ: true,
  });

  //   FETCH IMAGES START

  const {
    data: allImages = [],
    error,
    isLoading,
    // refetch: refreshImages,
  } = useQuery({
    queryKey: ["allImages"],
    queryFn: getAllImages,
    staleTime: 5 * 60 * 1000,
  });

  // console.log(allImages);

  //  FETCH IMAGES END

  const [imagesUrl, setImagesUrl] = useState({});

  const [uploading, setUploading] = useState(null);

  useEffect(() => {
    if (!allImages.length) return;

    const FOLDER_TO_SECTION = {
      page_accueil: "landing",
      promotion_immobiliere: "promotion",
      communication: "univ",
    };

    const formatted = {};

    allImages.forEach((img) => {
      const sectionId = FOLDER_TO_SECTION[img.folder];
      if (!sectionId) return;

      // Extract index from filename: "3_1705401982123.webp" → 3
      const fileName = img.publicUrl.split("/").pop();
      const index = fileName.split("_")[0];

      formatted[`${sectionId}-${index}`] = img.publicUrl;
    });

    setImagesUrl(formatted);
  }, [allImages]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="w-[200px] h-[200px]  ">
          <SimpleLoader />
        </div>
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  const handleUpload = async (e, sectionId, index) => {
    const imageFile = e.target.files[0];
    // console.log(imageFile);

    if (!imageFile) return;

    const key = `${sectionId}-${index}`;
    setUploading(key);

    const folderMap = {
      landing: "page_accueil",
      promotion: "promotion_immobiliere",
      univ: "communication",
    };

    try {
      const resized = await resizeFile(imageFile);

      const path = `${folderMap[sectionId]}/${index}_${Date.now()}`; // 👑 PERFECT

      await supabase.storage.from("bauhausSocket").upload(path, resized, {
        upsert: true,
        contentType: resized.type,
        // 👈 critical
      });

      const { data } = supabase.storage
        .from("bauhausSocket")
        .getPublicUrl(path);

      setImagesUrl((prev) => ({
        ...prev,
        [key]: data.publicUrl, // Force cache bust
      }));
      toast.success("Image mise à jour !");
    } catch (err) {
      console.error(err);
      toast.error("Erreur upload");
    } finally {
      setUploading(null);
    }
  };

  const handleDelete = async (url, sectionId, index) => {
    if (!url) return;

    const toastId = toast.loading("Suppression en cours...");

    try {
      const path = getStoragePath(url);

      // Delete the file from the bucket
      const { error } = await supabase.storage
        .from("bauhausSocket") // Make sure this matches your upload bucket
        .remove([path]);

      if (error) {
        throw error;
      }

      // Remove image URL from state only for the deleted image
      setImagesUrl((prev) => ({
        ...prev,
        [`${sectionId}-${index}`]: null, // Better to clear with null for empty state
      }));

      toast.success("Image supprimée avec succès.", { id: toastId });
    } catch (err) {
      console.error("Error deleting image:", err);
      toast.error("Erreur lors de la suppression de l'image.", { id: toastId });
    }
  };

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const toggleAllSections = (open) => {
    setOpenSections(
      Object.fromEntries(
        Object.keys(openSections).map((section) => [section, open])
      )
    );
  };
  console.log(imagesUrl);
  const UploadCard = ({ item, sectionId, index }) => {
    const key = `${sectionId}-${index}`;
    const isUploading = uploading === key;
    const imageUrl = imagesUrl[key];
    console.log(imageUrl);
    const colorClasses = {
      blue: "bg-blue-50 text-blue-600 border-blue-400 text-blue-400",
      emerald:
        "bg-emerald-50 text-emerald-600 border-emerald-400 text-emerald-400",
      purple: "bg-purple-50 text-purple-600 border-purple-400 text-purple-400",
    };

    const color =
      colorClasses[sectionsImages.find((s) => s.id === sectionId).color];

    return (
      <div className="group">
        <div
          className={`bg-white border-2 border-dashed border-slate-200 hover:border-teal-400 rounded-xl p-6 transition-all hover:shadow-lg h-full ${
            isUploading ? "border-teal-400 bg-teal-50" : "  "
          }`}
        >
          <div className="flex items-start justify-between mb-4 ">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${color.split(" ")[0]}  `}>
                <ImageIcon className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
            </div>
          </div>

          {/* ===== PREVIEW ===== */}
          <div className="mb-4">
            <div className="relative aspect-video bg-linear-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden border border-slate-200 group-hover:border-slate-300 transition-colors">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera
                      className={`w-8 h-8 mx-auto mb-1 ${color.split(" ")[3]}`}
                    />
                    <p className="text-xs text-slate-500">Aperçu</p>
                  </div>
                </div>
              )}

              {imageUrl && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          </div>

          <label htmlFor={`photo-${sectionId}-${index}`} className="block">
            <div
              className={`w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all select-none
      ${
        isUploading
          ? "bg-teal-100 text-teal-700 border border-teal-300"
          : imageUrl
          ? "bg-red-50 text-red-600 border border-red-300 hover:bg-red-100 hover:border-red-400"
          : "bg-linear-to-r from-slate-50 to-slate-100 border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-slate-700 hover:text-teal-600"
      }
    `}
            >
              {isUploading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="text-sm font-medium">Téléchargement...</span>
                </>
              ) : imageUrl ? (
                <>
                  <span
                    className="text-sm font-semibold tracking-wide"
                    onClick={(e) => {
                      e.stopPropagation(); // 🔥 KEY LINE
                      handleDelete(imageUrl, sectionId, index);
                    }}
                  >
                    Supprimer l’image
                  </span>
                </>
              ) : (
                <>
                  <ArrowUpCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Choisir un fichier
                  </span>
                </>
              )}
            </div>
          </label>

          <input
            type="file"
            className="hidden"
            disabled={imageUrl}
            id={`photo-${sectionId}-${index}`}
            accept="image/*"
            onChange={(e) => handleUpload(e, sectionId, index)}
          />
        </div>
      </div>
    );
  };

  const SectionAccordion = ({ section }) => {
    const isOpen = openSections[section.id];
    const color = section.color;
    // console.log(color);
    const iconBgColor = `bg-gradient-to-br from-${color}-500 to-${color}-600`;
    const headerBgColor = `bg-linear-to-r from-${color}-50 to-${color}-25 hover:from-${color}-100 hover:to-${color}-50`;
    const iconColor = `text-${color}-600`;

    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          onClick={() => toggleSection(section.id)}
          className={`w-full flex items-center justify-between p-6 ${headerBgColor} transition-all`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center`}
            >
              <section.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-slate-900">
                {section.title}
              </h3>
              <p className="text-slate-600 text-sm">
                • {section.items.length} images
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isOpen ? (
              <ChevronUp className={`w-6 h-6 ${iconColor}`} />
            ) : (
              <ChevronDown className="w-6 h-6 text-slate-500" />
            )}
          </div>
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 pt-0">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {section.items.map((item, index) => (
                <UploadCard
                  key={index}
                  item={item}
                  sectionId={section.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mb-6">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => toggleAllSections(true)}
            className="px-4 py-2 bg-linear-to-r from-teal-600 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 transition-colors flex items-center gap-2"
          >
            <FolderOpen className="w-4 h-4" />
            Tout ouvrir
          </button>
          <button
            onClick={() => toggleAllSections(false)}
            className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            <FolderClosed className="w-4 h-4" />
            Tout fermer
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {sectionsImages.map((section) => (
          <SectionAccordion key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default EditImages;
