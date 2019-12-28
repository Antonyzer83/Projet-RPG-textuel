class War extends Base {

    constructor() {
        super();
        this.contexts = [
            "La guerre a lieu dans l'espace, à l'entrée de la planète Terre.",
            "Zion entre dans la navette. Cette dernière se détache, puis prend la direction de la Terre. Soudainement, un missile entre en collision avec cette navette, puis explose en morceaux.",
            "L'armée terrestre est composée de milliers de vaisseaux spatiaux, alors que l'armée extraterrestre est 100 fois supérieure. Cela va être compliqué."
        ];
        this.histories = [
            "Nous voilà, après un entraînement intense, vous êtes un vrai leader, vous êtes prêts à diriger une armée d'hommes et de robots surpuissants. N'étant pas soldat, ou un membre actif de l'armée, je retourne sur Terre pour m'occuper de la sécurité de notre planète. Je ne sais pas si nous nous reverrons, mais je suis fier de vous avoir accompagné pendant votre préparation. N'oubliez pas que vous avez une combinaison vous permettant d'évoluer à l'intérieur, ainsi qu'à l'extérieur des navettes spatiales. Bonne chance, en espérant vous revoir dans un futur proche.",
            "Aïe, j'appréciais cet homme, c'était un homme droit et fidèle, qui a surement sauvé la planète en me trouvant. Maintenant, je suis seul aux commandes, je dois montrer de quoi je suis capable aux yeux de l'humanité et de l'univers."
        ];
        this.choices = [
            "Chaque vaisseau prend une décision",
            "Suivre le plan initial",
            "Suivre le plan de secours",
            "Vivre en acceptant la défaite et la destruction de la terre",
            "Refuser l'offre"
        ];
        this.results = [
            "Le temps perdu permet à l'armée adverse de détruire la quasi-totalité de mon armée. Je suis le dernier survivant de mon armée. L'Empereur Grunzek me propose alors un marché",
            "L'exécution du plan initial est un échec. Je suis le dernier espoir de l'humanité face à l'invasion extraterrestre.",
            "Cette stratégie était vouée à l'échec. La totalité de l'armée est exterminée, ainsi que ton vaisseau spatiale. L'invasion extraterrestre ne fait que commencer. L'humanité est vouée à disparaître...",
            "L'Empereur Grunzek m'a menti, il ordonne la peine de mort à mon égard !",
            "En refusant le marché, je n'ai pas d'autre choix que d'affronter l'Empereur Grunzek !"
        ];
        this.enemy = {
            "name" : "Empereur Grunzek",
            "lifePoints" : 150,
            "resistancePoints" : 10,
            "force" : 20
        };
        this.showPanel();
        this.showContextHistory();
        this.showChoice(0, 3);
    }

    /**
     * Show the panel between the training center and the war
     */
    showPanel() {
        let panel = document.createElement("div");
        panel.classList.add("panel");

        let title = document.createElement("h2");
        title.innerHTML = "La Guerre";

        panel.appendChild(title);
        this.main.appendChild(panel);
    }

    /**
     * Show the context and the history before the war
     */
    showContextHistory() {
        for (let i = 0; i < 3; i++) {
            let context = document.createElement("p");
            let history = document.createElement("p");

            context.classList.add("context");
            context.innerHTML = this.contexts[i];
            this.main.appendChild(context);

            if (i < 2) {
                history.innerHTML = this.histories[i];
                if (i === 1) {
                    history.classList.add("heroAnswer");
                    this.scrollToBottom();
                }
                this.main.appendChild(history);
            }
        }
    }

    /**
     * Show the first choices to lead the army
     */
    showChoice(begin, limit) {
        let choiceDiv = document.createElement("div");
        choiceDiv.classList.add("divAsks");
        for (let i = begin; i < limit; i++) {
            let choice = document.createElement("button");
            choice.classList.add("choice");
            choice.innerHTML = this.choices[i];
            choice.addEventListener("click", function () {
                war.deleteChoices();
                war.processResult(i);
            });
            choiceDiv.appendChild(choice);
        }
        this.main.appendChild(choiceDiv);
    }

    /**
     * Delete the div which contains the different choices
     */
    deleteChoices() {
        document.getElementsByClassName("divAsks")[0].remove();
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
                this.showChoice(3, 5);
                break;
            case 1:
                this.finalFight();
                break;
            case 2:
            case 3:
                this.youDie();
                break;
            case 4:
                this.finalFight();
                break;
        }
    }

    /**
     * Final against the Empire Grunzek
     */
    finalFight() {
        let enemy = new Enemy(this.enemy, 3);
        fight = new Fight(true, null, "L'Empereur étant mort, son armée décide de rebrousser chemin et d'abandonner le champ de bataille spatiale.", "Vous étiez le dernier espoir de notre planète ! Adieu !", enemy);
    }

    /**
     * The hero win the fight against the Empire
     */
    winWar() {
        let victoryText = document.createElement("p");
        victoryText.innerHTML = "Vous avez sauvé la Terre ! Vous êtes notre héros !";
        this.main.appendChild(victoryText);

        let button = document.createElement("button");
        button.innerHTML = "Continuer";
        button.addEventListener("click", function () {
            victory = new Victory();
        });
        this.main.appendChild(button);
    }
}