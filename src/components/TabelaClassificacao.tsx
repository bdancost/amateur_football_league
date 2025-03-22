import { Clock } from 'lucide-react' // Ícone de relógio

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
    local: 'Estádio Municipal'
  },
  {
    rodada: 1,
    data: '20/03/2025',
    horario: '17:00',
    mandante: 'Time C',
    visitante: 'Time A',
    placarMandante: 0,
    placarVisitante: 3,
    local: 'Arena Nacional'
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
  const classificacao = calcularClassificacao().sort(
    (a, b) => (b.P ?? 0) - (a.P ?? 0) || (b.SG ?? 0) - (a.SG ?? 0)
  )

  return (
    <div className="container mx-auto p-4">
      {/* Tabela de Classificação */}
      <h2 className="text-xl font-bold text-center mb-4">Classificação</h2>
      <table className="max-w-7xl mx-auto w-full border-collapse border border-gray-300 text-center uppercase">
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
      <h2 className="text-xl font-bold text-center mt-8 mb-4">1ª Rodada</h2>
      {partidas.map((partida, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto mb-4 p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-between"
        >
          {/* Horário à esquerda */}
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={20} />
            <span>{partida.horario}</span>
          </div>

          {/* Placar centralizado */}
          <div className="flex justify-center items-center space-x-4 text-xl font-bold">
            <span>{partida.mandante}</span>
            <span className="bg-gray-300 px-3 py-1 rounded-lg">
              {partida.placarMandante} - {partida.placarVisitante}
            </span>
            <span>{partida.visitante}</span>
          </div>

          {/* Local à direita */}
          <div className="text-gray-600 text-sm">Local: {partida.local}</div>
        </div>
      ))}
    </div>
  )
}

export default TabelaClassificacao
