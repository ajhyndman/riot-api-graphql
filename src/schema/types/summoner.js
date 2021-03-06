// @flow
import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { map, prop } from 'ramda';

import CurrentGameType from './currentGame';
import MasteryPageType from './masteryPage';
import MatchType from './match';
import StatsRankedType from './statsRanked';
import StatsSummaryType from './statsSummary';
import RunePageType from './runePage';

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'represents a summoner',
  fields: () => ({
    currentGame: {
      type: CurrentGameType,
      resolve: (summoner, args, { loaders }) =>
        loaders.currentGame.load(summoner.id),
    },
    id: {
      type: GraphQLInt,
    },
    masteryPages: {
      type: new GraphQLList(MasteryPageType),
      resolve: (summoner, args, { loaders }) =>
        loaders.masteryPages.load(summoner.id),
    },
    matchList: {
      type: new GraphQLList(MatchType),
      args: {
        start: { type: new GraphQLNonNull(GraphQLInt) },
        count: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (summoner, { start, count }, { loaders }) =>
        loaders.matchList.load(summoner.id)
        .then((matchList) =>
          matchList && loaders.match.loadMany(
            map(prop('matchId'), matchList.slice(start, start + count))
          )
        ),
    },
    name: {
      type: GraphQLString,
    },
    profileIconId: {
      type: GraphQLInt,
    },
    revisionDate: {
      type: GraphQLInt,
    },
    runePages: {
      type: new GraphQLList(RunePageType),
      resolve: (summoner, args, { loaders }) =>
        loaders.runePages.load(summoner.id),
    },
    statsRanked: {
      type: StatsRankedType,
      resolve: (summoner, { mode }, { loaders }) =>
        loaders.statsRanked.load(summoner.id),
    },
    statsSummary: {
      type: StatsSummaryType,
      resolve: (summoner, { mode }, { loaders }) =>
        loaders.statsSummary.load(summoner.id),
    },
    summonerLevel: {
      type: GraphQLInt,
    },
  }),
});
