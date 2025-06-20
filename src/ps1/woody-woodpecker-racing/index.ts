import {AchievementSet, define as $} from '@cruncheevos/core';
import addAchievements from './core/achievements.js';
import addLeaderboards from './core/leaderboards.js';

const set = new AchievementSet({
  gameId: 16303,
  title: 'Woody Woodpecker Racing',
});

addAchievements(set);
addLeaderboards(set);

export default set;
