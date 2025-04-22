'use client'

import Image from 'next/image'
import { artilheiros } from '@/lib/artilharia'

interface ArtilhariaProps {
  campeonatoSelecionado: string
}

const ArtilhariaCampeonato = ({ campeonatoSelecionado }: ArtilhariaProps) => {
  const artilheirosFiltrados = artilheiros
    .filter((jogador) => jogador.campeonato === campeonatoSelecionado)
    .sort((a, b) => b.gols - a.gols)

  return (
    <div className="mt-12 max-w-[700px] mx-auto p-4 bg-white rounded-xl shadow-md border">
      <h2 className="text-xl sm:text-2xl font-bold text-center uppercase mb-6">
        Artilharia - {campeonatoSelecionado}
      </h2>

      {/* Cabeçalho */}
      <div className="grid grid-cols-12 font-semibold text-sm sm:text-base border-b pb-2 mb-4 uppercase text-gray-700">
        <div className="col-span-6">Jogador</div>
        <div className="col-span-2 text-center">Gols</div>
        <div className="col-span-4">Time</div>
      </div>

      {/* Lista de Artilheiros */}
      {artilheirosFiltrados.map((jogador, index) => (
        <div
          key={jogador.id}
          className="grid grid-cols-12 items-center gap-2 text-sm sm:text-base py-3 border-b"
        >
          {/* Jogador */}
          <div className="col-span-6 flex items-center gap-3">
            <span className="font-bold w-5">{index + 1}</span>
            <Image
              src={jogador.imagemJogador}
              alt={jogador.nome}
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="truncate">{jogador.nome}</span>
          </div>

          {/* Gols */}
          <div className="col-span-2 text-center font-semibold text-gray-800">
            {jogador.gols}
          </div>

          {/* Time */}
          <div className="col-span-4 flex items-center gap-2">
            <Image
              src={jogador.imagemTime}
              alt={jogador.nomeTime}
              width={24}
              height={24}
            />
            <span className="truncate">{jogador.nomeTime}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArtilhariaCampeonato
