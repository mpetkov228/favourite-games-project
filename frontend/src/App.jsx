import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Library from './pages/Library';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>
    </>
  )
}

export default App
