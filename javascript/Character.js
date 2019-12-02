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
            powerTitle.innerHTML = this.powers[this.count + i][0] + " :";
            let power = document.createElement("ul");
            let positive = document.createElement("li");
            positive.innerHTML = "Point positif : " + this.powers[this.count + i][1];
            let negative = document.createElement("li");
            negative.innerHTML = "Point négatif : " + this.powers[this.count + i][2];
            power.appendChild(positive);
            power.appendChild(negative);

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