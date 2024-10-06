import {  useState } from 'react'
import './App.css'
import { PokemonList } from './modules/pokemon/pokemonList';


function App() {
  const initialArray: number[] = [];

  const [bestScore, setBestScore] = useState(0);
  const [uniquePokemonIds, setUniquePokemonIds] = useState(initialArray);
  
  function pokemonSelected(number: number) {
    if (uniquePokemonIds.includes(number)) {
      setUniquePokemonIds([]);
     
    } else {
      setUniquePokemonIds(
        [
          ...uniquePokemonIds,
          number
        ]
      )
    }
     
  }

  if (bestScore < uniquePokemonIds.length) {
    setBestScore(uniquePokemonIds.length);
  }

  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <h2>Get points by clicking on pokemon but don't click on any more than once!</h2>
      <h3 className='streak__counter'>Current streak is: {uniquePokemonIds.length} / 20</h3>
      <h3 className='best__score__counter'>Best Score: {bestScore}</h3>
      <PokemonList pokemonSelected={pokemonSelected}/>
      <div>

      </div>
    </>
  )
}

export default App
