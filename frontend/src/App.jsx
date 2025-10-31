import './App.css'
import GameCard from './components/GameCard'

function App() {
  const games = [
    { url: '', title: 'Far Cry', releaseYear: 2004 },
    { url: '', title: 'Super Mario', releaseYear: 1985 }
  ];

  return (
    <>
      <div>
        {games.map(game => <GameCard game={game} />)}
      </div>
    </>
  )
}

export default App
