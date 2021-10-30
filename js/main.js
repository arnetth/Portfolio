// opening mobile menu on click
function openMenu() {
    var i = document.getElementById("icon");
    var mm = document.getElementById("mobile-menu");
    var nh = document.getElementById("nav-holder");
    var container = document.getElementById("container");


    if (i.className.indexOf("is-active") == -1) {
        i.className += " is-active";
        mm.className += " w3-show";
        mm.className += " w3-animate-opacity";
    }
    else { 
        closeMenu();
    }
}

function closeMenu() {
    var i = document.getElementById("icon");
    var mm = document.getElementById("mobile-menu");

    i.className = i.className.replace(" is-active", "");
    mm.className = mm.className.replace(" w3-show", "");
}


// shrink navbar on scroll
if (document.documentElement.clientWidth > 1000) {
	window.onscroll = function() {scrollFunctionDesktop()};

    var container = document.getElementById("container");
    
        
    function scrollFunctionDesktop() {
        if (document.body.scrollTop > container.offsetTop || document.documentElement.scrollTop > container.offsetTop) {
            document.getElementById("navbar").style.position = "fixed";
            document.getElementById("navbar").style.height = "70px";
            document.getElementById("navbar").style.padding = "20px 0 10px 100px";
            document.getElementById("ha").style.fontSize = "25px";
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 1)";
            
        } else {
            document.getElementById("navbar").style.position = "static";
            document.getElementById("navbar").style.height = "100px";
            document.getElementById("navbar").style.padding = "50px 0 10px 100px";
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.getElementById("ha").style.fontSize = "30px"; 
        }
    }
}

if (document.documentElement.clientWidth > 600 && document.documentElement.clientWidth < 1001) {
	window.onscroll = function() {scrollFunctionTablet()};

    var container = document.getElementById("container");
        
    function scrollFunctionTablet() {
        if (document.body.scrollTop > container.offsetTop || document.documentElement.scrollTop > container.offsetTop) {
            document.getElementById("navbar").style.position = "fixed";
            document.getElementById("navbar").style.padding = "20px 60px";
            document.getElementById("navbar").style.height = "70px";
            document.getElementById("nav-holder").style.height = "70px";
            document.getElementById("mobile-menu").style.position = "fixed";
            document.getElementById("ha").style.fontSize = "20px";
        } else {
            document.getElementById("navbar").style.position = "static";
            document.getElementById("navbar").style.padding = "50px 60px";
            document.getElementById("navbar").style.height = "100px";
            document.getElementById("nav-holder").style.height = "100px";
            document.getElementById("mobile-menu").style.position = "static";
            document.getElementById("ha").style.fontSize = "26px";
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
            document.getElementById("navbar").style.height = "70px";
            document.getElementById("nav-holder").style.height = "70px";
            document.getElementById("mobile-menu").style.position = "fixed";
            document.getElementById("ha").style.fontSize = "18px";
        } else {
            document.getElementById("navbar").style.position = "static";
            document.getElementById("navbar").style.padding = "50px 30px";
            document.getElementById("navbar").style.height = "100px";
            document.getElementById("nav-holder").style.height = "100px";
            document.getElementById("mobile-menu").style.position = "static";
            document.getElementById("ha").style.fontSize = "22px";
        }
    }
}


