import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import { useState } from 'react'
import { Alert, Button, Spinner, Container } from 'react-bootstrap'
import LandingPage from './pages/LandingPage'
import { User, State } from './interface'
import Navbar from './components/Navbar'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const state: State = {
    setUser: setUser,
    setLoading: setLoading,
    setError: setError,
  }

  return (
    <>
      {error ? (
        <Alert
          key="danger"
          variant="danger"
          onClose={() => setError('')}
          dismissible
        >
          {error}
        </Alert>
      ) : (
        <></>
      )}
      {loading ? (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : user ? (
        <>
          <Navbar {...state} />
          <Container>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/store" element={<Store />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage {...state} />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  )
}

export default App
