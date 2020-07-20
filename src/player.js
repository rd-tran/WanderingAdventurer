import Arrow from './arrow';

export default class Player {
  constructor(game, ctx, sprite) {
    this.game = game;
    this.ctx = ctx;
    this.x = 0;
    this.y = 662; // 662
    this.width = 50 * 3;
    this.height = 37 * 3;
    // this.y = 793 - sprite.height * 3 - 20; // 662
    this.land = true;
    this.ground = this.y;
    this.jumping = false;
    this.jumpSpeed = 35;
    this.gravity = 3;
    this.running = false;
    this.runDirection = '';
    this.runSpeed = 20;
    this.sliding = false;
    this.attacking = false;
    this.shooting = false;
    this.idle = true;
    this.dead = false;
  }

  run() {
    if (this.running) {
      if (this.dead) {
        if (this.runSpeed > 0) {
          this.runSpeed = this.runSpeed - (this.runSpeed * .1);
          if (this.runSpeed < 0) {
            this.runSpeed = 0;
          }
        }
      }

      if (this.runDirection === 'forward') {
        this.x = this.x + this.runSpeed >= 828 ? 828 : this.x + this.runSpeed;
      }
      if (this.runDirection === 'backward') {
        this.x = this.x - this.runSpeed <= -50 ? -50 : this.x - this.runSpeed;
      }
    }
  }

  jump() {
    if (this.jumping) {
      if (this.dead) {
        if (this.gravity >= 0.5) {
          this.gravity = this.gravity - (this.gravity * .025);
          if (this.gravity < 0.5) {
            this.gravity = 0.5;
          }
        }
      }
      
      this.y -= this.jumpSpeed;
      this.jumpSpeed -= this.gravity;
      this.land = false;
      if (this.y >= this.ground) {
        this.x += 7;
        this.y = this.ground;
        this.land = true;
        this.jumpSpeed = 35;
        this.jumping = false;
      }
    }
  }

  slide() {
    if (this.sliding) {
      this.x = this.x + this.runSpeed >= 828 ? 828 : this.x + this.runSpeed;
    }
  }

  shoot() {
    this.game.createObject(new Arrow(this, this.ctx));
  }

  die() {
    this.dead = true;
  }
}