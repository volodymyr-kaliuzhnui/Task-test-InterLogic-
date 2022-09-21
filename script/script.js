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