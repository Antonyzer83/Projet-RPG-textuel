class Victory extends Base {

    constructor() {
        super();
        this.choices = [
            "Rester dans l'anonymat",
            "Prendre le pouvoir",
            "Devenir Général",
            "Devenir Paysan"
        ];
        this.results = [
            "C'est un choix très humble, très exemplaire pour homme extraordinaire !\n Je pourrais tout de même obtenir un poste intéressant.",
            "Rien ne peut m'arrêter, je dois prendre le pouvoir pour faire régner l'ordre, même si je dois passer par le chaos !",
            "C'est un excellent choix pour un tel homme !",
            "C'est un choix calme et posé."
        ];
        this.deleteButton();
        this.showPanel();
        this.showContext();
        this.showChoices(0, 2);
        this.scrollToBottom();
    }

    /**
     * Delete the previous button
     */
    deleteButton() {
        document.getElementsByTagName("button")[0].remove();
    }

    /**
     * Show the panel between the war and the victory
     */
    showPanel() {
        let panel = document.createElement("div");
        panel.classList.add("panel");

        let title = document.createElement("h2");
        title.innerHTML = "La Victoire";

        panel.appendChild(title);
        this.main.appendChild(panel);
    }

    /**
     * Show the context and the history before the different choices
     */
    showContext() {
        let context = document.createElement("p");
        context.innerHTML = "Vous avez battu le terrible Empereur Grunzek, vous êtes maintenant de retour sur la planète Terre et deux choix s'offrent à vous :";
    }

    /**
     * Show the choices
     */
    showChoices(begin, limit) {
        let choiceDiv = document.createElement("div");
        choiceDiv.classList.add("divAsks");
        for (let i = begin; i < limit; i++) {
            let choice = document.createElement("button");
            choice.classList.add("choice");
            choice.innerHTML = this.choices[i];
            choice.addEventListener("click", function () {
                victory.deleteChoices();
                victory.processResult(i);
            });
            choiceDiv.appendChild(choice);
        }
        this.main.appendChild(choiceDiv);
    }

    /**
     * Process after click on a choice
     *
     * @param count
     *              Choice number
     */
    processResult(count) {
        let result = document.createElement("p");
        result.classList.add("heroAnswer");
        result.innerHTML = this.results[count];
        this.main.appendChild(result);

        switch (count) {
            case 0:
                this.showChoices(2, 4);
                break;
            case 1:
            case 2:
                this.finalRevolution();
                break;
            case 3:
                this.finalVictory();
                break;
        }
    }

    /**
     * The revolution dies your hero
     */
    finalRevolution() {
        let text = document.createElement("p");
        text.innerHTML = "Très mauvaise idée, le monde a très rapidement compris votre idée, et a décidé de se révolter pour mettre fin à votre règne, qui n'aura duré que très peu de temps !";
        this.main.appendChild(text);

        this.youDie();
    }

    /**
     * Your hero win the party
     */
    finalVictory() {
        let text = document.createElement("p");
        text.innerHTML = "Excellent choix, vous avez choisi une vie calme et tranquille, après une telle aventure. Nous respectons votre choix, nous vous serons redevables à vie. Merci encore.\nVous avez gagné !";
        this.main.appendChild(text);

        let button = document.createElement("button");
        button.innerHTML = "Rejouer";
        button.addEventListener("click", function () {
            document.location.reload();
        });
        this.main.appendChild(button);
    }
}