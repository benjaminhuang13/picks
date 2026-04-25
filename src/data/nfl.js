export const teams = [
  { id: 'kc', name: 'Kansas City Chiefs', wins: 11, losses: 6, ptsPg: 27.8, ydsPg: 362.4, rank: 1, conf: 'AFC' },
  { id: 'sf', name: 'San Francisco 49ers', wins: 12, losses: 5, ptsPg: 26.5, ydsPg: 371.2, rank: 1, conf: 'NFC' },
  { id: 'dal', name: 'Dallas Cowboys', wins: 12, losses: 5, ptsPg: 29.3, ydsPg: 385.7, rank: 2, conf: 'NFC' },
  { id: 'buf', name: 'Buffalo Bills', wins: 11, losses: 6, ptsPg: 25.4, ydsPg: 355.8, rank: 3, conf: 'AFC' },
  { id: 'phi', name: 'Philadelphia Eagles', wins: 11, losses: 6, ptsPg: 28.1, ydsPg: 375.3, rank: 3, conf: 'NFC' },
  { id: 'bal', name: 'Baltimore Ravens', wins: 13, losses: 4, ptsPg: 28.3, ydsPg: 358.9, rank: 2, conf: 'AFC' },
]

export const players = {
  kc: [
    { id: 1, name: 'Patrick Mahomes', pos: 'QB', stat1: 4183, stat2: 388, stat3: 27, stat4: 101.4 },
    { id: 2, name: 'Travis Kelce', pos: 'TE', stat1: 984, stat2: 0, stat3: 5, stat4: null },
    { id: 3, name: 'Isiah Pacheco', pos: 'RB', stat1: 0, stat2: 935, stat3: 7, stat4: null },
    { id: 4, name: 'Rashee Rice', pos: 'WR', stat1: 938, stat2: 0, stat3: 7, stat4: null },
    { id: 5, name: 'Chris Jones', pos: 'DL', stat1: 0, stat2: 0, stat3: 10.5, stat4: null },
  ],
  sf: [
    { id: 1, name: 'Brock Purdy', pos: 'QB', stat1: 4280, stat2: 144, stat3: 31, stat4: 113.0 },
    { id: 2, name: 'Christian McCaffrey', pos: 'RB', stat1: 0, stat2: 1459, stat3: 14, stat4: null },
    { id: 3, name: 'Deebo Samuel', pos: 'WR', stat1: 892, stat2: 225, stat3: 7, stat4: null },
    { id: 4, name: 'Brandon Aiyuk', pos: 'WR', stat1: 1342, stat2: 0, stat3: 7, stat4: null },
    { id: 5, name: 'George Kittle', pos: 'TE', stat1: 1020, stat2: 0, stat3: 11, stat4: null },
  ],
  dal: [
    { id: 1, name: 'Dak Prescott', pos: 'QB', stat1: 4516, stat2: 242, stat3: 36, stat4: 105.9 },
    { id: 2, name: 'Tony Pollard', pos: 'RB', stat1: 0, stat2: 1005, stat3: 9, stat4: null },
    { id: 3, name: 'CeeDee Lamb', pos: 'WR', stat1: 1749, stat2: 0, stat3: 12, stat4: null },
    { id: 4, name: 'Michael Gallup', pos: 'WR', stat1: 612, stat2: 0, stat3: 4, stat4: null },
    { id: 5, name: 'Micah Parsons', pos: 'LB', stat1: 0, stat2: 0, stat3: 13.5, stat4: null },
  ],
  buf: [
    { id: 1, name: 'Josh Allen', pos: 'QB', stat1: 4306, stat2: 524, stat3: 38, stat4: 102.2 },
    { id: 2, name: 'Stefon Diggs', pos: 'WR', stat1: 1183, stat2: 0, stat3: 10, stat4: null },
    { id: 3, name: 'James Cook', pos: 'RB', stat1: 0, stat2: 1122, stat3: 8, stat4: null },
    { id: 4, name: 'Dawson Knox', pos: 'TE', stat1: 634, stat2: 0, stat3: 5, stat4: null },
    { id: 5, name: 'Von Miller', pos: 'LB', stat1: 0, stat2: 0, stat3: 8.0, stat4: null },
  ],
  phi: [
    { id: 1, name: 'Jalen Hurts', pos: 'QB', stat1: 3858, stat2: 605, stat3: 35, stat4: 109.6 },
    { id: 2, name: 'A.J. Brown', pos: 'WR', stat1: 1456, stat2: 0, stat3: 7, stat4: null },
    { id: 3, name: 'DeVonta Smith', pos: 'WR', stat1: 1066, stat2: 0, stat3: 7, stat4: null },
    { id: 4, name: 'D\'Andre Swift', pos: 'RB', stat1: 0, stat2: 1049, stat3: 5, stat4: null },
    { id: 5, name: 'Dallas Goedert', pos: 'TE', stat1: 737, stat2: 0, stat3: 7, stat4: null },
  ],
  bal: [
    { id: 1, name: 'Lamar Jackson', pos: 'QB', stat1: 3678, stat2: 821, stat3: 36, stat4: 119.6 },
    { id: 2, name: 'Derrick Henry', pos: 'RB', stat1: 0, stat2: 1337, stat3: 14, stat4: null },
    { id: 3, name: 'Zay Flowers', pos: 'WR', stat1: 858, stat2: 0, stat3: 5, stat4: null },
    { id: 4, name: 'Mark Andrews', pos: 'TE', stat1: 732, stat2: 0, stat3: 5, stat4: null },
    { id: 5, name: 'Odafe Oweh', pos: 'LB', stat1: 0, stat2: 0, stat3: 9.0, stat4: null },
  ],
}

