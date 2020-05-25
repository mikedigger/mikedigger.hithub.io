var mySwiper1 = new Swiper('.hero .swiper-container', {
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 3500
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
})

var mySwiper2 = new Swiper('.section--about .swiper-container', {
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 3500
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
})


	const breakpoint = window.matchMedia( '(min-width:481px)' );
  let mySwiper3;
  let mySwiper4;
  let mySwiper5;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {

	  if ( mySwiper3 !== undefined ) mySwiper3.destroy( true, true );
	  if ( mySwiper4 !== undefined ) mySwiper4.destroy( true, true );
	  if ( mySwiper4 !== undefined ) mySwiper5.destroy( true, true );
	  return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
  };
  const enableSwiper = function() {
		mySwiper3 = new Swiper('.section-left .swiper-container', {
			loop: true,
			slidesPerView: 1,
			autoplay: {
        delay: 3500
      },
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		}),
		mySwiper4 = new Swiper('.section--service .swiper-container', {
			loop: true,
			slidesPerView: 1,
			autoplay: {
        delay: 3500
      },
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		}),
		mySwiper5 = new Swiper('.section--blog .swiper-container', {
			loop: true,
			slidesPerView: 1,
			autoplay: {
        delay: 3500
      },
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		})
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

let search = document.querySelector('#navbar__search');
let navbar_search_popup = document.querySelector('#navbar-search-popup');
let navbar_search_form = document.querySelector('#navbar-search-form');
let popup_search = document.querySelector('#popup-search');
let popup_search_navbar = document.querySelector('#popup_navbar_search');
let popup_navbar = document.querySelector('#popup-navbar');
let popup_search_close = document.querySelector('#popup-search__close');
let popup_navbar_close = document.querySelector('#popup-navbar__close');
let burger = document.querySelector('.burger');

search.addEventListener('click', function(){
	popup_search.classList.toggle('active');
});
popup_search_close.addEventListener('click', function(){
	popup_search.classList.toggle('active');
});

navbar_search_popup.addEventListener('click', function(){
	navbar_search_form.classList.toggle('active');
});

burger.addEventListener('click', function(){
	popup_navbar.classList.toggle('active');
	this.classList.toggle('active');
});


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active')
		})
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		tab.classList.add('active')
		target.classList.add('active');
	});
})