'use client'

import React from 'react'
import Link from 'next/link'
import { FaYoutube, FaChevronRight } from 'react-icons/fa'

const TVLigaJundiai: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">TV Liga Jundiaí</h1>
      <div className="border-b-4 border-yellow-500 w-1/2 mb-6"></div>

      {/* 📡 Transmissão ao Vivo */}
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">🔴 AO VIVO</h2>
        <p className="text-gray-700 mb-2">
          Acompanhe a transmissão ao vivo e não perca nenhum lance!
        </p>
        <div className="relative w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/live_stream?channel=UC4OxaN6PUFNysShb28rWi1A"
            title="TV Liga Jundiaí - Ao Vivo"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 🚀 Benefícios de se inscrever */}
      <div className="w-full max-w-4xl mt-8 text-center bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Por que acompanhar a TV Liga Jundiaí?
        </h2>
        <ul className="text-gray-700 text-lg space-y-2">
          <li>✅ Transmissões exclusivas e ao vivo</li>
          <li>✅ Cobertura completa dos jogos e eventos esportivos</li>
          <li>✅ Entrevistas e análises pós-jogo</li>
          <li>✅ Notificações para não perder nenhuma partida</li>
        </ul>
      </div>

      {/* 🔴 Inscreva-se no Canal */}
      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-800 mb-3">
          Gostou da transmissão? Apoie o canal se inscrevendo!
        </p>
        <Link
          href="https://www.youtube.com/@TVLigaJundiai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition text-lg"
        >
          <FaYoutube size={25} /> Inscreva-se no Canal
        </Link>
      </div>

      {/* 🔗 Explore mais no site */}
      <div className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Explore mais conteúdos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/noticias"
            className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md transition"
          >
            <FaChevronRight className="text-blue-900" />{' '}
            <span className="ml-2 text-lg font-medium">Últimas Notícias</span>
          </Link>
          <Link
            href="/competicoes"
            className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md transition"
          >
            <FaChevronRight className="text-blue-900" />{' '}
            <span className="ml-2 text-lg font-medium">
              Calendário de Jogos
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TVLigaJundiai
