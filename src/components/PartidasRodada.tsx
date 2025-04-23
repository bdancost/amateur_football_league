'use client'

import Image from 'next/image'
import { clubes } from '@/lib/clubes'
import { partidas } from '@/lib/partidasTabela'
import { Clock } from 'lucide-react'

interface Props {
  partidas: typeof partidas
  rodada: number
}

const PartidasRodada = ({ partidas, rodada }: Props) => {
  return (
    <div className="space-y-4">
      {partidas
        .filter((partida) => partida.rodada === rodada)
        .map((partida, index) => {
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
              className="flex flex-col gap-4 p-4 border-b-2 rounded-lg shadow-sm bg-white"
            >
              {/* Linha de times com escudos e nomes */}
              <div className="flex items-center justify-center gap-8 w-full">
                {/* Nome mandante + escudo */}
                <div className="flex items-center justify-end gap-4 w-[200px]">
                  <p className="font-bold text-right whitespace-nowrap">
                    {partida.mandante}
                  </p>
                  {mandante && (
                    <Image
                      src={mandante.image}
                      alt={mandante.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                </div>

                {/* VS */}
                <div className="font-bold text-lg w-[40px] text-center">VS</div>

                {/* Escudo + nome visitante */}
                <div className="flex items-center justify-start gap-4 w-[200px]">
                  {visitante && (
                    <Image
                      src={visitante.image}
                      alt={visitante.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <p className="font-bold text-left whitespace-nowrap">
                    {partida.visitante}
                  </p>
                </div>
              </div>

              {/* Linha de data, hora e local */}
              <div className="text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <span>{partida.data}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-gray-500" />
                    <span>{partida.horario}H</span>
                  </div>
                </div>
                <span className="text-center sm:text-right">
                  {partida.local}
                </span>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PartidasRodada
