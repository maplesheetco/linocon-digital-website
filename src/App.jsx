import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/sections/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
