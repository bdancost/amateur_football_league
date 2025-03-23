'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MoreVertical } from 'lucide-react'

const sections = [
  { id: 'historia', title: 'História' },
  { id: 'missao', title: 'Missão, Visão e Valores' }
]

const Liga = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="mx-auto p-8 flex justify-center">
      {/* Menu lateral */}

      {/* Conteúdo principal */}
      <div className=" px-8">
        <Image
          src="/assets/img_liga.png"
          alt="Logo Liga"
          width={1080}
          height={720}
          className="rounded-lg mx-auto"
        />

        <div className="flex gap-8">
          <aside className="w-1/4 h-fit uppercase">
            <nav className="space-y-2 mt-14">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block rounded-lg text-md font-semibold border-b-2 pb-6 mt-4 ${
                    activeSection === section.id
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
          <div className="w-3/4 h-fit">
            <section id="historia" className="mt-12">
              <h2 className="uppercase font-bold text-[25px] flex items-center">
                A História
              </h2>
              <p className="text-lg/7 mt-4 text-justify text-black">
                A formação da Liga Municipal de Futebol de Taubaté (L. M. F. T.)
                ocorreu através de duas ligas que já existiam na cidade. A Liga
                de Futebol Norte de São Paulo (L. F. N. S. P.) que congregava as
                cidades da região do Vale do Paraíba e a Liga Suburbana de
                Futebol. A fundação da Liga Municipal de Futebol de Taubaté
                ocorreu em 1942, mas ela se efetivou em 1943. Durante dois anos
                não foi realizado nenhum campeonato devido à construção do
                estádio Félix Guisard, atualmente campo da CTI e os Jogos
                Abertos do Interior, que na ocasião era algo inédito.
              </p>
              <p className="text-lg/7 text-justify text-black">
                Segundo Paulo Campos de Azevedo, no livro “Taubaté e o Futebol
                História”, A Liga Municipal de Futebol de Taubaté teve como
                antecedentes a Liga de Futebol Norte de São Paulo (1938) e a
                Liga Suburbana de Futebol (1941). A Liga Municipal de Futebol,
                iniciativa particular, foi fundada em 1938, com o nome
                originário de Liga de Futebol Norte de São Paulo (LFNSP) e
                congregava as principais cidades do Vale do Paraíba para a
                disputa de jogos amadores de futebol entre elas. Nesse mesmo
                ano, o Esporte Clube Taubaté organizou e fez disputar um
                campeonato municipal, sendo os integrantes União Juta Fabril,
                São João Futebol Clube, Esporte Clube Jacques Félix, União
                Operária Futebol Clube e outros. Era o primeiro fruto da Liga de
                Futebol Norte de São Paulo. No dia 16 de dezembro de 1941,
                surgia o futebolista Galdino Marcondes de Rezende, da fazenda
                Barreiro, trazendo uma ideia nova, a fundação da Liga Suburbana
                de Futebol.
              </p>
              <p className="text-lg/7 text-justify text-black">
                Em 1945, o primeiro ano de disputa do campeonato, duas equipes
                foram campeãs, o Clube Atlético Ceteiense e o E. C. Taubaté que
                foi o campeão da região sendo o representando do Estado. Mas
                esse título foi válido apenas pela L. F. N. S. P. O Clube
                Atlético Ceteiense foi o primeiro campeão da Liga Municipal de
                Futebol de Taubaté.
              </p>
              <p className="text-lg/7 text-justify text-black">
                O vereador Moacir de Alvarenga Peixoto apresentou na Câmara
                Municipal o projeto de utilidade pública para a fundação de uma
                entidade de futebol. E o primeiro presidente foi José Luiz de
                Almeida Soares, que na época era prefeito de Taubaté. Benedito
                Marcondes Ferreira, presidente que ficou por mais tempo na Liga,
                mudou a forma como era analisado o futebol amador, tanto que no
                seu período surgiram várias equipes e o campeonato chegou a
                contar com três divisões. “Um lutador emérito, batalhador, o
                homem que carregava sozinho nas costas a Liga de Taubaté”,
                ressaltou Horton Sidnei Cunha sobre o comportamento de Benedito
                Marcondes Ferreira. O futebol amador tinha uma ajuda do
                município, porém a Liga não tinha uma sede própria. A sede da
                Liga passou por vários locais desde a residência de Benedito
                Marcondes, a praça D. Epaminondas, R. Pedro Costa, R. Emílio
                Winther e após várias mudanças, ela se efetivou na Rodoviária
                Velha de Taubaté.
              </p>
              <p className="text-lg/7 text-justify text-black mb-6">
                Após o mandato de Benedito Ferreira, Moacir Peixoto comandou a
                entidade por quatro anos, de 1969 a 1973. Durante seu mandato
                houve uma modernização na condução dos campeonatos da Liga.
                Geraldo Vicente de Melo, presidente entre 1993 e 1994 e diretor
                técnico entre 1994 e 2001, reformulou a estrutura do futebol
                amador da cidade tornando um dos mais competitivos da região.
                Devido as mudanças realizadas a Liga Municipal além de
                patrocinar o campeonato amador da cidade também teve condições
                de organizar uma competição regional, no fim da década de 90,
                chamada Copa vale. Essa competição era realização na década de
                40 com a participação de equipes do Vale do Paraíba e era
                organizado pela Liga de Futebol Norte de São Paulo.
              </p>
              <small className="text-gray-600">
                Fonte: 60 anos de Futebol Amador em Taubaté - VIRGÍLIO RIBEIRO
                GERALDO
              </small>
            </section>
            <section id="missao" className="mt-14">
              <h2 className="uppercase font-bold text-[25px]">Missão</h2>
              <p className="text-lg/7 mt-4 text-justify text-black">
                Formentar o Futebol Amador com uma ótima gestão e de excelência.
              </p>
            </section>
            <section id="visao" className="mt-14">
              <h2 className="uppercase font-bold text-[25px]">Visão</h2>
              <p className="text-lg/7 mt-4 text-justify text-black">
                Ser referência na realização de competições.
              </p>
            </section>
            <section id="valores" className="mt-14">
              <h2 className="uppercase font-bold text-[25px]">Valores</h2>
              <p className="text-lg/7 mt-4 text-justify text-black">
                Respeito, Ética, Transparência e Inovação.
              </p>
            </section>
            <section id="politica" className="mt-14">
              <h2 className="uppercase font-bold text-[25px]">
                Política de Qualidade
              </h2>
              <p className="text-lg/7 mt-4 text-justify text-black">
                A Liga Municipal de Futebol de Taubaté tem como compromissos:
              </p>
              <ul className="list-disc marker:text-black text-lg/7 mt-4 text-justify text-black ml-10">
                <li>
                  Atender às necessidades dos filiados, estatutárias e
                  regulamentares aplicáveis tanto na organização das
                  competições.
                </li>
                <li>
                  Disseminar as melhores práticas de Gestão, comprometendo o
                  corpo diretivo e profissional.
                </li>
                <li>
                  Desenvolver continuamente a capacitação e profissionalização
                  de nossos colaboradores.
                </li>
                <li>
                  Aprimorar constantemente a eficácia do Sistema de Gestão da
                  Qualidade.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Liga
