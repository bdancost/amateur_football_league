'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import PartidasRodada from './PartidasRodada'
import PartidasAgendadas from './PartidasAgendadas'
import CampeonatoSelector from './CampeonatoSelector'
import Image from 'next/image'
import {
  times1Divisao,
  timesSub20,
  times2Divisao,
  times3Divisao,
  Time
} from '@/lib/timesTabela'
import { partidasTabela } from '@/lib/partidasTabela'

const calcularClassificacao = (campeonato: string): Time[] => {
  const todosTimes = [
    ...times1Divisao,
    ...timesSub20,
    ...times2Divisao,
    ...times3Divisao
  ]

  // Filtra os times de acordo com o campeonato selecionado
  return todosTimes
    .filter((time) => time.campeonato === campeonato)
    .map((time) => ({
      ...time,
      P: time.V * 3 + time.E,
      SG: time.GP - time.GC
    }))
}

const TabelaClassificacao = () => {
  const [rodadaSelecionada, setRodadaSelecionada] = useState(1)
  const [campeonatoSelecionado, setCampeonatoSelecionado] =
    useState('1° Divisão')

  // Filtra as partidas de acordo com o campeonato e rodada
  const partidasFiltradas = partidasTabela.filter(
    (partida) =>
      partida.rodada === rodadaSelecionada &&
      partida.campeonato === campeonatoSelecionado
  )

  // Calcula a classificação com base no campeonato selecionado
  const classificacao = calcularClassificacao(campeonatoSelecionado).sort(
    (a, b) => (b.P ?? 0) - (a.P ?? 0) || (b.SG ?? 0) - (a.SG ?? 0)
  )

  return (
    <div className="container mx-auto p-4 text-black">
      {/* Seleção do Campeonato */}
      <CampeonatoSelector
        campeonatoSelecionado={campeonatoSelecionado}
        setCampeonatoSelecionado={setCampeonatoSelecionado}
      />

      {/* Filtro de rodadas */}
      <div className="w-64 mb-6">
        <h2 className="text-md font-bold mb-2 flex items-center uppercase">
          <Filter className="mr-2 text-foreground" size={18} />
          Rodada
        </h2>
        <select
          className="border rounded px-2 py-1 w-full"
          value={rodadaSelecionada}
          onChange={(e) => setRodadaSelecionada(Number(e.target.value))}
        >
          {[1, 2, 3].map((rodada) => (
            <option key={rodada} value={rodada}>
              {rodada}ª Rodada
            </option>
          ))}
        </select>
      </div>

      {/* Renderiza Classificação e Partidas dinamicamente */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-4 uppercase">
          Classificação - {campeonatoSelecionado}
        </h2>

        {/* Tabela de Classificação */}
        <table className="w-full border-collapse border border-gray-300 text-center uppercase mb-8">
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
              <tr key={time.id} className="border">
                <td className="border px-4 py-2 font-bold flex justify-start items-center gap-4">
                  <span className="w-6 text-right mr-8">{index + 1}</span>
                  <Image
                    src={time.imagem}
                    alt={time.nome}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  {time.nome}
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

        {/* Lista de Partidas da Rodada */}
        <h3 className="text-lg font-bold mb-2 text-center border-b-2 pb-2">
          Partidas da {rodadaSelecionada}ª Rodada
        </h3>
        <PartidasRodada
          partidas={partidasFiltradas}
          rodada={rodadaSelecionada}
        />

        {/* Partidas Agendadas da 1ª Rodada (sem placar) */}
        <h3 className="text-lg font-bold mt-10 mb-4 text-center">
          Partidas Agendadas - 1ª Rodada
        </h3>
        <PartidasAgendadas
          partidas={partidasTabela.filter(
            (partida) =>
              partida.rodada === 1 &&
              partida.campeonato === campeonatoSelecionado
          )}
        />
      </div>
    </div>
  )
}

export default TabelaClassificacao
