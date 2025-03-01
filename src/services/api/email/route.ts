import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Configuração do transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })

    // Configuração do e-mail
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
    }

    // Enviando o e-mail
    await transporter.sendMail(mailOptions)

    return new Response(
      JSON.stringify({ message: 'E-mail enviado com sucesso!' }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao enviar o e-mail' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
