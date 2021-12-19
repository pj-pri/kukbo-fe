// load header html S
fetch('../../header.html')
	.then((response) => response.text())
	.then(function (HTML) {
		const header = document.querySelector('header');
		header.innerHTML = HTML;

		(function () {
			// load시 실행
			if (window.scrollY > 30) {
				header.className +=
					header.className.indexOf('scrolled') === -1
						? ' scrolled'
						: '';
			}
			// scroll시 실행
			window.addEventListener('scroll', function () {
				if (window.scrollY > 30) {
					header.className +=
						header.className.indexOf('scrolled') === -1
							? ' scrolled'
							: '';
				} else {
					header.className = header.className
						.replace('scrolled', '')
						.trim();
				}
			});
		})();

		// sub menu toggle S
		document
			.querySelector('#headerSubBtn')
			.addEventListener('change', function () {
				document.querySelector('header').className = this.checked
					? 'open'
					: '';
			});
		// sub menu toggle E
	});
// load header html E

// load footer html S
fetch('../../footer.html')
	.then(function (response) {
		return response.text();
	})
	.then(function (html) {
		document.querySelector('footer').innerHTML = html;
	});
// load footer html E
