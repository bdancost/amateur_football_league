export type Time = {
  id: number
  nome: string
  imagem: string
  J: number
  V: number
  E: number
  D: number
  GP: number
  GC: number
  P?: number
  SG?: number
  campeonato: string
}

export const times: Time[] = [
  {
    id: 1,
    nome: 'AE Cecap',
    imagem: '/assets/clubes/AE CEcap.jpeg',
    J: 0,
    V: 0,
    E: 0,
    D: 0,
    GP: 0,
    GC: 0,
    campeonato: '1° Divisão'
  },
  {
    id: 2,
    nome: 'AA São Gonçalo',
    imagem: '/assets/clubes/AA São Gonçalo.jpeg',
    J: 0,
    V: 0,
    E: 0,
    D: 0,
    GP: 0,
    GC: 0,
    campeonato: '1° Divisão'
  },
  {
    id: 3,
    nome: 'AE Vila São Geraldo',
    imagem: '/assets/clubes/AE Vila São Geraldo.jpeg',
    J: 0,
    V: 0,
    E: 0,
    D: 0,
    GP: 0,
    GC: 0,
    campeonato: '1° Divisão'
  }
]
