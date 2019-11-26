class Hero extends Character {

    constructor(name) {
        super(name);
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
}