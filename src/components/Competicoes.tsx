import Image from 'next/image'

const Competicoes = () => (
  <div className="container mx-auto p-8">
    <Image
      src="/assets/img_jogos.png"
      alt="Logo Jogos Competições"
      width={780}
      height={720}
      className="rounded-lg mx-auto"
    />
  </div>
)

export default Competicoes
