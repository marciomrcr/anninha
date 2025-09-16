import { ProductItem } from './types';

interface BestSellersSectionProps {
  className?: string;
  products?: ProductItem[];
}

const defaultProducts: ProductItem[] = [
  {
    id: '1',
    name: 'Conjunto Aventureiro',
    description: 'Camiseta + bermuda em algodão premium',
    price: 89.90,
    emoji: '👕',
    bgColor: 'bg-gradient-to-br from-pink-200 to-purple-200'
  },
  {
    id: '2',
    name: 'Vestido Princesa',
    description: 'Vestido rodado com detalhes delicados',
    price: 129.90,
    emoji: '👗',
    bgColor: 'bg-gradient-to-br from-blue-200 to-green-200'
  },
  {
    id: '3',
    name: 'Pijama dos Sonhos',
    description: 'Conjunto ultra macio para noites perfeitas',
    price: 69.90,
    emoji: '🌙',
    bgColor: 'bg-gradient-to-br from-yellow-200 to-orange-200'
  }
];

export default function BestSellersSection({ 
  className = "", 
  products = defaultProducts 
}: BestSellersSectionProps) {
  return (
    <section className={`py-16 bg-gradient-to-r from-yellow-50 to-orange-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            💖 Conjuntos Mais Amados pelas Famílias
          </h2>
          <p className="text-lg text-gray-600">
            Os favoritos dos pequenos e a escolha certeira dos pais
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${product.bgColor} h-48 rounded-xl mb-4 flex items-center justify-center`}>
                <span className="text-6xl">{product.emoji}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-500">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Ver Todos os Mais Vendidos 🔥
          </button>
        </div>
      </div>
    </section>
  );
}