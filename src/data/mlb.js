export const teams = [
  { id: 'lad', name: 'Los Angeles Dodgers', wins: 100, losses: 62, ptsPg: 5.1, era: 3.41, rank: 1, conf: 'NL West' },
  { id: 'atl', name: 'Atlanta Braves', wins: 104, losses: 58, ptsPg: 5.6, era: 3.88, rank: 1, conf: 'NL East' },
  { id: 'bal', name: 'Baltimore Orioles', wins: 101, losses: 61, ptsPg: 5.4, era: 3.96, rank: 1, conf: 'AL East' },
  { id: 'hou', name: 'Houston Astros', wins: 90, losses: 72, ptsPg: 4.7, era: 3.78, rank: 2, conf: 'AL West' },
  { id: 'min', name: 'Minnesota Twins', wins: 87, losses: 75, ptsPg: 4.5, era: 4.02, rank: 1, conf: 'AL Central' },
  { id: 'phi', name: 'Philadelphia Phillies', wins: 95, losses: 67, ptsPg: 5.2, era: 3.65, rank: 2, conf: 'NL East' },
]

export const players = {
  lad: [
    { id: 1, name: 'Shohei Ohtani', pos: 'DH', stat1: 0.310, stat2: 44, stat3: 95, stat4: 1.036 },
    { id: 2, name: 'Freddie Freeman', pos: '1B', stat1: 0.331, stat2: 29, stat3: 102, stat4: 0.984 },
    { id: 3, name: 'Mookie Betts', pos: 'RF', stat1: 0.307, stat2: 39, stat3: 107, stat4: 0.994 },
    { id: 4, name: 'Will Smith', pos: 'C', stat1: 0.268, stat2: 19, stat3: 61, stat4: 0.802 },
    { id: 5, name: 'Teoscar Hernández', pos: 'LF', stat1: 0.272, stat2: 26, stat3: 99, stat4: 0.832 },
  ],
  atl: [
    { id: 1, name: 'Ronald Acuña Jr.', pos: 'RF', stat1: 0.337, stat2: 41, stat3: 106, stat4: 1.012 },
    { id: 2, name: 'Matt Olson', pos: '1B', stat1: 0.269, stat2: 54, stat3: 139, stat4: 0.918 },
    { id: 3, name: 'Austin Riley', pos: '3B', stat1: 0.272, stat2: 37, stat3: 97, stat4: 0.888 },
    { id: 4, name: 'Marcell Ozuna', pos: 'LF', stat1: 0.258, stat2: 40, stat3: 100, stat4: 0.872 },
    { id: 5, name: 'Spencer Strider', pos: 'P', stat1: 0.198, stat2: 0, stat3: 0, stat4: null },
  ],
  bal: [
    { id: 1, name: 'Gunnar Henderson', pos: 'SS', stat1: 0.281, stat2: 28, stat3: 82, stat4: 0.891 },
    { id: 2, name: 'Adley Rutschman', pos: 'C', stat1: 0.255, stat2: 20, stat3: 72, stat4: 0.802 },
    { id: 3, name: 'Anthony Santander', pos: 'RF', stat1: 0.241, stat2: 35, stat3: 90, stat4: 0.844 },
    { id: 4, name: 'Ryan Mountcastle', pos: '1B', stat1: 0.249, stat2: 28, stat3: 86, stat4: 0.810 },
    { id: 5, name: 'Cedric Mullins', pos: 'CF', stat1: 0.249, stat2: 18, stat3: 59, stat4: 0.784 },
  ],
  hou: [
    { id: 1, name: 'Yordan Alvarez', pos: 'LF', stat1: 0.293, stat2: 31, stat3: 97, stat4: 0.962 },
    { id: 2, name: 'Alex Bregman', pos: '3B', stat1: 0.262, stat2: 19, stat3: 65, stat4: 0.796 },
    { id: 3, name: 'Jose Altuve', pos: '2B', stat1: 0.311, stat2: 16, stat3: 54, stat4: 0.852 },
    { id: 4, name: 'Jeremy Peña', pos: 'SS', stat1: 0.241, stat2: 14, stat3: 60, stat4: 0.726 },
    { id: 5, name: 'Framber Valdez', pos: 'P', stat1: 0.219, stat2: 0, stat3: 0, stat4: null },
  ],
  min: [
    { id: 1, name: 'Carlos Correa', pos: 'SS', stat1: 0.255, stat2: 18, stat3: 60, stat4: 0.784 },
    { id: 2, name: 'Royce Lewis', pos: '3B', stat1: 0.268, stat2: 15, stat3: 48, stat4: 0.812 },
    { id: 3, name: 'Byron Buxton', pos: 'CF', stat1: 0.262, stat2: 19, stat3: 58, stat4: 0.830 },
    { id: 4, name: 'Ryan Jeffers', pos: 'C', stat1: 0.253, stat2: 20, stat3: 61, stat4: 0.796 },
    { id: 5, name: 'Pablo López', pos: 'P', stat1: 0.216, stat2: 0, stat3: 0, stat4: null },
  ],
  phi: [
    { id: 1, name: 'Bryce Harper', pos: '1B', stat1: 0.306, stat2: 30, stat3: 103, stat4: 0.964 },
    { id: 2, name: 'Trea Turner', pos: 'SS', stat1: 0.276, stat2: 26, stat3: 76, stat4: 0.834 },
    { id: 3, name: 'Kyle Schwarber', pos: 'LF', stat1: 0.197, stat2: 38, stat3: 92, stat4: 0.847 },
    { id: 4, name: 'Nick Castellanos', pos: 'RF', stat1: 0.262, stat2: 22, stat3: 83, stat4: 0.794 },
    { id: 5, name: 'Zack Wheeler', pos: 'P', stat1: 0.201, stat2: 0, stat3: 0, stat4: null },
  ],
}

