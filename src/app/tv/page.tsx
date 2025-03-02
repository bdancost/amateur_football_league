'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'

const TVLigaJundiai: React.FC = () => {
  const [videos, setVideos] = useState<string[]>([])

  interface YouTubeItem {
    id: {
      videoId: string
    }
    snippet: {
      title: string
      description: string
      publishedAt: string
      thumbnails: {
        default: { url: string }
      }
    }
  }

  interface YouTubeResponse {
    items: YouTubeItem[]
  }

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=UC4OxaN6PUFNysShb28rWi1A&part=snippet&order=date&maxResults=6`
        )

        const data: YouTubeResponse = await response.json()

        console.log('Resposta da API:', data)

        if (data && data.items) {
          const videoIds = data.items.map((item) => item.id.videoId)
          setVideos(videoIds)
        } else {
          console.error(
            'Nenhum vídeo encontrado ou estrutura da resposta incorreta.'
          )
        }
      } catch (error) {
        console.error('Erro ao carregar vídeos:', error)
      }
    }
    fetchVideos()
  }, [])

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">TV Liga Jundiaí</h1>
      <div className="border-b-4 border-yellow-500 w-1/2 mb-6"></div>

      {/* 📡 Transmissão ao Vivo */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">🔴 AO VIVO</h2>
        <div className="relative w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/live_stream?channel=UC4OxaN6PUFNysShb28rWi1A"
            title="TV Liga Jundiaí - Ao Vivo"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 🎥 Últimos Vídeos */}
      <div className="w-full max-w-6xl mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          📺 Últimos Jogos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.length > 0 ? (
            videos.map((videoId, index) => (
              <iframe
                key={index}
                className="w-full aspect-video rounded-lg shadow-md"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Vídeo ${index + 1}`}
                allowFullScreen
              ></iframe>
            ))
          ) : (
            <p className="text-gray-600">Carregando vídeos...</p>
          )}
        </div>
      </div>

      {/* 🔴 Inscreva-se no Canal */}
      <div className="mt-8">
        <Link
          href="https://www.youtube.com/@TVLigaJundiai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
        >
          <FaYoutube size={25} /> Inscreva-se no Canal
        </Link>
      </div>
    </div>
  )
}

export default TVLigaJundiai
