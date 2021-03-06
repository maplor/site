import $ from 'jquery';
import './copy-code';
import './home.less';

$('header').headroom({
    offset: 0,
    tolerance: 0,
    classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp'
    },
    onTop() {
        $('header.homepage').addClass('transparent');
    },
    onPin() {
        $('header.homepage').removeClass('transparent');
    },
    onNotTop() {
        $('header.homepage').removeClass('transparent');
    },
    onUnpin() {
        $('#sub-product-navs').find('.dropdown-menu').removeClass('show');
    },
});

$('.slick').each(function () {
    const $target = $(this);
    $target.slick({
        // dots: !!$target.data('dots'),
        slidesToShow: 1,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    });
});
