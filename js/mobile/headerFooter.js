fetch('/mobile/header.html')
	.then((response) => response.text())
	.then(function (HTML) {
		const header = document.querySelector('header');
		header.innerHTML = HTML;
		headers();
	});

// header 반응 js S
function headers() {
	document.querySelector('#gnbOpen').addEventListener('click', function () {
		document.querySelector('#mobileGnb').style = 'right: 0';
	});
	document
		.querySelector('#langToggle')
		.addEventListener('change', function () {
			document.querySelector('.lang__list').style.height = this.checked
				? '130px'
				: '0px';
		});
	document.querySelector('#gnbClose').addEventListener('click', function () {
		document.querySelector('#mobileGnb').style = 'right: -400px';
	});
}

// header 반응 js E

// footer 불러오기 js
fetch('/mobile/footer.html')
	.then((response) => response.text())
	.then(function (HTML) {
		const footer = document.querySelector('footer');
		footer.innerHTML = HTML;
	});
