import Arrow from './arrow';

export default class Player {
  constructor(game, ctx, sprite) {
    this.game = game;
    this.ctx = ctx;
    this.x = 0;
    this.y = 662; // 662
    // this.y = 793 - sprite.height * 3 - 20; // 662
    this.land = true;
    this.ground = this.y;
    this.jumping = false;
    this.jumpSpeed = 35;
    this.gravity = 3;
    this.running = false;
    this.runDirection = '';
    this.runSpeed = 20;
    this.crouching = false;
    this.shooting = false;
    this.idle = true;
  }

  run() {
    if (this.running) {
      if (this.runDirection === 'forward') {
        this.x += this.runSpeed;
      }
      if (this.runDirection === 'backward') {
        this.x -= this.runSpeed;
      }
    }
  }

  jump() {
    if (this.jumping) {
      this.y -= this.jumpSpeed;
      this.jumpSpeed -= this.gravity;
      if (this.y >= this.ground) {
        this.y = this.ground;
        this.land = true;
        this.jumpSpeed = 35;
        this.jumping = false;
      }
    }
  }

  shoot() {
    this.game.createObject(new Arrow(this, this.ctx));
  }
}