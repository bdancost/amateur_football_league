import React from 'react'
import Image from 'next/image' // Certifique-se de importar corretamente

const Parceiros = () => {
  return (
    <>
      {/* Container dos Parceiros */}
      <div className="bg-gray-100 lg:w-3/5 w-full p-3 rounded-lg mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase">
          Parceiros da Liga 2025
        </h2>
      </div>

      {/* Grid de imagens */}
      <div className="lg:w-3/5 w-full grid grid-cols-3 justify-items-center mt-4">
        {['uniex', 'choperia', 'mb_news'].map((partner) => (
          <Image
            key={partner}
            src={`/assets/${partner}.png`}
            alt={`Logo ${partner.replace('_', ' ')}`}
            width={300} // Aumento proporcional
            height={300}
            className="object-contain"
          />
        ))}

        {/* Segunda linha - Forçando 2 colunas */}
        <div className="col-span-3 flex justify-center items-center gap-6 flex-wrap">
          {['tintino_pizza', 'drogaria'].map((partner) => (
            <Image
              key={partner}
              src={`/assets/${partner}.png`}
              alt={`Logo ${partner.replace('_', ' ')}`}
              width={350}
              height={350}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Parceiros
