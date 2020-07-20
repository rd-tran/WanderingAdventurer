export default class Enemy {
  constructor(ctx, image) {
    this.ctx = ctx;
    this.x = 923 + 200 + Math.floor(Math.random() * 200);
    this.y = 793 - 125 - Math.floor(Math.random() * 100);
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
    this.srcWidth = image.width;
    this.srcHeight = image.height;
    this.width = this.srcWidth * 2;
    this.height = this.srcHeight * 2;
    this.animation = 'idle';
    this.frameIndex = 0;
    this.frameSets = {
      idle: [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3] ],
      attack: [
        [0, 4], [0, 4], [0, 5], [0, 5], [0, 6], [0, 6], [0, 7], [0, 7]
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
      ctx, image, srcX, x, y, srcWidth, srcHeight, width, height
    } = this;

    this.updateHitBox();
    ctx.scale(-1, 1);
    ctx.drawImage(image,
      srcX, 0, srcWidth, srcHeight,
    -x - width, y, width, height
    );
    ctx.scale(-1, 1);
    this.updateFrame();
  }
}