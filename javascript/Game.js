class Game extends Base{

    /**
     * Constructor of the Game class
     * Get the main tag
     * Call showStartButton function
     */
    constructor() {
        super();
        this.reply = [
            "Bonjour, je m'appelle Zion, je serai votre guide tout au long de votre périple. Quel est votre prénom ?"
        ];
        this.replyCount = 0;
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
        startButton.classList.add("start");
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
        text.innerHTML = this.reply[this.replyCount];
        this.replyCount++;
        this.main.appendChild(text);
    }

    /**
     * Create and add form to enter hero name
     */
    showForm() {
        let form = document.createElement("form");
        let input = document.createElement("input");
        // Add input to form
        form.appendChild(input);
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
            if (game.checkForm(input.value)) {
                // Create hero
                hero = new Hero(input.value);
                // Remove form on submit
                form.remove();
                // Begin introduction part
                introduction = new Introduction();
            }
        });
        this.main.appendChild(form);
        // Add focus on input tag
        document.getElementsByTagName("input")[0].focus();
    }

    /**
     * Check the value of input
     *
     * @param value
     *              Input value
     * @returns {boolean}
     *              True or False
     */
    checkForm(value) {
        return value === "" ? false : true;
    }
}