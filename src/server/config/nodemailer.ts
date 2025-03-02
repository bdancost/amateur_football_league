import nodemailer, { Transporter } from 'nodemailer'

console.log('EMAIL_USER:', process.env.EMAIL_USER)
console.log('EMAIL_PASS:', process.env.EMAIL_PASS)

export const transporter: Transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Porta para TLS
  secure: false, // Use true para SSL (porta 465)
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string
  }
})

export default transporter
