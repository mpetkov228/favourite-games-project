import './App.css'
import Home from './pages/Home';

function App() {
  const games = [
    { url: '', title: 'Far Cry', releaseYear: 2004 },
    { url: '', title: 'Super Mario', releaseYear: 1985 },
    { url: '', title: 'Grand Theft Auto III', releaseYear: 2001 }
  ];

  return (
    <>
      <Home games={games} />
    </>
  )
}

export default App
