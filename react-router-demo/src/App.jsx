import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Header from './components/layout/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <main className='container section'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
