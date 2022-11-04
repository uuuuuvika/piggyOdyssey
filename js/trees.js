class Trees {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 140;
    }
    draw () {
        // let c = color(200, 204, 0);
        // fill(c);
        // noStroke();
        // rect(this.x + 30, this.y + 50, this.width/2, this.height - 55);
        image(game.treesImage, this.x, this.y, this.width, this.height);
    }
    getEct() {  
        return {x: this.x + 30, y: this.y + 50, w: this.width/2, h: this.height - 55}; 
    }
}