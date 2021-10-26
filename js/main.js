// opening mobile menu on click
function openMenu() {
    var x = document.getElementById("icon");
    var y = document.getElementById("mobile-menu");

    if (x.className.indexOf("is-active") == -1) {
        x.className += " is-active";
        y.className += " w3-show";
        y.className += " w3-animate-opacity";
    } 
    else { 
        x.className = x.className.replace(" is-active", "");
        y.className = y.className.replace(" w3-show", "");
    }
}

// shrink navbar on scroll
if (document.documentElement.clientWidth > 600) {
	window.onscroll = function() {scrollFunctionDesktop()};

    var container = document.getElementById("container");
        
    function scrollFunctionDesktop() {
        if (document.body.scrollTop > container.offsetTop || document.documentElement.scrollTop > container.offsetTop) {
            document.getElementById("navbar").style.position = "fixed";
            document.getElementById("navbar").style.padding = "20px 0 10px 100px";
            document.getElementById("ha").style.fontSize = "25px";
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
            document.getElementById("navbar").style.position = "static";
            document.getElementById("navbar").style.padding = "50px 0 10px 100px";
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.getElementById("ha").style.fontSize = "30px";
        }
    }
}

if (document.documentElement.clientWidth < 600) {
	window.onscroll = function() {scrollFunctionMobile()};

    var container = document.getElementById("container");
        
    function scrollFunctionMobile() {
        if (document.body.scrollTop > container.offsetTop || document.documentElement.scrollTop > container.offsetTop) {
            document.getElementById("navbar").style.position = "fixed";
            document.getElementById("navbar").style.padding = "20px 30px";
            document.getElementById("ha").style.fontSize = "18px";
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
            document.getElementById("navbar").style.position = "static";
            document.getElementById("navbar").style.padding = "50px 30px";
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 1)";
            document.getElementById("ha").style.fontSize = "22px";
        }
    }
}


