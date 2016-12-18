import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  graphql,
} from 'graphql';
import fetch from 'node-fetch';

import ChampionType from './types/champion';
import MatchType from './types/match';
import SummonerType from './types/summoner';

const QueryType = (region) => new GraphQLObjectType({
  name: 'Query',
  description: 'Query against anything from the Official Riot REST API!',
  fields: () => ({
    champion: {
      type: ChampionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.champion.load(id),
    },
    champions: {
      type: new GraphQLList(ChampionType),
      resolve: (root, args, { loaders }) =>
        loaders.champions.load('all')
    },
    match: {
      type: MatchType,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.match.load(id),
    },
    summoner: {
      type: SummonerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, { name }, { loaders }) =>
        loaders.summonerName.load(name),
    },
  }),
});


export default (region) => new GraphQLSchema({
  query: QueryType(region),
});