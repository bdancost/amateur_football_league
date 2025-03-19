import React from 'react'
import Image from 'next/image'

const Noticias = () => {
  return (
    <div className="container mx-auto p-8">
      <Image
        src="/assets/img_noticias.png"
        alt="Logo Notícias"
        width={1080}
        height={720}
        className="rounded-lg mx-auto"
      />
    </div>
  )
}

export default Noticias
