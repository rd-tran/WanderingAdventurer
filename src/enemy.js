export default class Enemy {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 923 + 50 + Math.floor(Math.random() * 100);
    this.y = 793 - 125 - Math.floor(Math.random() * 50);
    this.srcX = 0;
    this.speed = 15;
    this.neutralMoveSpeed = 10;
    this.attackMoveSpeed = 15;
    this.jumpSpeed = 25;
    this.neutralJumpSpeed = 25;
    this.attackJumpSpeed = 28;
    this.gravity = 3;
    this.ground = 678;
    this.land = true;
    this.image = new Image();
    this.image.src = './assets/big-monster.png';
    this.image2 = new Image();
    this.image2.src = './assets/explosion-4.png';
    this.useImg = this.image;
    this.width = 32;
    this.height = 35;
    this.animation = 'idle';
    this.frameIndex = 0;
    this.frameSets = {
      idle: [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3] ],
      attack: [
        [0, 4], [0, 4], [0, 5], [0, 5], [0, 6], [0, 6], [0, 7], [0, 7]
      ],
      die: [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],[0, 6], [0, 7],[0, 8],
        [0, 9], [0, 10], [0, 11]
      ]
    };
  }

  isOffMap() {
    return this.x <= -this.width;
  }
  
  isCollideWith(player) {
    return false;
  }
  
  jump() {
    this.y -= this.jumpSpeed;
    this.jumpSpeed -= this.gravity;
    if (this.y >= this.ground) {
      this.y = this.ground;
      this.jumpSpeed = this.neutralJumpSpeed;
      this.land = true;
    } else {
      this.land = false;
    }
  }
  
  changeAnimation(animation) {
    if (this.animation !== animation) {
      this.frameIndex = 0;
      this.animation = animation;
      if (this.animation === 'die') {
        this.useImg = this.image2;
      } else {
        this.useImg = this.image
      }
    }
  }

  updateHitBox() {
    this.xHitboxFront = this.x + 3;
    this.xHitboxBack = this.x + (this.width - 3) * 3;
    this.yHitboxTop = this.y;
    this.yHitboxBottom = this.y + (this.height * 3);
  }

  updateFrame() {
    const { frameSets, width } = this;
    this.frameIndex = (this.frameIndex + 1) % frameSets[this.animation].length;
    const [_, xInd] = frameSets[this.animation][this.frameIndex];
    this.srcX = xInd * width;
    if (this.animation !== 'die') {
      this.x -= this.speed;
      this.jump();
      this.updateHitBox();
    }
  }

  animate() {
    const { ctx, useImg, srcX, x, y, width, height } = this;
    
    if (this.animation === 'die') {
      ctx.drawImage(useImg,
        srcX, 0, 128, 128,
        x, y, 128, 128
      );
    } else {
      ctx.scale(-1, 1);
      ctx.drawImage(useImg,
        srcX, 0, width, height,
        -x - width * 3, y, width * 3, height * 3
      );
      ctx.scale(-1, 1);
    }

    this.updateFrame();
  }
}