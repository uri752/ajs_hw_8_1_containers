/* import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
}); */


import Team from '../app';
import Character from '../character';

test('test add character', () => {
  const hero1 = new Character('hero1');
  const team = new Team();
  team.add(hero1);

  const members = new Set();
  members.add(hero1);

  expect(team.members).toEqual(members);
});

test('test addAll character', () => {
  const hero1 = new Character('hero1');
  const hero2 = new Character('hero2');
  const team = new Team();
  team.addAll(hero1, hero2);

  const members = new Set();
  members.add(hero1);
  members.add(hero2);

  expect(team.members).toEqual(members);
});

test('test team to array ', () => {
  const hero1 = new Character('hero1');
  const hero2 = new Character('hero2');
  const team = new Team();
  team.addAll(hero1, hero2);
  const arr = team.toArray();

  const members = new Set();
  members.add(hero1);
  members.add(hero2);
  const arrResult = Array.from(members);

  expect(arr).toEqual(arrResult);
});
