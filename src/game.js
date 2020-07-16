import Player from './player';
import Character from './character';
import Controller from './controller';
import Background from './background';
import Enemy from './enemy.js';
import Explosion from './explosion';

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.animationDelayStart = 0;
    this.spawnDelayStart = 0;
    this.spawnTimeStart = 0;
    this.spawnRate = 2000;
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
    this.explosions = [];
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
    } else if (object.constructor.name === 'Enemy') {
      this.enemies.push(object);
    } else if (object.constructor.name === 'Explosion') {
      this.explosions.push(object);
    }
  }

  removeObjecct(object) {
    if (object.constructor.name === 'Arrow') {
      const idx = this.arrows.indexOf(object);
      this.arrows.splice(idx, 1);
    } else if (object.constructor.name === 'Enemy') {
      const idx = this.enemies.indexOf(object);
      this.enemies.splice(idx, 1);
    } else if (object.constructor.name === 'Explosion') {
      const idx = this.explosions.indexOf(object);
      this.explosions.splice(idx, 1);
    }
  }

  animate(timeStamp = 0) {
    const animationDelay = timeStamp - this.animationDelayStart;
    const spawnDelay = timeStamp - this.spawnDelayStart;
    const increaseSpawnRate = (timeStamp - this.spawnTimeStart) >= 25000;
    if (increaseSpawnRate) {
      this.spawnRate = this.spawnRate <= 800 ? 800 : this.spawnRate - 500;
      this.spawnTimeStart = timeStamp;
    }

    if (spawnDelay >= this.spawnRate) {
      this.spawnDelayStart = timeStamp;
      this.createObject(new Enemy(this.ctx));
    }

    if (animationDelay >= 32) {
      this.animationDelayStart = timeStamp;
      this.ctx.clearRect(0, 0, 928, 793);
      this.background.animate();

      for (let i = 0; i < this.arrows.length; i++) {
        const arrow = this.arrows[i];
        if (arrow.isOffMap()) {
          this.removeObjecct(arrow);
           i -= 1;
        } else {
          let continueAnimation = true;

          for (let j = 0; j < this.enemies.length; j++) {
            const enemy = this.enemies[j];
            if (arrow.isCollideWith(enemy)) {
              // debugger
              this.removeObjecct(arrow);
              this.removeObjecct(enemy);
              this.createObject(new Explosion(enemy, this.ctx));
              // enemy.changeAnimation('die');
              continueAnimation = false;
              i -= 1;
              break;
            }
          }

          if (continueAnimation) {
            arrow.animate()
          }
        }
      }
      
      for (let i = 0; i < this.enemies.length; i++) {
        const enemy = this.enemies[i];
        if (enemy.isOffMap()) {
          this.removeObjecct(enemy);
           i -= 1;
        // } else if (enemy.isCollideWith(this.player)) {
        //   break;
        } else {
          enemy.animate()
        }
      }

      for (let i = 0; i < this.explosions.length; i++) {
        const explosion = this.explosions[i];
        explosion.animate();
        if (explosion.frameIndex >= explosion.frameSets.length) {
          this.removeObjecct(explosion);
        }
      }

      this.characterSprite.animate(timeStamp);
    }
    
    this.reqId = requestAnimationFrame((timeStamp) => {
      this.animate(timeStamp);
    });
  }
}