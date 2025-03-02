'use client'

import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [sucess, setSucess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })

    if (response.status === 200) {
      setStatus('Mensagem enviada com sucesso!')
      setSucess(true)
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.')
      setSucess(false)
    }
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold uppercase text-blue-900 mb-4">
        Fale Conosco
      </h1>
      <div className="border-b-4 border-yellow-500 w-1/2 mb-6"></div>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        Entre em contato conosco para tirar dúvidas, enviar sugestões ou obter
        mais informações.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Envie sua mensagem
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-gray-700 font-semibold mb-1">Nome:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-4"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-gray-700 font-semibold mb-1">E-mail:</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded mb-4"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-gray-700 font-semibold mb-1">Mensagem:</label>
          <textarea
            className="p-2 border border-gray-300 rounded mb-4"
            rows={4}
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="bg-blue-900 text-white font-bold p-2 rounded hover:bg-blue-700 transition">
            Enviar Mensagem
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center text-lg font-semibold p-2 rounded ${sucess ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'}`}
          >
            {status}
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-blue-900">Outros Contatos</h2>
        <p className="text-gray-700 mt-2">
          E-mail:{' '}
          <a
            href="mailto:contato@ligataubate.com.br"
            className="text-blue-600 underline"
          >
            contato@ligataubate.com.br
          </a>
        </p>
        <p className="text-gray-700 flex justify-center items-center gap-2">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaWhatsapp size={25} className="text-green-500" />
            (11) 985214278
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
