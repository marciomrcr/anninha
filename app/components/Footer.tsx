"use client";

import React from "react";
import { FooterSection, SocialLink } from "./types";

interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
}

const defaultSections: FooterSection[] = [
  {
    id: "1",
    title: "Categorias",
    links: [
      { name: "Macacão", href: "#macacao" },
      { name: "Conjuntos", href: "#conjuntos" },
      { name: "Pijamas", href: "#pijamas" },
      { name: "Calcinhas", href: "#calcinhas" },
      { name: "Vestidos Festa", href: "#vestidos-festa" },
      { name: "Vestidos Casuais", href: "#vestidos-casual" },
    ],
  },
  {
    id: "2",
    title: "Atendimento",
    links: [
      { name: "Fale Conosco", href: "#contato" },
      { name: "WhatsApp", href: "https://wa.me/5591980784382" },
      { name: "Trocas e Devoluções", href: "#" },
      { name: "Guia de Tamanhos", href: "#" },
      { name: "Perguntas Frequentes", href: "#" },
    ],
  },
  {
    id: "3",
    title: "Sobre Nós",
    links: [
      { name: "Nossa História", href: "#" },
      { name: "Qualidade", href: "#" },
      { name: "Sustentabilidade", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/anninhalojainfantil",
    icon: "📷",
  },
  { name: "Facebook", href: "https://facebook.com/pequenamoda", icon: "📘" },
  { name: "WhatsApp", href: "https://wa.me/5591980784382", icon: "💬" },
  { name: "Pinterest", href: "https://pinterest.com/pequenamoda", icon: "📌" },
];

const Footer: React.FC<FooterProps> = ({
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
}) => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer id="contato" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              PequenaModa
            </h3>
            <p className="text-gray-300 mb-4">
              Moda infantil feminina com amor e carinho. Roupas pensadas
              especialmente para o conforto e estilo das pequenas princesas.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => scrollToSection(social.href)}
                  className="text-2xl hover:scale-110 transition-transform"
                  title={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Seções do Footer */}
          {sections.map((section) => (
            <div key={section.id}>
              <h4 className="text-lg font-semibold mb-4 text-pink-400">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Anninha Loja Infantil. Todos os direitos reservados. Feito
            com 💖 para as pequenas princesas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
