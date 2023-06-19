import Phaser from "phaser";

export default class SamuraiScene extends Phaser.Scene {
  constructor() {
    super("samurai-scene");
  }

  preload() {
    this.load.image("samurai", "assets/samurai.png");
  }

  create() {
    const spritesGroup = this.add.group();

    for (let i = 0; i < 10; i++) {
      let sprite = spritesGroup.create(
        Phaser.Math.Between(0, 800),
        Phaser.Math.Between(0, 600),
        "samurai"
      );
      sprite.inputEnabled = true;
    }
  }
}
