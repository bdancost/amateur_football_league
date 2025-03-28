'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MoreVertical } from 'lucide-react'

// Dados dos clubes em cada divisão, agora com imagens para cada time
const sections = [
  {
    id: '01',
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
        image: '/assets/clubes/se-parque-urupes.png'
      },
      {
        name: 'Unidos Marlene Miranda FC',
        image: '/assets/clubes/unidos-marlene-miranda-fc.png'
      },
      {
        name: 'Unidos São Gonçalo FC',
        image: '/assets/clubes/unidos-sao-goncalo-fc.png'
      }
    ]
  },
  {
    id: '02',
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
      { name: 'GE Nova América', image: '/assets/clubes/ge-nova-america.png' },
      { name: 'Inter Zurk FC', image: '/assets/clubes/inter-zurk-fc.png' },
      { name: 'Rodoviário FC', image: '/assets/clubes/rodoviario-fc.png' },
      {
        name: 'SE Fonte Imaculada',
        image: '/assets/clubes/se-fonte-imaculada.png'
      },
      {
        name: 'SE Parque Urupês',
        image: '/assets/clubes/se-parque-urupes.png'
      },
      {
        name: 'Unidos da Vila FC',
        image: '/assets/clubes/unidos-da-vila-fc.png'
      },
      {
        name: 'Unidos Marlene Miranda FC',
        image: '/assets/clubes/unidos-marlene-miranda-fc.png'
      },
      {
        name: 'Vila Nossa Senhora das Graças FC',
        image: '/assets/clubes/vila-nossa-senhora-das-gracas-fc.png'
      }
    ]
  },
  {
    id: '03',
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
        image: '/assets/clubes/grm-sitio-santo-antonio.png'
      },
      {
        name: 'Guerreiros Água Quente FC',
        image: '/assets/clubes/guerreiros-agua-quente-fc.png'
      },
      {
        name: 'Olympique Taubaté FC',
        image: '/assets/clubes/olympique-taubate-fc.png'
      },
      { name: 'SE Esplanada', image: '/assets/clubes/se-esplanada.png' },
      {
        name: 'SE Independência',
        image: '/assets/clubes/se-independencia.png'
      },
      { name: 'Sem Noção FC', image: '/assets/clubes/sem-nocao-fc.png' },
      { name: 'Texas FC', image: '/assets/clubes/texas-fc.png' },
      { name: 'Três Marias FC', image: '/assets/clubes/tres-marias-fc.png' },
      { name: 'Vila Bela EC', image: '/assets/clubes/vila-bela-ec.png' }
    ]
  }
]

const Clubes = () => {
  const [selectedClub, setSelectedClub] = useState<string>('01') // Divisão padrão é 1° Divisão

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
        <aside className="w-1/4 self-start">
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

        {/* Conteúdo principal */}
        <div className="w-3/4">
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
