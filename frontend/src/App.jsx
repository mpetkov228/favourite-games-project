import { Route, Routes } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home';
import Library from './pages/Library';
import NavBar from './components/NavBar';
import Game from './pages/Game';
import { LibraryProvider } from './contexts/LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </main>
    </LibraryProvider>
  )
}

export default App
