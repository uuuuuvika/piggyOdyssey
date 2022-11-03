class Portal {
    constructor(x, y) {
        this.width = 80;
        this.height = 80;
        this.x = x;
        this.y = y;
        this.isActive = false;
        this.isExpired = false;
        this.createdTime = frameCount;
    }

    draw () {
        const timePassed = frameCount - this.createdTime;
        if (timePassed > 10) {
            this.isActive = true;
        }
        if (timePassed > 40) {
            this.isExpired = true;
        }
        if (this.isActive && !this.isExpired) {
            // let c = color(255, 204, 0);
            // fill(c);
            // noStroke();
            // rect(this.x, this.y, this.width, this.height);
            image(game.portalImg, this.x, this.y, this.width, this.height);
        }   
    }

    getEct() {  
        return {x: this.x, y: this.y, w: this.width, h: this.height};
       
      }
}
