class Player {
  constructor() {
    this.width = 106;
    this.height = 106;
    this.x = 360;
    this.y = 20;
    this.caught = false;
  }
  draw() {
    // let c = color(200, 204, 0);
    // fill(c, 0.5);
    // noStroke();
    // rect(this.x + 21.5, this.y + 21.5, this.width / 2 + 10, this.height / 2 + 10);
    image(game.playerImg, this.x, this.y, this.width, this.height);
    if(keyIsDown(UP_ARROW)) {
      this.moveUp();
    }
    if(keyIsDown(DOWN_ARROW)) {
      this.moveDown();
    }
    if(keyIsDown(LEFT_ARROW)) {
      this.moveLeft();
    }
    if(keyIsDown(RIGHT_ARROW)) {
      this.moveRight();
    }
  }
  getEct() {  
    return {x: this.x + 21.5, y: this.y + 21.5, w: this.width / 2 + 10, h: this.height / 2 + 10};
  }
  moveUp() {
    if (this.y > 0 && !ultimateCollision({...this.getEct(), y: this.y + 21.5 - 20}, game.allPiggies)
        && !ultimateCollision({...this.getEct(), y: this.y + 21.5 - 20}, game.trees)) {
      this.y -= 20;
      game.playerImg = game.playerMoveUp;     
    }
  }
  moveDown() {
    if ((this.y < height - this.height) && !ultimateCollision({...this.getEct(), y: this.y + 21.5 + 20}, game.allPiggies)
      && !ultimateCollision({...this.getEct(), y: this.y + 21.5 + 20}, game.trees)) {
      this.y += 20;
      game.playerImg = game.playerMoveDown;
    }
  }
  moveLeft() {
    if (this.x > 0 && !ultimateCollision({...this.getEct(), x: this.x + 21.5- 20}, game.allPiggies)
      && !ultimateCollision({...this.getEct(), x: this.x + 21.5 - 20}, game.trees)) {
      this.x -= 20;
      game.playerImg = game.playerMoveLeft;
    }
  }
  moveRight() {
    if ((this.x < width - this.width) && !ultimateCollision({...this.getEct(), x: this.x + 21.5 + 20}, game.allPiggies)
      && !ultimateCollision({...this.getEct(), x: this.x + 21.5 + 20}, game.trees)) {
      this.x += 20;
      game.playerImg = game.playerMoveRight;
    }
  }
}

