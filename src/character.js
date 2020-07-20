export default class Character {
  constructor(ctx, player, sprite) {
    this.ctx = ctx;
    this.player = player;
    this.cycle = 0;
    this.useImg = sprite.image;
    this.image = sprite.image;
    this.image2 = sprite.image2;
    this.srcX = 0;
    this.srcY = 0;
    this.frameIndex = 0;
    this.srcWidth = sprite.width;
    this.srcHeight = sprite.height;
    // this.frameWidth = player.frameWidth;
    // this.frameHeight = player.frameHeight;
    this.width = player.width;
    this.height = player.height;
    this.animation = 'idle';
    this.slashing = false;
    this.frameSets = {
      idle: [
        [5, 3], [5, 3], [5, 3],
        [5, 4], [5, 4], [5, 4],
        [5, 5], [5, 5], [5, 5],
        [5, 6], [5, 6], [5, 6]
      ],
      run: [
        [0, 7], [0, 7], [0, 8], [0, 8], [0, 9], [0, 9], [0, 10], [0, 10],
        [0, 11],[0, 11], [0, 12], [0, 12]
      ],
      jump: [
        [2, 0], [2, 0], [2, 1], [2, 1], [2, 2], [2, 2], [2, 3], [2, 3],
        [2, 4], [2, 4], [2, 5], [2, 5], [2, 6], [2, 6], [3, 0], [3, 0],
        [3, 1], [3, 1], [3, 2], [3, 2]
      ],
      slide: [
        [3, 3], [3, 3], [3, 3],
        [3, 4], [3, 4], [3, 4],
        [3, 5], [3, 5], [3, 5],
        [3, 6], [3, 6], [3, 6],
        [4, 0], [4, 0], [4, 0]
      ],
      attack: [
        [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
        [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6],
        [8, 0], [8, 1], [8, 2]
      ],
      shoot: [
        [0, 0], [0, 1], [0, 2],
        [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [1, 3], [1, 3], [1, 3], [3, 2]
      ],
      die: [
        [8, 6], [8, 6],
        [9, 0], [9, 0],
        [9, 1], [9, 1], [9, 1],
        [9, 2], [9, 2], [9, 2],
        [9, 3], [9, 3], [9, 3], [9, 3], [9, 3],
        [9, 4], [9, 4], [9, 4], [9, 4], [9, 4],
        [9, 5], [9, 5], [9, 5], [9, 5], [9, 5],
        [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3],
        [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4],
        [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], 
        [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3],
        [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4],
        [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5], [9, 5],
        [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3],
        [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4]
      ]
    };
    this.adjHboxPos = { // [xHboxFront, xHboxBack, yHboxTop, yHboxBottom]
      idle: [
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0],
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0],
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0],
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0]
      ],
      run: [
        [-15, 20, 10, 0], [-15, 20, 10, 0], [-15, 21, 10, 0], [-15, 21, 10, 0],
        [-15, 24, 10, 0], [-15, 24, 10, 0], [-15, 20, 10, 0], [-15, 20, 10, 0],
        [-15, 21, 10, 0], [-15, 21, 10, 0], [-15, 24, 10, 0], [-15, 24, 10, 0],
      ],
      jump: [
        [-15, 15, 12, 0], [-15, 15, 12, 0],
        [-17, 15, 12, 0], [-17, 15, 12, 0],
        [-15, 20, 7, -2], [-15, 20, 7, -2],
        [-15, 15, 7, -8], [-15, 15, 7, -8],
        [-15, 22, 7, -8], [-15, 22, 7, -8],
        [-13, 15, 14, -9], [-13, 15, 14, -9],
        [-17, 20, 11, -6], [-17, 20, 11, -6],
        [-17, 15, 13, 10], [-17, 15, 13, 10],
        [-16, 23, 7, -4], [-16, 23, 7, -4],
        [-16, 23, 7, -4], [-16, 23, 7, -4]
      ],
      slide: [
        [-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 22, 0],
        [-12, 15, 22, 0], [-12, 15, 22, 0], [-12, 15, 22, 0],
        [-12, 15, 21, 0], [-12, 15, 21, 0], [-12, 15, 21, 0],
        [-12, 16, 20, 0], [-12, 16, 20, 0], [-12, 16, 20, 0],
        [-15, 18, 20, 0], [-15, 18, 20, 0], [-15, 18, 20, 0],
      ],
      attack: [
        [-17, 16, 15, 0], [-18, 16, 17, 0],
        [-1, 22, 0, 0], [-1, 22, 0, 0], [-1, 22, 0, 0],
        [-18, 16, 12, 0], [-20, 16, 12, 0], [-20, 16, 12, 0],
        [-3, 11, 7, 0], [-3, 11, 7, 0], [-3, 11, 7, 0],
        [-15, 21, 11, 0], [-15, 22, 11, 0],
        [0, 2, 13, 0], [0, 2, 13, 0], [0, 2, 13, 0],
        [-17, 16, 17, 0],
        // [-17, 16, 15, 0], [-18, 16, 17, 0],
        // /* [-28, 15, 22, 0] */ [-1, 22, 0, 0],
        // [-16, 16, 12, 0], [-17, 16, 12, 0], [-18, 16, 12, 0], [-20, 16, 12, 0], [-20, 16, 12, 0],
        // /* [-38, 11, 36, 0] */ [-3, 11, 7, 0],
        // [-17, 16, 16, 0], [-17, 16, 15, 0], [-15, 21, 11, 0], [-15, 22, 11, 0], /* [-48, 2, 36, 0] */ [0, 2, 13, 0],
        // [-17, 16, 18, 0], [-17, 16, 17, 0], [-17, 16, 17, 0]
      ],
      shoot: [
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0],
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0],
        [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0], [-17, 16, 10, 0],
      ]
    };
  }

  changeAnimation(animation) {
    if (this.animation !== animation) {
      this.frameIndex = -1;
      this.animation = animation;
      if (this.animation === 'shoot') {
        this.useImg = this.image2;
      } else {
        this.useImg = this.image
      }
    }
  }

  updateHitbox() {
    this.xHitboxFront = 
      this.player.x + this.width + 
      (this.adjHboxPos[this.animation][this.frameIndex][0] * 3);
    this.xHitboxBack =
      this.player.x + (this.adjHboxPos[this.animation][this.frameIndex][1] * 3);
    this.yHitboxTop =
      this.player.y + (this.adjHboxPos[this.animation][this.frameIndex][2] * 3);
    this.yHitboxBottom =
      this.player.y + this.height +
      (this.adjHboxPos[this.animation][this.frameIndex][3] * 3);
  }
  
  updateFrame() {
    const { frameSets, srcWidth, srcHeight } = this;
    if (this.animation === 'jump') {
      this.frameIndex += 1;
      if (this.frameIndex > frameSets[this.animation].length - 1) {
        this.frameIndex = frameSets[this.animation].length - 4; 
      }
    } else if (this.animation === 'attack') {
      this.frameIndex += 1;
      debugger
      if (this.frameIndex === frameSets[this.animation].length) {
        this.player.attacking = false;
        if (this.player.jumping) {
          this.changeAnimation('jump');
          this.frameIndex = frameSets['jump'].length - 4;
        } else {
          this.frameIndex = 0;
        }
      } else if ([2, 3, 4, 8, 9, 10, 13, 14, 15, 16].includes(this.frameIndex))
      {
        this.slashing = true;
      } else {
        this.slashing = false;
      }
    } else if (this.animation === 'shoot') {
      this.frameIndex += 1;
      if (this.frameIndex === frameSets[this.animation].length) {
        this.player.shooting = false;
        if (this.player.jumping) {
          this.changeAnimation('jump');
          this.frameIndex = frameSets['jump'].length - 4;
        } else {
          this.frameIndex = 0;
        }
      } else if (this.frameIndex === frameSets[this.animation].length - 5) {
        this.player.shoot();
      }
    } else if (this.animation === 'slide') {
      this.frameIndex += 1;
      if (this.frameIndex >= frameSets['slide'].length) {
        this.player.sliding = false;
        this.frameIndex = 0;
      }
    } else if (this.animation === 'die') {
      if (this.frameIndex < frameSets['die'].length - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = frameSets['die'].length - 1;
      }
    } else {
      this.frameIndex = (this.frameIndex + 1) %
                        frameSets[this.animation].length;
    }
    
    const [yInd, xInd] = frameSets[this.animation][this.frameIndex];
    this.srcX = xInd * srcWidth;
    this.srcY = yInd * srcHeight;
    this.player.run();
    this.player.jump();
    this.player.slide();
  }

  animate() {
    const {
      useImg, srcX, srcY, srcWidth, srcHeight, width, height, player
    } = this;

    if (player.dead) {
      if (!player.jumping && player.land) {
        this.changeAnimation('die');
      }
    } else if (player.jumping) {
      const attackShootOrJump =
        player.attacking ? 'attack' : (player.shooting ? 'shoot' : 'jump');
      this.changeAnimation(attackShootOrJump);
    } else if (player.attacking) {
      this.changeAnimation('attack');
    } else if (player.shooting) {
      this.changeAnimation('shoot');
    } else if (player.running) {
      this.changeAnimation('run');
    } else if (player.sliding) {
      this.changeAnimation('slide');
    } else {
      this.changeAnimation('idle');
    }

    this.updateFrame();
    if (this.animation !== 'die') {
      this.updateHitbox();
    }
    this.ctx.drawImage(useImg,
      srcX, srcY, srcWidth - 1, srcHeight - 1,
      player.x, player.y, width, height
    );
    // this.updateHitbox();
  }
}