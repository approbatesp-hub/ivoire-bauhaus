import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router";
import { getAllImages, getAllTexts } from "../utils/hooks";
import Banner from "../components/LandingPage/Banner";
import Btp from "../components/LandingPage/Btp";
import Camion from "../components/LandingPage/Camion";
import Confiance from "../components/LandingPage/Confiance";
import QuiSOmmesNous from "../components/LandingPage/QuiSOmmesNous";
import { useDispatch } from "react-redux";
import { setImages, setTexts } from "../redux/bauhaus";
import { useEffect } from "react";
import useSEO from "../utils/useSEO";

const Home = () => {
  useSEO({
    title:
      "Ivoire Bauhaus | Promotion Immobilière & Communication en Côte d'Ivoire",
    description:
      "Ivoire Bauhaus est un groupe multiservices en Côte d'Ivoire : promotion immobilière, vente de terrains à Assinie, régie publicitaire et affichage LED à Abidjan.",
    keywords:
      "Ivoire Bauhaus, promotion immobilière Côte d'Ivoire, immobilier Abidjan, terrain Assinie, Ivoire Gardens, régie publicitaire, affichage LED, investissement immobilier",
    path: "/",
  });
  // 1. Get the data fetched by the React Router Loader
  const loaderData = useLoaderData();
  const dispatch = useDispatch();
  // 2. Sync it with useQuery using initialData
  const { data } = useQuery({
    queryKey: ["landingData"],
    queryFn: async () => {
      const [images, texts] = await Promise.all([
        getAllImages(),
        getAllTexts(),
      ]);
      return { images, texts };
    },
    initialData: loaderData,
  });

  // 3. Filter images (data is guaranteed to exist because of initialData)
  const imageHomePage = data.images.filter(
    (img) => img.folder === "page_accueil",
  );

  useEffect(() => {
    if (data) {
      dispatch(setImages(data.images));
      dispatch(setTexts(data.texts));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Banner homePageOne={imageHomePage[0]} homePageTwo={imageHomePage[1]} />
      <Btp homePageThree={imageHomePage[2]} texts={data.texts[0]?.promotion} />
      <Camion
        homePageFour={imageHomePage[3]}
        texts={data.texts[0]?.communication}
      />
      <Confiance />
      <QuiSOmmesNous texts={data.texts[0]?.about} />
    </div>
  );
};

export default Home;
