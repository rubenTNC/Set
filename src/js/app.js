import Team from './Team';
import Character from './Character';

export const team = new Team();
export const character = new Character('Ivan', 'Birdman');
export const teamBirdman = [{
  name: 'Ivan',
  type: 'Birdman',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
}];

export const character2 = new Character('Petr', 'Deadman');
export const coolTeam = [
  {
    name: 'Ivan',
    type: 'Birdman',
    health: 100,
    level: 1,
    attack: 50,
    defence: 50,
  },
  {
    name: 'Petr',
    type: 'Deadman',
    health: 100,
    level: 1,
    attack: 50,
    defence: 50,
  },
];
