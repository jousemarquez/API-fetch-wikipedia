var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("love").innerHTML = clicks;
};

function tweet() {
    // URL de la página actual
    var url = window.location.href;
    
    // Texto a tuitear (puedes cambiarlo por el contenido que quieras)
    var text = "Can't believe what I found about me here. Did your tried?⬇️\n\n" + url + " \n\n@vedruna";
    
    // URL del botón para compartir en Twitter
    var twitterUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    
    // Abrir ventana emergente para compartir en Twitter
    window.open(twitterUrl);
};