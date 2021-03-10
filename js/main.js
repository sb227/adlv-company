///////////// 전역변수 /////////////////

/// 0. 모바일용 코드 
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
	mob = 1;
}

console.log("모바일코드:" + mob);


// 1. 페이지 번호
var pno = 0;
// 2. 전체 페이지 수 
const totnum = 8;
// const 는 변수 var와 달리 변경 불가한 상수를 말한다 
// 3. 광스크롤 방지
var psts = 0; //( 0은 허용 1은 불허용 )
// 4. 한페이지당 높이
var winH = $(window).height();

//////////// 전역변수 ////////////////

$(document).ready(function (e) {
	var snum = 1;
	var restart;

	pageAction();

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



	$(".indicator_area a").click(function (e) {
		e.preventDefault();
		var idx = $(this).parent().index();

		pno = idx;

		var pid = $(this).attr("href");
		console.log(pid);

		var pgpos = $(pid).offset().top;
		console.log(pgpos);

		$("#wrap").animate({
			scrollTop: (winH * pno) + "px"
		}, 800, "easeOutSine"); //// animate /////////////////

		// 페이지 이동과 동시에 실행
		setTimeout(pageAction, 800);
		$(this).parent().addClass("on").siblings().removeClass("on");
	}); ///////////////////// indicator_area /////////////////

	$(document).on("mousewheel DOMMouseScroll",
		function (e) {
			// 모바일일때 작동막기
			if (mob) return true;

			//광스크롤막기 //
			if (psts === 1) return true;
			psts = 1; // 잠금(기존 0값을 변경)
			setTimeout(function () {
				psts = 0;
			}, 800); // 타임아웃
			e = window.event || e;

			var delta = e.detail ? e.detail : e.wheelDelta;
			console.log("delta : " + delta);
			if (/Firefox/i.test(navigator.userAgent)) {
				delta = -delta;
			} ///// if 문 /////////////////////

			// 음수일 때 아랫방향                
			if (delta < 0) {
				pno++; // 1씩증가
				if (pno === totnum) pno = totnum - 1;
			} //////////// if//////////////////////
			// 양수일 때 윗방향
			else {
				pno--; // 1씩 감소
				if (pno === -1) pno = 0;
			} ///////////// else ////////////////////
			console.log("페이지번호 : " + pno);

			$("#wrap").stop().animate({
				scrollTop: (winH * pno) + "px"
			}, 800, "easeOutSine"); //// animate /////////////////

			setTimeout(pageAction, 800);
			$(".indicator_area a").eq(pno).parent().addClass("on").siblings().removeClass("on");
		}); ////////////////// mousewheel //////////////////////////

	$('.lang_btn li').click(function () {
		var idx = $(this).index();
		var btn_num = $('.lang_btn').length;
		for (var i = 0; i < btn_num; i++) {
			$('.lang_btn').eq(i).find('li').removeClass('active');
			$('.lang_btn').eq(i).find('li').eq(idx).addClass('active');
		}


		if (idx) {
			$('.eng, .kor').addClass('active')
		} else {
			$('.eng, .kor').removeClass('active')
		}
	}); /////////////////// 언어 /////////////

	$(".circle_wrap").click(function () {
		$("#wrap").animate({
			scrollTop: 0
		}, 800, "easeOutSine");
		pno = 0;
		$(".indicator_area li").removeClass("on").first().addClass("on");
		$(".fixed_wrap, .circle_wrap, .indicator_wrap").addClass("on");
	}); //////// top 버튼 클릭 ///////

	if (mob) {
		$(".fixed_wrap, .circle_wrap").addClass("on");
		$(".mob_menu_btn").click(function () {
			$(".mob_menu_wrap").toggleClass('active');
			$(".mob_menu_btn").toggleClass('active');
		}); /////////// click ///////////

		$('.mob_menu_area li').click(function () {
			$(this).find('.sub_gnb_wrap').toggleClass('active');
		}); /////// click ////////////

		$('.mob_menu_bg').click(function () {
			$(".mob_menu_wrap").toggleClass('active');
			$(".mob_menu_btn").toggleClass('active');
		})


		var itpos = [];
		// 클래스 itpos를 준 요소의 개수만큼 위치를 알아온다!
		var itcnt = $(".itpos").length;
		console.log("위치개수:" + itcnt);
		for (var i = 0; i < itcnt; i++) {
			itpos[i] = $(".itpos").eq(i).offset().top;
		} ////// for문 /////////////////

		$('#wrap').scroll(function () {
			var scTop = $(this).scrollTop();

			if (scTop > itpos[0] - 200) {
				$(".fixed_wrap, .circle_wrap").removeClass("on");
				$(".first").addClass('active');

			} else {
				$(".fixed_wrap, .circle_wrap").addClass("on");
				$(".first").removeClass('active');
			}

			if (scTop > itpos[1] - 150) {
				$(".second").addClass('active');
			} else {
				$(".second").removeClass('active');
			}

			if (scTop > itpos[2] - 350) {
				$(".third").addClass('active');
			} else {
				$(".third").removeClass('active');
			}

			if (scTop > itpos[3] - 550) {
				$(".fourth").addClass('active');
			} else {
				$(".fourth").removeClass('active');
			}

			if (scTop > itpos[4] - 650) {
				$(".fifth").addClass('active');
			} else {
				$(".fifth").removeClass('active');
			}
		}); /////////// 스크롤 ////////////
	}

}); ///////////제이쿼리 구역///////////

/*//////////////////////////////////////////////
    함수명: pageAction
    기능: 페이지별 액션 셋팅
*/ //////////////////////////////////////////////
function pageAction() {
	console.log("페이지액션");
	// 모바일일때 작동막기
	if (mob) return true;

	if (pno === 0 || pno === 5) {
		$(".fixed_wrap, .circle_wrap, .indicator_wrap").addClass("on");
	} else {
		$(".fixed_wrap, .circle_wrap, .indicator_wrap").removeClass("on");
	}

} ////// pageAction 함수 //////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////