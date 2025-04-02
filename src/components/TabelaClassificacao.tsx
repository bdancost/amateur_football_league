'use client'

import { useState } from 'react'
import { Clock, Filter } from 'lucide-react'

type Time = {
  nome: string
  J: number
  V: number
  E: number
  D: number
  GP: number
  GC: number
  P?: number
  SG?: number
}

type Partida = {
  rodada: number
  data: string
  horario: string
  mandante: string
  visitante: string
  placarMandante: number
  placarVisitante: number
  local: string
}

const times: Time[] = [
  { nome: 'Time A', J: 5, V: 3, E: 1, D: 1, GP: 10, GC: 5 },
  { nome: 'Time B', J: 5, V: 2, E: 2, D: 1, GP: 8, GC: 6 },
  { nome: 'Time C', J: 5, V: 1, E: 3, D: 1, GP: 7, GC: 7 }
]

const partidas: Partida[] = [
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '15:00',
    mandante: 'Time A',
    visitante: 'Time B',
    placarMandante: 2,
    placarVisitante: 1,
    local: 'Estádio A'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '17:00',
    mandante: 'Time C',
    visitante: 'Time A',
    placarMandante: 0,
    placarVisitante: 3,
    local: 'Estádio C'
  }
]

const calcularClassificacao = (): Time[] => {
  return times.map((time) => ({
    ...time,
    P: time.V * 3 + time.E,
    SG: time.GP - time.GC
  }))
}

const TabelaClassificacao = () => {
  const [rodadaSelecionada, setRodadaSelecionada] = useState(1)

  const partidasFiltradas = partidas.filter(
    (partida) => partida.rodada === rodadaSelecionada
  )

  const classificacao = calcularClassificacao().sort(
    (a, b) => (b.P ?? 0) - (a.P ?? 0) || (b.SG ?? 0) - (a.SG ?? 0)
  )

  return (
    <div className="flex-cols container mx-auto p-4 text-black">
      {/* Filtro à esquerda */}
      <div className="w-1/4 p-12">
        <h2 className="text-md font-bold mb-2 flex items-center uppercase">
          <Filter className="mr-2 text-foreground" size={18} />
          Filtrar por Temporada
        </h2>
        <select
          className="border rounded px-2 py-1 w-full"
          value={rodadaSelecionada}
          onChange={(e) => setRodadaSelecionada(Number(e.target.value))}
        >
          <option value={1}>2025</option>
          <option value={2}>2024</option>
          <option value={3}>2023</option>
        </select>

        <h2 className="text-md font-bold mb-2 flex items-center uppercase mt-6">
          <Filter className="mr-2 text-foreground" size={18} />
          Filtrar por Rodada
        </h2>
        <select
          className="border rounded px-2 py-1 w-full"
          value={rodadaSelecionada}
          onChange={(e) => setRodadaSelecionada(Number(e.target.value))}
        >
          <option value={1}>1ª Rodada</option>
          <option value={2}>2ª Rodada</option>
          <option value={3}>3ª Rodada</option>
        </select>
      </div>

      {/* Tabela de classificação e partidas */}
      <div className="lg:w-full p-10 md:w-3/4">
        <h2 className="text-xl font-bold text-center mb-4">Classificação</h2>
        <table className="w-full border-collapse border border-gray-300 text-center uppercase">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">P</th>
              <th className="border px-4 py-2">J</th>
              <th className="border px-4 py-2">V</th>
              <th className="border px-4 py-2">E</th>
              <th className="border px-4 py-2">D</th>
              <th className="border px-4 py-2">GP</th>
              <th className="border px-4 py-2">GC</th>
              <th className="border px-4 py-2">SG</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((time, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{time.nome}</td>
                <td className="border px-4 py-2">{time.P}</td>
                <td className="border px-4 py-2">{time.J}</td>
                <td className="border px-4 py-2">{time.V}</td>
                <td className="border px-4 py-2">{time.E}</td>
                <td className="border px-4 py-2">{time.D}</td>
                <td className="border px-4 py-2">{time.GP}</td>
                <td className="border px-4 py-2">{time.GC}</td>
                <td className="border px-4 py-2">{time.SG}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Partidas */}
        <h2 className="text-xl font-bold text-center mt-8 mb-4">
          {rodadaSelecionada}ª Rodada
        </h2>
        {partidasFiltradas.map((partida, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex items-center space-x-2">
              <Clock size={18} />
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
    </div>
  )
}

export default TabelaClassificacao
