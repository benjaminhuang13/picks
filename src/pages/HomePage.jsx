import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage({ sports }) {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">Sports Analytics</h1>
        <p className="home-subtitle">Team stats, player performance, and recent game summaries across major leagues.</p>
      </div>
      <div className="sport-cards">
        {sports.map(sport => (
          <Link key={sport.id} to={`/${sport.id}`} className="sport-card" style={{ '--sport-color': sport.color }}>
            <span className="sport-card-icon">{sport.icon}</span>
            <span className="sport-card-label">{sport.label}</span>
            <span className="sport-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
