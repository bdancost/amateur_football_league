'use client'

import Image from 'next/image'
import { clubes } from '@/lib/clubes'
import { Partida } from '@/lib/partidasTabela'

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
              className="flex flex-col gap-2 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center justify-between">
                {/* Mandante */}
                <div className="flex items-center gap-2">
                  {mandante && (
                    <Image
                      src={mandante.image}
                      alt={mandante.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-bold">{partida.mandante}</p>
                  </div>
                </div>

                {/* Placar */}
                <div className="text-lg font-bold">
                  {partida.placarMandante} x {partida.placarVisitante}
                </div>

                {/* Visitante */}
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="font-bold">{partida.visitante}</p>
                  </div>
                  {visitante && (
                    <Image
                      src={visitante.image}
                      alt={visitante.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                </div>
              </div>

              <div className="text-sm text-gray-600 text-center">
                {partida.data} às {partida.horario} - {partida.local}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PartidasRodada
