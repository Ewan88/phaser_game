import Phaser from "phaser";

import SamuraiScene from "./SamuraiScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [SamuraiScene],
};

export default new Phaser.Game(config);
