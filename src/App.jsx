import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/sections/Footer'
import Home from './pages/Home'

const BookCall = lazy(() => import('./pages/BookCall'))

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/book"
            element={
              <Suspense fallback={null}>
                <BookCall />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
