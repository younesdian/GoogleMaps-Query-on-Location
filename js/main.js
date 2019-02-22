var x = document.getElementById("maps");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var iframe_url = "https://maps.google.com/maps?q=YOUR_CUSTOM_SEARCH&ll=" + latlon + "&z=10&output=embed";
    var style = "height:100vh; width: 100%;";
    var zero = "0";
    var no = "no";

    x.innerHTML = "<iframe style='" + style + "' frameborder='" + zero + "' marginheight='" + zero + "' marginwidth='" + zero + "' scrolling='" + no + "' src='" + iframe_url + "'></iframe";

}

window.onload = getLocation;
