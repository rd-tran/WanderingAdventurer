import Player from './player';
import Character from './character';
import Controller from './controller';
import Background from './background';
import Enemy from './enemy.js';
import Explosion from './explosion';
import StartMenu from './start_menu';
import GameOverScreen from './gameover';

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    const characterImg =  {
      image: new Image(),
      image2: new Image(),
      width: 50,
      height: 37
    };
    characterImg.image.src = 'assets/adventurer-Sheet.png';
    characterImg.image2.src = 'assets/adventurer-bow-Sheet.png';
    this.characterImg = characterImg;

    const arrowImg = {
      image: new Image(),
      width: 100,
      height: 30
    }
    arrowImg.image.src = 'assets/arrow.png';
    this.arrowImg = arrowImg;

    const enemyImg = {
      image: new Image(),
      width: 32,
      height: 35
    }
    enemyImg.image.src = 'assets/big-monster.png';
    this.enemyImg = enemyImg;

    const explosionImg = {
      image: new Image(),
      width: 128,
      height: 128
    }
    explosionImg.image.src = 'assets/explosion-4.png';
    this.explosionImg = explosionImg;

    this.startMenu = new StartMenu(this);
    this.startMenu.display();

    this.gameOverScreen = new GameOverScreen(this.ctx, this);
  }

  start(timeStamp = 0) {
    this.animationDelayStart = timeStamp;
    this.spawnDelayStart = timeStamp;
    this.spawnTimeStart = timeStamp;
    this.spawnRate = 2000;
  
    this.arrows = [];
    this.enemies = [];
    this.explosions = [];
    this.player = new Player(this, this.ctx, this.characterImg);
    this.characterSprite = new Character(
      this.ctx, this.player, this.characterImg
    );
    this.controller = new Controller(this.player);
    this.createObject(new Enemy(this.ctx, this.enemyImg));
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
    
    this.ctx.globalAlpha = 1;
    this.animate(timeStamp);
  }

  initiateGameOver() {
    this.gameOver = true;
    document.removeEventListener('keydown', this.keyDownListener);
    document.removeEventListener('keyup', this.keyUpListener);
    this.gameOverScreen.display();
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

  removeObject(object) {
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
          this.removeObject(arrow);
          i -= 1;
        } else {
          let continueAnimation = true;

          for (let j = 0; j < this.enemies.length; j++) {
            const enemy = this.enemies[j];
            if (arrow.isCollideWith(enemy)) {
              this.removeObject(arrow);
              this.removeObject(enemy);
              this.createObject(
                new Explosion(enemy, this.ctx, this.explosionImg)
              );
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
          this.removeObject(enemy);
          i -= 1;
        } else if (enemy.isCollideWith(this.characterSprite)) {
          if (this.characterSprite.slashing) {
            this.removeObject(enemy);
            this.createObject(
              new Explosion(enemy, this.ctx, this.explosionImg)
            );
          } else {
            this.player.die();
            this.initiateGameOver();
          }
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
          this.removeObject(explosion);
        }
      }
    }
  }

  animate(timeStamp = 0) {
    if (!this.gameOver) {
      const animationDelay = timeStamp - this.animationDelayStart;
      const spawnDelay = timeStamp - this.spawnDelayStart;
      const increaseSpawnRate = (timeStamp - this.spawnTimeStart) >= 10000;
      if (increaseSpawnRate && this.spawnRate !== 750) {
        this.spawnRate -= 250;
        this.spawnTimeStart = timeStamp;
      }

      if (spawnDelay >= this.spawnRate) {
        this.spawnDelayStart = timeStamp;
        this.createObject(new Enemy(this.ctx, this.enemyImg));
      }

      if (animationDelay >= 32) {
        this.animationDelayStart = timeStamp;
        this.ctx.clearRect(0, 0, 928, 793);
        this.background.animate();
        this.animateArrows();
        this.animateEnemies();
        this.animateExplosions();
        this.characterSprite.animate();
      }
      
      this.reqId = requestAnimationFrame((timeStamp) => {
        this.animate(timeStamp);
      });
    } else {
      const animationDelay = timeStamp - this.animationDelayStart;
      if (animationDelay >= 32) {
        this.animationDelayStart = timeStamp;
        this.ctx.clearRect(0, 0, 928, 793);
        this.background.animate();
        this.characterSprite.animate(timeStamp);
        this.gameOverScreen.animate();
      }
      
      this.reqId = requestAnimationFrame((timeStamp) => {
        this.animate(timeStamp);
      });
    }
  }
}