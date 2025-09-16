"use client";

import React from "react";
import ProductCard, { Product } from "./ProductCard";

interface ProductShowcaseProps {
  categoryId: string;
  categoryName: string;
  products: Product[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  categoryId,
  categoryName,
  products,
}) => {
  return (
    <section id={categoryId} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {categoryName}
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Em breve novos produtos desta categoria!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;