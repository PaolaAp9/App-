import { useState } from "react";
import Banner from "./componentes/Banner";
import Equipe from "./componentes/Equipe";
import Formulario from "./componentes/Formulario";

function App() {

  const linguagem = [
    {
      nome: 'Desenvolvedor Front-End',
      corPrimaria: '#094174',
      corSegundario: '#92bce3'
    },
    {
      nome: 'Desenvolvedor Back-End',
      corPrimaria: '#a50f55',
      corSegundario: '#D66298'
    },
    {
      nome: 'Desenvolvedor de Aplicativos Mobile',
      corPrimaria: '#840884',
      corSegundario: '#C463C4'
    }
  ]

  const [candidatos, setCandidatos] = useState([])

  const aoNovoCandidatoAdicionado = (candidato) => {
    setCandidatos([...candidatos, candidato])
  }

  return (

    <div>
      <Banner />
      <Formulario
        nomeLinguagem={linguagem.map(linguagem => linguagem.nome)}
        aoNovoCandidato={candidato => aoNovoCandidatoAdicionado(candidato)}
      />

      {linguagem.map(linguagem => <Equipe
        key={linguagem.nome}
        nome={linguagem.nome}
        corPrimaria={linguagem.corPrimaria}
        corSegundario={linguagem.corSegundario}
        candidatos={candidatos.filter(candidato => candidato.especializacao === linguagem.nome)}
      />)}


    </div>

  )
}

export default App;
