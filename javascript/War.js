class War extends Base {

    constructor() {
        super();
        this.contexts = [
            "La guerre a lieu dans l'espace, à l'entrée de la planète Terre.",
            "Zion entre dans la navette. Cette dernière se détache, puis prend la direction de la Terre. Soudainement, un missile entre en collision avec cette navette, puis explose en morceaux.",
            "L'armée terrestre est composée de milliers de vaisseaux spatiaux, alors que l'armée extraterrestre est 100 fois supérieure. Cela va être compliqué."
        ];
        this.history = [
            "Nous voilà, après un entraînement intense, vous êtes un vrai leader, vous êtes prêts à diriger une armée d'hommes et de robots surpuissants. N'étant pas soldat, ou un membre actif de l'armée, je retourne sur Terre pour m'occuper de la sécurité de notre planète. Je ne sais pas si nous nous reverrons, mais je suis fier de vous avoir accompagné pendant votre préparation. N'oubliez pas que vous avez une combinaison vous permettant d'évoluer à l'intérieur, ainsi qu'à l'extérieur des navettes spatiales. Bonne chance, en espérant vous revoir dans un futur proche.",
            "Aïe, j'appréciais cet homme, c'était un homme droit et fidèle, qui a surement sauvé la planète en me trouvant. Maintenant, je suis seul aux commandes, je dois montrer de quoi je suis capable aux yeux de l'humanité et de l'univers."
        ];
        this.showPanel();
    }

    /**
     * Show the panel bewteen the training center and the war
     */
    showPanel() {
        let panel = document.createElement("div");
        panel.classList.add("panel");

        let title = document.createElement("h2");
        title.innerHTML = "La guerre";

        panel.appendChild(title);
        this.main.appendChild(panel);
    }
}