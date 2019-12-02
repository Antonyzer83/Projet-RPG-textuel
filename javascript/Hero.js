class Hero extends Character {

    constructor(name) {
        super(name, 100, 9, 15);
        this.count = 0;
        this.weapons = [
            "Une épée avec des lasers",
            "Un sabre laser",
            "Une lance à neutrons"
        ];
        this.powers = [
            [
                "Lasers-violent",
                "Attaque de lasers",
                "Sans défense",
                "Attaque",
                15
            ],
            [
                "Coupe",
                "Coupure avec le bout de l'épée",
                "Sans défense",
                "Attaque",
                20
            ],
            [
                "Recharge",
                "Les points de vie se regénèrent",
                "Pas d'attaque possible",
                "Vie",
                10
            ],
            [
                "Croissance",
                "Augmentation de la force",
                "Pas d'attaque possible",
                "Force",
                3
            ],
            [
                "Sabre furtif",
                "Attaque au sabre laser",
                "Sans protection",
                "Attaque",
                25
            ],
            [
                "Esquive",
                "Esquive de l'attaque adverse",
                "Pas d'attaque possible",
                "Esquive"
            ],
            [
                "Attaque électrique",
                "Attaque violente au niveau du torse à la vitesse de l'électricité",
                "Sans défense",
                "Attaque",
                35
            ],
            [
                "Lancer rapide",
                "Envoi la lance à neutrons pour immobiliser l'adversaire",
                "Faible attaque",
                "Attaque",
                32
            ],
            [
                "Regénération",
                "Augmentation des points de vie",
                "Pas d'attque possible",
                "Vie",
                30,
                5
            ]
        ];
        this.chosenPower = null;
        this.finalPower = [];
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

    set addCount(number) {
        this.count += number;
    }

    /**
     * Show hero powers
     */
    showPowers() {
        for (let i = 0; i < 3; i++) {
            let power = document.createElement("button");
            power.classList.add("power");
            power.innerHTML = this.powers[3 * this.count + i][0];
            power.addEventListener("click", function () {
                hero.deletePowers();
                hero.chosenPower = hero.powers[3 * hero.count + i];
                console.log(hero.chosenPower);
                hero.showChosenPower();
                fight.powersProcess();
            });
            document.getElementsByClassName("powers")[this.count].appendChild(power);
        }
    }

    /**
     * Delete the hero powers
     */
    deletePowers() {
        let buttons = document.getElementsByClassName("power");
        for (let i = 2; i >= 0; i--) {
            buttons[i].remove();
        }
    }

    /**
     * Show the chosen power
     */
    showChosenPower() {
        let power = document.createElement("p");
        power.innerHTML = "Vous avez choisi " + this.chosenPower[0] + " !";
        document.getElementsByClassName("log")[this.count].appendChild(power);
    }

    showAllPowers() {
        let title = document.createElement("h3");
        title.innerHTML = "Choix des pouvoirs";
        let intro = document.createElement("p");
        intro.innerHTML = "Voilà, vous allez partir à la guerre, pour cela vous allez devoir choisir seulement trois pouvoirs !";


        this.main.appendChild(title);
        this.main.appendChild(intro);
        for (let i = 0; i < 9; i++) {
            let button = document.createElement("button");
            button.innerHTML = this.powers[i][0];
            button.addEventListener("click", function () {
                button.remove();
                hero.choseFinalPower(hero.powers[i]);
            });
            this.main.appendChild(button);
        }
    }

    deleteFinalPowers() {
        let button = document.getElementsByTagName("button");
        for (let i = 5; i >= 0; i--) {
            button[i].remove();
        }
    }

    choseFinalPower(power) {
        console.log(this.finalPower.length);
        if (this.finalPower.length < 3) {
            this.finalPower.push(power);
            if (this.finalPower.length === 3) {
                this.deleteFinalPowers();
            }
        }
    }
}