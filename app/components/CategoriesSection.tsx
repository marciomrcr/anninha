"use client";

import React from "react";
import Image from "next/image";
import ProductShowcase from "./ProductShowcase";
import { productsData } from "./ProductsData";

const categories = [
  {
    id: "macacao",
    name: "Macacão",
    image: "/IMG-20250916-WA0014.jpg",
    description: "Confortáveis e estilosos para o dia a dia"
  },
  {
    id: "conjuntos", 
    name: "Conjuntos",
    image: "/IMG-20250916-WA0017.jpg",
    description: "Combinações perfeitas para todas as ocasiões"
  },
  {
    id: "pijamas",
    name: "Pijamas", 
    image: "/IMG-20250916-WA0022.jpg",
    description: "Macios e aconchegantes para noites tranquilas"
  },
  {
    id: "calcinhas",
    name: "Calcinhas",
    image: "/IMG-20250916-WA0024.jpg", 
    description: "Delicadas e confortáveis para o dia a dia"
  },
  {
    id: "vestidos-festa",
    name: "Vestidos de Festa",
    image: "/IMG-20250916-WA0027.jpg",
    description: "Elegantes para ocasiões especiais"
  },
  {
    id: "vestidos-casual", 
    name: "Vestidos Casuais",
    image: "/IMG-20250916-WA0030.jpg",
    description: "Estilosos e práticos para o cotidiano"
  }
];

const CategoriesSection: React.FC = () => {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Seção de Navegação das Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossas Categorias
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra nossa coleção completa de roupas infantis, cuidadosamente selecionadas para o conforto e estilo das pequenas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                    quality={85}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLDivElement;
                      if (fallback) fallback.style.display = 'flex';
                      console.error(`Erro ao carregar imagem: ${category.image}`);
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-4xl text-pink-400">🛍️</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seções de Produtos por Categoria */}
      {categories.map((category) => (
        <ProductShowcase
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
          products={productsData[category.id] || []}
        />
      ))}
    </>
  );
};

export default CategoriesSection;
