import { getAllImages, getAllTexts } from "./hooks";
import { queryClient } from "./query";

export async function homeLoader() {
  // Check cache FIRST
  const cachedImages = queryClient.getQueryData(["allImages"]);
  const cachedTexts = queryClient.getQueryData(["allTexts"]);

  if (cachedImages && cachedTexts) {
    // 💥 Instant return (no loading flash)
    return { images: cachedImages, texts: cachedTexts };
  }

  // Only fetch on first ever visit
  const [images, texts] = await Promise.all([getAllImages(), getAllTexts()]);

  // Put in cache
  queryClient.setQueryData(["allImages"], images);
  queryClient.setQueryData(["allTexts"], texts);

  return { images, texts };
}
