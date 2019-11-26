class Introduction extends Base {

    constructor() {
        super();
        // Questions of narrator
        this.asks = [
            "C'est original : je ne connaissais pas ce prénom ! Vous devez sûrement venir du passée. Non ?",
            "Vous avez été invité à me rejoindre dans ce lieu atypique, nous sommes au sommet de la plus grande tour du monde terrien. Connaissez-vous la raison de cet invitation ?",
            "L'année 2465 est marquée par la découverte d'une forme de vie extraterrestre. On pourrait alors penser que c'est une bonne nouvelle, mais ce n'est pas le cas. En effet, cette découverte a été réalisée par chance : nos scientifiques, utilisant la quantique moderne, ont détecté des signaux étranges pour des humains ou des robots, comme moi. Après une traduction complexe et semée d'embuches, ces messages sont une déclaration de guerre à la Terre entière. Le saviez-vous ?",
            "Vous devez alors surement vous demander pourquoi est ce que je vous raconte tout ça. Vous êtes un prodige ! Oui vous, nous avons recherché jusqu'à ce matin le profil unique et parfait, qui pourrait sauver la planète d'une telle catastrophe. Actuellement, nous n'avons pas de leader, ni de maître de guerre. Nous savons que vous avez réalisé de longues études en stratégie de guerre et de management ????. Vous avez fini chacune de vos années d'études, par d'excellentes notes et appréciations. Cela fait déjà un moment que nous avions un oeil sur vous, en cas d'attaque. Vous êtes la personne qu'il nous fait. Êtes-vous prêt à relever ce défi ?",
        ];

        // Answers of narrator
        this.answers = [
            [
                "Vous avez du faire un long voyage alors !",
                "Vos parents sont nostalgiques !"
            ],
            [
                "Parfait ! Je vais tout de même vous rappeler l'importance de votre venue.",
                "Je vais alors vous expliquer votre venue."
            ],
            [
                "Vous êtes un menteur, car cette information est confidentielle. Vous n'êtes pas la personne qu'il nous faut. Adieu.",
                "C'est normal, nous l'avons appris hier soir, tard dans la nuit."
            ],
            [
                "Parfait, je sais que cette mission est faite pour vous. Allons rejoindre le centre d'entraînement pour corriger quelques détails, qui peuvent avoir un impact sur le combat qui approche.",
                "Vous me décevez énormément. J'appelle de ce pas les gardes pour qu'ils vous fassent disparaître, vous possédez un secret d'état. Adieu."
            ]
        ];
        // Count of questions
        this.count = 0;
        this.answerCount = 0;

        this.showAsk();
    }

    /**
     * Show question with two answers
     *
     * Create and add p and buttons tags to main tag
     */
    showAsk() {
        let ask = document.createElement("p");
        ask.innerHTML = this.asks[this.count];

        let firstAnswer = this.createButton(true);
        let secondAnswer = this.createButton(false);

        this.main.appendChild(ask);
        this.main.appendChild(firstAnswer);
        this.main.appendChild(secondAnswer);
    }

    /**
     * Create a button tag
     *
     * @param result
     *              True or false / Yes or no
     * @returns {HTMLButtonElement}
     *              Button
     */
    createButton(result) {
        let button = document.createElement("button");
        button.innerHTML = (result ? "Oui" : "Non");
        button.addEventListener("click", function () {
            introduction.showAnswerHero(result);
            introduction.showAnswerIntro(result);
            scrollToBottom();
        });
        return button;
    }

    /**
     * Show the answer onclick button
     *
     * @param result
     *              Yes or no
     */
    showAnswerIntro(result) {
        let answer = document.createElement("p");
        answer.innerHTML = this.answers[this.count][result ? 0 : 1];
        this.main.appendChild(answer);

        this.deleteButtons();
        this.count++;
        this.answerCount = result ? 0 : 1;

        this.checkCount();
    }

    showAnswerHero(result) {
        let answer = document.createElement("p");
        answer.innerHTML = result ? "Oui" : "Non";
        answer.classList.add("heroAnswer");
        this.main.appendChild(answer);
    }

    /**
     * Remove the answer buttons
     */
    deleteButtons() {
        let buttons = document.getElementsByTagName("button");
        buttons[1].remove();
        buttons[0].remove();
    }

    checkCount() {
        console.log(this.count);
        if (this.count === 3 && this.answerCount === 0 || this.count === 4 && this.answerCount === 1) {
            console.log('perdu');
        } else if (this.count < 4) {
            this.showAsk();
        } else {
            console.log('fin introduction');
        }
    }
}