import DataLoader from 'dataloader';
import { map, prop, reduce } from 'ramda';

import fetch from '../fetch';
import key from './key';


// todo: have an int or enum variable for season id
const season = 'SEASON2017';

const getStatsSummary = (region) => (id) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.3/stats/by-summoner/${id}/summary?${key}&season=${season}`)
    .then(response => response.json())
    .then(json => reduce(
      (acc, summary) => ({
        ...acc,
        [summary.playerStatSummaryType]: summary,
      }),
      {},
      json.playerStatSummaries
    ))
    .catch(err => { throw err; });

// find+propEq finds the first queueStats for the given mode or undefined
export default (region) =>
  new DataLoader(
    ids => Promise.all(map(getStatsSummary(region), ids))
  );