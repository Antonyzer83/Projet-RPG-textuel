class Fight extends Base{

    constructor(mode, context, victory, lose, enemy) {
        super();
        this.mode = mode;
        this.context = context;
        this.warning = "Pour le combat, vous choisirez une option entre trois possibilités, chaque option a un avantage et un incovénient. A vous de réaliser le bon choix en fonction de vos fonctionnalités.";
        this.victoryMessage = victory;
        this.loseMessage = lose;
        this.enemy = enemy;
        this.showCharacteristics();
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

        enemyDiv.appendChild(this.enemy.showCharacter());
        heroDiv.appendChild(hero.showCharacter());

        globalDiv.appendChild(enemyDiv);
        globalDiv.appendChild(heroDiv);

        this.main.appendChild(pContext);
        this.main.appendChild(warning);
        this.scrollToBottom();
        this.main.appendChild(globalDiv);
        this.showStartButton();
    }

    /**
     * Show the fight part with log of both and hero powers
     */
    showFightLogPower() {
        let fightDiv = document.createElement("div");
        fightDiv.classList.add("fight");
        let logDiv = document.createElement("div");
        logDiv.classList.add("log");
        let powerDiv = document.createElement("div");
        powerDiv.classList.add("powers");

        fightDiv.appendChild(logDiv);
        fightDiv.appendChild(powerDiv);

        this.main.appendChild(fightDiv);
    }

    /**
     * Update the characteristics both players
     */
    updateCharacteristics() {
        let enemy = document.getElementsByClassName("enemy")[hero.count];
        enemy.innerHTML = "";
        enemy.appendChild(this.enemy.showCharacter());

        let heroDiv = document.getElementsByClassName("hero")[hero.count];
        heroDiv.innerHTML = "";
        heroDiv.appendChild(hero.showCharacter());
    }

    /**
     * Show the button to start the fight
     */
    showStartButton() {
        let button = document.createElement("button");
        button.innerHTML = "Commencer le test";
        button.classList.add("continuer");
        button.addEventListener("click", function () {
            fight.deleteStartButton();
            fight.showFightLogPower();
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

    /**
     * After click on a power button
     */
    powersProcess() {
        let log = document.getElementsByClassName("log")[hero.count];
        let enemyAnswer = document.createElement("p");
        let heroAnswer = document.createElement("p");

        if (this.enemy.chosenPower[3] === "Esquive" && hero.chosenPower[3] === "Attaque" || hero.chosenPower[3] === "Esquive" && this.enemy.chosenPower[3] === "Attaque") {
            if (this.enemy.chosenPower[3] === "Esquive") {
                enemyAnswer.innerHTML = this.enemy.name + " a esquivé votre attaque !";
            } else if (hero.chosenPower[3] === "Esquive") {
                heroAnswer.innerHTML = "Vous avez esquivé l'attaque de " + this.enemy.name + " !";
            }
        } else {
            if (hero.chosenPower[3] === "Attaque") {
                this.enemy.loseLifePoints = hero.chosenPower[4] + hero.force;
                heroAnswer.innerHTML = this.enemy.name + " a perdu " + hero.chosenPower[4] + " points de vie !";
            } else if (hero.chosenPower[3] === "Force") {
                hero.winForce = hero.chosenPower[4];
                heroAnswer.innerHTML = "Vous avez " + hero.chosenPower[4] + " points de force !";
            } else if (hero.chosenPower[3] === "Vie") {
                hero.winLifePoints = hero.chosenPower[4];
                heroAnswer.innerHTML = "Vous avez gagné " + hero.chosenPower[4] + " points de vie !";
            }

            if (this.enemy.chosenPower[3] === "Attaque") {
                hero.loseLifePoints = this.enemy.chosenPower[4] + this.enemy.force;
                enemyAnswer.innerHTML = "Vous avez perdu " + this.enemy.chosenPower[4] + " points de vie !";
            } else if (this.enemy.chosenPower[3] === "Force") {
                this.enemy.winForce = this.enemy.chosenPower[4];
                enemyAnswer.innerHTML = this.enemy.name + " a gagné " + this.enemy.chosenPower[4] + " points de force !";
            } else if (this.enemy.chosenPower[3] === "Vie") {
                this.enemy.winLifePoints = this.enemy.chosenPower[4];
                enemyAnswer.innerHTML = this.enemy.name + " a gagné " + this.enemy.chosenPower[4] + " points de vie !";
            }
        }

        log.appendChild(enemyAnswer);
        log.appendChild(heroAnswer);

        this.scrollToBottomDiv();

        this.updateCharacteristics();
        if (this.enemy.lifePoints > 0 && hero.lifePoints > 0) {
            this.beginFight();
        } else {
            this.finishFight();
        }
    }

    /**
     * Process at the end of the fight
     */
    finishFight() {
        let message = document.createElement("p");
        if (hero.lifePoints === 0) {
            message.innerHTML = this.loseMessage;
            this.main.appendChild(message);
            this.youDie();
        } else if (this.enemy.lifePoints === 0) {
            message.innerHTML = this.victoryMessage;
            this.main.appendChild(message);
            if (this.mode) {
                war.winWar();
            } else {
                hero.lifePoints = 100;
                hero.count++;
                trainingCenter.count++;
                trainingCenter.beginFight();
            }
        }
    }

    /**
     * Scroll to the bottom of the log div
     */
    scrollToBottomDiv() {
        let objDiv = document.getElementsByClassName("log")[hero.count];
        objDiv.scrollTop = objDiv.scrollHeight;
    }
}