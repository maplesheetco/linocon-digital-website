import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/sections/Footer'
import Home from './pages/Home'

const BookCall = lazy(() => import('./pages/BookCall'))
const Articles = lazy(() => import('./pages/Articles'))
const Article = lazy(() => import('./pages/Article'))
const Service = lazy(() => import('./pages/Service'))

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
          <Route
            path="/services/:slug"
            element={
              <Suspense fallback={null}>
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/articles"
            element={
              <Suspense fallback={null}>
                <Articles />
              </Suspense>
            }
          />
          <Route
            path="/articles/:slug"
            element={
              <Suspense fallback={null}>
                <Article />
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
