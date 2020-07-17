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
    characterImg.image.src = './assets/adventurer-test.png';
    characterImg.image2.src = './assets/adventurer-bow-Sheet.png';
  
    this.arrows = [];
    this.enemies = [];
    this.explosions = [];
    this.player = new Player(this, ctx, characterImg);
    this.characterSprite = new Character(this.ctx, this.player, characterImg);
    this.controller = new Controller(this.player);
    this.createObject(new Enemy(this.ctx));
    this.background = new Background(this.ctx, this);
    this.gameOver = false;
    
    this.keyDownListener = (e) => {
      this.controller.keyDown(e);
    };
    this.keyUpListener = (e) => {
      this.controller.keyUp(e);
    };
    document.addEventListener('keydown', this.keyDownListener);
    document.addEventListener('keyup', this.keyUpListener);
    // document.addEventListener('keydown', (e) => {
    //   this.controller.keyDown(e)
    // });
    // document.addEventListener('keyup', (e) => {
    //   this.controller.keyUp(e)
    // });
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

  animateArrows() {
    if (!this.gameOver) {
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
    }
  }
  
  animateEnemies() {
    if (!this.gameOver) {
      for (let i = 0; i < this.enemies.length; i++) {
        const enemy = this.enemies[i];
        if (enemy.isOffMap()) {
          this.removeObjecct(enemy);
          i -= 1;
        } else if (enemy.isCollideWith(this.characterSprite)) {
          this.player.die();
          this.gameOver = true;
        } else if (enemy.isCollideWith(this.player)) {
          this.gameOver = true;
          break;
        } else {
          enemy.animate()
        }
      }
    }
  }

  animateExplosions() {
    if (!this.gameOver) {
      for (let i = 0; i < this.explosions.length; i++) {
        const explosion = this.explosions[i];
        explosion.animate();
        if (explosion.frameIndex >= explosion.frameSets.length) {
          this.removeObjecct(explosion);
        }
      }
    }
  }

  animate(timeStamp = 0) {
    if (!this.gameOver) {
      const animationDelay = timeStamp - this.animationDelayStart;
      const spawnDelay = timeStamp - this.spawnDelayStart;
      // const increaseSpawnRate = (timeStamp - this.spawnTimeStart) >= 500;
      const increaseSpawnRate = (timeStamp - this.spawnTimeStart) >= 15000;
      if (increaseSpawnRate && this.spawnRate !== 1000) {
        this.spawnRate -= 250;
        this.spawnTimeStart = timeStamp;
      } /* else if (this.spawnRate === 1000) {
        this.gameOver = true;
      } */

      if (spawnDelay >= this.spawnRate) {
        this.spawnDelayStart = timeStamp;
        this.createObject(new Enemy(this.ctx));
      }

      if (animationDelay >= 32) {
        this.animationDelayStart = timeStamp;
        this.ctx.clearRect(0, 0, 928, 793);
        this.background.animate();
        this.animateArrows();
        this.animateEnemies();
        this.animateExplosions();
        this.characterSprite.animate(timeStamp);
      }
      
      this.reqId = requestAnimationFrame((timeStamp) => {
        this.animate(timeStamp);
      });
    } else {
      const animationDelay = timeStamp - this.animationDelayStart;
      if (animationDelay >= 45) {
        this.animationDelayStart = timeStamp;
        this.ctx.clearRect(0, 0, 928, 793);
        this.background.animate();
        this.characterSprite.animate(timeStamp);
      }
      document.removeEventListener('keydown', this.keyDownListener);
      document.removeEventListener('keyup', this.keyUpListener);
      this.reqId = requestAnimationFrame((timeStamp) => {
        this.animate(timeStamp);
      });
    }
  }
}