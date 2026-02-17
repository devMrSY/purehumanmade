import './App.css'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <main className="page">
      <div className="hero">
        <div className="badge">Domain Available</div>
        <h1>Domain is available for rent.</h1>
        <div className="contact">
          <p className="contact-name">Sooraj Yadav</p>
          <a href="tel:+919211139060" className="contact-link">
            +91 92111 39060
          </a>
          <a href="mailto:frankSooraj@gmail.com" className="contact-link">
            frankSooraj@gmail.com
          </a>
        </div>
      </div>
    </main>
  )
}

function NotFound() {
  return (
    <main className="page">
      <div className="hero">
        <div className="badge">404</div>
        <h1>Page not found.</h1>
        <p className="lead">The domain is available, but this route is not.</p>
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
