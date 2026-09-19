import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/sections/Footer'
import Home from './pages/Home'
import BookCall from './pages/BookCall'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookCall />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
