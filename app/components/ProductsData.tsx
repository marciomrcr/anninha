import { Product } from "./ProductCard";

export const productsData: Record<string, Product[]> = {
  macacao: [
    {
      id: "mac-001",
      name: "Macacão Floral Rosa",
      image: "/IMG-20250916-WA0014.jpg",
      price: "R$ 45,90",
      originalPrice: "R$ 59,90",
      description: "Macacão confortável com estampa floral delicada, perfeito para o dia a dia das pequenas.",
      sizes: ["2", "4", "6", "8", "10"]
    },
    {
      id: "mac-002", 
      name: "Macacão Listrado",
      image: "/IMG-20250916-WA0015.jpg",
      price: "R$ 42,90",
      description: "Macacão listrado em algodão macio, ideal para brincadeiras e passeios.",
      sizes: ["2", "4", "6", "8"]
    },
    {
      id: "mac-003",
      name: "Macacão Unicórnio",
      image: "/IMG-20250916-WA0016.jpg", 
      price: "R$ 48,90",
      description: "Macacão temático com estampa de unicórnio, para meninas que amam fantasia.",
      sizes: ["4", "6", "8", "10", "12"]
    }
  ],
  
  conjuntos: [
    {
      id: "conj-001",
      name: "Conjunto Borboleta",
      image: "/IMG-20250916-WA0017.jpg",
      price: "R$ 38,90",
      originalPrice: "R$ 49,90", 
      description: "Conjunto blusa e short com estampa de borboletas coloridas.",
      sizes: ["2", "4", "6", "8"]
    },
    {
      id: "conj-002",
      name: "Conjunto Verão",
      image: "/IMG-20250916-WA0018.jpg",
      price: "R$ 35,90",
      description: "Conjunto fresquinho para os dias quentes, em tecido leve e respirável.",
      sizes: ["2", "4", "6", "8", "10"]
    },
    {
      id: "conj-003",
      name: "Conjunto Princesa",
      image: "/IMG-20250916-WA0019.jpg",
      price: "R$ 44,90",
      description: "Conjunto elegante com detalhes em renda, perfeito para ocasiões especiais.",
      sizes: ["4", "6", "8", "10"]
    }
  ],

  pijamas: [
    {
      id: "pij-001", 
      name: "Pijama Estrelinhas",
      image: "/IMG-20250916-WA0022.jpg",
      price: "R$ 32,90",
      description: "Pijama macio com estampa de estrelas, para noites de sono tranquilo.",
      sizes: ["2", "4", "6", "8", "10"]
    },
    {
      id: "pij-002",
      name: "Pijama Gatinho",
      image: "/IMG-20250916-WA0023.jpg", 
      price: "R$ 36,90",
      originalPrice: "R$ 44,90",
      description: "Pijama fofo com estampa de gatinhos, em algodão super macio.",
      sizes: ["2", "4", "6", "8"]
    }
  ],

  calcinhas: [
    {
      id: "calc-001",
      name: "Kit Calcinhas Coloridas",
      image: "/IMG-20250916-WA0024.jpg",
      price: "R$ 24,90",
      description: "Kit com 3 calcinhas em cores variadas, confortáveis e delicadas.",
      sizes: ["2", "4", "6", "8", "10"]
    }
  ],

  "vestidos-festa": [
    {
      id: "vest-fest-001",
      name: "Vestido Princesa Rosa",
      image: "/IMG-20250916-WA0027.jpg",
      price: "R$ 89,90",
      originalPrice: "R$ 119,90",
      description: "Vestido elegante com tule e brilhos, perfeito para festas e ocasiões especiais.",
      sizes: ["4", "6", "8", "10", "12"]
    },
    {
      id: "vest-fest-002", 
      name: "Vestido Festa Azul",
      image: "/IMG-20250916-WA0028.jpg",
      price: "R$ 94,90",
      description: "Vestido de festa em azul com detalhes bordados, para momentos especiais.",
      sizes: ["4", "6", "8", "10"]
    }
  ],

  "vestidos-casual": [
    {
      id: "vest-cas-001",
      name: "Vestido Floral Casual",
      image: "/IMG-20250916-WA0030.jpg", 
      price: "R$ 39,90",
      description: "Vestido casual com estampa floral, perfeito para o dia a dia.",
      sizes: ["2", "4", "6", "8", "10"]
    },
    {
      id: "vest-cas-002",
      name: "Vestido Listrado",
      image: "/IMG-20250916-WA0031.jpg",
      price: "R$ 42,90",
      originalPrice: "R$ 52,90", 
      description: "Vestido listrado em algodão, confortável e estiloso para qualquer ocasião.",
      sizes: ["2", "4", "6", "8"]
    },
    {
      id: "vest-cas-003",
      name: "Vestido Poá",
      image: "/IMG-20250916-WA0032.jpg",
      price: "R$ 37,90",
      description: "Vestido com estampa de poá clássica, charme e elegância para as pequenas.",
      sizes: ["4", "6", "8", "10", "12"]
    },
    {
      id: "vest-cas-004",
      name: "Vestido Verão",
      image: "/IMG-20250916-WA0033.jpg",
      price: "R$ 34,90",
      description: "Vestido leve e fresco, ideal para os dias quentes de verão.",
      sizes: ["2", "4", "6", "8"]
    }
  ]
};