# Wandering Adventurer

Wandering Adventurer is a retro inspired endless runner game where users must avoid obstacles, dodge or attack enemies, and survive as long as possible.

Click [here](https://rd-tran.github.io/WanderingAdventurer/) to check it out!

![demo](dist/assets/demo.gif)


## Technologies
Wandering Adventurer is entirely built on vanilla javascript, and html.

## Code Snippets
Multi-layered moving background that also slows down until it reaches a standstill when the game is over
```javascript
animate() {
    const { ctx, width, height } = this;

    for (let i = this.layers.length - 1; i >= 0; i--) {
      if (this.game.gameOver) {
        this.ctx.globalAlpha = this.layers[i].alpha;

        ctx.drawImage(this.layers[i].image,
          this.layers[i].xPos, 0, width, height
        );
        
        if (this.layers[i].speed < 0) {
          this.layers[i].speed =
          this.layers[i].speed - (this.layers[i].speed * .05);
          if (this.layers[i].speed > 0) {
            this.layers[i].speed = 0;
          }
        }
      } else {
        console.log(this.ctx.globalAlpha)
        ctx.drawImage(this.layers[i].image,
          this.layers[i].xPos, 0, width, height
        );
      }
      
      this.layers[i].xPos += this.layers[i].speed;
      if (this.layers[i].xPos <= -(width/2)) {
        this.layers[i].xPos = 0;
      }
    }
  }

```

## Future Direction
### Score
- Add leaderboard to track high scores
- Display current score while playing the game
- Allow users to enter a name to save their spot on the leaderboard
