export default class Character {
  constructor(ctx, player, sprite) {
    this.ctx = ctx;
    this.player = player;
    this.cycle = 0;
    this.frameIndex = 0;
    this.srcX = 0;
    this.srcY = 0;
    this.useImg = sprite.image;
    this.image = sprite.image;
    this.image2 = sprite.image2;
    this.width = sprite.width;
    this.height = sprite.height;
    this.animation = 'idle';
    this.frameSets = {
      idle: [ [0, 0], [0, 0], [0, 1], [0, 1], [0, 2], [0, 2], [0, 3], [0, 3] ],
      crouch: [ [0, 4], [0, 4], [0, 5], [0, 5], [0, 6], [0, 6], [1, 0], [1, 0] ],
      run: [
        [1, 1], [1, 1], [1, 2], [1, 2], [1, 3], [1, 3], [1, 4], [1, 4],
        [1, 5],[1, 5], [1, 6], [1, 6] ],
      jump: [
        [2, 0], [2, 1], [2, 1], [2, 2], [2, 2], [2, 3], [2, 3], [2, 4], [2, 4],
        [2, 5], [2, 5], [2, 6], [2, 6], [3, 0], [3, 0], [3, 1], [3, 1], [3, 2],
        [3, 2]
      ],
      shoot: [
        [0, 0], [0, 1], [0, 2],
        [2, 1], [2, 2], [2, 3], [3, 0], [3, 1], [1, 3], [1, 3], [1, 3], [3, 2]
      ]
    };
  }

  changeAnimation(animation) {
    if (this.animation !== animation) {
      this.frameIndex = 0;
      this.animation = animation;
      if (this.animation === 'shoot') {
        this.useImg = this.image2;
      } else {
        this.useImg = this.image
      }
    }
  }
  
  updateFrame() {
    const { frameSets, width, height } = this;
    if (this.animation === 'jump') {
      this.frameIndex += 1;
      if (this.frameIndex > frameSets[this.animation].length - 1) {
        this.frameIndex = frameSets[this.animation].length - 1; 
      }
    } else if (this.animation === 'shoot') {
      this.frameIndex += 1;
      if (this.frameIndex === frameSets[this.animation].length) {
        this.player.shooting = false;
        if (this.player.jumping && !this.player.land) {
          this.changeAnimation('jump');
          this.frameIndex = frameSets['jump'].length - 1;
        } else {
          this.frameIndex = 0;
        }
      } else if (this.frameIndex === frameSets[this.animation].length - 5) {
        this.player.shoot();
      }
    } else {
      this.frameIndex = (this.frameIndex + 1) % frameSets[this.animation].length;
    }
    
    const [yInd, xInd] = frameSets[this.animation][this.frameIndex];
    this.srcX = xInd * width;
    this.srcY = yInd * height;
    this.player.run();
    this.player.jump();
  }

  animate() {
    const { useImg, srcX, srcY, width, height, player } = this;
    
    if (player.jumping) {
      const shootOrJump = player.shooting ? 'shoot' : 'jump';
      this.changeAnimation(shootOrJump);
    } else if (player.shooting) {
      this.changeAnimation('shoot');
    } else if (player.running) {
      this.changeAnimation('run');
    } else if (player.crouching) {
      this.changeAnimation('crouch');
    } else {
      this.changeAnimation('idle');
    }

    if (player.land) {
      this.frameIndex = 0;
      player.land = false;
    }

    this.ctx.drawImage(useImg,
      srcX, srcY, width, height,
      player.x, player.y, width * 3, height * 3
    );
    this.updateFrame();
  }
}