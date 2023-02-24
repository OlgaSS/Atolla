// Notice stickyBlock
const stickyBlockButton = document.querySelector('.stickyBlock__button');
if (stickyBlockButton) {
    const stickyBlock = document.querySelector('.stickyBlock');
    stickyBlockButton.addEventListener("click", function (e) {
        stickyBlock.remove();
    });
}

// Burger
const burgerIcon = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
if (burgerIcon) {
    burgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        headerNav.classList.toggle('_active');
    });
}

// Плавная прокрутка навигации
const navLinks = document.querySelectorAll('.header-nav__link[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const navLink = e.target;
        if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (burgerIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burgerIcon.classList.remove('_active');
                headerNav.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Изменение цвета header при прокрутке страницы
var minOffset = 50;
window.onscroll = function () {
    let has_class = document.body.classList.contains("is_scrolled");

    if (minOffset < document.documentElement.scrollTop) {
        if (!has_class) {
            document.body.classList.add("is_scrolled");
        }
    } else if (has_class) {
        document.body.classList.remove("is_scrolled")

    }
}

//Swiper REVIEWS
var mySwiper = new Swiper('.swiper-container', {

    loop: true,
    slidesPerView: 3.5,
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 40,
    grabCursor: true,

    breakpoints: {
        300: {
            spaceBetween: 15,
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1.2,
        },
        700: {
            slidesPerView: 2,
        },
        800: {
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 3.5,
            spaceBetween: 40,
        }
    }
});


window.onload = function () {
    setTimeout(function () {
        var mainDivs = document.getElementsByClassName("reviews-card");
        var maxHeight = 0;
        for (var i = 0; i < mainDivs.length; ++i) {
            if (maxHeight < mainDivs[i].clientHeight) {
                maxHeight = mainDivs[i].clientHeight;
            }
        }
        for (var i = 0; i < mainDivs.length; ++i) {
            mainDivs[i].style.height = maxHeight + "px";
        }
    }, 10);
}
