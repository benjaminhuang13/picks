import './TeamSummary.css'

export default function TeamSummary({ team, sport, gameCount, onGameCountChange }) {
  const { statLabels } = sport

  return (
    <div className="team-summary card">
      <div className="team-summary-header">
        <div>
          <div className="team-summary-name">{team.name}</div>
          <div className="team-summary-meta">
            <span className="tag">{team.conf}</span>
            <span className="team-rank">#{team.rank} in conference</span>
          </div>
        </div>
        <div className="game-count-control">
          <label htmlFor="game-count">Last</label>
          <select
            id="game-count"
            value={gameCount}
            onChange={e => onGameCountChange(Number(e.target.value))}
          >
            {[5, 10, 20].map(n => (
              <option key={n} value={n}>{n} games</option>
            ))}
          </select>
        </div>
      </div>

      <div className="stat-grid">
        {sport.teamStatKeys.map((key, i) => (
          <StatCard
            key={key}
            label={statLabels[`teamStat${i + 1}`]}
            value={team[key]}
          />
        ))}
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value ?? '—'}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
