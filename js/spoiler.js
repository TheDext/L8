$(document).ready(function() {
	$('.mainscreen-body__extended').click(function(event) {
		if($('.mainscreen__body').hasClass('one')){
			$('.mainscreen-body__extended').not($(this)).removeClass('active');
			$('.mainscreen-body__hide').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

// $(document).ready(function() {
// 	$('.humans-content__title').click(function(event) {
// 		if($('.humans-content').hasClass('one')){
// 			$('.humans-content__title').not($(this)).removeClass('active');
// 			$('.humans-content__hide').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });