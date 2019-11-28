class Enemy extends Character{

    constructor(global) {
        super(global["name"], global["lifePoints"], global["resistancePoints"], global["force"]);
    }
}