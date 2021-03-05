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
    $(".fixed_wrap, .back_wrap").addClass("on");

    console.log("로딩완료");
    menuSts = 1; // (0-불허용,1-허용)

    // 모바일만 푸터 보이게
    $("#footer").hide();
    if (mob === 1) {
        $("#footer").show();
    }

    // 이미지 뿌리기 - 21twss
    for (var i = 1; i < 13; i++) {
        $("#photo.21twss").append("<li class='galimg" + i + "'><a href='images/lookbook/21tw/tw_ss/21twss" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/21tw/tw_ss/21twss" + i + ".jpg'></a></li>");
    } ////// for문 ////////

     // 이미지 뿌리기 - 20twfw
     for (var i = 1; i < 83; i++) {
        $("#photo.20twfw").append("<li class='galimg" + i + "'><a href='images/lookbook/20tw/tw_fw/20twfw" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/20tw/tw_fw/20twfw" + i + ".jpg'></a></li>");
    } ////// for문 ////////

     // 이미지 뿌리기 - 20twss
     for (var i = 1; i < 43; i++) {
        $("#photo.20twss").append("<li class='galimg" + i + "'><a href='images/lookbook/20tw/tw_ss/20twss" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/20tw/tw_ss/20twss" + i + ".jpg'></a></li>");
    } ////// for문 ////////

     // 이미지 뿌리기 - Berlin
     for (var i = 1; i < 33; i++) {
        $("#photo.berlin").append("<li class='galimg" + i + "'><a href='images/lookbook/Berlin/berlin" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/Berlin/berlin" + i + ".jpg'></a></li>");
    } ////// for문 ////////

     // 이미지 뿌리기 - london
     for (var i = 1; i < 74; i++) {
        $("#photo.london").append("<li class='galimg" + i + "'><a href='images/lookbook/london/london" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/london/london" + i + ".jpg'></a></li>");
    } ////// for문 ////////

     // 이미지 뿌리기 - paju
     for (var i = 1; i < 35; i++) {
        $("#photo.paju").append("<li class='galimg" + i + "'><a href='images/lookbook/paju/paju" + i + ".jpg' data-lightbox='view'><img src='images/lookbook/paju/paju" + i + ".jpg'></a></li>");
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

            // console.log(delta);
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
