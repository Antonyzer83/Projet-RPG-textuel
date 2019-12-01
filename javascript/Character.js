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

        person.appendChild(name);
        person.appendChild(life);
        person.appendChild(resistance);
        person.appendChild(force);
        person.appendChild(exp);

        return person;
    }
}