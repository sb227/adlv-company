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

        $(".fixed_wrap, .circle_wrap").addClass("on");
    }); //////// top 버튼 클릭 ///////

    if(mob){
        $(".mob_menu_btn").click(function(){
            $(".mob_menu_wrap").toggleClass('active');
            $(".mob_menu_btn").toggleClass('active');
        }); /////////// click ///////////
    }
}); ///////////////////////////// JQB /////////////////////////////