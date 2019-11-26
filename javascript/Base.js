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
}