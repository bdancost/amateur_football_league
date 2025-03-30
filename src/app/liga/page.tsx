'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MoreVertical } from 'lucide-react'
import { historiaData, missionValuesData } from '@/lib/data'

const sections = [
  { id: '01', title: 'História' },
  { id: '02', title: 'Missão, Visão e Valores' }
]

const Liga = () => {
  const [activeSection, setActiveSection] = useState<string>('01')

  return (
    <div className="mx-auto p-8 flex justify-center">
      {/* Menu lateral */}

      {/* Conteúdo principal */}
      <div className="container mx-auto px-8">
        <Image
          src="/assets/img_liga.png"
          alt="Logo Liga"
          width={1080}
          height={720}
          className="rounded-lg mx-auto"
        />
        {/* Menu Lateral */}
        <div className="flex gap-8">
          <aside
            className={`w-1/4 self-start hidden md:block sticky top-20 h-fit`}
          >
            <nav className="space-y-6 mt-14">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveSection(section.id)
                  }}
                  className={`block rounded-lg text-md font-semibold border-b-2 pb-6 mt-4 uppercase ${
                    activeSection === section.id
                      ? 'text-foreground font-bold'
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
          {/* Conteúdo Dinâmico */}
          <div className="w-3/4 h-fit">
            {activeSection === '01' && (
              <section className="mt-12">
                <h2 className="uppercase font-bold text-[25px] flex items-center">
                  {historiaData.title}
                </h2>
                {historiaData.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg/7 mt-4 text-justify text-black"
                  >
                    {paragraph}
                  </p>
                ))}
                <small className="text-gray-600 mt-10 block">
                  {historiaData.fonte}
                </small>
              </section>
            )}
            {activeSection === '02' && (
              <section className="mt-14">
                <h2 className="uppercase font-bold text-[25px]">
                  {missionValuesData.mission.title}
                </h2>
                <p className="text-lg/7 mt-4 text-justify text-black">
                  {missionValuesData.mission.content}
                </p>

                <div className="mt-12">
                  <h2 className="uppercase font-bold text-[25px]">
                    {missionValuesData.vision.title}
                  </h2>
                  <p className="text-lg/7 mt-4 text-justify text-black">
                    {missionValuesData.vision.content}
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="uppercase font-bold text-[25px]">
                    {missionValuesData.values.title}
                  </h2>
                  <p className="text-lg/7 mt-4 text-justify text-black">
                    {missionValuesData.values.content}
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="uppercase font-bold text-[25px]">
                    {missionValuesData.qualityPolicy.title}
                  </h2>
                  <p className="text-lg/7 mt-4 text-justify text-black">
                    {missionValuesData.qualityPolicy.description}
                  </p>
                  <ul className="list-disc marker:text-black text-lg/8 mt-4 text-justify text-black ml-10">
                    {missionValuesData.qualityPolicy.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Liga
