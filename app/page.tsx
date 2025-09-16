import BestSellersSection from "./components/BestSellersSection";
import CategoriesSection from "./components/CategoriesSection";
// import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />

      {/* Seções específicas para cada categoria */}
      {/* <CategorySection
        id="macacao"
        title="Macacões"
        description="Macacões confortáveis e estilosos para o dia a dia das pequenas"
        bgColor="bg-pink-50"
      /> */}

      {/* <CategorySection
        id="conjuntos"
        title="Conjuntos"
        description="Conjuntos coordenados para looks completos e harmoniosos"
        bgColor="bg-white"
      /> */}
      {/* 
      <CategorySection
        id="pijamas"
        title="Pijamas"
        description="Pijamas macios e delicados para noites de sono tranquilo"
        bgColor="bg-purple-50"
      /> */}

      {/* <CategorySection
        id="calcinhas"
        title="Calcinhas"
        description="Calcinhas confortáveis e delicadas para o dia a dia"
        bgColor="bg-white"
      /> */}
      {/* 
      <CategorySection
        id="vestidos-festa"
        title="Vestidos para Festa"
        description="Vestidos elegantes para ocasiões especiais e momentos únicos"
        bgColor="bg-pink-50"
      /> */}

      {/* <CategorySection
        id="vestidos-casual"
        title="Vestidos Casuais"
        description="Vestidos confortáveis para o dia a dia das pequenas princesas"
        bgColor="bg-white"
      /> */}

      <BestSellersSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
