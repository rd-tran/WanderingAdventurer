export default class Enemy {
  constructor(ctx, image) {
    this.ctx = ctx;
    this.x = 923 + 200 + Math.floor(Math.random() * 200);
    this.y = 793 - 125 - Math.floor(Math.random() * 100);
    // this.x = 130;
    // this.y = 700;
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
    this.image = image.image;
    // this.image = new Image();
    // this.image.src = 'assets/big-monster.png';
    this.image2 = new Image();
    this.image2.src = 'assets/explosion-4.png';
    this.useImg = this.image;
    this.srcWidth = 32;
    this.srcHeight = 35;
    this.width = this.srcWidth * 2;
    this.height = this.srcHeight * 2;
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
    return this.x <= -this.srcWidth;
  }
  
  isCollideWith(player) {
    const topClip = this.yHitboxTop >= player.yHitboxTop &&
                    this.yHitboxTop <= player.yHitboxBottom;
    const bottomClip = this.yHitboxBottom >= player.yHitboxTop &&
                       this.yHitboxTop <= player.yHitboxBottom;
    const frontClip = this.xHitboxFront <= player.xHitboxFront &&
                      this.xHitboxFront >= player.xHitboxBack;
    const backClip = this.xHitboxBack <= player.xHitboxFront &&
                     this.xHitboxBack >= player.xHitboxBack;

    // xHitboxFront + 27
    // xHitboxBack + 7
    // yHitboxTop - 36
    // xHitboxFront + 36
    // xHitboxBack + 0
    // yHitboxTop - 29
    // xHitboxFront + 48
    // xHitboxBack + 0
    // yHitboxTop - 24
    
    return (topClip || bottomClip) && (frontClip || backClip);
  }

  attack() {

  }
  
  jump() {
    this.y -= this.jumpSpeed;
    this.jumpSpeed -= this.gravity;
    if (this.y >= this.ground) {
      this.y = this.ground;
      this.jumpSpeed = this.neutralJumpSpeed;
      this.land = true;
    } else {
      this.x -= this.speed;
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
    this.xHitboxFront = this.x + 20;
    this.xHitboxBack = this.x + ((this.width - 10));
    this.yHitboxTop = this.y;
    this.yHitboxBottom = this.y + this.height;
  }

  updateFrame() {
    const { frameSets, width } = this;
    this.frameIndex = (this.frameIndex + 1) % frameSets[this.animation].length;
    const [_, xInd] = frameSets[this.animation][this.frameIndex];
    this.srcX = xInd * width;
    if (this.animation !== 'die') {
      this.jump();
    }
  }

  animate() {
    const {
      ctx, useImg, srcX, x, y, srcWidth, srcHeight, width, height
    } = this;
    
    if (this.animation === 'die') {
      ctx.drawImage(useImg,
        srcX, 0, 128, 128,
        x, y, 128, 128
        );
      } else {
        ctx.scale(-1, 1);
        ctx.drawImage(useImg,
          srcX, 0, srcWidth, srcHeight,
        -x - width, y, width, height
        );
        ctx.scale(-1, 1);
      }
    this.updateHitBox();
    this.updateFrame();
  }
}