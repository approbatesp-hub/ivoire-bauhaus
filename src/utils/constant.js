// PHOTOS IMMO
import Photo1 from "../assets/galerie/photo1.png";
import Photo2 from "../assets/galerie/photo2.png";
import Photo3 from "../assets/galerie/photo3.png";
import Photo4 from "../assets/galerie/photo4.png";
import Photo5 from "../assets/galerie/photo5.png";

// PHOTOS CAMION
import photoCam1 from "../assets/camion/camion.jpeg";
import photoCam2 from "../assets/camion/camion1.jpeg";
import photoCam3 from "../assets/camion/camion2.jpg";
import photoCam4 from "../assets/camion/camion3.jpg";
import photoCam5 from "../assets/camion/camion4.jpg";

// PHOTOS SUPPORTS

import photoSupp4 from "../assets/panneaux/support4.png";
import photoSupp6 from "../assets/panneaux/support6.png";
import photoSupp7 from "../assets/panneaux/support7.png";
import photoSupp8 from "../assets/panneaux/support8.png";
import photoSupp9 from "../assets/panneaux/support9.png";
import photoSupp10 from "../assets/panneaux/support10.png";

// UNIVERSITES
import photoUniv1 from "../assets/universite/univ1.jpeg";
import photoUniv2 from "../assets/universite/univ2.jpeg";
import photoUniv3 from "../assets/universite/univ3.jpeg";
import photoUniv4 from "../assets/universite/univ4.jpeg";
import {
  Building2,
  FileText,
  Home,
  LayoutGrid,
  Phone,
  Truck,
} from "lucide-react";
import toast from "react-hot-toast";

export const galleryImages = [
  { url: Photo1, alt: "Photo 1" },
  { url: Photo2, alt: "Photo 2" },
  { url: Photo3, alt: "Photo 3" },
  { url: Photo4, alt: "Photo 4" },
  { url: Photo5, alt: "Photo 5" },
];
export const galleryImages2 = [
  { url: photoCam1, alt: "Photo 1" },
  { url: photoCam2, alt: "Photo 2" },
  { url: photoCam3, alt: "Photo 3" },
  { url: photoCam4, alt: "Photo 4" },
  { url: photoCam5, alt: "Photo 5" },
];

export const galleryImages3 = [
  { url: photoSupp4, alt: "Photo 4" },
  { url: photoSupp6, alt: "Photo 6" },
  { url: photoSupp7, alt: "Photo 7" },
  { url: photoSupp8, alt: "Photo 8" },
  { url: photoSupp9, alt: "Photo 9" },
  { url: photoSupp10, alt: "Photo 10" },
];

export const galleryImages4 = [
  { url: photoUniv1, alt: "Photo 1" },
  { url: photoUniv2, alt: "Photo 2" },
  { url: photoUniv3, alt: "Photo 3" },
  { url: photoUniv4, alt: "Photo 4" },
];

export const sections = [
  {
    id: "promotion",
    title: "Promotion Immobilière",
    icon: Building2,
    color: "emerald",
    fields: [
      { id: "mainTitle", label: "Titre Principal", type: "text" },
      { id: "descriptionOne", label: "Description Un", type: "textarea" },
      { id: "descriptionTwo", label: "Description Deux", type: "textarea" },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    icon: Truck,
    color: "purple",
    fields: [
      { id: "mainTitle", label: "Titre Principal", type: "text" },
      { id: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    id: "about",
    title: "À Propos",
    icon: FileText,
    color: "blue",
    fields: [
      { id: "mainTitle", label: "Titre Principal", type: "text" },
      { id: "descriptionOne", label: "Description Un", type: "textarea" },
      { id: "descriptionTwo", label: "Description Deux", type: "textarea" },
    ],
  },
];

export const validationInput = (state, id) => {
  if (id === "promotion") {
    if (
      !state[id].mainTitle ||
      !state[id].descriptionOne ||
      !state[id].descriptionTwo ||
      !state[id].keyPoints[0].title ||
      !state[id].keyPoints[1].title ||
      !state[id].keyPoints[2].title ||
      !state[id].keyPoints[0].description ||
      !state[id].keyPoints[1].description ||
      !state[id].keyPoints[2].description
    ) {
      return toast.error(`Champs manquants section PROMOTION IMMOBILIÈRE`);
    }
  }

  if (id === "communication") {
    if (
      !state[id].mainTitle ||
      !state[id].description ||
      !state[id].keyPoints[0] ||
      !state[id].keyPoints[1] ||
      !state[id].keyPoints[2]
    ) {
      return toast.error(`Champs manquants section COMMUNICATION `);
    }
  }
  if (id === "about") {
    if (
      !state[id].mainTitle ||
      !state[id].descriptionOne ||
      !state[id].descriptionTwo
    ) {
      return toast.error(`Champs manquants section A PROPOS`);
    }
  }
  return true;
};

export const sectionsImages = [
  {
    id: "landing",
    title: "Page d'Accueil",
    icon: Home,
    color: "blue",
    items: [
      { title: "Photo couverture 1" },
      { title: "Photo couverture 2" },
      { title: "Photo BTP" },
      { title: "Photo Communication" },
    ],
  },
  {
    id: "promotion",
    title: "Promotion Immobilière",
    icon: Building2,
    color: "emerald",
    items: [
      { title: "Vue Principale" },
      { title: "Vue 2" },
      { title: "Vue 3" },
      { title: "Vue 4" },
      { title: "Vue 5" },
    ],
  },
  {
    id: "univ",
    title: "Communication & Pub",
    icon: Truck,
    color: "purple",
    items: [
      { title: "Image 1" },
      { title: "Image 2" },
      { title: "Image 3" },
      { title: "Image 4" },
    ],
  },
];
