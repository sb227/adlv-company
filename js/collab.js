// 콜라보 js
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
    mob = 1;
}

// 1. 페이지 번호
var pno = 0;
// 2. 전체 페이지 수 
const totnum = 2;
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

        }); ////////////////// mousewheel //////////////////////////




    // 하단 클릭시 컨텐츠 변경
    var swiper = new Swiper('.product_swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });


    $('.cont_wrap').hide();
    $('.cont_wrap').eq(0).show();

    var clb_tit = ['PINKFONG BABYSHARK', 'KAKAO FRIENDS', 'SESAME STREET', 'DISNEY', 'DISNEY MONSTERS', 'DISNEY TOYSTORY', 'BURIED ALIVE', 'LOG', 'MR.TIME']

    $('.cont_title').text('ADLV X ' + clb_tit[0])
    // 타이틀 포문
    var tit_nim = $('.select_collab_text').length
    for (var i = 0; i < tit_nim; i++) {
        $('.select_collab_text').eq(i).text(clb_tit[i])

    } ///////// for 문 ////////////

    var sel_collab = $('.select_collab_area')
    $('.select_collab_area').click(function () {
        var index = sel_collab.index(this);
        $('.select_collab').removeClass('active');
        $(this).find('.select_collab').addClass('active')

        $('.cont_wrap').removeClass('active');
        $('.cont_wrap').hide();
        $('.cont_wrap').eq(index).fadeIn(400);


        $('.cont_title').text('ADLV X ' + clb_tit[index])
    }); ///////// click /////////////

    // 2014부터 스와이퍼넣기
    if ($(window).width() <= 1024) {
        $('.mob_swiper').addClass('swiper-container')
        $('.mob_swiper').append('<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>')
        $('.select_collab_wrap').addClass('swiper-wrapper')
        $('.select_collab_area').addClass('swiper-slide')


        var swiper = new Swiper('.mob_swiper', {
            slidesPerView: 5,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

    } /////////////////////// 1024 if //////////////////////

}); //////////// jqb///////////////////////////