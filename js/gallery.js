// 갤러리 스크립트 


/// 0. 모바일용 코드
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
    mob = 1;
}

// 1. 스크롤위치
var scno = 0;
// 2. 전체 페이지 크기
var totsize;
// 3. 광스크롤방지
var psts = 0; //(0-허용,1-불허용)

/////////////////////////////////////////////





$(function () { ////////////////// JQB ////////////
    $(".fixed_wrap, .circle_wrap").addClass("on");

    console.log("로딩완료");
    menuSts = 1; // (0-불허용,1-허용)

    // 모바일만 푸터 보이게
    $("#footer").hide();
    if (mob === 1) {
        $("#footer").show();
    }

    // 이미지 뿌리기
    for (var i = 1; i < 48; i++) {
        $("#photo").append("<li class='galimg" + i + "'><a href='images/lookbook/Berlin/berlin" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/Berlin/berlin" + i + ".jpg'></a></li>");
    } ////// for문 ////////

    $(document).on("mousewheel DOMMouseScroll",
        function (e) {
            // 모바일일때 작동막기
            if (mob) return true;
            // console.log("휠");

            e = window.event || e;
            var delta = e.detail ? e.detail : e.wheelDelta;
            if (/Firefox/i.test(navigator.userAgent)) {
                //console.log("난파폭!");
                delta = -delta; //부호를 반대로!
            } ////// if문 ////////////////////////

            console.log(delta);
            if (delta < 0) {
                scno += 120;
                if (scno > totsize) scno = totsize;
            } else {
                scno -= 120;
                if (scno < 0) scno = 0;
            } /// else //////

            $("#wrap").stop().animate({
                scrollLeft: scno + "px"
            }, 2000, "easeOutQuint");

        }); ///////////////// 마우스 휠 ////////////




}); ////////////////// JQB //////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
