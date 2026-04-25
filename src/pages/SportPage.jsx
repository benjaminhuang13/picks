import { useState, useMemo } from 'react'
import { getSportData } from '../data/index'
import TeamSummary from '../components/TeamSummary'
import PlayerTable from '../components/PlayerTable'
import RecentGames from '../components/RecentGames'
import './SportPage.css'

export default function SportPage({ sport }) {
  const data = useMemo(() => getSportData(sport.id), [sport.id])
  const [selectedTeamId, setSelectedTeamId] = useState('')
  const [gameCount, setGameCount] = useState(10)

  const team = data?.teams.find(t => t.id === selectedTeamId) ?? null
  const players = (data?.players[selectedTeamId] ?? [])
  const games = (data?.games[selectedTeamId] ?? [])

  return (
    <div className="sport-page">
      <div className="sport-page-header" style={{ '--sport-color': sport.color }}>
        <div className="sport-page-title">
          <span className="sport-page-icon">{sport.icon}</span>
          <h1>{sport.label}</h1>
        </div>
      </div>

      <div className="sport-page-body">
        <div className="team-selector-row">
          <label htmlFor="team-select" className="team-selector-label">Select Team</label>
          <select
            id="team-select"
            value={selectedTeamId}
            onChange={e => {
              setSelectedTeamId(e.target.value)
              setGameCount(10)
            }}
          >
            <option value="">— Choose a team —</option>
            {data?.teams.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        {!selectedTeamId && (
          <div className="empty-state">
            <h3>Select a team to get started</h3>
            <p>Choose from the dropdown above to view team stats, player performance, and recent games.</p>
          </div>
        )}

        {team && (
          <>
            <TeamSummary
              team={team}
              sport={sport}
              gameCount={gameCount}
              onGameCountChange={setGameCount}
            />
            {players.length > 0 && (
              <PlayerTable players={players} sport={sport} />
            )}
            <RecentGames games={games} sport={sport} gameCount={gameCount} />
          </>
        )}
      </div>
    </div>
  )
}
