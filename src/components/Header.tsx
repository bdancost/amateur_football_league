'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { HiMenu, HiChevronLeft } from 'react-icons/hi' // Ícones para menu mobile

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

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

          {/* Botão de Menu Hambúrguer */}
          <button
            className="flex items-center ml-auto text-white text-4xl lg:hidden p-5"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <HiChevronLeft /> : <HiMenu />}
          </button>

          {/* Menu Mobile (modificado) */}
          <div
            className={`fixed top-0 left-0 h-full w-3/4 bg-primary text-white flex flex-col items-center transform transition-transform duration-300 ease-in-out
            ${menuAberto ? 'translate-x-0' : '-translate-x-full'}`}
          >
            {/* Logo no topo do menu */}
            <div className="w-full flex justify-center items-center p-5">
              <Image
                src="/assets/logo_liga.png"
                alt="Logo"
                width={300}
                height={70}
                className="scale-125"
              />
            </div>

            {/* Links do menu */}
            <nav className="flex flex-col items-center space-y-6 mt-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'A Liga', path: '/liga' },
                { name: 'TV Liga Jundiaí', path: '/tv' },
                { name: 'Clubes', path: '/clubes' },
                { name: 'Competições', path: '/campeonato' },
                { name: 'Notícias', path: '/notícias' },
                { name: 'Fale Conosco', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-2xl uppercase font-bold"
                  onClick={() => setMenuAberto(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Ícones das Redes Sociais */}
            <div className="flex space-x-4 mt-8">
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

            {/* Botão para Fechar o Menu */}
            <button
              className="text-white text-4xl absolute top-5 right-5"
              onClick={() => setMenuAberto(false)}
            >
              <HiChevronLeft />
            </button>
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
