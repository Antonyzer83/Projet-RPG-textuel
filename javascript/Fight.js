class Fight extends Base{

    constructor(context, victory, lose, enemy) {
        super();
        this.context = context;
        this.warning = "Pour le combat, vous choisirez une option entre trois possibilités, chaque option a un avantage et un incovénient. A vous de réaliser le bon choix en fonction de vos fonctionnalités.";
        this.victoryMessage = victory;
        this.loseMessage = lose;
        this.enemy = enemy;
        this.showCharacteristics();
        this.showStartButton();
        this.scrollToBottom();
    }

    /**
     * Show the characteristics of the both players before a fight
     */
    showCharacteristics() {
        let pContext = document.createElement("p");
        pContext.innerText = this.context;
        let warning = document.createElement("p");
        warning.classList.add("context");
        warning.innerHTML = this.warning;

        let globalDiv = document.createElement("div");
        globalDiv.classList.add("global");
        let enemyDiv = document.createElement("div");
        enemyDiv.classList.add("enemy");
        let heroDiv = document.createElement("div");
        heroDiv.classList.add("hero");

        let fightDiv = document.createElement("div");
        fightDiv.id = "fight";
        let logDiv = document.createElement("div");
        logDiv.id = "log";
        let powerDiv = document.createElement("div");
        powerDiv.id = "powers";

        enemyDiv.appendChild(this.enemy.showCharacter());
        heroDiv.appendChild(hero.showCharacter());

        globalDiv.appendChild(enemyDiv);
        globalDiv.appendChild(heroDiv);

        fightDiv.appendChild(logDiv);
        fightDiv.appendChild(powerDiv);

        this.main.appendChild(pContext);
        this.main.appendChild(warning);
        this.main.appendChild(globalDiv);
        this.main.appendChild(fightDiv);
    }

    updateCharacteristics() {
        let enemy = document.getElementsByClassName("enemy")[0];
        enemy.innerHTML = "";
        enemy.appendChild(this.enemy.showCharacter());

        let heroDiv = document.getElementsByClassName("hero")[0];
        heroDiv.innerHTML = "";
        heroDiv.appendChild(hero.showCharacter());
    }

    /**
     * Show the button to start the fight
     */
    showStartButton() {
        let button = document.createElement("button");
        button.innerHTML = "Commencer le test";
        button.addEventListener("click", function () {
            fight.deleteStartButton();
            fight.beginFight();
        });
        this.main.appendChild(button);
    }

    /**
     * Delete the button to start the fight
     */
    deleteStartButton() {
        let button = document.getElementsByTagName("button")[0];
        button.remove();
    }

    /**
     * Process of fight
     */
    beginFight() {
        this.enemy.chosePower();
        hero.showPowers();
        this.scrollToBottom();
    }

    powersProcess() {
        let log = document.getElementById("log");
        let enemyAnswer = document.createElement("p");
        let heroAnswer = document.createElement("p");

        if (this.enemy.chosenPower[3] === "Esquive" || hero.chosenPower[3] === "Esquive") {
            if (this.enemy.chosenPower[3] === "Esquive") {
                enemyAnswer.innerHTML = this.enemy.name + " a esquivé votre attaque !";
            } else if (hero.chosenPower[3] === "Esquive") {
                heroAnswer.innerHTML = "Vous avez esquivé l'attaque de " + this.enemy.name + " !";
            }
        } else {
            if (hero.chosenPower[3] === "Attaque") {
                this.enemy.loseLifePoints = hero.chosenPower[4];
                heroAnswer.innerHTML = this.enemy.name + " a perdu " + hero.chosenPower[4] + " points de vie !";
            } else if (hero.chosenPower[3] === "Force") {
                hero.winForce = hero.chosenPower[4];
                heroAnswer.innerHTML = "Vous avez " + hero.chosenPower[4] + " points de force !";
            }

            if (this.enemy.chosenPower[3] === "Attaque") {
                hero.loseLifePoints = this.enemy.chosenPower[4];
                enemyAnswer.innerHTML = "Vous avez perdu " + this.enemy.chosenPower[4] + " points de vie !";
            } else if (this.enemy.chosenPower[3] === "Force") {
                this.enemy.winForce = this.enemy.chosenPower[4];
                enemyAnswer.innerHTML = this.enemy.name + " a gagné " + this.enemy.chosenPower[4] + " points de force !";
            }
        }

        log.appendChild(enemyAnswer);
        log.appendChild(heroAnswer);
        var objDiv = document.getElementById("log");
        objDiv.scrollTop = objDiv.scrollHeight;

        this.updateCharacteristics();
        if (this.enemy.lifePoints > 0 && hero.lifePoints > 0) {
            this.beginFight();
        } else {
            console.log("combat terminé");
        }
    }
}