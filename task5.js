export class Player {
  name;
  level;
  xp = 0;
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!!!`);
  }

  levelUp() {
    this.level += 1;
  }

  checkXP(xp) {
    this.xp += xp;
    while (this.xp >= 100) {
      this.levelUp();
      this.xp -= 100;
      this.info();
    }
  }
}

const player = new Player("Tara", 6);
player.info();
player.checkXP(300);
