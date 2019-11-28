class Hero extends Character {

    constructor(name) {
        super(name, 100, 9, 15);
        this.weapons = [
            "Une épée avec des lasers",
            "Un sabre laser",
            "Une lance à neutrons"
        ];
        this.powers = [
            [
                "Lasers-violent",
                "Attaque de lasers",
                "Sans défense"
            ],
            [
                "Coupe",
                "Coupure avec le bout de l'épée",
                "Sans défense"
            ],
            [
                "Recharge",
                "Les points de vie se regénèrent",
                "Pas d'attaque possible"
            ],
            [
                "Croissance",
                "Augmentation de la force",
                "Pas d'attaque possible"
            ],
            [
                "Sabre furtif",
                "Attaque au sabre laser",
                "Sans protection"
            ],
            [
                "Esquive",
                "Esquive de l'attaque adverse",
                "Pas d'attaque possible"
            ],
            [
                "Attaque électrique",
                "Attaque violente au niveau du torse à la vitesse de l'électricité",
                "Sans défense"
            ],
            [
                "Lancer rapide",
                "Envoi la lance à neutrons pour immobiliser l'adversaire",
                "Faible attaque"
            ],
            [
                "Regénération",
                "Augmentation de la force et des points de vie",
                "Pas d'attque possible"
            ]
        ];
        this.showName();
    }

    /**
     * Create and add p tag to main
     *
     * Contain the hero name
     */
    showName() {
        let name = document.createElement("p");
        name.innerHTML = "Je m'appelle " + this.name + ".";
        name.classList.add("heroAnswer");
        this.main.appendChild(name);
    }
}