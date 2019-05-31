var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){
            nav.style.background = "#ff00c863";
        } 
        else {
            nav.style.background = "transparent";
        }
    });
