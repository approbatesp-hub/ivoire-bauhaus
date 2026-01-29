import Resizer from "react-image-file-resizer";
import supabase from "../config/supabse-client";
import toast from "react-hot-toast";
export const resizeFile = (file) =>
  new Promise((resolve, reject) => {
    const outputFormat = file.type === "image/png" ? "PNG" : "JPEG";
    const outputMimeType =
      file.type === "image/png" ? "image/png" : "image/jpeg";

    Resizer.imageFileResizer(
      file,
      500,
      500,
      outputFormat,
      90,
      0,
      (uri) => {
        fetch(uri)
          .then((res) => res.blob())
          .then((blob) => {
            const resizedFile = new File([blob], file.name, {
              type: outputMimeType,
              lastModified: Date.now(),
            });
            resolve(resizedFile);
          })
          .catch(reject);
      },
      "base64",
      500,
      500
    );
  });

// ____ FONCTION POUR OBTENIR LE CHEMIN D'ACCÈS D'UNE IMAGE DANS LE STORAGE
export function getStoragePath(publicUrl) {
  const url = new URL(publicUrl);
  return decodeURIComponent(url.pathname.split("/bauhausSocket/")[1]);
}

export const getImagesByFolder = async (folder) => {
  let all = [];
  let offset = 0;

  while (true) {
    const { data, error } = await supabase.storage
      .from("bauhausSocket")
      .list(folder, { limit: 100, offset });

    if (error) throw error;
    if (!data.length) break;

    all.push(...data);
    offset += 100;
  }

  return all
    .filter((f) => f.name !== ".emptyFolderPlaceholder")
    .map((img) => ({
      index: Number(img.name), // slot index
      folder,
      publicUrl: supabase.storage
        .from("bauhausSocket")
        .getPublicUrl(`${folder}/${img.name}`).data.publicUrl,
    }))
    .sort((a, b) => a.index - b.index);
};

export const getAllImages = async () => {
  const folders = ["page_accueil", "promotion_immobiliere", "communication"];
  let all = [];

  for (const folder of folders) {
    const images = await getImagesByFolder(folder);
    all.push(...images);
  }

  return all;
};

export const getAllTexts = async () => {
  try {
    const { data, error } = await supabase
      .from("TextBauhaus")
      .select("*")
      .eq("id", 1);
    if (error) throw error;

    return data;
  } catch (error) {
    toast.error(error.message);
    return [];
  }
};
