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

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links ul li');

// highlighting menu on scroll
window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');

        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})

// shrink navbar on scroll
if (document.documentElement.clientWidth > 600) {
	window.onscroll = function() {scrollFunctionDesktop()};

    var container = document.getElementById("container");
        
    function scrollFunctionDesktop() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 0 10px 100px";
        document.getElementById("ha").style.fontSize = "25px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
        document.getElementById("navbar").style.padding = "60px 0 10px 100px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("ha").style.fontSize = "30px";
        }
    }
}

if (document.documentElement.clientWidth < 600) {
	window.onscroll = function() {scrollFunctionMobile()};

    var container = document.getElementById("container");
        
    function scrollFunctionMobile() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 30px 7px 30px";
        document.getElementById("ha").style.fontSize = "18px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else {
        document.getElementById("navbar").style.padding = "50px 30px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("ha").style.fontSize = "22px";
        }
    }
}


