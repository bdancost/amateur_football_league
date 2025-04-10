import Image from 'next/image'
import { Clock } from 'lucide-react'
import {
  times1Divisao,
  times2Divisao,
  times3Divisao,
  timesSub20
} from '@/lib/timesTabela'
import { Partida } from '@/lib/partidasTabela'
import { formatarData } from '@/utils/formatarData'

type Props = {
  partidas: Partida[]
}

const PartidasAgendadas = ({ partidas }: Props) => {
  const todasPartidas = partidas.filter((partida) => partida.rodada === 1)

  const hoje = new Date()

  const partidasFuturas = todasPartidas.filter((partida) => {
    const [dia, mes, ano] = partida.data.split('/')
    const dataPartida = new Date(`${ano}-${mes}-${dia}T00:00:00`)
    return dataPartida > hoje
  })

  if (partidasFuturas.length === 0) {
    return <p className="text-center">Nenhuma partida agendada.</p>
  }

  return (
    <div className="space-y-6">
      {partidasFuturas.map((partida, index) => {
        const mandante =
          times1Divisao.find((t) => t.nome === partida.mandante) ||
          timesSub20.find((t) => t.nome === partida.mandante) ||
          times2Divisao.find((t) => t.nome === partida.mandante) ||
          times3Divisao.find((t) => t.nome === partida.mandante)

        const visitante =
          times1Divisao.find((t) => t.nome === partida.visitante) ||
          timesSub20.find((t) => t.nome === partida.visitante) ||
          times2Divisao.find((t) => t.nome === partida.visitante) ||
          times3Divisao.find((t) => t.nome === partida.visitante)

        return (
          <div key={index} className="border rounded p-4 shadow bg-white">
            <h2 className="text-lg font-bold text-center mb-2">
              1ª Rodada - {formatarData(partida.data)}
            </h2>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{partida.horario}</span>
              </div>
              <span>{partida.local}</span>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4 text-base font-semibold">
              {mandante && (
                <div className="flex items-center gap-2">
                  <Image
                    src={mandante.imagem}
                    alt={mandante.nome}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span>{mandante.nome}</span>
                </div>
              )}
              <span>VS</span>
              {visitante && (
                <div className="flex items-center gap-2">
                  <Image
                    src={visitante.imagem}
                    alt={visitante.nome}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span>{visitante.nome}</span>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PartidasAgendadas
