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

	// if(mob){
	//     $(".mob_menu_btn").click(function(){
	//         $(".mob_menu_wrap").toggleClass('active');
	//         $(".mob_menu_btn").toggleClass('active');
	//     }); /////////// click ///////////

	// 	$('.mob_menu_area li').click(function(){
	//         $(this).find('.sub_gnb_wrap').toggleClass('active');
	//     }); /////// click ////////////

	// 	$('.mob_menu_bg').click(function(){
	// 		$(".mob_menu_wrap").toggleClass('active');
	// 		$(".mob_menu_btn").toggleClass('active');
	// 	  })
	// }


	$(".circle_wrap").click(function () {
        $("#wrap").animate({
            scrollTop: 0
        }, 800, "easeOutSine");
        pno = 0;
    }); //////// top 버튼 클릭 ///////


	if (mob) {
		$(".mob_menu_btn").click(function () {
			$(".mob_menu_wrap").toggleClass('active');
			$(".mob_menu_btn").toggleClass('active');
			$(".header_wrap").toggleClass('active');
			$(".fixed_wrap").toggleClass('on');

		}); /////////// click ///////////

		$('.mob_menu_area li').click(function () {
			$(this).find('.sub_gnb_wrap').toggleClass('active');
		}); /////// click ////////////

		$('.mob_menu_bg').click(function () {
			$(".mob_menu_wrap").toggleClass('active');
			$(".mob_menu_btn").toggleClass('active');
		})


		var itpos = $('.itpos').height();
		$('#wrap').scroll(function () {
            var scTop = $(this).scrollTop();

            // 왼쪽 높이 구하기
            var lpos = $(".temp_sns_wrap").height();
            // console.log(lpos);

            // 로고 기준선 액션 ///
            if (scTop > lpos + 100) {
                //console.log("하이하이" + $("#show_right").offset().top);
                $(".circle_wrap").css({
                    position: "fixed",
                    bottom: "20%"
                }); //////// css ////////////
            } /////// if ///////////
            else {
                $(".circle_wrap").attr("style", ""); //////// css ////////////
            }

			if(scTop > itpos + 100){
				$('.temp_tw_tit').addClass('active')
			} else{
				$('.temp_tw_tit').removeClass('active')
			}
        }); /////////// 스크롤 ////////////


		var swiper = new Swiper('.swiper-container', {
			pagination: {
			  el: '.swiper-pagination'
			},
		  });

	}
	
}); ///////////제이쿼리 구역///////////

