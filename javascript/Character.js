class Character {

    constructor(name, lifePoints, resistancePoints, force) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.resistancePoints = resistancePoints;
        this.force = force;
        this.exp = 0;
        this.main = document.querySelector("main");
    }

    /**
     * Show the character before a fight
     *
     * @returns {HTMLUListElement}
     */
    showCharacter() {
        let person = document.createElement("ul");
        let name = document.createElement("li");
        name.innerHTML = "Nom : " + this.name;
        let life = document.createElement("li");
        life.innerHTML = "Points de vie : " + this.lifePoints;
        let resistance = document.createElement("li");
        resistance.innerHTML = "Points de résistance : " + this.resistancePoints;
        let force = document.createElement("li");
        force.innerHTML = "Force : " + this.force;
        let exp = document.createElement("li");
        exp.innerHTML = "Experience : " + this.exp;

        let powersTitle = document.createElement("li");
        powersTitle.innerHTML = "Pouvoirs :";
        let powers = document.createElement("ul");
        for (let i = 0; i <  3; i++) {
            let powerTitle = document.createElement("li");
            powerTitle.innerHTML = this.powers[this.count + i][0];
            let power = document.createElement("ul");
            let description = document.createElement("li");
            description.innerHTML = this.powers[this.count + i][1];
            power.appendChild(description);
            powers.appendChild(powerTitle);
            powers.appendChild(power);
        }

        person.appendChild(name);
        person.appendChild(life);
        person.appendChild(resistance);
        person.appendChild(force);
        person.appendChild(exp);
        person.appendChild(powersTitle);
        person.appendChild(powers);

        return person;
    }
}