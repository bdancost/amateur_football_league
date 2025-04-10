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
    mandante: 'AA São Gonçalo',
    visitante: 'AE Cecap',
    placarMandante: 2,
    placarVisitante: 1,
    local: 'Estádio A',
    campeonato: 'sub20'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '17:00',
    mandante: 'AA Parque Aeroporto',
    visitante: 'AA Parque São Luiz',
    placarMandante: 0,
    placarVisitante: 3,
    local: 'Estádio C',
    campeonato: 'Divisão 1'
  }
]
