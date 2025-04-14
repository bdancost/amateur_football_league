'use client'

import Image from 'next/image'
import { clubes } from '@/lib/clubes'
import { Partida } from '@/lib/partidasTabela'
import { Clock } from 'lucide-react'

interface Props {
  partidas: Partida[]
  rodada: number
}

const PartidasRodada = ({ partidas, rodada }: Props) => {
  return (
    <div className="space-y-4">
      {partidas
        .filter((partida) => partida.rodada === rodada)
        .map((partida, index) => {
          // Encontrando os clubes com base no nome correto (name)
          const mandante = clubes
            .flatMap((campeonato) => campeonato.clubs)
            .find(
              (clube) =>
                clube.name.toUpperCase() === partida.mandante.toUpperCase()
            )

          const visitante = clubes
            .flatMap((campeonato) => campeonato.clubs)
            .find(
              (clube) =>
                clube.name.toUpperCase() === partida.visitante.toUpperCase()
            )

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-4 border-b-2 rounded-lg shadow-sm bg-white"
            >
              {/* Mandante, Placar e Visitante em linha */}
              <div className="flex items-center justify-between gap-8">
                {/* Mandante */}
                <div className="flex items-center gap-2 w-[300px] justify-between">
                  <p className="font-bold whitespace-nowrap">
                    {partida.mandante}
                  </p>
                  {mandante && (
                    <Image
                      src={mandante.image}
                      alt={mandante.name}
                      width={32}
                      height={32}
                      className="rounded-full shrink-0"
                    />
                  )}
                </div>

                {/* Placar */}
                <div className="text-lg font-bold flex items-center justify-center">
                  {partida.placarMandante} x {partida.placarVisitante}
                </div>

                {/* Visitante */}
                <div className="flex items-center gap-6 w-[300px] justify-between">
                  {visitante && (
                    <Image
                      src={visitante.image}
                      alt={visitante.name}
                      width={32}
                      height={32}
                      className="rounded-full shrink-0"
                    />
                  )}
                  <p className="font-bold whitespace-nowrap">
                    {partida.visitante}
                  </p>
                </div>
              </div>

              {/* Alinhamento do Data e Hora à esquerda e Local à direita */}
              <div className="text-sm text-gray-600 flex justify-between w-full items-center">
                <div className="flex items-center gap-2">
                  <span>{partida.data}</span>
                  <div className="flex items-center">
                    <Clock size={16} className="text-gray-500" />
                    <span>{partida.horario}H</span>
                  </div>
                </div>

                <span>{partida.local}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PartidasRodada
