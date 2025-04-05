'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import PartidasRodada from './PartidasRodada'
import CampeonatoSelector from './CampeonatoSelector'
import Image from 'next/image'
import { times, Time } from '@/lib/timesTabela'
import { partidas } from '@/lib/partidasTabela'

const calcularClassificacao = (campeonato: string): Time[] => {
  return times
    .filter((time) => time.campeonato === campeonato) // Filtra por campeonato
    .map((time) => ({
      ...time,
      P: time.V * 3 + time.E,
      SG: time.GP - time.GC
    }))
}

const TabelaClassificacao = () => {
  const [rodadaSelecionada, setRodadaSelecionada] = useState(1)
  const [campeonatoSelecionado, setCampeonatoSelecionado] =
    useState('1° Divisão') // Estado do campeonato

  // Filtra as partidas de acordo com o campeonato e rodada
  const partidasFiltradas = partidas.filter(
    (partida) =>
      partida.rodada === rodadaSelecionada &&
      partida.campeonato === campeonatoSelecionado
  )

  // Calcula a classificação com base no campeonato selecionado
  const classificacao = calcularClassificacao(campeonatoSelecionado).sort(
    (a, b) => (b.P ?? 0) - (a.P ?? 0) || (b.SG ?? 0) - (a.SG ?? 0)
  )

  return (
    <div className="flex-cols container mx-auto p-4 text-black">
      {/* Componente de seleção de campeonato */}
      <CampeonatoSelector
        campeonatoSelecionado={campeonatoSelecionado}
        setCampeonatoSelecionado={setCampeonatoSelecionado}
      />

      {/* Filtro de rodadas */}
      <div className="w-1/4 p-12">
        <h2 className="text-md font-bold mb-2 flex items-center uppercase">
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

      {/* Tabela de classificação */}
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
                <td className="border px-4 py-2 font-bold flex justify-start items-center gap-12">
                  {time.id}
                  <div className="flex items-center gap-2">
                    <Image
                      src={time.imagem}
                      alt={time.nome}
                      width={10}
                      height={10}
                      className="w-8 h-8 rounded-full inline-block"
                    />
                    {time.nome}
                  </div>
                </td>
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
        <PartidasRodada
          partidas={partidasFiltradas}
          rodada={rodadaSelecionada}
        />
      </div>
    </div>
  )
}

export default TabelaClassificacao
