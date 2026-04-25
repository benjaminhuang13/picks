export const teams = [
  { id: 'bos', name: 'Boston Bruins', wins: 65, losses: 12, ptsPg: 3.5, gaPg: 2.1, rank: 1, conf: 'East' },
  { id: 'col', name: 'Colorado Avalanche', wins: 58, losses: 21, ptsPg: 3.8, gaPg: 2.9, rank: 1, conf: 'West' },
  { id: 'car', name: 'Carolina Hurricanes', wins: 52, losses: 21, ptsPg: 3.2, gaPg: 2.3, rank: 2, conf: 'East' },
  { id: 'edm', name: 'Edmonton Oilers', wins: 50, losses: 25, ptsPg: 3.9, gaPg: 3.2, rank: 2, conf: 'West' },
  { id: 'tor', name: 'Toronto Maple Leafs', wins: 46, losses: 28, ptsPg: 3.4, gaPg: 3.0, rank: 3, conf: 'East' },
  { id: 'fla', name: 'Florida Panthers', wins: 52, losses: 24, ptsPg: 3.3, gaPg: 2.7, rank: 3, conf: 'East' },
]

export const players = {
  bos: [
    { id: 1, name: 'David Pastrnak', pos: 'RW', stat1: 47, stat2: 63, stat3: 110, stat4: 28 },
    { id: 2, name: 'Brad Marchand', pos: 'LW', stat1: 28, stat2: 50, stat3: 78, stat4: 15 },
    { id: 3, name: 'Charlie McAvoy', pos: 'D', stat1: 12, stat2: 47, stat3: 59, stat4: 32 },
    { id: 4, name: 'Pavel Zacha', pos: 'C', stat1: 22, stat2: 32, stat3: 54, stat4: 18 },
    { id: 5, name: 'Hampus Lindholm', pos: 'D', stat1: 8, stat2: 35, stat3: 43, stat4: 24 },
  ],
  col: [
    { id: 1, name: 'Nathan MacKinnon', pos: 'C', stat1: 51, stat2: 89, stat3: 140, stat4: 45 },
    { id: 2, name: 'Mikko Rantanen', pos: 'RW', stat1: 55, stat2: 70, stat3: 125, stat4: 32 },
    { id: 3, name: 'Cale Makar', pos: 'D', stat1: 21, stat2: 69, stat3: 90, stat4: 50 },
    { id: 4, name: 'Gabriel Landeskog', pos: 'LW', stat1: 25, stat2: 38, stat3: 63, stat4: 20 },
    { id: 5, name: 'Valeri Nichushkin', pos: 'RW', stat1: 26, stat2: 28, stat3: 54, stat4: 22 },
  ],
  car: [
    { id: 1, name: 'Sebastian Aho', pos: 'C', stat1: 36, stat2: 60, stat3: 96, stat4: 28 },
    { id: 2, name: 'Andrei Svechnikov', pos: 'RW', stat1: 28, stat2: 39, stat3: 67, stat4: 12 },
    { id: 3, name: 'Teuvo Teravainen', pos: 'LW', stat1: 18, stat2: 54, stat3: 72, stat4: 16 },
    { id: 4, name: 'Brent Burns', pos: 'D', stat1: 9, stat2: 38, stat3: 47, stat4: 14 },
    { id: 5, name: 'Jesper Fast', pos: 'RW', stat1: 11, stat2: 22, stat3: 33, stat4: 10 },
  ],
  edm: [
    { id: 1, name: 'Connor McDavid', pos: 'C', stat1: 64, stat2: 89, stat3: 153, stat4: 22 },
    { id: 2, name: 'Leon Draisaitl', pos: 'C', stat1: 52, stat2: 84, stat3: 136, stat4: 18 },
    { id: 3, name: 'Zach Hyman', pos: 'LW', stat1: 54, stat2: 30, stat3: 84, stat4: 20 },
    { id: 4, name: 'Mattias Ekholm', pos: 'D', stat1: 8, stat2: 34, stat3: 42, stat4: 20 },
    { id: 5, name: 'Ryan Nugent-Hopkins', pos: 'C', stat1: 20, stat2: 48, stat3: 68, stat4: 12 },
  ],
  tor: [
    { id: 1, name: 'Auston Matthews', pos: 'C', stat1: 69, stat2: 59, stat3: 128, stat4: 34 },
    { id: 2, name: 'Mitch Marner', pos: 'RW', stat1: 26, stat2: 74, stat3: 100, stat4: 30 },
    { id: 3, name: 'William Nylander', pos: 'RW', stat1: 40, stat2: 57, stat3: 97, stat4: 18 },
    { id: 4, name: 'John Tavares', pos: 'C', stat1: 23, stat2: 38, stat3: 61, stat4: 10 },
    { id: 5, name: 'Morgan Rielly', pos: 'D', stat1: 14, stat2: 48, stat3: 62, stat4: 16 },
  ],
  fla: [
    { id: 1, name: 'Matthew Tkachuk', pos: 'LW', stat1: 28, stat2: 81, stat3: 109, stat4: 26 },
    { id: 2, name: 'Aleksander Barkov', pos: 'C', stat1: 39, stat2: 55, stat3: 94, stat4: 36 },
    { id: 3, name: 'Sam Reinhart', pos: 'RW', stat1: 57, stat2: 37, stat3: 94, stat4: 22 },
    { id: 4, name: 'Aaron Ekblad', pos: 'D', stat1: 16, stat2: 36, stat3: 52, stat4: 18 },
    { id: 5, name: 'Carter Verhaeghe', pos: 'LW', stat1: 34, stat2: 37, stat3: 71, stat4: 16 },
  ],
}

