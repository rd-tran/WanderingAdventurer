import Player from './player';
import Character from './character';
import Controller from './controller';
import Arrow from './arrow';

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.startTime = 0;

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
  
    this.objects = [];
    this.player = new Player(this, ctx, characterImg);
    this.characterSprite = new Character(this.ctx, this.player, characterImg);
    this.controller = new Controller(this.player);
  
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
    this.objects.push(object);
  }

  animate(timeStamp = 0) {
    const elapsedTime = timeStamp - this.startTime;
    if (elapsedTime >= 32) {
      this.startTime = timeStamp;
      this.ctx.clearRect(0, 0, 1000, 600);
      this.characterSprite.animate(timeStamp);
      for (let i = 0; i < this.objects.length; i++) {
        const obj = this.objects[i];
        obj.animate();
      }
    }
    
    this.reqId = requestAnimationFrame((timeStamp) => {
      this.animate(timeStamp)
    });
    window.reqId = this.reqId
  }
}