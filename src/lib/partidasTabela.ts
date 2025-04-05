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

export const partidas: Partida[] = [
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '15:00',
    mandante: 'Time A',
    visitante: 'Time B',
    placarMandante: 2,
    placarVisitante: 1,
    local: 'Estádio A',
    campeonato: 'brasileirao'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '17:00',
    mandante: 'Time C',
    visitante: 'Time A',
    placarMandante: 0,
    placarVisitante: 3,
    local: 'Estádio C',
    campeonato: 'libertadores'
  }
]
