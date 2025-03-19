import React from 'react'
import Image from 'next/image'

const Clubes = () => {
  return (
    <div className="container mx-auto p-8">
      <Image
        src="/assets/img_clubes.png"
        alt="Logo Clubes"
        width={1080}
        height={720}
        className="rounded-lg mx-auto"
      />
    </div>
  )
}

export default Clubes
