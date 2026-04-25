import './RecentGames.css'

export default function RecentGames({ games, sport, gameCount }) {
  const visible = games.slice(0, gameCount)
  const { statLabels } = sport

  if (!visible.length) {
    return (
      <section className="recent-games-section">
        <h2 className="section-title">Recent Games</h2>
        <div className="empty-state"><p>No game data available.</p></div>
      </section>
    )
  }

  return (
    <section className="recent-games-section">
      <h2 className="section-title">Recent Games <span className="game-count-tag">Last {visible.length}</span></h2>
      <div className="games-scroll">
        {visible.map((g, i) => (
          <GameCard key={i} game={g} sport={sport} statLabels={statLabels} />
        ))}
      </div>
    </section>
  )
}

function GameCard({ game, sport, statLabels }) {
  const dateStr = new Date(game.date + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric'
  })

  return (
    <div className={`game-card ${game.win ? 'win' : 'loss'}`}>
      <div className="game-card-header">
        <span className={`badge ${game.win ? 'badge-win' : 'badge-loss'}`}>
          {game.win ? 'W' : 'L'}
        </span>
        <span className="game-date">{dateStr}</span>
      </div>
      <div className="game-opponent">vs {game.opponent}</div>
      <div className="game-score">
        {game.score} – {game.oppScore}
      </div>
      <div className="game-stats">
        <GameStat label={statLabels.stat1} value={game.stat1} sportId={sport.id} statKey="stat1" />
        <GameStat label={statLabels.stat2} value={game.stat2} sportId={sport.id} statKey="stat2" />
        <GameStat label={statLabels.stat3} value={game.stat3} sportId={sport.id} statKey="stat3" />
      </div>
    </div>
  )
}

function GameStat({ label, value, sportId, statKey }) {
  let display = value
  if (sportId === 'mlb' && statKey === 'stat1') display = Number(value).toFixed(3)
  return (
    <div className="game-stat">
      <span className="game-stat-val">{display}</span>
      <span className="game-stat-label">{label}</span>
    </div>
  )
}
