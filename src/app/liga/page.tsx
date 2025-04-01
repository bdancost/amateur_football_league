'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MoreVertical, ArrowLeft } from 'lucide-react'
import { historiaData, missionValuesData } from '@/lib/data'

// Definição das seções
const sections = [
  { id: '01', title: 'História', content: historiaData },
  { id: '02', title: 'Missão, Visão e Valores', content: missionValuesData }
]

const Liga = () => {
  const [activeSection, setActiveSection] = useState<string | null>('01') // Começa com "História" no Desktop
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768
      setIsMobile(isNowMobile)

      if (!isNowMobile) {
        setActiveSection('01') // Garante que no desktop sempre comece com "História"
      } else {
        setActiveSection(null) // No mobile, começa sem seção ativa
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId)
  }

  return (
    <div className="mx-auto p-8 flex justify-center">
      <div className="container mx-auto px-8">
        {/* Logo */}
        <Image
          src="/assets/img_liga.png"
          alt="Logo Liga"
          width={1080}
          height={720}
          className="rounded-lg mx-auto"
        />

        <div className="flex gap-8">
          {/* Menu lateral (desktop) */}
          {!isMobile && (
            <aside className="w-1/4 self-start hidden md:block">
              <nav className="space-y-6 mt-14">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`block w-full text-left text-md font-semibold border-b-2 pb-4 mt-4 uppercase hover:bg-gray-100 ${
                      activeSection === section.id
                        ? 'text-foreground font-bold'
                        : 'text-gray-800'
                    }`}
                  >
                    <MoreVertical
                      className="inline-block mr-2 text-foreground"
                      size={24}
                    />
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>
          )}

          {/* Menu responsivo (mobile) */}
          {isMobile && (
            <div className="md:hidden w-full">
              {!activeSection ? (
                <div className="flex flex-col gap-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      className="block w-full rounded-lg text-black hover:bg-gray-300 mb-2 font-semibold border-b-2 pb-6 mt-4"
                      onClick={() => handleMenuItemClick(section.id)}
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
                    onClick={() => setActiveSection(null)}
                    className="flex items-center text-lg font-semibold mb-4"
                  >
                    <ArrowLeft size={24} className="mr-2" /> Voltar
                  </button>
                  <SectionContent sectionId={activeSection} />
                </div>
              )}
            </div>
          )}

          {/* Conteúdo principal (desktop) */}
          {!isMobile && (
            <div className="w-3/4">
              <SectionContent sectionId={activeSection} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Componente para renderizar o conteúdo das seções
const SectionContent = ({ sectionId }: { sectionId: string | null }) => {
  const section = sections.find((s) => s.id === sectionId)
  if (!section) return null

  return (
    <section className="mt-12">
      <h2 className="uppercase font-bold text-[25px]">{section.title}</h2>

      {'paragraphs' in section.content ? (
        <>
          {section.content.paragraphs.map(
            (paragraph: string, index: number) => (
              <p key={index} className="text-lg/7 mt-4 text-justify text-black">
                {paragraph}
              </p>
            )
          )}
          <small className="text-gray-600 mt-10 block">
            {section.content.fonte}
          </small>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg mt-4">
            {section.content.mission.title}
          </h3>
          <p className="text-lg text-black">
            {section.content.mission.content}
          </p>

          <h3 className="font-bold text-lg mt-4">
            {section.content.vision.title}
          </h3>
          <p className="text-lg text-black">{section.content.vision.content}</p>

          <h3 className="font-bold text-lg mt-4">
            {section.content.values.title}
          </h3>
          <p className="text-lg text-black">{section.content.values.content}</p>

          <h3 className="font-bold text-lg mt-4">
            {section.content.qualityPolicy.title}
          </h3>
          <p className="text-lg text-black">
            {section.content.qualityPolicy.description}
          </p>

          <ul className="list-disc ml-6 text-black">
            {section.content.qualityPolicy.list.map(
              (item: string, index: number) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              )
            )}
          </ul>
        </>
      )}
    </section>
  )
}

export default Liga
