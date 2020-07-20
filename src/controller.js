export default class Controller {
  constructor(player) {
    this.player = player;
    this.keys = {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      KeyJ: false,
      KeyK: false
      // KeyW: {active: false, timeStamp: 0},
      // KeyA: {active: false, timeStamp: 0},
      // KeyS: {active: false, timeStamp: 0},
      // KeyD: {active: false, timeStamp: 0},
      // Space: {active: false, timeStamp: 0}
    };
  }

  keyDown(e) {
    if (Object.keys(this.keys).includes(e.code)) {
      e.preventDefault();
    // if (this.keys[e.code]) {
      this.keys[e.code] = e.type == 'keydown';
      // this.keys[e.code].active = e.type == 'keydown';
      // this.keys[e.code].timeStamp = e.timeStamp;
      if (this.keys['KeyW']) {
        this.player.jumping = true;
      }
      if (this.keys['KeyA']) {
        if (!this.player.sliding) {
          this.player.running = true;
          this.player.x -= this.player.runSpeed;
          this.player.runDirection = 'backward';
        }
      }
      if (this.keys['KeyS']) {
        this.player.sliding = true;
        this.player.running = false;
      }
      if (this.keys['KeyD']) {
        if (!this.player.sliding) {
          this.player.running = true;
          this.player.runDirection = 'forward';
        }
      }
      if (this.keys['KeyJ']) {
        if (!this.player.shooting) {
          this.player.attacking = true;
        }
      }
      if (this.keys['KeyK']) {
        if (!this.player.attacking) {
          this.player.shooting = true;
        }
      }
    }
    
    // if (this.keys['KeyW'].active) {
    //   this.player.jumping = true;
    // }
    // if (this.keys['KeyA'].active) {
    //   this.player.running = true;
    //   this.player.runDirection = 'backward';
    // }
    // if (this.keys['KeyS'].active) {
    //   this.player.crouching = true;
    // }
    // if (this.keys['KeyD'].active) {
    //   this.player.running = true;
    //   this.player.runDirection = 'forward';
    // }
    // if (this.keys['Space'].active) {
    //   this.player.shooting = true;
    // }
  }
  
  keyUp(e) {
    if (Object.keys(this.keys).includes(e.code)) {
      e.preventDefault();
      // if (this.keys[e.code]) {
      this.keys[e.code] = e.type == 'keydown';
      // this.keys[e.code].active = e.type == 'keydown';
      // this.keys[e.code].timeStamp = e.timeStamp;
    }
    
    switch (e.code) {
      case 'KeyD':
        if (this.keys['KeyA']) {
          this.player.runDirection = 'backward';
        }
        // if (this.keys['KeyA'].active) {
        //   this.player.runDirection = 'backward';
        // }
      case 'KeyA':
        if (this.keys['KeyD']) {
          this.player.running = true;
          this.player.runDirection = 'forward';
        } else if (this.keys['KeyA']) {
          this.player.running = true;
          this.player.runDirection = 'backward';
        }
        // if (this.keys['KeyD'].active) {
        //   this.player.runDirection = 'forward';
        // }
      case 'KeyS':
        if (this.keys['KeyD']) {
          this.player.running = true;
          this.player.runDirection = 'forward';
        } else if (this.keys['KeyA']) {
          this.player.running = true;
          this.player.runDirection = 'backward';
        }
    }

    if (!this.keys['KeyA'] && !this.keys['KeyD']) {
      this.player.running = false;
    }
    if (!this.keys['KeyS']) {
      this.player.sliding = false;
    }
    // if (!this.keys['KeyA'].active && !this.keys['KeyD'].active) {
    //   this.player.running = false;
    // }
    // if (!this.keys['KeyS'].active) {
    //   this.player.crouching = false;
    // }
  }
}