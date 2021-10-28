$(document).ready(function () {
    /* Портфолио */
    $('.button[filter]').click(function () {
        if ($(this).attr('value') == 'off') {
            $('.button[filter]').attr('value', 'off').removeClass('focused');
            $(this).attr('value', 'on').addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
            if ($(this).attr('filter') == 'all') {
                $('.button[filter]').attr('value', 'off').removeClass('focused');
                $(this).attr('value', 'on').addClass('focused');
                $('.filter > div').show(300);
            }
        }
    });
});

/* Слайдер */
new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    simulateTouch: true,
    touchRatio: 3,
    grabCursor: true,
    loop: true,
    effect: "fade",
    fadeEffect: {crossFade: true},
    direction: 'horizontal',
    autoHeight: true,
});

/* Меню */
$('ul.menu a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    console.log(target);
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
    $('ul.menu a[href^="#"]').css({
        'color': '#212121'
    });
    $(this).css({
        'color': '#004bee'
    });
    return false;
});


/* Кнопка наверх */
$(window).scroll(function () {
    if ($(this).scrollTop() != 0)
        $('#toTop').fadeIn();
    else
        $('#toTop').fadeOut();
});
$('#toTop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});


/* Выпадающее меню */
$('.menu-icon').click(function () {
    $('nav').slideToggle(500);
    $('ul.menu').css({
        'display': 'flex',
        'flex-direction': 'column'
    });
    if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
        $(this).html('<i class="fas fa-times"></i>');
    } else {
        $(this).html('<i class="fas fa-bars"></i>');
    }
});
