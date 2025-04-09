import Image from 'next/image'
import {
  timesSub20,
  times1Divisao,
  times2Divisao,
  times3Divisao
} from '@/lib/timesTabela'
import { Clock } from 'lucide-react'
import { Partida } from '@/lib/partidasTabela'

type Props = {
  partidas: Partida[]
  rodada: number
}

const formatarDataExtensa = (data: string) => {
  const [dia, mes, ano] = data.split('/')
  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]
  return `${Number(dia)} de ${meses[Number(mes) - 1]} de ${ano}`
}

const PartidasRodada = ({ partidas, rodada }: Props) => {
  if (partidas.length === 0)
    return <p className="text-center">Nenhuma partida encontrada.</p>

  const dataRodada = partidas[0].data

  const todosOsTimes = [
    ...times1Divisao,
    ...times2Divisao,
    ...times3Divisao,
    ...timesSub20
  ]

  const buscarTime = (nome: string) =>
    todosOsTimes.find((time) => time.nome === nome)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-center mb-1 uppercase">
        {rodada}ª Rodada
      </h3>
      <p className="text-center text-sm text-gray-500 mb-4">
        {formatarDataExtensa(dataRodada)}
      </p>

      {partidas.map((partida, index) => {
        const mandante = buscarTime(partida.mandante)
        const visitante = buscarTime(partida.visitante)

        return (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md shadow-sm border"
          >
            {/* Horário com ícone */}
            <div className="flex items-center text-sm text-gray-700 w-24">
              <Clock className="w-4 h-4 mr-1" />
              {partida.horario}
            </div>

            {/* Time mandante vs visitante */}
            <div className="flex items-center gap-2 text-sm font-medium uppercase">
              {mandante && (
                <>
                  <Image
                    src={mandante.imagem}
                    alt={mandante.nome}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{mandante.nome}</span>
                </>
              )}
              <span className="mx-1 font-bold">vs</span>
              {visitante && (
                <>
                  <span>{visitante.nome}</span>
                  <Image
                    src={visitante.imagem}
                    alt={visitante.nome}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </>
              )}
            </div>

            {/* Estádio */}
            <div className="text-xs text-gray-500 w-32 text-right">
              {partida.local}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PartidasRodada
