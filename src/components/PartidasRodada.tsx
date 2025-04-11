'use client'

import Image from 'next/image'
import { Clock } from 'lucide-react'
import { Partida } from '@/lib/partidasTabela'

const todosOsTimes = [
  { name: 'EC Mourisco', image: '/assets/clubes/EC Mourisco.jpeg' },
  { name: 'EC XV DE NOVEMBRO', image: '/assets/clubes/EC XV de Novembro.jpeg' },
  { name: 'EC IPANEMA', image: '/assets/clubes/EC Ipanema.jpeg' }, // Corrigido aqui
  {
    name: 'AA PARQUE SÃO LUIZ',
    image: '/assets/clubes/AA Parque São Luiz.jpeg'
  },
  { name: 'UNIÃO OPERÁRIA', image: '/assets/uniao-operaria.png' },
  { name: 'ATLÉTICO CECAP', image: '/assets/atletico-cecap.png' },
  { name: 'UNIDOS SÃO GONÇALO', image: '/assets/unidos-sao-goncalo.png' },
  { name: 'ÁGUA QUENTE', image: '/assets/agua-quente.png' },
  { name: 'PARQUE AEROPORTO', image: '/assets/parque-aeroporto.png' },
  { name: 'VILA SÃO JOSÉ', image: '/assets/vila-sao-jose.png' },
  { name: 'VILA SÃO GERALDO', image: '/assets/vila-sao-geraldo.png' },
  { name: 'JUVENTUS', image: '/assets/juventus.png' }
]

const buscarTime = (name: string) =>
  todosOsTimes.find((time) => time.name.toUpperCase() === name.toUpperCase())

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

const PartidasRodada = ({
  rodada,
  partidas
}: {
  rodada: number
  partidas: Partida[]
}) => {
  if (!partidas || partidas.length === 0)
    return <p className="text-center">Nenhuma partida encontrada.</p>

  const dataRodada = partidas[0].data

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
            {/* Horário */}
            <div className="flex items-center text-sm text-gray-700 w-24">
              <Clock className="w-4 h-4 mr-1" />
              {partida.horario}
            </div>

            {/* Confronto */}
            <div className="flex items-center gap-2 text-sm font-medium uppercase">
              {mandante && (
                <>
                  <Image
                    src={mandante.image}
                    alt={mandante.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{mandante.name}</span>
                </>
              )}
              <span className="mx-1 font-bold">vs</span>
              {visitante && (
                <>
                  <span>{visitante.name}</span>
                  <Image
                    src={visitante.image}
                    alt={visitante.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </>
              )}
            </div>

            {/* Estádio */}
            <div className="text-xs text-gray-500 w-32 text-right">
              {partida.local || 'Local a definir'}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PartidasRodada
