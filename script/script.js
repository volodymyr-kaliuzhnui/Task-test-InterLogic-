const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 58,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

    // Breakpoints

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

// mobile menu
let mobileMenuBtn = document.getElementById('openMobileMenu');
let navBlock = document.getElementById('navBlock');
let closeMenuBtn = document.getElementById('closeMenu');
let body = document.querySelector('body');

 let openMenu = (event) => {
     event.preventDefault();
     navBlock.classList.add('animate__fadeInLeft');
     navBlock.classList.remove('animate__fadeOutLeft');
     setTimeout(()=> {
         body.style.overflow = 'hidden'
     },500)
     mobileMenuBtn.removeEventListener('click', openMenu);
     closeMenuBtn.addEventListener('click', closeMenu);
}

mobileMenuBtn.addEventListener('click', openMenu);

let closeMenu = (event) => {
    event.preventDefault();
    navBlock.classList.remove('animate__fadeInLeft');
    navBlock.classList.add('animate__fadeOutLeft');
    setTimeout(()=> {
        body.style.overflow = 'auto'
    },200)
    mobileMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.removeEventListener('click', closeMenu);
}
