import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
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
        <form className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1">Nome:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-4"
            placeholder="Seu nome"
          />

          <label className="text-gray-700 font-semibold mb-1">E-mail:</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded mb-4"
            placeholder="Seu e-mail"
          />

          <label className="text-gray-700 font-semibold mb-1">Mensagem:</label>
          <textarea
            className="p-2 border border-gray-300 rounded mb-4"
            rows="4"
            placeholder="Digite sua mensagem"
          ></textarea>

          <button className="bg-blue-900 text-white font-bold p-2 rounded hover:bg-blue-700 transition">
            Enviar Mensagem
          </button>
        </form>
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
          <FaWhatsapp size={25} className="text-green-500" /> (12) 3456-7890
        </p>
      </div>
    </div>
  )
}

export default Contact
