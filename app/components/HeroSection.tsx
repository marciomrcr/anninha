"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const HeroSection: React.FC = () => {
  const scrollToCategories = () => {
    const element = document.getElementById("categorias");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Moda Infantil Feminina
          <span className="block text-pink-300">com Amor e Carinho</span>
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Descubra nossa coleção especial de roupas para meninas, pensada com
          todo cuidado para o conforto e estilo das pequenas princesas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToCategories}
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Ver Coleção
          </button>
          <button
            onClick={() => window.open("https://wa.me/5591980784382", "_blank")}
            className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            Fale Conosco
          </button>
        </div>
        <div className="mt-12 text-8xl">👧✨</div>
      </div>
    </section>
  );
};

export default HeroSection;
