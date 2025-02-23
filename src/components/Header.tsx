import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Header = () => {
  return (
    <header>
      {/* Barra superior */}
      <div className="bg-foreground text-white p-2 flex justify-end items-center pr-20 space-x-8">
        <div className="flex items-center space-x-1">
          <MdOutlineEmail size={25} />
          <Link href="/contact" className="hover:underline">
            Fale Conozco
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
      <div className="bg-primary text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <Image
                src="/assets/logo_liga.png"
                alt="Logo"
                width={350}
                height={100}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Navegação */}
          <nav>
            <ul className="flex space-x-8 text-lg uppercase font-bold">
              {[
                { name: 'Home', path: '/' },
                { name: 'A Liga', path: '/liga' },
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
        </div>
      </div>
    </header>
  )
}

export default Header
