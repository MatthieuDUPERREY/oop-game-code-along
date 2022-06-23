

class Game {
  constructor() {
    this.player = null; // will store an instance of the class Player
  }
  start() {
    this.player = new Player();
    this.attachEventListeners();
  }
  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.player.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.player.moveRight();
      }
    });
  }
}


class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.createDomElement();
  }
  createDomElement() {
    // // step1: create the element:
    const domElement = document.createElement('div');

    // // step2: add content or modify (ex. innerHTML...)
    // myNewImg.setAttribute("src", "./images/something.jpg")
    domElement.id = "player";
    domElement.style.backgroundColor = "green";

    // //step3: append to the dom: `parentElm.appendChild()`
    const boardElm = document.getElementById("board"); //
    boardElm.appendChild(domElement);
  }
  moveLeft() {
    this.positionX--;
    console.log(`current horizontal position.... ${this.positionX}`)
  }
  moveRight() {
    this.positionX++;
    console.log(`current horizontal position.... ${this.positionX}`)
  }
}





const game = new Game();
game.start();
