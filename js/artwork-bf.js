// 콜라보 js
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
    mob = 1;
}

// 1. 페이지 번호
var pno = 0;
// 2. 전체 페이지 수 
const totnum = 4;
// const 는 변수 var와 달리 변경 불가한 상수를 말한다 
// 3. 광스크롤 방지
var psts = 0; //( 0은 허용 1은 불허용 )
// 4. 한페이지당 높이
var winH = $(window).height();

$(function () {
    $(".fixed_wrap, .circle_wrap").addClass("on");

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

			// 페이지 이동과 동시에 실행
			setTimeout(pageAction, 800);

			$(".indicator_area a").eq(pno).parent().addClass("on").siblings().removeClass("on");


		}); ////////////////// mousewheel //////////////////////////


}); //////////// jqb///////////////////////////