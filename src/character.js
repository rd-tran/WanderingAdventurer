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
      idle: [
        [5, 3], [5, 3], [5, 3],
        [5, 4], [5, 4], [5, 4],
        [5, 5], [5, 5], [5, 5],
        [5, 6], [5, 6], [5, 6]
      ],
      // idle: [ [0, 0], [0, 0], [0, 1], [0, 1], [0, 2], [0, 2], [0, 3], [0, 3] ],
      slide: [
        [3, 3], [3, 3], [3, 3],
        [3, 4], [3, 4], [3, 4],
        [3, 5], [3, 5], [3, 5],
        [3, 6], [3, 6], [3, 6],
        [4, 1], [4, 1], [4, 1]
      ],
      run: [
        [0, 7], [0, 7], [0, 8], [0, 8], [0, 9], [0, 9], [0, 10], [0, 10],
        [0, 11],[0, 11], [0, 12], [0, 12]
      ],
      // run: [
      //   [1, 1], [1, 1], [1, 2], [1, 2], [1, 3], [1, 3], [1, 4], [1, 4],
      //   [1, 5],[1, 5], [1, 6], [1, 6]
      // ],
      jump: [
        [2, 0], [2, 1], [2, 1], [2, 2], [2, 2], [2, 3], [2, 3], [2, 4], [2, 4],
        [2, 5], [2, 5], [2, 6], [2, 6], [3, 0], [3, 0], [3, 1], [3, 1], [3, 2],
        [3, 2]
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
        if (this.player.jumping) {
          this.changeAnimation('jump');
          this.frameIndex = frameSets['jump'].length - 1;
        } else {
          this.frameIndex = 0;
        }
      } else if (this.frameIndex === frameSets[this.animation].length - 5) {
        this.player.shoot();
      }
    } else if (this.animation === 'die') {
      if (this.frameIndex < frameSets['die'].length - 1) {
        this.frameIndex += 1;
        console.log(this.frameIndex);
      } else {
        this.frameIndex = frameSets['die'].length - 1;
      }
    } else {
      this.frameIndex = (this.frameIndex + 1) %
                        frameSets[this.animation].length;
    }
    console.log(frameSets[this.animation][this.frameIndex])
    const [yInd, xInd] = frameSets[this.animation][this.frameIndex];
    this.srcX = xInd * width;
    this.srcY = yInd * height;
    this.player.run();
    this.player.jump();
    this.player.slide();
  }

  animate() {
    const { useImg, srcX, srcY, width, height, player } = this;

    if (player.dead) {
      if (!player.jumping && player.land) {
        this.changeAnimation('die');
      }
    } else if (player.jumping) {
      const shootOrJump = player.shooting ? 'shoot' : 'jump';
      this.changeAnimation(shootOrJump);
    } else if (player.shooting) {
      this.changeAnimation('shoot');
    } else if (player.running) {
      this.changeAnimation('run');
    } else if (player.sliding) {
      this.changeAnimation('slide');
    } else {
      this.changeAnimation('idle');
    }

    this.ctx.drawImage(useImg,
      srcX, srcY, width - 1, height - 1,
      player.x, player.y, width * 3, height * 3
    );
    console.log('Player is on land', player.land)
    this.updateFrame();
  }
}