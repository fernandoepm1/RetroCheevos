import { AchievementSet, define as $ } from '@cruncheevos/core';
import { PointsType, AchievementType } from '../../../common/data/types.js';

const author = 'HackerShibe';

const achievementsData: Achievement[] = [
  {
    title: 'Quest Mode pt 1', // placeholder title
    description: 'Beat races 1-4 in Quest Mode.',
    author: 'HackerShibe',
    points: 5,
    type: 'progression',
  }
];

const addAchievements = (set: AchievementSet) => {
  /*
   * ---------- Quest Mode ----------
   * Consists in a total of 16 sequential races
   * It can be broken down into sections
   * Races 1 - 4
   * Duel against Ms. Meany
   * Races 6 - 9
   * Duel against Denver
   * Races 11 - 14
   * Duel against Spacemouse
   * Free for all against the 3
   */
  set.addAchievement({
    title: 'Quest Mode pt 1', // placeholder title
    description: 'Beat races 1-4 in Quest Mode.',
    author: 'HackerShibe',
    points: 5,
    type: 'progression',
    // badge: 'path/to/file',
    conditions: {
      core: [
        ['', 'Mem', '8bit', 0x00fff0, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x00fffb, '=', 'Value', '', 0],
      ],
    } // Check if player completed Race 4 => can be reused to check for any race raceCompleted?(track)
  });

  set.addAchievement({
    title: 'Quest Mode pt 1 - Challenge', // placeholder title
    description: 'Beat races 1-4 in Quest Mode without losing a single race.',
    author: 'HackerShibe',
    points: 10,
    type: 'missable',
    // badge: 'path/to/file',
    conditions: {
      core: $(),
      alt1: $(),
      alt2: $(),
    },
  });

  set.addAchievement({
    title: 'Ms. Meany Duel 1', // placeholder title
    description: 'Challenge Ms. Meany to a duel and win.',
    author: 'HackerShibe',
    points: 5,
    type: 'progression',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Ms. Meany Duel 2', // placeholder title
    description: 'Beat Ms. Meany without using power-ups.',
    author: 'HackerShibe',
    points: 10,
    type: 'missable',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Ms. Meany Duel 3', // placeholder title
    description: 'Beat Ms. Meany without ever dropping to 2nd place.',
    author: 'HackerShibe',
    points: 10,
    type: 'missable',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Quest Mode pt 2', // placeholder title
    description: 'Beat races 6-9 in Quest Mode.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Quest Mode pt 2 - Challenge', // placeholder title
    description: 'Beat races 6-9 in Quest Mode without losing a single race.',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Denver Duel 1', // placeholder title
    description: 'Challenge Denver to a duel and win.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Denver Duel 2', // placeholder title
    description: 'Challenge Denver to a duel and win (add a challenge)',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Quest Mode pt 3', // placeholder title
    description: 'Beat races 11-14 in Quest Mode.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Quest Mode pt 3 - Challenge', // placeholder title
    description: 'Beat races 11-14 in Quest Mode without losing a single race.',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Free for all 1', // placeholder title
    description: 'Challenge all the other 3 characters to a free-for-all and win.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'Free for all 2', // placeholder title
    description: 'Challenge all the other 3 characters to a free-for-all and win (add a challenge)',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  /*
  ---------- World Championship Mode ----------
   */
  set.addAchievement({
    title: 'World Rookie', // placeholder title
    description: 'Win the World Championship on Easy difficulty.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Rookie pt2', // placeholder title
    description: 'Win the World Championship on Easy difficulty by placing 1st in every race.',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Veteran', // placeholder title
    description: 'Win the World Championship on Moderate difficulty.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Veteran pt2', // placeholder title
    description: 'Win the World Championship on Moderate difficulty by placing 1st in every race.',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Professional', // placeholder title
    description: 'Win the World Championship on Hard difficulty.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Professional pt2', // placeholder title
    description: 'Win the World Championship on Hard difficulty by placing 1st in every race.',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Champion', // placeholder title
    description: 'Win the World Championship on Expert difficulty.',
    author: 'HackerShibe',
    points: 5,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  set.addAchievement({
    title: 'World Champion pt2', // placeholder title
    description: 'Win the World Championship on Expert difficulty by placing 1st in every race.',
    author: 'HackerShibe',
    points: 10,
    // type: 'missable' || 'progression' || 'win_condition',
    // badge: 'path/to/file',
    conditions: '1=1',
  });

  /*
   * ---------- Single Race Mode ----------
   */

  /*
   * ---------- Time Trials ----------
   */
};

export default addAchievements;
