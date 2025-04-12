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
  { name: 'UNIÃO OPERÁRIA FC', image: '/assets/clubes/União Operária FC.jpeg' },
  { name: 'C ATLÉTICO CECAP', image: '/assets/clubes/C Atlético Cecap.jpeg' },
  {
    name: 'UNIDOS SÃO GONÇALO FC',
    image: '/assets/clubes/Unidos São Gonçalo FC.jpeg'
  },
  { name: 'EC ÁGUA QUENTE', image: '/assets/clubes/EC Água Quente.jpeg' },
  {
    name: 'AA PARQUE AEROPORTO',
    image: '/assets/clubes/AA Parque Aeroporto.jpeg'
  },
  { name: 'EC VILA SÃO JOSÉ', image: '/assets/clubes/EC Vila São José.jpeg' },
  {
    name: 'AE VILA SÃO GERALDO',
    image: '/assets/clubes/AE Vila São Geraldo.jpeg'
  },
  { name: 'CA JUVENTUS', image: '/assets/clubes/CA Juventus.jpeg' },
  {
    name: 'Unidos Marlene Miranda FC',
    image: '/assets/clubes/Unidos Marlene Miranda FC.jpeg'
  },
  { name: 'SE PARQUE URUPÊS', image: '/assets/clubes/SE Parque Urupês.jpeg' },
  {
    name: 'AA RODOVIÁRIO CIDADE JARDIM',
    image: '/assets/clubes/AA Rodoviário Cidade Jardim.jpeg'
  },
  { name: 'AA SÃO GONÇALO', image: '/assets/clubes/AA São Gonçalo.jpeg' }
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
            <div className="flex items-center gap-4 text-sm font-medium uppercase">
              {mandante && (
                <div className="flex items-center gap-2 w-[240px] justify-between">
                  <span className="font-bold whitespace-nowrap">
                    {mandante.name}
                  </span>
                  <Image
                    src={mandante.image}
                    alt={mandante.name}
                    width={24}
                    height={24}
                    className="rounded-full shrink-0"
                  />
                </div>
              )}

              <span className="mx-4 font-bold">vs</span>

              {visitante && (
                <div className="flex items-center gap-2 w-[240px] justify-between">
                  <Image
                    src={visitante.image}
                    alt={visitante.name}
                    width={24}
                    height={24}
                    className="rounded-full shrink-0"
                  />
                  <span className="font-bold whitespace-nowrap ">
                    {visitante.name}
                  </span>
                </div>
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
