'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import PartidasRodada from './PartidasRodada'
import CampeonatoSelector from './CampeonatoSelector'
import Image from 'next/image'
import {
  times1Divisao,
  timesSub20,
  times2Divisao,
  times3Divisao,
  Time
} from '@/lib/timesTabela'

import { partidas } from '@/lib/partidasTabela'
import ArtilhariaCampeonato from './ArtilhariaCampeonato'

const calcularClassificacao = (campeonato: string): Time[] => {
  const todosTimes = [
    ...times1Divisao,
    ...timesSub20,
    ...times2Divisao,
    ...times3Divisao
  ]

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

  const partidasFiltradas = partidas.filter(
    (partida) =>
      partida.rodada === rodadaSelecionada &&
      partida.campeonato === campeonatoSelecionado
  )

  const classificacao = calcularClassificacao(campeonatoSelecionado).sort(
    (a, b) => (b.P ?? 0) - (a.P ?? 0) || (b.SG ?? 0) - (a.SG ?? 0)
  )

  const rodadasPorCampeonato: Record<string, number> = {
    '1° Divisão': 15,
    '2° Divisão': 17,
    '3° Divisão': 19,
    'Sub 20': 7
  }

  return (
    <div className="container mx-auto px-4 py-6 text-black">
      {/* Seleção do Campeonato */}
      <CampeonatoSelector
        campeonatoSelecionado={campeonatoSelecionado}
        setCampeonatoSelecionado={setCampeonatoSelecionado}
      />

      {/* Filtro de rodadas */}
      <div className="w-full sm:w-64 mb-6">
        <h2 className="text-md font-bold mb-2 flex items-center uppercase">
          <Filter className="mr-2 text-foreground" size={18} />
          Rodada
        </h2>
        <select
          className="border rounded px-2 py-1 w-full"
          value={rodadaSelecionada}
          onChange={(e) => setRodadaSelecionada(Number(e.target.value))}
        >
          {Array.from(
            { length: rodadasPorCampeonato[campeonatoSelecionado] },
            (_, i) => i + 1
          ).map((rodada) => (
            <option key={rodada} value={rodada}>
              {rodada}ª Rodada
            </option>
          ))}
        </select>
      </div>

      {/* Conteúdo principal */}
      <div className="p-2 sm:p-4">
        {/* Tabela de Jogos */}
        <h2 className="bg-gray-100 text-xl sm:text-2xl font-bold text-center mb-4 border-2 p-3 uppercase">
          Tabela de Jogos
        </h2>

        <h3 className="text-base sm:text-lg font-bold mb-4 text-center border-b-2 pb-2">
          Partidas da {rodadaSelecionada}ª Rodada
        </h3>

        <PartidasRodada
          partidas={partidasFiltradas}
          rodada={rodadaSelecionada}
        />

        {/* Título Classificação */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 uppercase mt-12">
          Classificação - {campeonatoSelecionado}
        </h2>

        {/* Tabela Responsiva */}
        <div className="overflow-x-auto">
          <table className="min-w-[640px] sm:w-full border-collapse border border-gray-300 text-center uppercase text-sm sm:text-base mb-8">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 sm:px-4 py-2">Time</th>
                <th className="border px-2 sm:px-4 py-2">P</th>
                <th className="border px-2 sm:px-4 py-2">J</th>
                <th className="border px-2 sm:px-4 py-2">V</th>
                <th className="border px-2 sm:px-4 py-2">E</th>
                <th className="border px-2 sm:px-4 py-2">D</th>
                <th className="border px-2 sm:px-4 py-2">GP</th>
                <th className="border px-2 sm:px-4 py-2">GC</th>
                <th className="border px-2 sm:px-4 py-2">SG</th>
              </tr>
            </thead>
            <tbody>
              {classificacao.map((time, index) => (
                <tr key={time.id} className="border">
                  <td className="border px-2 sm:px-4 py-2 font-bold flex items-center gap-2 sm:gap-4 text-left">
                    <span className="w-4 sm:w-6 text-right mr-2 sm:mr-4">
                      {index + 1}
                    </span>
                    <Image
                      src={time.imagem}
                      alt={time.nome}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="truncate">{time.nome}</span>
                  </td>
                  <td className="border px-2 sm:px-4 py-2">{time.P}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.J}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.V}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.E}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.D}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.GP}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.GC}</td>
                  <td className="border px-2 sm:px-4 py-2">{time.SG}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Artilharia do Campeonato */}
          <ArtilhariaCampeonato campeonatoSelecionado={campeonatoSelecionado} />
        </div>
      </div>
    </div>
  )
}

export default TabelaClassificacao
