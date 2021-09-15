function slide(e) {
    /* Question of FAQ */
    var top = e.parentElement;
    /* Answer of FAQ */
    var bot = e.parentElement.nextElementSibling;
    /* Vertical line besides "Q" */
    var br = e.parentElement.children[0].children[0];
    /*- positioned element on top of another - */
    var plus = e.children[1];   
    /* console.log(top); */
    if (bot.classList.contains("bot-closed")) {
        top.classList.remove("clr-purp")
        bot.classList.remove("bot-closed");
        br.classList.remove("br-purp");
        plus.classList.remove("plus-rotate");
    } else {
        top.classList.add("clr-purp")
        bot.classList.add("bot-closed");
        br.classList.add("br-purp");
        plus.classList.add("plus-rotate");
    }
}

/* Show Modal on half port view height */
var loginModal = new bootstrap.Modal(document.getElementById("loginmodal"), {
    keyboard: false
});

/* Declare Body and HTML */
var body = document.body,
    html = document.documentElement;

/* Declare Document ViewHeight */
var vh = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

/* Check if Login Modal have been shown (0 == have not been shown) (1 == have been shown) */
let modalShow = 0;

/* Listen to scrolling event */
window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    if (top >= vh/2 && modalShow == 0) {
        loginModal.show();
        modalShow = 1;
    }
}, false);

/* Closes the modal */
function closeModal() {
    loginModal.hide();
}