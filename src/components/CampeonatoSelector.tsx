import { sections } from '@/lib/clubes'

interface CampeonatoSelectorProps {
  campeonatoSelecionado: string
  setCampeonatoSelecionado: (id: string) => void
}

const CampeonatoSelector = ({
  campeonatoSelecionado,
  setCampeonatoSelecionado
}: CampeonatoSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 ml-10 mr-10">
      {sections.map((campeonato) => (
        <button
          key={campeonato.id}
          onClick={() => setCampeonatoSelecionado(campeonato.id)}
          className={`px-4 py-2 rounded text-white font-semibold transition mb-10
            ${
              campeonato.id === campeonatoSelecionado
                ? 'bg-foreground hover:bg-foreground/80'
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
        >
          {campeonato.title}
        </button>
      ))}
      <div className=" w-full border-b-2"></div>
    </div>
  )
}

export default CampeonatoSelector
