class Enemy extends Character{

    constructor(global, count) {
        super(global["name"], global["lifePoints"], global["resistancePoints"], global["force"]);
        this.count = count;
        this.powers = [
            [
                "Aiguisage",
                "Augmentation de la force"
            ],
            [
                "Combo-griffe",
                "Ecorche le joueur à plusieurs reprises"
            ],
            [
                "Morsure",
                "Mors le joueur avec les dents pointues"
            ],
            [
                "Téléportation",
                "Esquive l'attaque de l'adversaire"
            ],
            [
                "Coup-fourbe",
                "Téléportation puis attaque"
            ],
            [
                "Puissance",
                "Amélioration de la force"
            ],
            [
                "Disparition",
                "Esquive d'une attaque"
            ],
            [
                "Attaque surprise",
                "Attaque violente et directe"
            ],
            [
                "Résurection",
                "Reprise de points de vie"
            ]
        ];
        this.chosenPower = null;
    }

    get getLifePoints() {
        return this.lifePoints;
    }

    chosePower() {
        let randomNumber = Math.floor(Math.random() * Math.floor(3)) + this.count;
        this.chosenPower = this.powers[randomNumber];

        let info = document.createElement("p");
        info.innerHTML = this.name + " a choisi son attaque !";
        this.main.appendChild(info);
    }
}