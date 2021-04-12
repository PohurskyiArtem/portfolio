const swiper1 = document.querySelector(".swiper-container"),
	swiper2 = document.querySelector(".slider-container"),
	burger = document.querySelector(".burger"),
	menu = document.querySelector(".menu"),
	close = document.querySelector(".menu__close-btn"),
	playButtonsFirst = document.querySelectorAll(".slider__play"),
	playButtonsFeatured = document.querySelectorAll(".slide-play");

let swiperSlide1 = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
	navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
});
swiperSlide1.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.first__slider video');
	videos.forEach(el => {
		el.pause();
		el.currentTime = 0;
	})
	playButtonsFirst.forEach(el => {
		el.style.display = "block";
	})
});
let swiperSlide2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 105,
});
swiperSlide2.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.featured-videos video');
	videos.forEach(el => {
		el.pause();
		el.currentTime = 0;
	})
	playButtonsFeatured.forEach(el => {
		el.style.display = "block";
		el.parentElement.querySelector('h3').removeAttribute('style');
	})
});

burger.addEventListener("click", () => {
	menu.classList.add("menu--visible");
});
close.addEventListener("click", () => {
	menu.classList.remove("menu--visible");
});

playButtonsFirst.forEach(el => {
	el.addEventListener('click', e => {
		let video = e.currentTarget.closest(".main-slider__media").querySelector("video");
		video.play();
		e.currentTarget.style.display = "none";
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000)
	})
})
playButtonsFeatured.forEach(el => {
	el.addEventListener('click', e => {
		let video = e.currentTarget.closest(".featured__slide").querySelector("video");
		let title = e.currentTarget.closest(".featured__slide").querySelector(".slider-title");
		video.play();
		e.currentTarget.style.display = "none";
		title.style.transform = "translateY(200px)";
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000)
	})
})
// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+38 (999) 999-99-99');

im.mask(selector);


// validate forms
let validateForms = function(selector, rules) {

	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			var formData = new FormData(form);

			var xhr = new XMLHttpRequest();


			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200) {
						console.log('Отправлено!')
					} else {

					}
				}
			}

			// Add any event handlers here...
			xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
		},
	});
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-from', { email: { required: true, email: true } });
