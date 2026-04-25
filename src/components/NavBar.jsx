import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ sports }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="navbar-logo">📊</span>
        <span className="navbar-title">Picks</span>
      </NavLink>
      <div className="navbar-links">
        {sports.map(sport => (
          <NavLink
            key={sport.id}
            to={`/${sport.id}`}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            style={{ '--sport-color': sport.color }}
          >
            <span className="nav-icon">{sport.icon}</span>
            <span className="nav-label">{sport.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
