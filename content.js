
function removeAd() {
    $("div[id*=00]").css("display", "none");
}

$(document).ready(function() {
    removeAd();
    setInterval(removeAd, 1);
})
