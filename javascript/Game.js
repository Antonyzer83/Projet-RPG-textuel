class Game {

    /**
     * Constructor of the Game class
     * Get the main tag
     * Call showStartButton function
     */
    constructor() {
        this.main = document.querySelector("main");
        this.reply = [
            "Bonjour, je m'appelle Zion, je serai votre guide tout au long de votre périple. Quel est votre prénom ?"
        ];
        this.replyCount = 0;
        this.answers = [
            [
                "C'est original : je ne connaissais pas ce prénom ! Vous devez sûrement venir du passée. Non ?",
                "Vous avez du faire un long voyage alors.",
                "Vos parents sont nostalgiques !"
            ],
            [
                "Vous avez été invité à me rejoindre dans ce lieu atypique, nous sommes au sommet de la plus grande tour du monde terrien. Connaissez-vous la raison de cet invitation ?",
                "Parfait ! Je vais tout de même vous rappeler l'importance de votre venue.",
                "Je vais alors vous expliquer votre venue."
            ]
        ];
        this.answersCount = 0;
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
    showReply(value = this.reply[this.replyCount]) {
        let text = document.createElement("p");
        text.innerHTML = value;
        if (value === this.reply[this.replyCount]) {
            this.replyCount++;
        }
        this.main.appendChild(text);
    }

    /**
     * Show the question
     */
    showQuestion() {
        let question = document.createElement("p");
        let firstAnwser = document.createElement("button");
        let secondAnswer = document.createElement("button");

        question.innerHTML = this.answers[this.answersCount][0];
        firstAnwser.innerHTML = "Oui";
        firstAnwser.addEventListener("click", function () {
            game.showAnswer(true);
        });
        secondAnswer.innerHTML = "Non";
        secondAnswer.addEventListener("click", function () {
            game.showAnswer(false);
        });

        this.main.appendChild(question);
        this.main.appendChild(firstAnwser);
        this.main.appendChild(secondAnswer);
    }

    /**
     * Show one of the answer
     *
     * @param check
     *              Yes or no / True or false
     */
    showAnswer(check) {
        let answer = document.createElement("p");
        answer.innerHTML = this.answers[this.answersCount][(check) ? 1 : 2];
        this.main.appendChild(answer);

        let buttons = document.getElementsByTagName("button");
        buttons[1].remove();
        buttons[0].remove();
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
            // Create hero
            hero = new Hero(input.value);
            // Remove form on submit
            form.remove();
            // Show name of hero
            game.showReply(input.value);
            game.ask();
        });
        this.main.appendChild(form);
        document.getElementsByTagName("input")[0].focus();
    }

    /**
     *
     */
    ask() {
        game.showQuestion();
    }
}