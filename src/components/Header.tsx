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
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
