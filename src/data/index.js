import * as nba from './nba'
import * as nfl from './nfl'
import * as mlb from './mlb'
import * as nhl from './nhl'

const DATA = { nba, nfl, mlb, nhl }

export function getSportData(sportId) {
  return DATA[sportId] ?? null
}
