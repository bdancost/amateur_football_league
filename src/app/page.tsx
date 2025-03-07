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
    const prevBtn = document.querySelector('.custom-prev') as HTMLElement
    const nextBtn = document.querySelector('.custom-next') as HTMLElement

    if (prevBtn && nextBtn) {
      prevBtn.style.display = 'flex'
      nextBtn.style.display = 'flex'
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* ⬆️ max-w-5xl -> aumenta as margens laterais */}

      <div className="flex flex-col lg:flex-row gap-10">
        {/* 🏆 Carrossel de Destaques */}
        <div className="lg:w-3/5 w-full relative">
          {/* ⬆️ lg:w-3/5 -> reduz um pouco o tamanho do carrossel */}

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
                  width={720} // ⬅️ Diminuído de 800 para 720
                  height={400} // ⬅️ Proporcionalmente ajustado
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 📌 Setas personalizadas */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button className="custom-prev p-2 bg-white/80 shadow rounded-md hover:bg-white transition flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button className="custom-next p-2 bg-white/80 shadow rounded-md hover:bg-white transition flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* 📢 Informações ao lado */}
        <div className="lg:w-2/5 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
          {/* ⬆️ lg:w-2/5 -> reduz um pouco a largura das informações */}

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
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-primary">
          Bem-vindo à Liga Jundiaiense
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore as competições, clubes e notícias do futebol amador da região.
        </p>
      </div>

      {/* 🚀 Parceiros da Liga 2025 */}
      <div className="bg-gray-100 lg:w-3/5 w-full justify-center items-center  p-4 rounded-lg mt-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase">
          Parceiros da Liga 2025
        </h2>
      </div>

      <div>
        <Image src="/assets/uniex.png" alt="UniEx" width={200} height={100} />
      </div>
    </div>
  )
}

export default Home
