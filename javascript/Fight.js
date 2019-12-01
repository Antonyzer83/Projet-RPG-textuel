class Fight extends Base{

    constructor(context, victory, lose, enemy) {
        super();
        this.context = context;
        this.warning = "Pour le combat, vous choisirez une option entre trois possibilités, chaque option a un avantage et un incovénient. A vous de réaliser le bon choix en fonction de vos fonctionnalités.";
        this.victoryMessage = victory;
        this.loseMessage = lose;
        this.enemy = enemy;
        this.showCharacteristics();
    }

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
        this.main.appendChild(globalDiv);
    }
}