$(document).on('click', '.hide-nav', function () {

    //вставляем в переменную hide-nav
    let hideNav = $('.hide-nav');

    //вставляем в переменную меню которое будет искать
    let nav = $('.header-navigation');

    //При нажатие на hide-nav добавляется класс active
    $(hideNav).toggleClass('active');

    // Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
    if (nav.is(':visible')) {
        nav.slideUp();

        // в противном случае оно будет прятаться 
    } else {
        nav.slideDown();
    }
});


// slider
var swiper = new Swiper('.swiper-container', {
    cssMode: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    mousewheel: true,
    keyboard: true,
});
// foto
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small "></small>';
            }
        }
    });
});
// many
window.onload = function () {

    document.getElementById('toggler').onclick = function () {

        openbox('box', this);

        return false;

    };

};

function openbox(id, toggler) {

    var div = document.getElementById(id);

    if (div.style.display == 'grid') {

        div.style.display = 'none';

        toggler.innerHTML = '<img src="img/jpeg/plus.png">';

    }

    else {

        div.style.display = 'grid';

        toggler.innerHTML = '<img src="img/svg/minus.svg">';

    }

}
// modal
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});