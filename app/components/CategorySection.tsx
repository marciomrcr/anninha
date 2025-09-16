'use client';

import React from 'react';
import { Product } from './types';

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  products?: Product[];
  bgColor?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  description,
  products = [],
  bgColor = 'bg-white'
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-pink-600">
                        R$ {product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {product.isNew && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Novo
                      </span>
                    )}
                  </div>
                  <button className="w-full mt-3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;