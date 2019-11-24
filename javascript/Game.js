class Game {

    constructor() {
        this.main = document.querySelector("main");
        this.showStartButton();
    }

    /**
     * Show the start button
     */
    showStartButton() {
        let startButton = document.createElement("button");
        startButton.innerHTML = "Start";
        this.main.appendChild(startButton);
    }
}