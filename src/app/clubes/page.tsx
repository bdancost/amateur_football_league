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
      { name: 'CA Gurilândia', image: '/assets/clubes/ca-gurilandia.png' },
      { name: 'CA Juventus', image: '/assets/clubes/ca-juventus.png' },
      {
        name: 'EC Internacional',
        image: '/assets/clubes/ec-internacional.png'
      },
      { name: 'EC Mourisco', image: '/assets/clubes/ec-mourisco.png' },
      { name: 'EC Água Quente', image: '/assets/clubes/ec-agua-quente.png' },
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
        image: '/assets/clubes/aa-rodoviario-cidade-jardim.png'
      },
      { name: 'AA São Gonçalo', image: '/assets/clubes/aa-sao-goncalo.png' },
      {
        name: 'AE Vila Nogueira',
        image: '/assets/clubes/ae-vila-nogueira.png'
      },
      {
        name: 'Atlético Bonfim FC',
        image: '/assets/clubes/atletico-bonfim-fc.png'
      },
      { name: 'Brooklyn FC', image: '/assets/clubes/brooklyn-fc.png' },
      { name: 'CA Gurilândia', image: '/assets/clubes/ca-gurilandia.png' },
      { name: 'CAM 13 de Maio', image: '/assets/clubes/cam-13-de-maio.png' },
      {
        name: 'EC Belém de Taubaté',
        image: '/assets/clubes/ec-belem-de-taubate.png'
      },
      {
        name: 'EC Flamenguinho Terra Nova',
        image: '/assets/clubes/ec-flamenguinho-terra-nova.png'
      },
      {
        name: 'EC Internacional',
        image: '/assets/clubes/ec-internacional.png'
      },
      { name: 'Estoril City FC', image: '/assets/clubes/estoril-city-fc.png' },
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
      { name: 'Baronesa FC', image: '/assets/clubes/baronesa-fc.png' },
      { name: "Brother's SC", image: '/assets/clubes/brothers-sc.png' },
      { name: 'Básico FC', image: '/assets/clubes/basico-fc.png' },
      {
        name: 'CA Boca Junior Jardim América',
        image: '/assets/clubes/ca-boca-junior-jardim-america.png'
      },
      { name: 'EC Abaeté', image: '/assets/clubes/ec-abaete.png' },
      {
        name: 'EC Alto São Pedro',
        image: '/assets/clubes/ec-alto-sao-pedro.png'
      },
      {
        name: 'EC Esplanada Santa Terezinha',
        image: '/assets/clubes/ec-esplanada-santa-terezinha.png'
      },
      { name: 'EC VII de Março', image: '/assets/clubes/ec-vii-de-marco.png' },
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
                    width={150}
                    height={150}
                    className="rounded-lg"
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
