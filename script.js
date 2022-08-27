var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        clickable: true,

    },
    // freeMode: {
    //     enabled: true,
    //     sticky: true,
    //   },


    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },



    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var swiper = new Swiper(".mySwiperOne", {
    autoplay: {
        delay: 2000,
        clickable: true,
    },
    

    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'cards',
    cardsEffect: {
      // ...
    },
 
});
