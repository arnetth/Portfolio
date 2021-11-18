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


// shrink navbar on scroll + back to top button
var container = document.getElementById("container");

topArrow = document.getElementById("top");

window.onscroll = function() {
    scrollFunction();

    if (document.documentElement.clientWidth > 1000) {
        scrollFunctionDesktop();
    }
    else if (document.documentElement.clientWidth > 600 && document.documentElement.clientWidth < 1001) {
        scrollFunctionTablet();
    }
    else if (document.documentElement.clientWidth < 600) {
        scrollFunctionMobile()
    }
}

function scrollFunction() {
  if (document.body.scrollTop > container.offsetTop || document.documentElement.scrollTop > container.offsetTop) {
    topArrow.style.display = "block";
  } else {
    topArrow.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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

// open tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
        }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " activeTab";
}

document.getElementById("defaultOpen").click();

//accordions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeAcc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}