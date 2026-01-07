export class Player {
  name;
  constructor(name) {
    this.name = name;
  }
}

const player = new Player("Tara");
console.log(player.name);
