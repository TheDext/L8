$(document).ready(function(){
	$('.comments__slider').slick({
		arrows:true,
		dots: false,
		slidesToShow:3,
		// autoplay:true,
		// speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



                                 // arrows:true,       СТРЕЛКИ включить / выключить
                                 // dots:true,         КНОПКИ включить / выключить
                                 // adapriveHeight: true,       адаптивная высота
                                 // slidesToScroll: 3          количество пролистываемых слайдоров
                                 // speed: 300           скорость пролистывания слайдлв
                                 // slidesToShow:3,        количество слайдов на показ
                                 // autoplay:true,       автопроигрывание
                                 // pauseOnFocus: true     пауза при клике на слайд
                                 // pauseOnHover: true      пауза при наведении на слайд
                                 // pauseOnDotsHover: true     пауза при наведении на точку
                                 // autoplaySpeed:800,   скорость смены слайдов при автосмене
                                 // easing: 'linear',    тип анимации
                                 // infinite: false,  бесконечный слайдер
                                 // initialSlide: 3,   с какого слайда начинается слайдер
                                 // draggable: false,   перелистывание слайдов зажатой кнопкой мыши (только на ПК)
                                 // swipe: false, перлистывание слайдов пальцем (только на тачскринах)
                                 // touchThreshold: расстояние, чтобы перелистнуть слайд
                                 // touchMove: слайды меняются, но без анимации перелистывания
                                 // waitForAnimate: спамить переключение слайдов
                                 // centerMode:  можно делать что либо с центральным слайдом
                                 // variableWidth: автомаическая адаптивность слайдера
                                 // row: количество рядов в слайде
                                 // slidesPerRow: количество слайдов в ряду
                                 // vertical: вертикальный слайд.  (!!!СНЯТЬ DISPLAY: FLEX, УКАЗАТЬ DISPLAY:BLOCK)
                                 // verticalSwiping: свайп вертикального слайдер
                                 // fade: смена слайдов без анимации(без анимации)
                                 // respinsive:[
                                 // {
                                 //    breakpoint: 768,
                                 //    setting: {
                                 //       slidesToShow: 2
                                 //    }
                                 // }, {
                                 //    breakpoint: 480,
                                 //    setting: {
                                 //       slidesToShow: 1
                                 //    }
                                 // }
                                 // ]
                                 //
                                 //
                                 // asNavFor:".secondslider"
                                 // $('.secondslider').slick({
                                 //    arrows:true,
                                 //    dots:true,
                                 //    slidesToShow:3,
                                 //    autoplay:true,
                                 //    speed:1000,
                                 //    autoplaySpeed:800,
                                 //    asNavFor:".slider"
                                 // });