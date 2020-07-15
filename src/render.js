function render(canvas) {
  const sheetWidth = 350;
  const sheetHeight = 592;
  const spriteHeight = 37;
  const spriteWidth = 50;

  
  canvas.drawImage(
    sprite_sheet.image,
    player.animation.frame * spriteWidth,
    player.animation.frame * spriteHeight,
    SPRITE_SIZE,
    SPRITE_SIZE,
    SPRITE_SIZE,
    player.x,
    player.y,
    SPRITE_SIZE,
    SPRITE_SIZE
  )
}