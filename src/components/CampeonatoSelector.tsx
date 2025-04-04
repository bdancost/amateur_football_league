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
    <div>
      {sections.map((campeonato) => (
        <button
          key={campeonato.id}
          onClick={() => setCampeonatoSelecionado(campeonato.id)}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor:
              campeonato.id === campeonatoSelecionado ? 'blue' : 'gray',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {campeonato.title}
        </button>
      ))}
    </div>
  )
}

export default CampeonatoSelector
