'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MoreVertical } from 'lucide-react'

const sections = [
  { id: '01', title: 'Filiados Ativos' },
  { id: '02', title: 'Sub 9' },
  { id: '03', title: 'Sub 11' },
  { id: '04', title: 'Sub 13' },
  { id: '05', title: 'Sub 15' },
  { id: '06', title: 'Sub 17' },
  { id: '07', title: 'Sub 20' },
  { id: '08', title: '1° Divisão' },
  { id: '09', title: '2° Divisão' },
  { id: '10', title: '3° Divisão' },
  { id: '11', title: 'Veterano 40' },
  { id: '12', title: 'Veterano 50' },
  { id: '13', title: 'Veterano 60' },
  { id: '14', title: 'Feminino' }
]

const Clubes = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null)

  return (
    <div className="container mx-auto p-8">
      <Image
        src="/assets/img_clubes.png"
        alt="Logo Clubes"
        width={1080}
        height={720}
        className="rounded-lg mx-auto"
      />

      {/* Ajustando alinhamento do menu e conteúdo */}
      <div className="flex items-start gap-8 mt-10">
        {/* Menu lateral */}
        <aside className="w-1/4 self-start">
          <nav className="space-y-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setSelectedClub(section.id)}
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
            Primeira Divisão
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Clubes
