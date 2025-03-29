'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MoreVertical, ArrowLeft } from 'lucide-react'

// Dados dos clubes em cada divisão, agora com imagens para cada time
const sections = [
  {
    id: '01',
    title: 'Sub 20',
    clubs: [
      {
        name: 'AA São Gonçalo',
        image: '/assets/clubes/AA São Gonçalo.jpeg'
      },
      {
        name: 'AE Cecap',
        image: '/assets/clubes/AE Cecap.jpeg'
      },
      {
        name: 'AE Vila São Geraldo',
        image: '/assets/clubes/AE Vila São Geraldo.jpeg'
      },
      {
        name: 'CA Boca Junior Jardim América',
        image: '/assets/clubes/CA Boca Junior Jardim América.jpeg'
      },
      {
        name: 'CA Juventus',
        image: '/assets/clubes/CA Juventus.jpeg'
      },
      {
        name: 'EC XV de Novembro',
        image: '/assets/clubes/EC XV de Novembro.jpeg'
      },
      {
        name: 'Rodoviário FC',
        image: '/assets/clubes/Rodoviário FC.jpeg'
      },
      {
        name: 'Unidos São Gonçalo FC',
        image: '/assets/clubes/Unidos São Gonçalo FC.jpeg'
      }
    ]
  },
  {
    id: '02',
    title: '1° Divisão',
    clubs: [
      {
        name: 'AA Parque Aeroporto',
        image: '/assets/clubes/AA Parque Aeroporto.jpeg'
      },
      {
        name: 'AA Parque São Luiz',
        image: '/assets/clubes/AA Parque São Luiz.jpeg'
      },
      {
        name: 'AA Rodoviário Cidade Jardim',
        image: '/assets/clubes/AA Rodoviário Cidade Jardim.jpeg'
      },
      { name: 'AA São Gonçalo', image: '/assets/clubes/AA São Gonçalo.jpeg' },
      {
        name: 'AE Vila São Geraldo',
        image: '/assets/clubes/AE Vila São Geraldo.jpeg'
      },
      {
        name: 'C Atlético Cecap',
        image: '/assets/clubes/C Atlético Cecap.jpeg'
      },
      { name: 'CA Juventus', image: '/assets/clubes/CA Juventus.jpeg' },
      {
        name: 'EC Ipanema',
        image: '/assets/clubes/EC Ipanema.jpeg'
      },
      { name: 'EC Mourisco', image: '/assets/clubes/EC Mourisco.jpeg' },
      { name: 'EC Água Quente', image: '/assets/clubes/EC Água Quente.jpeg' },
      {
        name: 'EC Vila São José',
        image: '/assets/clubes/EC Vila São José.jpeg'
      },
      {
        name: 'EC XV de Novembro',
        image: '/assets/clubes/EC XV de Novembro.jpeg'
      },
      {
        name: 'SE Parque Urupês',
        image: '/assets/clubes/SE Parque Urupês.jpeg'
      },
      {
        name: 'União Operária FC',
        image: '/assets/clubes/União Operária FC.jpeg'
      },
      {
        name: 'Unidos Marlene Miranda FC',
        image: '/assets/clubes/Unidos Marlene Miranda FC.jpeg'
      },
      {
        name: 'Unidos São Gonçalo FC',
        image: '/assets/clubes/Unidos São Gonçalo FC.jpeg'
      }
    ]
  },
  {
    id: '03',
    title: '2° Divisão',
    clubs: [
      {
        name: 'AA Jardim Jaraguá',
        image: '/assets/clubes/AA Jardim Jaraguá.jpg'
      },
      {
        name: 'AA Rodoviário Cidade Jardim',
        image: '/assets/clubes/AA Rodoviário Cidade Jardim.jpeg'
      },
      {
        name: 'AE Vila Nogueira',
        image: '/assets/clubes/AE Vila Nogueira.jpeg'
      },
      {
        name: 'Atlético Bonfim FC',
        image: '/assets/clubes/Atlético Bonfim FC.jpeg'
      },
      { name: 'Brooklyn FC', image: '/assets/clubes/Brooklyn FC.jpeg' },
      { name: 'CA Gurilândia', image: '/assets/clubes/CA Gurilândia.jpeg' },
      { name: 'CAM 13 de Maio', image: '/assets/clubes/CAM 13 de Maio.jpeg' },
      {
        name: 'EC Belém de Taubaté',
        image: '/assets/clubes/EC Belém de Taubaté.jpeg'
      },
      {
        name: 'EC Flamenguinho Terra Nova',
        image: '/assets/clubes/EC Flamenguinho Terra Nova.jpeg'
      },
      {
        name: 'EC Internacional',
        image: '/assets/clubes/EC Internacional.png'
      },
      { name: 'Estoril City FC', image: '/assets/clubes/Estoril City FC.jpeg' },
      { name: 'GE Nova América', image: '/assets/clubes/GE Nova América.jpeg' },
      { name: 'Inter Zurk FC', image: '/assets/clubes/Inter Zurk FC.jpeg' },
      { name: 'Rodoviário FC', image: '/assets/clubes/Rodoviário FC.jpeg' },
      {
        name: 'SE Fonte Imaculada',
        image: '/assets/clubes/SE Fonte Imaculada.jpeg'
      },
      {
        name: 'Unidos da Vila FC',
        image: '/assets/clubes/Unidos da Vila FC.jpeg'
      },
      {
        name: 'Vila Nossa Senhora das Graças FC',
        image: '/assets/clubes/Vila Nossa Senhora das Graças FC.jpeg'
      }
    ]
  },
  {
    id: '04',
    title: '3° Divisão',
    clubs: [
      { name: 'AA Vila Albina', image: '/assets/clubes/AA Vila Albina.jpg' },
      { name: 'AE Cecap', image: '/assets/clubes/AE Cecap.jpeg' },
      {
        name: 'AE Chácara Flórida',
        image: '/assets/clubes/AE Chácara Flórida.jpg'
      },
      { name: 'Baronesa FC', image: '/assets/clubes/Baronesa FC.jpeg' },
      { name: "Brother's SC", image: "/assets/clubes/Brother's SC.jpg" },
      { name: 'Básico FC', image: '/assets/clubes/Básico FC.jpeg' },
      {
        name: 'CA Boca Junior Jardim América',
        image: '/assets/clubes/CA Boca Junior Jardim América.jpeg'
      },
      { name: 'EC Abaeté', image: '/assets/clubes/EC Abaeté.jpg' },
      {
        name: 'EC Alto São Pedro',
        image: '/assets/clubes/EC Alto São Pedro.jpeg'
      },
      {
        name: 'EC Esplanada Santa Terezinha',
        image: '/assets/clubes/EC Esplanada Santa Terezinha.jpeg'
      },
      { name: 'EC VII de Março', image: '/assets/clubes/EC VII de Março.jpg' },
      {
        name: 'GRM Sitío Santo Antônio',
        image: '/assets/clubes/GRM Sitío Santo Antônio.jpeg'
      },
      {
        name: 'Guerreiros Água Quente FC',
        image: '/assets/clubes/Guerreiros Água Quente FC.jpg'
      },
      {
        name: 'Olympique Taubaté FC',
        image: '/assets/clubes/Olympique Taubaté FC.jpeg'
      },
      { name: 'SE Esplanada', image: '/assets/clubes/SE Esplanada.jpg' },
      {
        name: 'SE Independência',
        image: '/assets/clubes/SE Independência.jpeg'
      },
      { name: 'Sem Noção FC', image: '/assets/clubes/Sem Noção FC.jpeg' },
      { name: 'Texas FC', image: '/assets/clubes/Texas FC.jpg' },
      { name: 'Três Marias FC', image: '/assets/clubes/Três Marias FC.jpg' },
      { name: 'Vila Bela EC', image: '/assets/clubes/Vila Bela EC.jpeg' }
    ]
  }
]

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
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedClub(section.id)
                }}
                className={`block rounded-lg text-md font-semibold border-b-2 pb-6 mt-4 ${
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
              {sections.map((section) => (
                <button
                  key={section.id}
                  className="block w-full rounded-lg hover:bg-gray-300 mb-2 font-semibold border-b-2 pb-6 mt-4"
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
                {sections
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
            {sections.find((section) => section.id === selectedClub)?.title}
          </h2>

          {/* Exibindo as imagens dos clubes da divisão selecionada */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {sections
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
