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
    }
}