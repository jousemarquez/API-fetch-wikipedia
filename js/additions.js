var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("love").innerHTML = clicks;
};

function ocultarEjercicio1() {
    let div = document.querySelector("#explain");
    div.innerHTML = ``;
}