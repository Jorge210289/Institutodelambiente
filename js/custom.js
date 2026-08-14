document.addEventListener("DOMContentLoaded", function () {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        if (links[i].hostname != window.location.hostname) {
            if(links[i].title == "Ir a Guía Conservación de suelo"){
                links[i].target = '_blank';
                links[i].rel = 'noopener noreferrer';
            }
        }
    }
});
