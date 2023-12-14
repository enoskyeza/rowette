var heroShinker = function() {
    var hero = document.querySelector('.hero-nav'),
        heroHeight = hero.offsetHeight;
    hero.parentNode.style.paddingTop = heroHeight + 'px';

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
    });
};

heroShinker();
