// event pada link saat klik
$('.page-scroll').on('click', function (e) {
    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen ybs
    var elemenHref = $(href);


    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 100, 'easeInOutExpo');

    // $('html, body').animate({
    //     scrollTop: elemenHref.offset().top - 50
    // }, 50,'liner');

    e.preventDefault();
});


// parallax
// About
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    // console.log(wScroll);
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    // portfolio
    // if (wScroll > $('.portfolio').offset().top - 250) {
    //     $('.portfolio .thumbnail').addClass('muncul');
    // } else {
    //     $('.portfolio .thumbnail').removeClass('muncul');
    // }

    if (wScroll > $('.thumbnail').offset().top - 500) {
        $('.thumbnail').each(function (i) {
            setTimeout(function () {
                $('.thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    } else {
        $('.portfolio .thumbnail').removeClass('muncul');
    }
});