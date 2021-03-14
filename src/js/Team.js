export default class Team {
  constructor() {
    this.team = [];
  }

  add(characters) {
    this.team.push(characters);
  }

  * [Symbol.iterator]() {
    const characters = this.team;
    for (let i = 0; i < characters.length; i += 1) {
      yield characters[i];
    }
  }
}
