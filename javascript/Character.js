class Character {

    constructor(name, lifePoints, resistancePoints, force) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.resistancePoints = resistancePoints;
        this.force = force;
        this.exp = 0;
        this.main = document.querySelector("main");
    }
}