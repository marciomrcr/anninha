"use client";

import React from "react";
import Image from "next/image";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  description: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name} - ${product.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5591980784382?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="relative overflow-hidden h-64 bg-gradient-to-br from-pink-100 to-purple-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={false}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Promoção
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-pink-600">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Tamanhos disponíveis:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleWhatsAppContact}
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors font-semibold"
        >
          Comprar via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;