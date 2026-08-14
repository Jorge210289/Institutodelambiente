document.addEventListener("DOMContentLoaded", function () {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        if (links[i].hostname != window.location.hostname) {
            console.log(links[i]);
            if(["Ir a Guía Conservación de suelo", "Ir a Historia"].includes(links[i].title)) {
                links[i].target = '_blank';
                links[i].rel = 'noopener noreferrer';
                
            }
        }
    }
});
