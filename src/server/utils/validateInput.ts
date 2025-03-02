export function validateInput(
  name: string,
  email: string,
  message: string
): string | null {
  if (!name || !email || !message) {
    return 'Todos os campos são obrigatórios'
  }
  if (!email.includes('@')) {
    return 'E-mail inválido'
  }
  return null
}
