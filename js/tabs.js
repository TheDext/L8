/* =============== CТРУКТУРА HTML ==================

			<div class="tabs">
				<span class="tab">Вкладка 1</span>
				<span class="tab">Вкладка 2</span>
				<span class="tab">Вкладка 3</span>        
		  </div>
		  <div class="tab_content">
				<div class="tab_item">Содержимое 1</div>
				<div class="tab_item">Содержимое 2</div>
				<div class="tab_item">Содержимое 3</div>
		  </div>	
*/

/*  ===================== ИСХОДНИК =====================

	$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

*/


// .wrapper заменить на имя контейнера, который является оболочкой для табов

$(".tab_item").not(":first").hide();
$(".statistic .tab").click(function() {
	$(".statistic .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");