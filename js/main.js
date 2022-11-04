const game = new Game();

function darkMode() {
  document.getElementById("body").classList.toggle("active");
}
function preload() {
  game.preload();
}
function setup() {
  createCanvas(960, 600);
  frameRate(4);
}
function draw() {
  game.draw()
}

function keyPressed() {
  switch (keyCode) {
    case RIGHT_ARROW:
      game.player.moveRight();
      break;
    case LEFT_ARROW:
      game.player.moveLeft();
      break;
    case UP_ARROW:
      game.player.moveUp();
      break;
    case DOWN_ARROW:
      game.player.moveDown();
      break;
    case SHIFT:
      if(game.portal === null) {
        game.portal = new Portal(game.player.x, game.player.y);
      }
      break;
  }
}

function collision(rect1, rect2) {
  return (rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y);
}
function ultimateCollision(rect, listOfThings) {
  for (let el of listOfThings) {
    if (this.collision(rect, el.getEct())) {
      return true;
    }
  }
  return false;
}
function listoThingsWithoutObj(listOfThings, objToDel) {
  return listOfThings.filter(obj => obj != objToDel);
}
