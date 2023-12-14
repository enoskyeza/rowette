var heroShinker = function() {
    var hero = document.querySelector('.hero-nav'),
        heroHeight = hero.offsetHeight;
    hero.parentNode.style.paddingTop = heroHeight + 'px';

    var logo = document.querySelector('.logo-img'),
        navLinks = document.querySelector('.nav-links');



    window.addEventListener('scroll', function() {
        var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollOffset < heroHeight) {
            hero.style.height = (heroHeight - scrollOffset) + 'px';
        }

        if (scrollOffset > (heroHeight - 215)) {
            hero.classList.add('fixme');
        } else {
            hero.classList.remove('fixme');
        }

        if (scrollOffset > 50) {
            // When scrolled down, shrink the logo and show nav-links
            logo.style.transform = 'scale(0.3)'; // Adjust the scale factor as needed
            logo.style.transition = 'transform 0.8s ease';
            navLinks.style.opacity = '1';
        } else {
            // When scrolled back to the top, revert changes
            logo.style.transform = 'scale(1)';
            logo.style.transition = 'transform 0.3s ease-out';
            navLinks.style.opacity = '0';
        }
    });
};

heroShinker();

var heroShinker = function() {

    window.addEventListener('scroll', function() {
        var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollOffset > 50) {
            // When scrolled down, shrink the logo and show nav-links
            logo.style.transform = 'scale(0.8)'; // Adjust the scale factor as needed
            logo.style.transition = 'transform 0.3s ease';
            navLinks.style.opacity = '1';
        } else {
            // When scrolled back to the top, revert changes
            logo.style.transform = 'scale(1)';
            logo.style.transition = 'transform 0.3s ease';
            navLinks.style.opacity = '0';
        }
    });
};

heroShinker();
