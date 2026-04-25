import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import SportPage from './pages/SportPage'
import HomePage from './pages/HomePage'
import { SPORTS } from './data/sports'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar sports={SPORTS} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage sports={SPORTS} />} />
          {SPORTS.map(sport => (
            <Route
              key={sport.id}
              path={`/${sport.id}`}
              element={<SportPage sport={sport} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
