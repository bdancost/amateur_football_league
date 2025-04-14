'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MoreVertical, ArrowLeft } from 'lucide-react'
import { clubes } from '@/lib/clubes'

const Clubes = () => {
  const [selectedClub, setSelectedClub] = useState<string>('02') // Divisão padrão é 1° Divisão
  const [isMobileView, setIsMobileView] = useState(false)

  return (
    <div className="container mx-auto p-8">
      <Image
        src="/assets/img_clubes.png"
        alt="Logo Clubes"
        width={1080}
        height={720}
        className="rounded-lg mx-auto"
      />

      <div className="flex items-start gap-8 mt-10">
        {/* Menu lateral fixo */}
        <aside className={`w-1/4 self-start hidden md:block`}>
          <nav className="space-y-6">
            {clubes.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedClub(section.id)
                }}
                className={`block rounded-lg text-md font-semibold border-b-2 pb-6 mt-4 uppercase ${
                  selectedClub === section.id
                    ? 'text-foreground'
                    : 'text-gray-800'
                } hover:bg-gray-100`}
              >
                <div className="flex items-center">
                  <MoreVertical
                    className="ml-2 text-foreground cursor-pointer"
                    size={24}
                  />
                  {section.title}
                </div>
              </a>
            ))}
          </nav>
        </aside>

        {/* Menu principal (MOBILE) */}
        <div className="md:hidden w-full">
          {!isMobileView ? (
            <div className="flex flex-col gap-4">
              {clubes.map((section) => (
                <button
                  key={section.id}
                  className="block w-full rounded-lg text-black hover:bg-gray-300 mb-2 font-semibold border-b-2 pb-6 mt-4"
                  onClick={() => {
                    setSelectedClub(section.id)
                    setIsMobileView(true)
                  }}
                >
                  <div className="flex items-center">
                    <MoreVertical
                      className="ml-2 text-foreground cursor-pointer"
                      size={24}
                    />
                    {section.title}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setIsMobileView(false)}
                className="flex items-center text-lg font-semibold mb-4"
              >
                <ArrowLeft size={24} className="mr-2" /> Voltar
              </button>
              {/* Galeria de imagens */}
              <div className="grid grid-cols-2 gap-4">
                {clubes
                  .find((section) => section.id === selectedClub)
                  ?.clubs?.map((club, index) => (
                    <Image
                      key={index}
                      src={club.image}
                      alt={`Clube ${index + 1}`}
                      width={150}
                      height={150}
                      className="rounded-lg mx-auto border-2 border-gray-200 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Conteúdo principal */}
        <div className="w-3/4 hidden md:block">
          <h2 className="uppercase font-bold text-[25px] text-black mt-0">
            {clubes.find((section) => section.id === selectedClub)?.title}
          </h2>

          {/* Exibindo as imagens dos clubes da divisão selecionada */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clubes
              .find((section) => section.id === selectedClub)
              ?.clubs.map((club, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={club.image}
                    alt={club.name}
                    width={200}
                    height={200}
                    className="rounded-lg border-2 border-gray-200 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <span className="mt-2 text-gray-800">{club.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clubes
