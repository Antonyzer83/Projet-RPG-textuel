class Character {

    /**
     * Initialize character's properties
     * @param name
     *              Name
     * @param lifePoints
     *              Life points
     * @param resistancePoints
     *              Resistance points
     * @param force
     *              Force
     */
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
            powerTitle.innerHTML = this.powers[3 * this.count + i][0] + " :";
            let power = document.createElement("ul");
            let positive = document.createElement("li");
            positive.innerHTML = "Point positif : " + this.powers[3 * this.count + i][1];
            let negative = document.createElement("li");
            negative.innerHTML = "Point négatif : " + this.powers[3 * this.count + i][2];
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

    /**
     * Set the lost points
     *
     * @param points
     *              Attack points
     */
    set loseLifePoints(points) {
        if (this.lifePoints - points + this.resistancePoints >= 0) {
            this.lifePoints -= points - this.resistancePoints;
        } else {
            this.lifePoints = 0;
        }
    }

    /**
     * Set the wan points
     *
     * @param points
     *              Defense points
     */
    set winLifePoints(points) {
        this.lifePoints += (points === 150) ? points - this.lifePoints : points;
    }

    /**
     * Set the force
     *
     * @param points
     *              Force
     */
    set winForce(points) {
        this.force += points;
    }
}