function game(opp, date, win, score, oppScore, passYds, rushYds, tds) {
  return { opponent: opp, date, win, score, oppScore, stat1: passYds, stat2: rushYds, stat3: tds }
}

export const games = {
  kc: [
    game('BUF', '2024-01-21', true, 27, 24, 262, 88, 2),
    game('MIA', '2024-01-13', true, 26, 7, 241, 74, 3),
    game('LV', '2024-01-06', true, 20, 14, 195, 96, 1),
    game('CIN', '2023-12-31', true, 25, 17, 272, 85, 2),
    game('NE', '2023-12-17', true, 27, 17, 217, 78, 2),
    game('GB', '2023-12-03', true, 19, 9, 184, 102, 1),
    game('PHI', '2023-11-20', false, 21, 31, 310, 65, 2),
    game('JAX', '2023-11-13', true, 23, 17, 228, 91, 2),
    game('DEN', '2023-10-29', true, 19, 8, 210, 87, 1),
    game('LAC', '2023-10-22', true, 31, 17, 252, 79, 3),
  ],
  sf: [
    game('DET', '2024-01-28', true, 34, 31, 273, 142, 3),
    game('GB', '2024-01-20', true, 21, 24, 254, 118, 2),
    game('DAL', '2024-01-14', true, 19, 12, 204, 108, 1),
    game('WAS', '2024-01-07', true, 27, 10, 186, 125, 2),
    game('BAL', '2023-12-25', false, 17, 33, 225, 89, 1),
    game('PHI', '2023-12-03', true, 42, 19, 312, 155, 4),
    game('JAX', '2023-11-12', true, 34, 3, 268, 138, 3),
    game('CIN', '2023-10-29', true, 31, 17, 243, 122, 3),
    game('DAL', '2023-10-08', false, 17, 42, 197, 95, 1),
    game('PHX', '2023-10-01', true, 35, 16, 291, 148, 3),
  ],
  dal: [],
  buf: [],
  phi: [],
  bal: [],
}

// Fill remaining with empty arrays
['dal', 'buf', 'phi', 'bal'].forEach(id => {
  if (!games[id].length) {
    games[id] = [
      game('OPP1', '2024-01-14', true, 28, 17, 290, 110, 3),
      game('OPP2', '2024-01-07', false, 14, 21, 205, 88, 1),
      game('OPP3', '2023-12-31', true, 35, 24, 312, 95, 4),
      game('OPP4', '2023-12-24', true, 24, 17, 267, 102, 2),
      game('OPP5', '2023-12-17', false, 20, 27, 243, 78, 2),
    ]
  }
})
