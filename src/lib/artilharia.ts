// lib/artilharia.ts

export type Artilheiro = {
  id: number
  nome: string
  gols: number
  imagemJogador: string
  imagemTime: string
  nomeTime: string
  campeonato: string
}

export const artilheiros: Artilheiro[] = [
  {
    id: 1,
    nome: 'João Silva',
    gols: 12,
    imagemJogador: '/jogadores/joao-silva.png',
    imagemTime: '/assets/clubes/AA Parque Aeroporto.jpeg',
    nomeTime: 'AA Parque Aeroporto',
    campeonato: '1° Divisão'
  },
  {
    id: 2,
    nome: 'Pedro Lima',
    gols: 10,
    imagemJogador: '/jogadores/pedro-lima.png',
    imagemTime: '/assets/clubes/AA Parque São Luiz.jpeg',
    nomeTime: 'AA Parque São Luiz',
    campeonato: '1° Divisão'
  }
  // Adicione outros artilheiros aqui...
]
