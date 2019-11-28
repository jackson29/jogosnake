let world = new World(window)

let game = new Vue({
  el: '#game',
  data: {
    world: world,
    player: world.player,
    viewport: world.viewport,
    keys: {},
    frequency: 60,
    time: 0,

    gameControl: {
      isJumping: false
    }
  },