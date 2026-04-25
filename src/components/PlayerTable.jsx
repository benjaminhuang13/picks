import { useState } from 'react'
import './PlayerTable.css'

export default function PlayerTable({ players, sport }) {
  const [sortKey, setSortKey] = useState('stat1')
  const [sortDir, setSortDir] = useState('desc')
  const { statLabels } = sport

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir(d => d === 'desc' ? 'asc' : 'desc')
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const sorted = [...players].sort((a, b) => {
    const av = a[sortKey] ?? -Infinity
    const bv = b[sortKey] ?? -Infinity
    return sortDir === 'desc' ? bv - av : av - bv
  })

  function arrow(key) {
    if (sortKey !== key) return <span className="sort-arrow inactive">↕</span>
    return <span className="sort-arrow">{sortDir === 'desc' ? '↓' : '↑'}</span>
  }

  const cols = [
    { key: 'name', label: 'Player', sortable: false },
    { key: 'pos', label: 'POS', sortable: false },
    { key: 'stat1', label: statLabels.stat1, sortable: true },
    { key: 'stat2', label: statLabels.stat2, sortable: true },
    { key: 'stat3', label: statLabels.stat3, sortable: true },
    { key: 'stat4', label: statLabels.stat4, sortable: true },
  ]

  return (
    <section className="player-table-section">
      <h2 className="section-title">Player Stats</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {cols.map(col => (
                <th
                  key={col.key}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  className={col.sortable ? (sortKey === col.key ? 'sort-active' : '') : 'no-sort'}
                >
                  {col.label} {col.sortable && arrow(col.key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map(p => (
              <tr key={p.id}>
                <td className="player-name">{p.name}</td>
                <td><span className="pos-badge">{p.pos}</span></td>
                <td className="num-cell">{fmt(p.stat1, sport.id, 'stat1')}</td>
                <td className="num-cell">{fmt(p.stat2, sport.id, 'stat2')}</td>
                <td className="num-cell">{fmt(p.stat3, sport.id, 'stat3')}</td>
                <td className="num-cell">{p.stat4 != null ? fmt(p.stat4, sport.id, 'stat4') : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function fmt(val, sportId, statKey) {
  if (val == null) return '—'
  if (sportId === 'mlb' && statKey === 'stat1') return val.toFixed(3)
  if (sportId === 'mlb' && statKey === 'stat4') return val.toFixed(3)
  if (typeof val === 'number' && !Number.isInteger(val)) return val.toFixed(1)
  return val
}
