import React from 'react'
import Image from 'next/image'

const Liga = () => {
  return (
    <div className="container mx-auto p-8">
      <Image
        src="/assets/img_liga.png"
        alt="Logo Liga"
        width={1080}
        height={720}
        className="rounded-lg mx-auto"
      />
    </div>
  )
}

export default Liga
