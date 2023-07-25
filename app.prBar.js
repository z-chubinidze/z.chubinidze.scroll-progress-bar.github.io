

var progres = document.getElementById("progres");

var docheight = document.documentElement.scrollHeight;
var wievheight = document.documentElement.clientHeight;

window.onscroll = function () {
    let persetigesScroll = (scrollY / (docheight - wievheight)) * 100;
    progres.style.width = persetigesScroll + "%";
}