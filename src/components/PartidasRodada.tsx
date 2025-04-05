import { Clock } from 'lucide-react'
import { Partida } from '@/lib/partidasTabela'

type Props = {
  partidas: Partida[]
  rodada?: number
}

const PartidasRodada = ({ partidas, rodada }: Props) => {
  if (partidas.length === 0) {
    return (
      <div className="mt-6 text-center text-gray-500 italic">
        Nenhuma partida disponível para esta rodada.
      </div>
    )
  }

  return (
    <div className="mt-8 space-y-4">
      {rodada && (
        <h3 className="text-lg font-semibold text-center uppercase">
          Partidas da {rodada}ª Rodada
        </h3>
      )}

      {partidas.map((partida, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded-lg shadow flex flex-col gap-1"
        >
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <Clock size={16} />
            <span>
              {partida.horario} - {partida.data}
            </span>
          </div>

          <div className="flex justify-between items-center text-lg font-bold">
            <span>{partida.mandante}</span>
            <span className="bg-gray-300 px-3 py-1 rounded">
              {partida.placarMandante} - {partida.placarVisitante}
            </span>
            <span>{partida.visitante}</span>
          </div>

          <div className="text-sm text-gray-600">{partida.local}</div>
        </div>
      ))}
    </div>
  )
}

export default PartidasRodada
