class Base {

    constructor() {
        this.main = document.querySelector("main");
    }

    /**
     * Automatically scroll to the bottom of the page
     */
    scrollToBottom() {
        window.scrollTo(0,document.body.scrollHeight);
    }

    /**
     * Delete the div which contains the different choices
     */
    deleteChoices() {
        document.getElementsByClassName("divAsks")[0].remove();
    }

    /**
     * The player loses
     */
    youDie() {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");

        p.innerHTML = "Vous êtes mort !";
        button.innerHTML = "Rejouer";
        button.addEventListener("click", function () {
           document.location.reload();
        });

        div.appendChild(p);
        div.appendChild(button);

        this.main.appendChild(div);
    }
}