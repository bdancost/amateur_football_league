'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { HiMenu, HiChevronLeft } from 'react-icons/hi' // Ícones para menu mobile

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  // Fecha o menu quando a tela for maior que 1024px (lg)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuAberto(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header>
      {/* Barra superior */}
      <div className="hidden lg:flex bg-foreground text-white p-2 justify-end items-center pr-20 space-x-8">
        <div className="flex items-center space-x-1">
          <MdOutlineEmail size={25} />
          <Link href="/contact" className="hover:underline">
            Fale Conosco
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaFacebook size={25} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-pink-600"
          >
            <FaInstagram size={25} />
          </Link>
        </div>
      </div>

      {/* Header com Nav */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-center items-center lg:py-4">
          {/* Botão de Menu Hambúrguer */}
          <button
            className="flex items-center ml-auto text-white text-4xl lg:hidden p-5"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <HiMenu />
          </button>

          {/* Logo */}
          <div className="relative lg:absolute lg:right-1/2 lg:transform lg:translate-x-40 text-2xl font-bold w-full flex justify-center items-center">
            <Link href="/">
              <Image
                src="/assets/logo_liga.png"
                alt="Logo"
                width={300}
                height={70}
                className="scale-150"
              />
            </Link>
          </div>

          {/* Overlay escuro apenas no fundo */}
          <div
            className={`fixed inset-0 transition-opacity duration-300 bg-black ${
              menuAberto ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setMenuAberto(false)} // Fecha ao clicar no fundo escuro
          />

          {/* Menu lateral à direita */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-primary text-white shadow-lg z-50 transform transition-transform duration-300 ${
              menuAberto ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Botão de fechar com seta */}
            <button
              className="absolute top-5 left-5 text-white text-4xl"
              onClick={() => setMenuAberto(false)}
            >
              <HiChevronLeft />
            </button>

            {/* Logo dentro do menu */}
            <div className="flex justify-center items-center ">
              <Image
                src="/assets/logo_liga.png"
                alt="Logo"
                width={300}
                height={100}
              />
            </div>

            {/* Conteúdo do menu */}

            <nav className="mt-4">
              <ul className="flex flex-col space-y-4 text-lg font-bold uppercase px-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'A Liga', path: '/liga' },
                  { name: 'TV Liga Jundiaí', path: '/tv' },
                  { name: 'Clubes', path: '/clubes' },
                  { name: 'Competições', path: '/campeonato' },
                  { name: 'Notícias', path: '/notícias' }
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="block p-2 hover:bg-foreground rounded-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Ícones na parte inferior do menu */}
            <div className="absolute bottom-10 left-0 w-full flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <MdOutlineEmail size={25} />
                <Link href="/contact" className="hover:underline">
                  Fale Conosco
                </Link>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  <FaFacebook size={30} />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:text-pink-600"
                >
                  <FaInstagram size={30} />
                </Link>
              </div>
            </div>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex flex-col items-center mt-8 ml-40">
            <nav>
              <ul className="flex space-x-8 text-lg uppercase font-bold">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'A Liga', path: '/liga' },
                  { name: 'TV Liga Jundiaí', path: '/tv' },
                  { name: 'Clubes', path: '/clubes' },
                  { name: 'Competições', path: '/campeonato' },
                  { name: 'Notícias', path: '/notícias' }
                ].map((item) => (
                  <li key={item.path} className="relative group">
                    <Link href={item.path} className="relative p-2">
                      {item.name}
                      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 ease-out origin-center group-hover:w-full group-hover:left-0"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="text-3xl uppercase font-bold text-center mt-4">
              Liga de Futebol Amador Jundiaiense
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
