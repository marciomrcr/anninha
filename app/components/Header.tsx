"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MenuCategory } from "./types";

interface HeaderProps {
  categories?: MenuCategory[];
}

const defaultCategories: MenuCategory[] = [
  { id: "1", name: "Macacão", anchor: "macacao" },
  { id: "2", name: "Conjuntos", anchor: "conjuntos" },
  { id: "3", name: "Pijamas", anchor: "pijamas" },
  { id: "4", name: "Calcinhas", anchor: "calcinhas" },
  {
    id: "5",
    name: "Vestidos",
    submenu: [
      { id: "5a", name: "Vestidos Festa", anchor: "vestidos-festa" },
      { id: "5b", name: "Vestidos Dia-a-dia", anchor: "vestidos-casual" },
    ],
  },
];

const Header: React.FC<HeaderProps> = ({ categories = defaultCategories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    }
  };

  const toggleSubmenu = (categoryId: string) => {
    setOpenSubmenu(openSubmenu === categoryId ? null : categoryId);
  };

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isMenuOpen);
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    console.log("New menu state:", newMenuState);

    // Fechar submenu quando o menu principal for fechado
    if (!newMenuState) {
      setOpenSubmenu(null);
    }
  };

  // Bloquear scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-pink-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo e Título */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1 sm:flex-none">
            <div className="flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="Logo Anninha"
                width={60}
                height={30}
                className="sm:w-20 sm:h-10 lg:w-24 lg:h-20 p-1.5"
                priority
              />
            </div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600 truncate">
              <span className="hidden sm:inline">Anninha</span>
              <span className="sm:hidden">Anninha</span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-pink-50"
            >
              Início
            </button>
            {categories.map((category) => (
              <div key={category.id} className="relative">
                {category.submenu ? (
                  <div className="relative group">
                    <button className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-pink-50 whitespace-nowrap flex items-center">
                      {category.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Submenu Dropdown */}
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {category.submenu.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => scrollToSection(subItem.anchor)}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      category.anchor && scrollToSection(category.anchor)
                    }
                    className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-pink-50 whitespace-nowrap"
                  >
                    {category.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Menu Tablet (md-lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 text-sm px-1"
            >
              Início
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => scrollToSection("categorias")}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 text-sm px-1"
            >
              Categorias
            </button>
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded-md hover:bg-gray-100 transition-colors duration-200 relative z-[60]"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Overlay do Menu Mobile */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => {
              setIsMenuOpen(false);
              setOpenSubmenu(null);
            }}
            aria-hidden="true"
          />
        )}

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed left-0 right-0 top-16 sm:top-20 bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "z-50 translate-y-0 opacity-100"
              : "z-[-1] -translate-y-full opacity-0"
          }`}
        >
          <nav className="px-4 py-6 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200 py-3 px-4 rounded-lg font-medium"
              >
                🏠 Início
              </button>
              {categories.map((category) => (
                <div key={category.id}>
                  {category.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(category.id)}
                        className="w-full text-left text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
                      >
                        <span>👗 {category.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openSubmenu === category.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSubmenu === category.id && (
                        <div className="ml-4 mt-1 space-y-1">
                          {category.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => scrollToSection(subItem.anchor)}
                              className="w-full text-left text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200 py-2 px-4 rounded-lg text-sm"
                            >
                              • {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(category.anchor || "")}
                      className="w-full text-left text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200 py-3 px-4 rounded-lg font-medium"
                    >
                      👗 {category.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
