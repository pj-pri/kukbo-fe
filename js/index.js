// swiper init js S
var swiper = new Swiper('.mySwiper', {
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	on: {
		init: function () {
			const progressbar = document.querySelector('#progressbar');
			progressbar.style = 'animation:autoProgress 2.5s';
		},
		slideChange: function () {
			const slidePageCount = document.querySelector('#slidePageCount');
			slidePageCount.innerText = this.activeIndex + 1 + ' / 4';
		},
		slideChangeTransitionStart: function () {
			const progressbar = document.querySelector('#progressbar');
			progressbar.style = '';
		},
		slideChangeTransitionEnd: function () {
			const progressbar = document.querySelector('#progressbar');
			progressbar.style = 'animation:autoProgress 2.5s';
		},
	},
});
// swiper init js E

// feature fixed js S
var feature = {
	imageWrap: document.querySelector('.features__image-wrap'),
	textCover: document.querySelector('.feature-content__cover'),
	init: function () {},
	scrollTarget: function () {
		const features__images = document.querySelector('.features__images'); // 요소의 id 값이 target이라 가정
		const startTop = findAbsoluteTop(features__images);
		const endBottom =
			findAbsoluteTop(features__images) + window.innerHeight * 4;
		let windowPoint = window.scrollY;

		if (startTop <= windowPoint && endBottom <= windowPoint) {
			this.imageWrap.className =
				'features__image-wrap features__image-wrap--after';
			this.textCover.className =
				'feature-content__cover feature-content__cover--after';
		} else if (startTop <= windowPoint) {
			if (
				this.imageWrap.className.indexOf(
					'features__image-wrap--active'
				) === -1
			) {
				this.imageWrap.className =
					'features__image-wrap features__image-wrap--active';
				this.textCover.className =
					'feature-content__cover feature-content__cover--active';
			}
		} else {
			this.imageWrap.className = 'features__image-wrap';
			this.textCover.className = 'feature-content__cover';
		}
	},
};
feature.init();
window.onscroll = () => {
	feature.scrollTarget();
};
// feature fixed js E

// const absolutePosition = {
// 	setTarget(target) {
// 		this._target = target;
// 	},
// 	top: function () {
// 		const clientRect = this._target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
// 		const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.
// 		const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
// 		// const absoluteTop = scrolledTopLength + relativeTop; // 절대좌표
// 		return scrolledTopLength + relativeTop;
// 	},
// 	bottom: function () {
// 		return this.top + this._target.innerHeight;
// 	},
// };

function findAbsoluteTop(target) {
	const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
	const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.
	const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
	return scrolledTopLength + relativeTop;
}
