export const SPORTS = [
  {
    id: 'nba',
    label: 'NBA',
    icon: '🏀',
    color: '#f97316',
    teamStatKeys: ['wins', 'losses', 'ptsPg', 'oppPtsPg'],
    statLabels: {
      stat1: 'PPG', stat2: 'RPG', stat3: 'APG', stat4: 'FG%',
      teamStat1: 'Wins', teamStat2: 'Losses', teamStat3: 'Pts/G', teamStat4: 'Opp Pts/G',
    },
  },
  {
    id: 'nfl',
    label: 'NFL',
    icon: '🏈',
    color: '#22c55e',
    teamStatKeys: ['wins', 'losses', 'ptsPg', 'ydsPg'],
    statLabels: {
      stat1: 'Pass Yds', stat2: 'Rush Yds', stat3: 'TDs', stat4: 'Rating',
      teamStat1: 'Wins', teamStat2: 'Losses', teamStat3: 'Pts/G', teamStat4: 'Yds/G',
    },
  },
  {
    id: 'mlb',
    label: 'MLB',
    icon: '⚾',
    color: '#3b82f6',
    teamStatKeys: ['wins', 'losses', 'ptsPg', 'era'],
    statLabels: {
      stat1: 'AVG', stat2: 'HR', stat3: 'RBI', stat4: 'OPS',
      teamStat1: 'Wins', teamStat2: 'Losses', teamStat3: 'R/G', teamStat4: 'ERA',
    },
  },
  {
    id: 'nhl',
    label: 'NHL',
    icon: '🏒',
    color: '#06b6d4',
    teamStatKeys: ['wins', 'losses', 'ptsPg', 'gaPg'],
    statLabels: {
      stat1: 'Goals', stat2: 'Assists', stat3: 'Points', stat4: '+/-',
      teamStat1: 'Wins', teamStat2: 'Losses', teamStat3: 'GF/G', teamStat4: 'GA/G',
    },
  },
]
