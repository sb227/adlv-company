var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
    mob = 1;
}

$(document).ready(function (e) {
    console.log("common js")

    $(".circle_wrap").click(function () {
        $("#wrap").animate({
            scrollTop: 0
        }, 800, "easeOutSine");
        pno = 0;

        $(".fixed_wrap, .circle_wrap, .indicator_wrap").removeClass("on");
        $(".indicator_area li").removeClass("on").first().addClass("on");

    }); //////// top 버튼 클릭 ///////

    if(mob){
        $(".mob_menu_btn").click(function(){
            $(".fixed_wrap, .circle_wrap, .indicator_wrap").toggleClass("on");
            $(".mob_menu_wrap").toggleClass('active');
            $(".mob_menu_btn").toggleClass('active');
        }); /////////// click ///////////

        $('.mob_menu_area li').click(function(){
            $(this).find('.sub_gnb_wrap').toggleClass('active');
        }); /////// click ////////////

        $('.mob_menu_bg').click(function(){
            $(".fixed_wrap, .circle_wrap, .indicator_wrap").toggleClass("on");
            $(".mob_menu_wrap").toggleClass('active');
            $(".mob_menu_btn").toggleClass('active');
          })
    }
}); ///////////////////////////// JQB /////////////////////////////