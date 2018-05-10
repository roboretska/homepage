function MouseOver() {
    var img = document.getElementById("picture");
    img.style.border="12px solid floralwhite";
    img.style.marginLeft = "-20px";
    img.style.transition ="all .25s ease-in-out .05s";
}
function MouseOut() {
    var img = document.getElementById("picture");
    img.style.border="7px solid floralwhite";
    img.style.marginLeft = "10px;";
    img.style.transition ="all .13s linear";
}
