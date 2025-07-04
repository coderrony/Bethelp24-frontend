

export const bettingEvents = [
  {
    id: 1,
    status: 'run',
    name: '1st over Bangladesh runs',
    score: 6.5,
    options: ['Over', 'Under'],
  },
  {
    id: 2,
    status: 'run',
    name: '2nd over Bangladesh runs',
    score: 7.5,
    options: ['Over', 'Under'],
  },
  {
    id: 3,
    status: 'run',
    name: 'Bangladesh runs in first 6 overs',
    score: 46.5,
    options: ['Over', 'Under'],
  },
  {
    id: 4,
    status: 'team',
    name: 'Which Team Will Win the Match?',
    options: ['Bangladesh', 'India'],
  },
  {
    id: 5,
    status: 'run',
    name: 'Litton Das innings runs',
    score: 22.5,
    options: ['Over', 'Under'],
  },
  {
    id: 6,
    status: 'run',
    name: 'Shakib Al Hasan innings runs',
    score: 26.5,
    options: ['Over', 'Under'],
  },
  {
    id: 7,
    status: 'run',
    name: 'Bangladesh 1st inns Runs - Over/Under',
    score: 177.5,
    options: ['Over', 'Under'],
  },
];

export type BettingEventType = (typeof bettingEvents)[number];