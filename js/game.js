class Game {
    constructor() {
		this.player = new Player();
        this.portal = null;
        this.baddies = [];
        [{x: 500, y: 300}, {x: 570, y: 100}, {x: 161, y: 311}].forEach((point) => {
            this.baddies.push(new Baddy(point.x, point.y));
        });
        this.allPiggies = [];
        [{x: 100, y: 20}, {x: 700, y: 324}, {x: 500, y: 520}, {x: 200, y: 500}, {x: 800, y: 490}, {x: 500, y: 130}, {x: 770, y: 90}, {x: 560, y: 450} ].forEach((point) => {
            this.allPiggies.push(new Piggies(point.x, point.y));
        });
        this.flowers = [{x: 540, y: 500}, {x: 100, y: 360}, {x: 790, y: 490}, {x: 560, y: 130}, {x: 70, y: 90}, {x: 512, y: 450}, {x: 270, y: 190}, {x: 812, y: 350}];
        this.trees = [];
        [{x: 8, y: 120}, {x: 836, y: 81}, {x: 30, y: 150}, {x: 666, y: 371}, {x: 80, y: 160}].forEach((point) => {
            this.trees.push(new Trees(point.x, point.y));
        });
	}
    allObj() {
        return this.allPiggies.concat(this.player).concat(this.baddies).concat(this.trees);
    }
    preload() {
		this.backgroundImage = loadImage('accets/background-mk.png');
        this.flowersImage = loadImage('accets/flowers.gif');
        this.treesImage = loadImage('accets/trees.gif');

        this.winImage = loadImage('accets/won.gif');
        this.lostImage = loadImage('accets/lost.gif');

		this.playerImg = loadImage('accets/player-move-down-small.gif');
        this.playerMoveDown = loadImage('accets/player-move-down-small.gif');
        this.playerMoveUp = loadImage('accets/player-move-up.gif');
        this.playerMoveRight = loadImage('accets/player-move-right.gif');
        this.playerMoveLeft = loadImage('accets/player-move-left.gif');

        this.piggyImg = loadImage('accets/piggy-move-down.gif');
        this.piggyMoveDown = loadImage('accets/piggy-move-down.gif');
        this.piggyMoveUp = loadImage('accets/piggy-move-up.gif');
        this.piggyMoveRight = loadImage('accets/piggy-move-right.gif');
        this.piggyMoveLeft = loadImage('accets/piggy-move-left.gif');

        this.portalImg = loadImage('accets/p3.gif');

        this.baddyImg = loadImage('accets/baddy.gif');
        this.baddyMoveDown = loadImage('accets/baddy.gif');
        this.baddyMoveUp = loadImage('accets/baddy-up.gif');
        this.baddyMoveLeft = loadImage('accets/baddy-left.gif');
        this.baddyMoveRight = loadImage('accets/baddy-ight.gif');
	}
    draw() {
        if (this.allPiggies.length !== 0 && this.baddies.length === 3 && !this.player.caught) {
            clear();
            image(this.backgroundImage, 0, 0, width, height);
            for (let flower of this.flowers) {
                image(this.flowersImage, flower.x, flower.y, 30, 30);
            }
            this.player.draw();
            for (let baddies of this.baddies) {  
                if (baddies.catch === true) {
                    this.player.caught = true;
                }
                baddies.draw();
            }    
            for (let piggies of this.allPiggies) {    
                piggies.draw();
            }
            if (this.portal !== null) {
                this.portal.draw();
                this.teleport();
                if(this.portal.isExpired) {
                    this.portal = null;
                }
            }
            for(let trees of this.trees) {
                trees.draw();
            }  
        }
        else if (this.allPiggies.length === 0) {
            clear ();
            image(this.winImage, 0, -20, width/2 , height);
            image(this.playerImg, 400, 400, 150, 150)
        }
        else if (this.player.caught) {
            clear ();
            image(this.lostImage, 0, -22, width/2, height);
            image(this.baddyImg, 450, 400, 200, 200)
        }
        else if (this.baddies.length !== 3) {
            clear ();
            image(this.lostImage, 0, -22, width/2, height);
            image(this.baddyImg, 450, 400, 200, 200)
        }     
    }
    teleport() {
        if (this.portal !== null && this.portal.isActive && !this.portal.isExpired) {
            this.allPiggies = this.allPiggies.filter(piggy => !collision(this.portal.getEct(), piggy.getEct()));
            this.baddies = this.baddies.filter(baddy => !collision(this.portal.getEct(), baddy.getEct()));
        }   
    }
}
