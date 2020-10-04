/* [=============== Структура в HTML ==============]

		<div id="popup" class="popup">
			<div class="popup__body">
				<div class="popup__content">
               <a href="#header" class="popup__close close-popup">X</a>
               <span>отправить</span>
					<div class="popup__title">Это модальное окно №1</div>
					<div class="popup__text">
						ipsum dolor sit amet consectetur adipisicing elit. Aut enim vero veritatis velit assumenda soluta sed ad, omnis alias placeat debitis voluptas ea ipsam dolorum error dolorem, a blanditiis! Quidem!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim vero veritatis velit assumenda soluta sed ad, omnis alias placeat debitis voluptas ea ipsam dolorum error dolorem, a blanditiis! Quidem!
					</div>
				</div>
         </div>
      </div>

==================================ПАМЯТКА===============================
объект, который будет открывать попап, должен быть закрыт в <a href="#popup" class="popup-link"></a>

==================================в css ===========================
Для самого попапа:
.popup { 
	position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
	top: 0;
	visibility: hidden;
   opacity: 0;
}
.popup.open {
	visibility: visible;
   opacity: 1;
}

========== для скрытия скрола ==============
body.lock {
	overflow: hidden;
}

*/




/* Объявление переменных */
const popupLinks = document.querySelectorAll('.popup-link'); // класс .popup-link присваивается всем элементам в html, которые будут вызывать модальное окно
const body = document.querySelector('body'); // оставить без изменения. Нужна для блокирования скролла при открытом попапе
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800; // число должно совпадать с тем, что указано в transition.     например   transition: all 0.8 ease 0s;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

// ================== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ================== \\
const popupCloseIcon = document.querySelectorAll('.close-popup');  // класс .close-popup присваивается всем объектам, по клику на который попап ЗАКРОЕТСЯ
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup')); // вместо .popup вписать имя класса родителя модального окна
			e.preventDefault();
		});
	}
}

// ================== ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ================== \\
function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}



			/* Закрытие модального окна клавишей ESC*/

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
