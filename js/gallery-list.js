// 갤러리 스크립트 


/// 0. 모바일용 코드
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
    mob = 1;
}



$(function () { ////////////////// JQB ////////////
    if (mob) {
        $('.gallery_list_info_wrap li').show();
    } else {
        $('.gallery_list_info_wrap li').hide();
        var gallery_num = $('.gallery_list_wrap li').length

        $('.gallery_list_wrap li').mouseleave(function () {
            $('.gallery_list_info_wrap li').hide();
        }); //////////// mouseover /////////////////
        $('.gallery_list_wrap li').mouseover(function () {
            var gallery_num = $(this).index()
            $('.gallery_list_info_wrap li').eq(gallery_num).show();
        }); //////////// mouseover /////////////////
    }




}); ////////////////// JQB //////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////