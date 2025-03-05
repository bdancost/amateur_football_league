'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Ícones melhores
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home: React.FC = () => {
  const banners = [
    { id: 1, src: '/assets/img01.jpeg', alt: 'Campeonato em andamento' },
    { id: 2, src: '/assets/img02.jpeg', alt: 'Destaques da Liga Jundiaiense' }
  ]

  useEffect(() => {
    // Garantir que as setas sempre apareçam
    const prevBtn = document.querySelector('.custom-prev') as HTMLElement
    const nextBtn = document.querySelector('.custom-next') as HTMLElement

    if (prevBtn && nextBtn) {
      prevBtn.style.display = 'flex'
      nextBtn.style.display = 'flex'
    }
  }, [])

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 🏆 Carrossel de Destaques */}
        <div className="lg:w-2/3 w-full relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-lg shadow-lg"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={banner.id}>
                <Image
                  key={index}
                  src={banner.src}
                  alt={banner.alt}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 📌 Setas personalizadas sem fundo arredondado */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button className="custom-prev p-2 bg-white/80 rounded-md shadow hover:bg-white transition flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button className="custom-next p-2 bg-white/80 rounded-md shadow hover:bg-white transition flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* 📢 Informações ao lado */}
        <div className="lg:w-1/3 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Últimas Notícias
          </h2>
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

      {/* 🏅 Introdução */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-primary">
          Bem-vindo à Liga Jundiaiense
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore as competições, clubes e notícias do futebol amador da região.
        </p>
      </div>
    </div>
  )
}

export default Home
