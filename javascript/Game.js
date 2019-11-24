class Game {

    /**
     * Constructor of the Game class
     * Get the main tag
     * Call showStartButton function
     */
    constructor() {
        this.main = document.querySelector("main");
        this.data = [
            "Bonjour, je m'appelle Zion, je serai votre guide tout au long de votre périple. Quel est votre prénom ?",
            "C'est original : je ne connaissais pas ce prénom ! Vous devez sûrement venir du passée. Non ?"
        ];
        this.answers = [];
        this.reply = 0;
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
            game.showReply();
            game.showForm();
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

    /**
     * Create and add p tag with reply from narrator to main tag
     */
    showReply() {
        let text = document.createElement("p");
        text.innerHTML = this.data[this.reply];
        this.reply++;
        this.main.appendChild(text);
    }

    showForm() {
        let form = document.createElement("form");
        let input = document.createElement("input");
        form.appendChild(input);
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
        })
        this.main.appendChild(form);
    }
}