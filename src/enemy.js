export default class Arrow {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 800;
    // this.x = 928;
    this.y = 793 - 125;
    this.srcX = 0;
    this.speed = -15;
    this.image = new Image();
    this.image.src = './assets/big-monster.png';
    this.width = 32;
    this.height = 35;
    this.animation = 'idle'
    this.frameIndex = 0;
    this.frameSets = {
      idle: [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3] ]
      // idle: [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7] ]
    };
    this.xHitboxFront = this.x + this.width;
    this.xHitboxBack = this.x + this.width - 10;
    this.yHitboxTop = this.y;
    this.yHitboxBottom = this.y + this.height;
  }

  isOffMap() {
    return this.x <= -this.width;
    // return false;
  }
  
  isCollideWith(object) {
    return false;
  }

  changeAnimation(animation) {
    if (this.animation !== animation) {
      this.frameIndex = 0;
      this.animation = animation;
    }
  }
  
  updateFrame() {
    const { frameSets, width, height } = this;
    this.frameIndex = (this.frameIndex + 1) % frameSets[this.animation].length;
    const [yInd, xInd] = frameSets[this.animation][this.frameIndex];
    this.srcX = xInd * width;
    this.srcY = yInd * height;
    // this.x += this.speed;
  }

  animate() {
    const { ctx, image, x, y, width, height } = this;

    // if (this.dead) {
    //   this.changeAnimation('dead');
    // } else {
    //   this.changeAnimation('idle');
    // }
    
    ctx.scale(-1, 1);
    ctx.drawImage(image,
      this.srcX, 0, width, height,
      -x - width * 3, y, width * 3, height * 3
    );
    ctx.scale(-1, 1);

    this.updateFrame();
  }
}