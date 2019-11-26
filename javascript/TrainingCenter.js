class TrainingCenter extends Base {

    constructor() {
        super();

        this.showPanel();
        this.showContext();
        this.scrollToBottom();
    }

    /**
     * Show the panel between the introduction and the training center
     */
    showPanel() {
        let panel = document.createElement("div");
        panel.classList.add("panel");

        let title = document.createElement("h2");
        title.innerHTML = "Centre d'entrainement";

        panel.appendChild(title);
        this.main.appendChild(panel);
    }

    /**
     * Show the context of the training center
     */
    showContext() {
        let context = document.createElement("p");
        context.innerHTML = "Le centre d'entraînement est une géante zone secrète, à l'écart de la cité Néom, composée de batîments ultra-sécurisés et de terrains d'entraînement sophistiqués.";
        context.classList.add("context");

        let text = document.createElement("p");
        text.innerHTML = "Bravo, vous voilà au centre d'entraînement planétaire ! Avant de prendre possession de notre armée et de partir combattre notre ennemi, nous allons réaliser plusieurs tests pour confirmer votre niveau. Vous confiez cette mission est une décision compliquée et lourdes de conséquences. Pour les différents tests, nous avons tenté de reproduire plusieurs ennemis potentiels, que vous devrez combattre en 1V1.";

        this.main.appendChild(context);
        this.main.appendChild(text);
    }
}