function game(opp, date, win, score, oppScore, goals, assists, pts) {
  return { opponent: opp, date, win, score, oppScore, stat1: goals, stat2: assists, stat3: pts }
}

export const games = {
  bos: [
    game('TOR', '2024-04-14', true, 4, 1, 2, 5, 7),
    game('MTL', '2024-04-12', true, 5, 2, 3, 4, 7),
    game('OTT', '2024-04-10', true, 3, 1, 1, 4, 5),
    game('BUF', '2024-04-08', false, 2, 3, 1, 3, 4),
    game('DET', '2024-04-06', true, 4, 2, 2, 4, 6),
    game('PIT', '2024-04-04', true, 6, 3, 3, 6, 9),
    game('FLA', '2024-04-02', false, 1, 2, 0, 3, 3),
    game('TB', '2024-03-31', true, 4, 3, 2, 4, 6),
    game('CAR', '2024-03-29', true, 3, 1, 2, 3, 5),
    game('NYR', '2024-03-27', false, 2, 4, 1, 2, 3),
  ],
  col: [
    game('EDM', '2024-04-14', true, 5, 3, 3, 6, 9),
    game('VGK', '2024-04-12', true, 4, 2, 2, 5, 7),
    game('ANA', '2024-04-10', true, 6, 1, 4, 5, 9),
    game('LA', '2024-04-08', true, 5, 3, 3, 4, 7),
    game('SJS', '2024-04-06', true, 7, 2, 4, 6, 10),
    game('SEA', '2024-04-04', false, 2, 3, 1, 3, 4),
    game('MIN', '2024-04-02', true, 4, 2, 2, 4, 6),
    game('CBJ', '2024-03-31', true, 6, 3, 4, 5, 9),
    game('CHI', '2024-03-29', true, 5, 1, 3, 4, 7),
    game('STL', '2024-03-27', false, 3, 4, 2, 3, 5),
  ],
  car: [], edm: [], tor: [], fla: [],
}

;['car', 'edm', 'tor', 'fla'].forEach(id => {
  games[id] = Array.from({ length: 10 }, (_, i) => game(
    `OPP${i + 1}`,
    `2024-0${Math.floor(i / 4) + 3}-${(i % 10) + 10}`,
    i % 3 !== 2,
    3 + (i % 3),
    1 + (i % 2),
    1 + (i % 3),
    2 + (i % 4),
    3 + (i % 4)
  ))
})
