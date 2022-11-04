class Piggies {
    constructor(x,y) {
        this.width = 75;
        this.height = 75;
        this.y = y;
        this.x = x;
        this.di = Math.floor(Math.random() * 4); // 0 1 2 3 
        this.dirArray = ["up", "down", "right", "left"];
    }
    draw() {       
        if ( frameCount % 20 === 0) {
            this.di = Math.floor(Math.random() * 4);
            if (this.di === 0 && this.y < 150) {
                this.di = 1;
            }
            else if (this.di === 1 && this.y > height - this.height - 150) {
                this.di = 0;
            }
            else if (this.di === 2 && this.x > this.width - this.width - 150) {
                this.di = 3;
            }
            else if (this.di === 3 && this.x < 150) {
                this.di = 2;
            }
        }
        this.genMove()
        // let c = color(200, 204, 0);
        // fill(c, 0.5);
        // noStroke();
        // rect(this.x + 10, this.y + 10, this.width / 2 + 10, this.height/2+10) ;
        image(game.piggyImg, this.x, this.y, this.width, this.height);   
    }
    genMove() {
        const chooseDir = this.dirArray[this.di];
            if(chooseDir === "up") { 
                for(let i = 0; i < 30; i++){
                    this.moveUp();
                }  
            }
            if(chooseDir === "down") {
                for(let b = 0; b < 30; b++){
                    this.moveDown();
                }
            }
            if(chooseDir === "right") {
                for(let c = 0; c < 30; c++){
                    this.moveRight();
                }
            }
            if(chooseDir === "left") {
                for(let o = 0; o < 30; o++){
                    this.moveLeft();
                }
            }
    }     
    getEct() {
        return {x: this.x + 10, y: this.y + 10, w: this.width / 2 + 10, h: this.height/2 + 10};
    }
    moveUp() {
        if (this.y > 0 && !ultimateCollision({...this.getEct(), y: this.y - 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
            this.y -= 0.2;
            game.piggyImg = game.piggyMoveUp;
        }
        else {
            this.di = 1;
        }
    }
    moveDown() {
        if (this.y < (height - this.height) && !ultimateCollision({...this.getEct(), y: this.y + 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
            this.y += 0.2;
            game.piggyImg = game.piggyMoveDown;
        }
        else {
            this.di = 0;
        }
    }
    moveLeft() {
        if (this.x > 0  && !ultimateCollision({...this.getEct(), x: this.x - 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
            this.x -= 0.2;
            game.piggyImg = game.piggyMoveLeft;
        }
        else {
            this.di = 2;
        }
    }
    moveRight() {
        if (this.x < (600 - this.width) && !ultimateCollision({...this.getEct(), x: this.x + 0.2}, listoThingsWithoutObj(game.allObj(), this))) {
            this.x += 0.2;
           game.piggyImg = game.piggyMoveRight;
        }
        else {
            this.di = 3;
        }
    }
}

