class TrainingCenter extends Base {

    constructor() {
        super();
        this.fightContext = [
            "Le premier test est un combat face à un Hexa, c'est une petite espèce d'extraterrestre vicieuse. Elle mesure moins d'un mètre et possède des mains et des dents très éguisées, pouvant réaliser des dégâts considérables.\nVous avez une seule arme : une épée avec des lasers.",
            "Le deuxième test est un combat contre un Phasme Mutant. C'est une géante créature tout fine, elle a la possibilité de se téléporter. Soignez vif et à l'attention de n'importe geste ou mouvement. Ce combat pourrait vous êtes fatal !\nVous avez toujours une seule arme : un sabre laser. Oui, nous aimons beaucoup les lasers pour leur efficacité.",
            "Le dernier test est un combat contre un Scary. Cette créature est un fantôme. Vous devez alors vous demander alors, comment est-ce que je vais pouvoir l'apercevoir ? Pas de problème, nous allons vous donner des lunettes spéciales pour une visibilité optimale.\nVotre arme sera une lance à neutrons."
        ];
        this.victoryMessages = [
            "Bien, ce combat était simple. Passons au deuxième, nous verrons si vous êtes de taille !",
            "Très bien ! Vous êtes impressionant, passons au dernier.",
            "Parfait, vous avez parfaitement maitrisé ces trois combats. Vous êtes dignes de diriger notre armée pour détruire l'envahisseur extraterrestre. J'espère que je ne me trompe pas. Vous possédez ma confiance, faites en bon usage."
        ];
        this.enemies = [
            {
                "name" : "Hexa",
                "lifePoints" : 60,
                "resistancePoints" : 5,
                "force" : 7
            },
            {
                "name" : "Phasme Mutant",
                "lifePoints" : 80,
                "resistancePoints" : 8,
                "force" : 9
            },
            {
                "name" : "Scary",
                "lifePoints" : 100,
                "resistancePoints" : 13,
                "force" : 15
            }
        ];
        this.loseMessages = "Vous n'êtes pas le prodige qui nous était décrit, vous faîtes maintenant parti de notre armée, qui va se faire laminer lors du combat. Votre défaite signe la fin de notre civilisation. Adieu !";
        this.count = 0;

        this.showPanel();
        this.showContext();
        this.showContinueButton();
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

    /**
     * Show the button to continue the story
     */
    showContinueButton() {
        let button = document.createElement("button");
        button.innerHTML = "Continuer";
        button.addEventListener("click", function () {
            trainingCenter.deleteContinueButton();
            trainingCenter.beginFight();
        });
        this.main.appendChild(button);
    }

    /**
     * Delete the button to continue the story
     */
    deleteContinueButton() {
        document.getElementsByTagName("button")[0].remove();
    }

    /**
     * Begin a fight
     *
     * Create a enemy and a fight
     */
    beginFight() {
        if (this.count < 3) {
            let enemy = new Enemy(this.enemies[this.count], this.count);
            fight = new Fight(this.fightContext[this.count], this.victoryMessages[this.count], this.loseMessages[this.count], enemy);
        }
    }
}