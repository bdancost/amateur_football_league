export function formatarData(data: string): string {
  const [dia, mes, ano] = data.split('/')

  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  const mesNome = meses[parseInt(mes) - 1]

  return `${dia} de ${mesNome} de ${ano}`
}
