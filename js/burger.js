
/* ============ ВСТАВЛЯТЬ ПЕРЕД <nav class="header__menu"></nav>
<div class="header__burger">
	<span></span>
*/


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});