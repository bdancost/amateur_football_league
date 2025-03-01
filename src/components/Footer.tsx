'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Linha divisória */}
        <div className="border-t border-gray-400 my-2"></div>

        {/* Conteúdo do footer com flexbox para alinhar os itens na mesma linha */}
        <div className="flex justify-between items-center space-x-6">
          {/* Direitos autorais */}
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Liga de Futebol Amador Jundiaiense |
            Todos os direitos reservados.
          </p>

          {/* Desenvolvido por Daniel Fernandes */}
          <p className="text-sm">
            Desenvolvido por:{' '}
            <a
              href="https://github.com/bdancost"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Fernandes
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
