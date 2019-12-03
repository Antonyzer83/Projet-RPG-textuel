class Enemy extends Character{

    constructor(global, count) {
        super(global["name"], global["lifePoints"], global["resistancePoints"], global["force"]);
        this.count = count;
        this.powers = [
            [
                "Aiguisage",
                "Augmentation de la force",
                "Pas d'attaque possible",
                "Force",
                2
            ],
            [
                "Combo-griffe",
                "Ecorche le joueur à plusieurs reprises",
                "Sans défense",
                "Attaque",
                10
            ],
            [
                "Morsure",
                "Mors le joueur avec les dents pointues",
                "Sans défense",
                "Attaque",
                20
            ],
            [
                "Téléportation",
                "Esquive l'attaque de l'adversaire",
                "Pas d'attaque possible",
                "Esquive"
            ],
            [
                "Coup-fourbe",
                "Téléportation puis attaque",
                "Sans défense",
                "Attaque",
                22
            ],
            [
                "Puissance",
                "Amélioration de la force",
                "Pas d'attaque possible",
                "Force",
                4
            ],
            [
                "Disparition",
                "Esquive d'une attaque",
                "Pas d'attaque possible",
                "Esquive"
            ],
            [
                "Attaque surprise",
                "Attaque violente et directe",
                "Sans défense",
                "Attaque",
                34
            ],
            [
                "Resurection",
                "Reprise de points de vie",
                "Pas d'attaque possible",
                "Vie",
                21
            ],
            [
                "Destruction impériale",
                "Attaque puissante",
                "Sans défense",
                "Attaque",
                30
            ],
            [
                "Bouclier protecteur",
                "Défense efficace",
                "Pas d'attaque possible",
                "Esquive"
            ],
            [
                "Résurection infernale",
                "Récupération de la totalité des points de vie",
                "Pas d'attaque possible",
                "Vie",
                150
            ]
        ];
        this.chosenPower = null;
    }

    chosePower() {
        let randomNumber = Math.floor(Math.random() * Math.floor(3)) + this.count * 3;
        this.chosenPower = this.powers[randomNumber];

        let info = document.createElement("p");
        info.innerHTML = this.name + " a choisi son attaque !";
        document.getElementsByClassName("log")[this.count].appendChild(info);
    }
}