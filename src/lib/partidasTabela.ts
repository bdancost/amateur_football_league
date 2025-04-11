// src/lib/partidasTabela.ts

export type Partida = {
  rodada: number
  data: string
  horario: string
  mandante: string
  visitante: string
  placarMandante: number
  placarVisitante: number
  local: string
  campeonato: string
}

// Adicione quantas partidas quiser aqui
export const partidasTabela: Partida[] = [
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '10:00',
    mandante: 'EC MOURISCO',
    visitante: 'EC XV DE NOVEMBRO',
    placarMandante: 0,
    placarVisitante: 0,
    local: 'CAMPO MUNICIPAL JARDIM MOURISCO',
    campeonato: '1° Divisão'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '10:00',
    mandante: 'EC IPANEMA',
    visitante: 'AA PARQUE SÃO LUIZ',
    placarMandante: 0,
    placarVisitante: 0,
    local: 'CAMPO SEBASTIÃO PEREIRA GOULART',
    campeonato: '1° Divisão'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '10:00',
    mandante: 'UNIÃO OPERÁRIA',
    visitante: 'ATLÉTICO CECAP',
    placarMandante: 0,
    placarVisitante: 0,
    local: 'CAMPO UNIÃO OPERÁRIA',
    campeonato: '1° Divisão'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '10:00',
    mandante: 'UNIDOS SÃO GONÇALO',
    visitante: 'ÁGUA QUENTE',
    placarMandante: 0,
    placarVisitante: 0,
    local: 'CAMPO JOSÉ SILVA',
    campeonato: '1° Divisão'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '10:00',
    mandante: 'PARQUE AEROPORTO',
    visitante: 'VILA SÃO JOSÉ',
    placarMandante: 0,
    placarVisitante: 0,
    local: 'ARENA PHILKO',
    campeonato: '1° Divisão'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '10:00',
    mandante: 'VILA SÃO GERALDO',
    visitante: 'JUVENTUS',
    placarMandante: 0,
    placarVisitante: 0,
    local: 'CAMPO JARDIM SÃO GERALDO',
    campeonato: '1° Divisão'
  }
]
