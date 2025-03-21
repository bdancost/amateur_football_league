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

const times: Time[] = [
  { nome: 'Time A', J: 5, V: 3, E: 1, D: 1, GP: 10, GC: 5 },
  { nome: 'Time B', J: 5, V: 2, E: 2, D: 1, GP: 8, GC: 6 },
  { nome: 'Time C', J: 5, V: 1, E: 3, D: 1, GP: 7, GC: 7 }
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

  const colunasTabela: (keyof Time)[] = [
    'nome',
    'P',
    'J',
    'V',
    'E',
    'D',
    'GP',
    'GC',
    'SG'
  ]

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Classificação</h2>
      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            {colunasTabela.map((coluna) => (
              <th key={coluna} className="border border-gray-300 px-4 py-2">
                {coluna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classificacao.map((time, index) => (
            <tr key={index} className="border border-gray-300">
              {colunasTabela.map((coluna) => (
                <td key={coluna} className="border border-gray-300 px-4 py-2">
                  {time[coluna] ?? '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TabelaClassificacao
