import DataLoader from 'dataloader';
import fetch from 'node-fetch';

import key from './key';


const getSummonersByName = (region) => (names) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/by-name/${names.join(',')}?${key}`)
    .then(response => response.json())
    .then(json => Object.values(json));

export default (region) => new DataLoader(
  getSummonersByName(region)
);