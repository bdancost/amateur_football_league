// src/config/nodemailer.ts
import nodemailer, { Transporter } from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config() // Carregar variáveis de ambiente

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error(
    'Erro: Credenciais de e-mail não definidas. Verifique seu arquivo .env.'
  )
  process.exit(1)
}

const transporter: Transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Porta para TLS
  secure: false, // Use true para SSL (porta 465)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export default transporter
