import Bootstrap from './scenes/Bootstrap'
import Game from './scenes/Game'

// const config: Phaser.Types.Core.GameConfig = {
//   autoFocus: true,
//   backgroundColor: '#93cbee',
//   parent: 'phaser-container',
//   physics: {
//     arcade: {
//       debug: false,
//       gravity: { y: 0 },
//     },
//     default: 'arcade',
//   },
//   pixelArt: true,

//   // Prevent pixel art from becoming blurred when scaled.
//   scale: {
//     height: window.innerHeight,
//     mode: Phaser.Scale.ScaleModes.RESIZE,
//     width: window.innerWidth,
//   },

//   scene: [Bootstrap, Background, Game],
//   type: Phaser.AUTO,
// }

class ColyseusGame {
  bootstrap!: Bootstrap
  game!: Game

  constructor() {
    this.bootstrap = new Bootstrap()
    this.game = new Game()
    this.bootstrap.create(this.game)
  }
}

const colyseusGame = new ColyseusGame()

;(window as any).game = colyseusGame

export default colyseusGame
