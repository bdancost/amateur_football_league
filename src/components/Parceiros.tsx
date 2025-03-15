import React from 'react'
import Image from 'next/image'

const Parceiros = () => {
  return (
    <>
      {/* Título */}
      <div className="bg-gray-100 lg:w-3/5 w-full p-3 rounded-lg mt-10 mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase text-center">
          Parceiros da Liga 2025
        </h2>
      </div>

      {/* Grid Responsivo */}
      <div className="lg:w-3/5 w-full grid grid-cols-2 md:grid-cols-3 justify-items-center mt-4 mx-auto gap-6">
        {['uniex', 'choperia', 'mb_news', 'tintino_pizza', 'drogaria'].map(
          (partner) => (
            <div
              key={partner}
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-96"
            >
              <Image
                src={`/assets/${partner}.png`}
                alt={`Logo ${partner.replace('_', ' ')}`}
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          )
        )}
      </div>
    </>
  )
}

export default Parceiros
