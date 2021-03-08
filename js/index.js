///////////// 전역변수 /////////////////

/// 0. 모바일용 코드 
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
	mob = 1;
}

console.log("모바일코드:" + mob);
//////////// 전역변수 ////////////////

$(document).ready(function (e) {
	$(".fixed_wrap, .circle_wrap, .indicator_wrap").addClass("on");
	console.log("main js");

	var snum = 1;
	var restart;

	var slideShow = setInterval(function () {
		// 타겟 설정
		var tg = document.getElementsByClassName("slide")[0];

		tg.style.left = "-100%";
		tg.style.transition = "left .8s";

		// left, transition 초기화
		setTimeout(function () {
			var tgli = document.getElementsByClassName("slide")[0].getElementsByTagName("li");

			tg.appendChild(tgli[0]);
			tg.style.left = "0";
			tg.style.transition = "none";
		}, 1000);
	}, 3000); ////////// 슬라이드 돌아 ////////////

	if(mob){
        $(".mob_menu_btn").click(function(){
            $(".mob_menu_wrap").toggleClass('active');
            $(".mob_menu_btn").toggleClass('active');
        }); /////////// click ///////////

		$('.mob_menu_area li').click(function(){
            $(this).find('.sub_gnb_wrap').toggleClass('active');
        }); /////// click ////////////

		$('.mob_menu_bg').click(function(){
			$(".mob_menu_wrap").toggleClass('active');
			$(".mob_menu_btn").toggleClass('active');
		  })
    }
}); ///////////제이쿼리 구역///////////
