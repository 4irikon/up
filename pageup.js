$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 3000) {
			$('.pageup').show();
		} else {
			$('.pageup').hide();
		}
	});

	$('.pageup').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});
});
