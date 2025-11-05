import { Route, Routes } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home';
import Library from './pages/Library';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
