window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if(scrollTop > 50) {
        nav.classList.add('nav-scrolled');
    } else if(scrollTop < 50) {
        nav.classList.remove('nav-scrolled')
    }

})