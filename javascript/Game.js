class Game {

    constructor() {
        this.showStartButton();
        this.main = document.querySelector("main");
    }

    showStartButton() {
        let startButton = document.createElement("button");
        startButton.innerHTML = "Start";
        this.main.appendChild(startButton);
    }
}