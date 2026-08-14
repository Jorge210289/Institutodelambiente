document.addEventListener("DOMContentLoaded", function () {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].hostname != window.location.hostname) {
            if(["Ir a Guía Conservación de suelo", "Ir a Historia"].includes(links[i].title)) {
                links[i].target = '_blank';
                links[i].rel = 'noopener noreferrer';
                
            }
        }
    }
});