function game(opp, date, win, score, oppScore, avg, hr, rbi) {
  return { opponent: opp, date, win, score, oppScore, stat1: avg, stat2: hr, stat3: rbi }
}

export const games = {
  lad: [
    game('SD', '2024-04-14', true, 8, 3, 0.298, 2, 7),
    game('SF', '2024-04-12', true, 6, 4, 0.271, 1, 5),
    game('COL', '2024-04-11', true, 11, 2, 0.312, 3, 10),
    game('ARI', '2024-04-09', false, 3, 5, 0.224, 0, 2),
    game('NYM', '2024-04-07', true, 7, 4, 0.285, 2, 6),
    game('CHC', '2024-04-05', true, 9, 5, 0.295, 2, 8),
    game('MIL', '2024-04-03', false, 2, 4, 0.218, 0, 1),
    game('STL', '2024-04-01', true, 8, 3, 0.287, 2, 7),
    game('WSH', '2024-03-30', true, 10, 4, 0.301, 3, 9),
    game('PHI', '2024-03-28', false, 4, 6, 0.243, 1, 3),
  ],
  atl: [
    game('PHI', '2024-04-14', true, 7, 4, 0.308, 2, 6),
    game('MIA', '2024-04-12', true, 9, 3, 0.321, 3, 8),
    game('NYM', '2024-04-11', true, 6, 2, 0.289, 1, 5),
    game('WSH', '2024-04-09', true, 11, 5, 0.331, 4, 10),
    game('STL', '2024-04-07', false, 3, 5, 0.235, 0, 2),
    game('CHC', '2024-04-05', true, 8, 4, 0.298, 2, 7),
    game('MIL', '2024-04-03', true, 7, 3, 0.278, 2, 6),
    game('CIN', '2024-04-01', true, 10, 6, 0.315, 3, 9),
    game('PIT', '2024-03-30', true, 9, 4, 0.302, 2, 8),
    game('COL', '2024-03-28', true, 12, 5, 0.338, 4, 11),
  ],
  bal: [], hou: [], min: [], phi: [],
}

;['bal', 'hou', 'min', 'phi'].forEach(id => {
  games[id] = Array.from({ length: 10 }, (_, i) => game(
    `OPP${i + 1}`,
    `2024-0${Math.floor(i / 3) + 3}-${(i % 10) + 10}`,
    i % 3 !== 2,
    5 + (i % 4),
    3 + (i % 3),
    0.265 + (i * 0.005),
    i % 4,
    4 + (i % 3)
  ))
})
