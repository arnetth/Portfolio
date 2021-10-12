const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links ul li');

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

// closing mobile menu on click
function closeMenu() {
    var x = document.getElementById("mobile");
    x.className = x.className.replace(" w3-show", "");
    document.getElementById("icon").innerHTML = "&#9776;";
}

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