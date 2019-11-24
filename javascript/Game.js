class Game {

    /**
     * Constructor of the Game class
     * Get the main tag
     * Call showStartButton function
     */
    constructor() {
        this.main = document.querySelector("main");
        this.showStartButton();
    }

    /**
     * Create and add the start button to the main tag
     */
    showStartButton() {
        let startButton = document.createElement("button");
        startButton.innerHTML = "Start";
        startButton.addEventListener("click", function () {
            game.deleteStartButton();
        });
        this.main.appendChild(startButton);
    }

    /**
     * Remove the start button from the main tag
     */
    deleteStartButton() {
        let startButton = document.getElementsByTagName("button")[0];
        startButton.remove();
    }

}