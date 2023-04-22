// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error(`Персонаж ${character.name} уже есть в команде`);
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.add(character);
    }
  }

  toArray() {
    const arr = Array.from(this.members);
    return arr;
  }
}
