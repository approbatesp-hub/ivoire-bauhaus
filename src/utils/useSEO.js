import { useEffect } from "react";

const BASE_URL = "https://www.ivoirebauhaus.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;
const SITE_NAME = "Ivoire Bauhaus";

const defaults = {
  title:
    "Ivoire Bauhaus | Promotion Immobilière & Communication en Côte d'Ivoire",
  description:
    "Ivoire Bauhaus accompagne particuliers et entreprises en Côte d’Ivoire à travers la promotion immobilière et des solutions de communication publicitaire innovantes, dont l’affichage LED.",
  keywords:
    "Ivoire Bauhaus, promotion immobilière Côte d'Ivoire, immobilier Abidjan, Ivoire Gardens, régie publicitaire Abidjan, affichage LED, camion publicitaire",
  image: DEFAULT_IMAGE,
  url: BASE_URL,
};

function setMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export default function useSEO({
  title,
  description,
  keywords,
  image,
  path = "/",
} = {}) {
  useEffect(() => {
    const t = title || defaults.title;
    const d = description || defaults.description;
    const k = keywords || defaults.keywords;
    const img = image || defaults.image;
    const url = `${BASE_URL}${path}`;

    document.title = t;

    setMeta("name", "description", d);
    setMeta("name", "keywords", k);

    setMeta("property", "og:title", t);
    setMeta("property", "og:description", d);
    setMeta("property", "og:image", img);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", "fr_CI");

    setMeta("name", "twitter:title", t);
    setMeta("name", "twitter:description", d);
    setMeta("name", "twitter:image", img);
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:card", "summary_large_image");

    setCanonical(url);
  }, [title, description, keywords, image, path]);
}
