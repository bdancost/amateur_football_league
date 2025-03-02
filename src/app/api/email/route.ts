import { NextResponse } from 'next/server'
import transporter from '../../../server/config/nodemailer'
import { validateInput } from '../../../server/utils/validateInput'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Validação dos campos
    const validationError = validateInput(name, email, message)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    // Configuração do e-mail
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    }

    // Enviando o e-mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar o e-mail' },
      { status: 500 }
    )
  }
}
