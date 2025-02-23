import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Header = () => {
  return (
    <header>
      {/* Barra superior */}
      <div className="bg-foreground text-white p-2 flex justify-between items-center">
        <div>
          <MdOutlineEmail size={25} />
          <Link href="/contact">Fale Conozco</Link>
        </div>
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
          passHref
          target="_blank"
          className="hover:text-pink-600"
        >
          <FaInstagram size={25} />
        </Link>
      </div>

      {/* Header com Nav */}
      <div className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Logo</Link>
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
