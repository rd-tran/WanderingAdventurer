export default class Animation {
  constructor(frameSet, delay) {
    // Counts the number of game cycles since the last frame change
    this.count = 0;
    // The number of game cycles to wait until the next frame change
    this.delay = delay;
    // The value in the sprite sheet of the sprite image / tile to display
    this.frame = 0;
    // The frame's index in the current animation frame set
    this.frameIndex = 0;
    // The current animation frame set that holds sprite title values
    this.frameSet = frame_set;
  }

  change(frameSet, delay = 15) {
    if (this.frameSet != frameSet) {
      this.count = 0;
      this.delay = delay;
      this.frameIndex = 0;
      this.frameSet = frameSet;
      this.frame = this.frameSet[this.frameIndex];
    }
  }
  
  update() {
    this.count++;

    if (this.count >= this.delay) {
      this.count = 0;
      const lastFrame = this.frameIndex === this.frameSet.length - 1;
      this.frameIndex = lastFrame ? 0 : this.frameIndex + 1;
      this.frame = this.frameSet[this.frameIndex];
    }
  }
}