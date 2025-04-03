import { Clock } from 'lucide-react'

type Partida = {
  data: string
  horario: string
  mandante: string
  visitante: string
  placarMandante: number
  placarVisitante: number
  local: string
}

type Props = {
  partidas: Partida[]
  rodada?: number // 🔥 Torna 'rodada' opcional
}

const PartidasRodada = ({ partidas }: Props) => {
  return (
    <div>
      {partidas.map((partida, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={18} className="text-gray-500" />
            <span>{partida.horario}</span>
          </div>
          <div className="flex items-center space-x-4 text-xl font-bold">
            <span>{partida.mandante}</span>
            <span className="bg-gray-300 px-3 py-1 rounded-lg">
              {partida.placarMandante} - {partida.placarVisitante}
            </span>
            <span>{partida.visitante}</span>
          </div>
          <div className="text-gray-600">{partida.local}</div>
        </div>
      ))}
    </div>
  )
}

export default PartidasRodada
