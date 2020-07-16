import Player from './player';
import Character from './character';
import Controller from './controller';
import Background from './background';
import Enemy from './enemy.js';

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.delayStart = 0;
    this.spawnTimeStart = 0;
    this.spawnRate = 3000;
    const characterImg =  {
      image: new Image(),
      image2: new Image(),
      width: 50,
      height: 37
      // width: 1400 / 7,
      // height: 2368 / 16
    };
    characterImg.image.src = './assets/adventurer-Sheet.png';
    characterImg.image2.src = './assets/adventurer-bow-Sheet.png';
  
    this.arrows = [];
    this.enemies = [];
    this.player = new Player(this, ctx, characterImg);
    this.characterSprite = new Character(this.ctx, this.player, characterImg);
    this.controller = new Controller(this.player);
    this.background = new Background(this.ctx);
    this.createObject(new Enemy(this.ctx));

    window.addEventListener('keydown', (e) => {
      this.controller.keyDown(e)
    });
    window.addEventListener('keyup', (e) => {
      this.controller.keyUp(e)
    });
  }

  // keyDown(e) {
  //   this.controller.keyDown(e)
  // }
  // keyUp(e) {
  //   this.controller.keyDown(e)
  // }
  
  // addKeyEvent() {
  //   window.addEventListener('keydown', this.keyDown);
  //   window.addEventListener('keyup', this.keyUp);
  // }

  // removeKeyEvent() {
  //   window.removeEventListener('keydown', this.keyDown);
  //   window.removeEventListener('keyup', this.keyUp);
  // }

  start() {
    this.animate();
  }

  stop() {
    window.cancelAnimationFrame(this.reqId);
  }

  createObject(object) {
    if (object.constructor.name === 'Arrow') {
      this.arrows.push(object);
    } else {
      this.enemies.push(object);
    }
  }

  destroyObject(object) {
    if (object.constructor.name === 'Arrow') {
      const idx = this.arrows.indexOf(object);
      this.arrows.splice(idx, 1);
    } else {
      const idx = this.enemies.indexOf(object);
      this.enemies.splice(idx, 1);
    }
  }

  animate(timeStamp = 0) {
    const delay = timeStamp - this.delayStart;
    const spawnTimer = timeStamp - this.spawnTimeStart;
    // if (timeStamp >= 90000) {
    //   this.spawnRate = 250;
    // }

    // if (spawnTimer >= this.spawnRate) {
    //   this.spawnTimeStart = timeStamp;
    //   this.createObject(new Enemy(this.ctx));
    // }

    if (delay >= 32) {
      this.delayStart = timeStamp;
      this.ctx.clearRect(0, 0, 928, 793);
      this.background.animate();
      this.characterSprite.animate(timeStamp);

      for (let i = 0; i < this.arrows.length; i++) {
        const arrow = this.arrows[i];
        if (arrow.isOffMap()) {
          this.destroyObject(arrow);
           i -= 1;
        } else {
          for (let j = 0; j < this.enemies.length; j++) {
            const enemy = this.enemies[j];
            if (obj.isCollideWith(enemy)) {
              this.destroyObject(arrow);
            }
          }

          arrow.animate()
        }
      }
    }
    
    this.reqId = requestAnimationFrame((timeStamp) => {
      this.animate(timeStamp);
    });
  }
}