class Baddy {
    constructor(x, y) {
        this.width = 114;
        this.height = 133;
        this.y = y;
        this.x = x;

        this.di = Math.floor(Math.random() * 4); // 0 1 2 3 
        this.dirArray = ["up", "down", "left", "right"];
        this.catch = false;
    }
    draw() {
        if ( frameCount % 10 === 0) { 
            this.di = Math.floor(Math.random() * 4);
        }
        this.move()
        // let c = color(200, 204, 0);
        // fill(c);
        // noStroke();
        // rect(this.x + 22, this.y + 15, this.width / 2 + 2, this.height * 0.75);
         image(game.baddyImg, this.x, this.y, this.width, this.height);
     }
    move() {
        let chooseDir = this.dirArray[this.di];
     
            if(chooseDir === "up") { 
                for(let i = 0; i < 50; i++){
                    this.moveUp();
                }  
            }
            if(chooseDir === "down") {
                for(let b = 0; b < 50; b++){
                    this.moveDown();
                }
            }
            if(chooseDir === "right") {
                for(let c = 0; c < 50; c++){
                    this.moveRight();
                }
            }
            if(chooseDir === "left") {
                for(let o = 0; o < 50; o++){
                    this.moveLeft();
                }
            }
    }

  getEct() {  
    return {x: this.x + 22, y: this.y + 15, w: this.width / 2 + 2, h: this.height * 0.75};
  }

  moveUp() {
    if(collision(this.getEct(), game.player.getEct())) {
        this.catch = true;
      } 
    if (this.y > 0 && !ultimateCollision({...this.getEct(), y: this.y - 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
      this.y -= 0.2;
      game.baddyImg = game.baddyMoveUp;
        
    }
    else {
        this.di = 1;
    }
  }
  moveDown() {
    if(collision(this.getEct(), game.player.getEct())) {
        this.catch = true;
    }
    if ((this.y < height - this.height) && !ultimateCollision({...this.getEct(), y: this.y + 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
        this.y += 0.2;
        game.baddyImg = game.baddyMoveDown;
    }
    else {
        this.di = 0;
    }
}

  moveLeft() {
    if(collision(this.getEct(), game.player.getEct())) {
        this.catch = true;
        }
    if (this.x > 0 && !ultimateCollision({...this.getEct(), x: this.x - 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
      this.x -= 0.2;
      game.baddyImg = game.baddyMoveLeft; 
    }
    else {
        this.di = 3;
    }
}
  moveRight() {
    if(collision(this.getEct(), game.player.getEct())) {
        this.catch = true;
    
        }
    if ((this.x < width - this.width) && !ultimateCollision({...this.getEct(), x: this.x + 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
      this.x += 0.2;
      game.baddyImg = game.baddyMoveRight;
    }
    else {
        this.di = 2;
    }
  }
}