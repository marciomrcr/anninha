import { TrustItem } from './types';

interface TrustSectionProps {
  className?: string;
  trustItems?: TrustItem[];
}

const defaultTrustItems: TrustItem[] = [
  {
    id: '1',
    title: 'Qualidade Garantida',
    description: 'Tecidos premium, costuras reforçadas e durabilidade testada pelos pequenos mais ativos',
    emoji: '✅',
    bgColor: 'bg-green-100'
  },
  {
    id: '2',
    title: 'Entrega Rápida',
    description: 'Receba em casa com segurança e agilidade. Frete grátis acima de R$ 150',
    emoji: '🚚',
    bgColor: 'bg-blue-100'
  },
  {
    id: '3',
    title: 'Preço Justo',
    description: 'Moda infantil de qualidade com preços que cabem no orçamento da família',
    emoji: '💝',
    bgColor: 'bg-pink-100'
  }
];

export default function TrustSection({ 
  className = "", 
  trustItems = defaultTrustItems 
}: TrustSectionProps) {
  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Por que as Famílias Confiam na PequenaModa?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item) => (
            <div key={item.id} className="text-center">
              <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}