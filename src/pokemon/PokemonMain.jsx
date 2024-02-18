
import { PokemonProvider } from '/src/pokemon/contexts/PokemonContext.jsx'
import Control  from '/src/pokemon/components/control/Control.jsx'


function PokemonMain() {

  return (
    <>
      <div>
     <PokemonProvider>
        <Control></Control>
     </PokemonProvider>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default PokemonMain
