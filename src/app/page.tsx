'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home: React.FC = () => {
  const banners = [
    { id: 1, src: '/assets/img01.jpeg', alt: 'Campeonato em andamento' },
    { id: 2, src: '/assets/img02.jpeg', alt: 'Destaques da Liga Jundiaiense' }
  ]

  useEffect(() => {
    document.querySelectorAll('.custom-prev, .custom-next').forEach((btn) => {
      ;(btn as HTMLElement).style.display = 'flex'
    })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Container principal */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Carrossel */}
        <div className="lg:w-3/5 w-full relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-lg shadow-lg"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={720}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Setas personalizadas */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button className="custom-prev p-2 bg-white/80 shadow rounded-md hover:bg-white transition flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button className="custom-next p-2 bg-white/80 shadow rounded-md hover:bg-white transition flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Informações ao lado */}
        <div className="lg:w-2/5 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="border-b-4 border-primary w-full mb-6"></div>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Horário de Funcionamento
          </h2>
          <p className="text-gray-600 text-md mb-4">
            <b>Secretaria:</b> Terça-feira e Quinta-feira: 18h30 às 20h00
          </p>
          <p className="text-gray-600 text-md mb-4">
            <b>Presidência:</b> Terça-feira e Quinta-feira: 18h30 às 19h30
          </p>
          <h2 className="text-xl font-bold text-foreground mb-4">Endereço</h2>
          <p className="text-gray-600 text-md mb-4">
            Parque Dr. Barbosa de Oliveira, 34 - Rodoviária Velha Sobre Loja -
            Sala 02
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>⚽ Nova temporada começa em breve!</li>
            <li>🏅 Confira os destaques do último campeonato.</li>
            <li>📢 Siga-nos no YouTube para transmissões ao vivo!</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://www.youtube.com/@TVLigaJundiai"
              target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              🔴 Inscreva-se no nosso canal!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
