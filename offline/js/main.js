/// 메인 페이지 JS - main.js ////
/// 0. 모바일용 코드 
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 800) {
  mob = 1;
}
$(function (e) { ///////////////// JQB //////////////////////

  if (mob) {
    $(".mob_menu_btn").click(function () {
      $(".fixed_wrap, .circle_wrap, .indicator_wrap").toggleClass("on");
      $(".mob_menu_wrap").toggleClass('active');
      $(".mob_menu_btn").toggleClass('active');
    }); /////////// click ///////////

    $('.mob_menu_bg').click(function(){
      $(".fixed_wrap, .circle_wrap, .indicator_wrap").toggleClass("on");
      $(".mob_menu_wrap").toggleClass('active');
      $(".mob_menu_btn").toggleClass('active');
    })



    $('.mob_menu_area li').click(function () {
      $(this).find('.sub_gnb_wrap').toggleClass('active');
    }); /////// click ////////////
  }

  $(".circle_wrap").click(function () {
    $("#wrap").animate({
      scrollTop: 0
    }, 800, "easeOutSine");
    pno = 0;

    $(".indicator_area li").removeClass("on").first().addClass("on");

  }); //////// top 버튼 클릭 ///////

  $('.lang_btn li').click(function () {
    var idx = $(this).index();
    $('.lang_btn').find('li').removeClass('active');
    $('.lang_btn').find('li').eq(idx).addClass('active');

    if (idx) {
      $('.eng, .kor').addClass('active')
    } else {
      $('.eng, .kor').removeClass('active')
    }
  }); /////////////////// 언어 /////////////



  $(".call_1").click(function () {
    copyToClipboard('02-512-7894');
    alert('아크메드라비 청담 SHOWROOM 전화번호가 복사되었습니다!');
  });

  $(".call_2").click(function () {
    copyToClipboard('02-772-3765');
    alert('아크메드라비 롯데백화점 본점 전화번호가 복사되었습니다!');
  });

  $(".call_3").click(function () {
    copyToClipboard('031-8072-1665');
    alert('아크메드라비 신세계백화점 하남 스타필드점 전화번호가 복사되었습니다!');
  });

  $(".call_4").click(function () {
    copyToClipboard('053-661-6670');
    alert('아크메드라비 신세계백화점 대구점 전화번호가 복사되었습니다!');
  });

  $(".call_5").click(function () {
    copyToClipboard('051-810-3776');
    alert('아크메드라비 롯데백화점 부산 전화번호가 복사되었습니다!');
  });


  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // 전체보기 / 신규매장 탭
  $('.section').hide();
  $('.section').eq(0).show();
  var sel_shop = $('.select_shop')
  $('.select_shop').click(function () {
    var index = sel_shop.index(this);
    $('.select_shop').removeClass('active');
    $(this).addClass('active')

    $('.section').removeClass('active');
    $('.section').fadeOut(400);
    $('.section').eq(index).fadeIn(400);
  }); ///////// click /////////////

  var kor_locations1 = [
    ['청담 SHOW ROOM', 'Cheongdam showroom<br>34, Seolleung-ro 152-gil, Gangnam-gu, Seoul, Republic of Korea', '+82(0)2-512-7894', 'MON - SUN 11:00 - 20:00'],
    ['롯데백화점 본점 7F', 'Lotte department sotre myeongsong<br>81, Namdaemun-ro, Jung-gu, Seoul, Republic of Korea', '+82(0)2-772-3765', 'MON - THU 10:30 - 20:00 <br> FRI - SUN 10:30 - 20:30'],
    ['롯데백화점 부산점 7F', 'Lotte department sotre busan<br>772, Gaya-daero, Busanjin-gu, Busan, Republic of Korea', '+82(0)51-810-3776','MON - THU 10:30 - 20:00 <br> FRI - SUN 10:30 - 20:30'],
    ['신세계백화점 스타필드 하남점 3F', 'Shinsegae department store hanam starfield<br>750, Misa-daero, Hanam-si, Gyeonggi-do, Republic of Korea', '031-8072-1665', 'MON - THU 11:00 - 20:00<br>FRI - SUN 11:00 - 21:00'],
    ['신세계백화점 대구점 6F', 'Shinsegae department store daegu<br>149, Dongbu-ro, Dong-gu, Daegu, Republic of Korea', '053-661-6670', 'MON - THU 11:00 - 20:00<br>FRI - SUN 11:00 - 20:30'],
  ];

  var ko_length1 = kor_locations1.length
  for (var i = 0; i < ko_length1; i++) {
    $('.kor_shop').append("<ul class='shop_wrap'>" + "<li class='shop_img_box'><img src='images/kor/kor_adlv/kor_adlv_" + (i + 1) + ".jpg' alt='국내 매장'></li><li class='market_name'>" + kor_locations1[i][0] +
      "</li><li class='market_address'>" + kor_locations1[i][1] +
      "</li><li class='market_call'>" + kor_locations1[i][2] +
      "</li><li class='market_open'>" + kor_locations1[i][3] + "</li></ul>")
  } /////////// for i /////////////



  var kor_locations2 = [
    ['롯데면세점 소공본점 9F', 'Lotte dutyfree, lotte hotel<br>30, Eulji-ro, Jung-gu, Seoul, Republic of Korea', '+82-2-759-6732', 'MON - SUN 09:30 - 21:00'],
    ['롯데면세점 제주점 3F', 'Lotte dutyfree, jeji<br>83, Doryeong-ro, Jeju-si, Jeju-do, Republic of Korea', '+82-64-793-3134', 'SAT.SUN.HOLIDAY OFF<br>MON - FRI 09:30 - 19:00'],
    ['롯데면세점 부산점 8F', 'Lotte dutyfree, busan<br>772, Gaya-daero, Busanjin-gu, Busan, Republic of Korea', '+82-51-810-2840', 'MONDAY OFF<br>TUE - THU 09:30 - 20:00<br>FRI - SUN 09:30 - 20:30'],
    ['신세계면세점 소공본점 9F', 'Shinsegae duttyfree, sogong<br>77, Toegye-ro 90-gil, Jung-gu, Seoul, Republic of Korea', '02-6370-4347', 'MON - SUN 09:00 - 20:30'],
    ['신세계면세점 강남점 1F', 'Shinsegae dutyfree, gangnam<br>176, Sinbanpo-ro, Seocho-gu, Seoul, Republic of Korea', '02-6288-0688', 'MON - SUN 09:00 - 20:30'],
    ['신라면세점 장충점 B1F', 'Shilla dutyfree, shinra hotel<br>249, Dongho-ro, Jung-gu, Seoul, Republic of Korea', '02-2230-5940', 'MON - SUN 09:00 - 20:30'],
    ['신라면세점 제주점 2F', 'Shilla dutyfree, jeju<br>69, Noyeon-ro, Jeju-si, Jeju-do, Republic of Korea', '064-710-7314', 'SAT.SUN.HOLIDAY OFF<br>MON - FRI 14:00 - 18:00'],
    ['HDC 신라면세점 6F', 'HDC shilla dutyfree<br>55, Hangang-daero 23-gil, Yongsan-gu, Seoul, Republic of Korea', '02-490-3662', 'SAT.SUN OFF<br>MON - FRI 09:00 - 17:30'],
    ['현대면세점 무역센터점 10F', 'Hyundai dutyfree, KWTC<br>517, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea', '02-2142-6448', 'MON - SUN 09:00 - 20:30'],
    ['현대면세점 동대문점 9F', 'Hyundai dutyfree, dongdaemun<br>275, Jangchungdan-ro, Jung-gu, Seoul, Republic of Korea', '02-3668-8182', 'MON - SUN 10:30 - 23:00'],
    ['현대면세점 인천공항점 T1', 'Hyundai dutyfree, Incheon airport T1<br>271, Gonghang-ro, Jung-gu, Incheon, Republic of Korea', '032-743-8324', 'MON - SUN 06:30 - 21:30'],
  ];


  var ko_length2 = kor_locations2.length
  for (var i = 0; i < ko_length2; i++) {
    $('.duty_shop').append("<ul class='shop_wrap'>" + "<li class='shop_img_box'><img src='images/kor/kor_" + (i + 1) + ".jpg' alt='국내 매장'></li><li class='market_name'>" + kor_locations2[i][0] +
      "</li><li class='market_address'>" + kor_locations2[i][1] +
      "</li><li class='market_call'>" + kor_locations2[i][2] +
      "</li><li class='market_open'>" + kor_locations2[i][3] + "</li></ul>")
  } /////////// for i /////////////


  var overseas_locations = [
    ['Melbourne QV, Austrailia <br>(호주 멜버른점)', 'Shop R01-092, QV Melbourne,<br>Corner Lonsdale & Swanston Streets, Melbourne VIC 3000', 'COMING SOON'],
    ['沈阳恒隆广场 <br>(Shenyang City Henglong Plaza, 심양 헝롱플라자)', '辽宁省沈阳市沈河区中街路128号皇城恒隆广场负一层B134-2<br>B134-2, Ground Floor, Huangcheng Henglong Plaza, No. 128, Zhongjie Road, Shenhe District, Shenyang City, Liaoning Province<br>요녕성 심양시 심하구', 'SUMMER 10:00 - 21:30<br>WINTER 10:00 - 22:00'],
    ['哈西万达广场 <br>(Hexi City Wanda Plaza, 하서 완다플라자)', '黑龙江省哈尔滨市南岗区中兴大街168号哈西万达广场1层-1070号<br>No.1070, 1st Floor, Haxi Wanda Plaza, No.168 Zhongxing Street, Nangang District, Harbin City, Heilongjiang Province <br>흑룡강성 하얼빈시 남강구', 'MON - SUN 09:30 - 21:30'],
    ['长春红旗街万达 <br>(Changchun City Hongqi Street Wanda Plaza, 창춘홍치지에 완다플라자)', '吉林省长春市朝阳区红旗街616号2层-2008号<br>No.2008 2nd Floor, No.616 Hongqi Street, Chaoyang District, Changchun City, Jilin Province <br>길림성 장춘시 조양구', 'MON - SUN 09:30 - 22:00'],
    ['太原街万达广场 <br>(Taiyuan City Wanda Plaza, 태원가 완다플라자)', '辽宁省沈阳市和平区太原南街2号万达广场1层-119B<br>119B, 1st Floor, Wanda Plaza, No.2 Taiyuan South Street, Heping District, Shenyang City, Liaoning Province <br>요녕성 심양시 화평구', 'MON - THU 09:30 - 21:30<br>FRI - SUN 09:30 - 20:00'],
    // ['大连开发区万达', 39.069446638550104, 121.83586822408596, '09:30 - 21:30'], 좋은자리 찾아서 폐업 예정
    ['沈阳全运路万达广场店<br>(Shenyang City Wanda Plaza, 심양전운로 완다플라자)', '辽宁省沈阳市浑南区智慧三街33-25号万达广场1层1075<br>No.1075, 1st Floor, Wanda Plaza, No.33-25 Zhihui Third Street, Hunnan District, Shenyang City, Liaoning Province <br>요녕성 심양시 혼남구', 'MON - THU 10:00 - 21:30<br>FRI - SUN 10:00 - 20:00'],
    ['沈阳大悦城 <br>(Joy City Shenyang, 심양 조이시티)', '辽宁省沈阳市大东区小东路5号大悦城B馆一层B124A<br>B124A, 1st Floor, Building B, Joy City, No.5 Xiaodong Road, Dadong District, Shenyang City, Liaoning Province <br>요녕성 심양시 대동구', 'MON - SUN 10:00 - 21:30'],
    ['哈尔滨红博中央公园 <br>(Hongbo Central Square Harbin City, 하얼빈 홍보중앙공원)', '黑龙江省哈尔滨市南岗区红旗大街339号红博中央公园大道上区35号<br>No.35, Upper District, Hongbo Central Park Avenue, No.339, Hongqi Street, Nangang District, Harbin, Heilongjiang Province <br>흑룡강성 하얼빈시 남강구', 'MON - SUN 09:30 - 21:00'],
    // ['大连东港威尼斯水城', 38.92659932612846, 121.6854046537263], 폐업중
    ['盘锦双兴南路万达广场店<br>(Panjin City Wanda Plaza, 반금 완다플라자)', '辽宁省盘锦市兴隆台区双兴南路71号万达广场2层-2020号<br>No.2020, 2nd Floor, Wanda Plaza, No.71 Shuangxing South Road, Xinglongtai District, Panjin City, Liaoning Province <br>요녕시 반금시 융대구', 'MON - SUN 09:30 - 21:30'],
    ['哈尔滨金安国际购物广场 <br>(Jin an International Shopping Plaza Harbin City, 하얼빈 찐안국제쇼핑몰)', '黑龙江省哈尔滨道里区中央大街73号金安国际购物广场二层B区201A<br>201A, Area B, Second Floor, Jin an International Shopping Plaza, No.73, Zhongyang Street, Daoli District, Harbin, Heilongjiang Province <br>흑룡강성 하얼빈시 도리구', 'MON - SUN 09:30 - 21:00'],
    ['杭州湖滨银泰in77 <br>(Hubin Yintai in77 Hangzhou City, 항저우 호빈인타이 in77)', '浙江省杭州市上城区延安路245号湖滨银泰in77 B馆B1-183号<br>B1-183, Building B, Hubin Yintai in77, No.245, Yan an Road, Shangcheng District, Hangzhou City, Zhejiang Province <br>절강성 항주시 상성구', 'MON - SUN 10:00 - 22:00'],

    ['凯德广场学府商场 <br>(Xuefu CapitaLand Plaza Harbin City, 하얼빈 카이더광장 쇼핑몰)', '黑龙江省哈尔滨市南岗区学府路1号学府凯德广场1层01-78<br>01-78, 1st Floor, Xuefu CapitaLand Plaza, No.1 Xuefu Road, Nangang District, Harbin City, Heilongjiang Province <br>흑룡강성 하얼빈시 남강구', 'MON - SUN 09:30 - 21:30'],
    ['天津大悦城 <br>(Nankai Joy City Tianjin, 천진 조이시티)', '天津市南开区南门外大街2-6号南开大悦城购物中心2F-51号<br>2F-51, Nankai Joy City Shopping Center, 2-6 Nanmenwai Street, Nankai District, Tianjin <br>천진시 남개구', 'MON - SUN 10:00 - 22:00'],
    ['青岛凯德新都心 <br>(CapitaLand Plaza Qingdao City, 청도 카이더몰 신도심)', '山东省青岛市市北区黑龙江南路16-18号凯德广场1层-20号<br>No.20, 1st Floor, CapitaLand Plaza, 16-18 Heilongjiang South Road, Shibei District, Qingdao City, Shandong Province <br>산동성 청도시 시북구', 'MON - THU 10:00 - 22:00<br>FRI - SUN 09:30 - 22:00'],
    ['大连开发区安盛 <br>(Ansheng Shopping Plaza Dalian City, 대련 개발구 안성쇼핑플라자)', '辽宁省大连市开发区金马路189号安盛购物广场1层-KF1013号<br>KF1013, 1st Floor, Ansheng Shopping Plaza, No.189 Jinma Road, Development Zone, Dalian City, Liaoning Province <br>요녕성 대련시 개발구', 'MON - SUN 09:00 - 21:00'],
    ['苏州印象城 <br>(Incity City Suzhou, 쑤저우 인상청 쇼핑몰)', '江苏省苏州市工业园区现代大道1699号印象城1层-03B号<br>No.03B, 1st Floor, Incity City, 1699 Modern Avenue, Suzhou Industrial Park, Jiangsu Province <br>강소성 소주시 공업원구', 'MON - SUN 10:00 - 22:00'],
    ['龙湖北京长楹天街 <br>(Changyingtian Street, Beijing City, 베이징룽후장영천가) ', '北京市朝阳区常营乡长楹天街东区1层-15号<br>No.15, 1st Floor, East District, Changyingtian Street, Changying Township, Chaoyang District, Beijing <br>북경시 조양구', 'MON - SUN 10:00 - 22:00'],
    ['宁波来福士 <br>(Raffles City Ningbo City, 닝보 래플즈시티)', '浙江省宁波市江北区大庆南路99号来福士广场一层26号<br>No. 26, 1st Floor, Raffles City, 99 Daqing South Road, Jiangbei District, Ningbo City, Zhejiang Province <br>절강성 닝보시 강북구', 'MON - SUN 10:00 - 22:00'],
    ['上海新天地 <br>(Xingye Road Shanghai City, 상하이 신천지)', '上海市黄浦区兴业路123弄6号3层03单元<br>Unit 03, 3rd Floor, No.6, Lane 123, Xingye Road, Huangpu District, Shanghai <br>상해시 황포구', 'MON - SUN 10:00 - 22:00'],
    ['重庆龙湖时代天街 <br>(Longhu Paradise Walk Chongqing City, 충칭룽후시대천가)', '重庆市渝中区时代天街3号龙湖时代天街C馆-L1-04<br>L1-04, Building C, Longhu Paradise Walk, No.3 Shidaitian Street, Yuzhong District, Chongqing <br>중경시 유중구', 'MON - SUN 10:00 - 22:00'],
    ['上海环贸iapm <br>(Shanghai City iapm Plaza, 상하이환마오iapm 쇼핑몰)', '上海市徐汇区淮海中路999号上海环贸广场LG2层252室<br>Room 252, LG2, Shanghai iapm Plaza, 999 Huaihai Middle Road, Xuhui District, Shanghai <br>상해시 서회구', 'MON - SUN 10:00 - 22:00'],
    ['成都万象城店 <br>(Chengdu City Mixc, 청두완샹청)', '四川省成都市成华区双成二路98号成都万象城D馆L2层D-205<br>D-205, L2 Floor, Building D, Chengdu Mixc, No.98, Shuangcheng 2nd Road, Chenghua District, Chengdu <br>사천성 성도시 성화구', 'MON - THU 10:00 - 22:00<br>FRI - SUN 10:00 - 22:30'],
    ['成都晶融汇 <br>(Jingronghui Shopping Center Chengdu City, 청두 정융회 쇼핑몰)', '四川省成都市锦江区东大街99号晶融汇购物中心一期1层101-02B<br>101-02B, 1st Floor, Phase 1, Jingronghui Shopping Center, 99 East Street, Jinjiang District, Chengdu City, Sichuan Province <br>사천성 성도시 금강구', 'MON - SUN 10:00 - 22:00'],

    ['鞍山大悦城 <br>(Joy City Anshan City, 안산 조이시티) ', '辽宁省鞍山市立山区胜利北路302号大悦城1层-108号<br>No.108, 1st Floor, Joy City, No.302 Shengli North Road, Lishan District, Anshan City, Liaoning Province <br>요녕성 안산시 입산구', 'MON - SUN 10:00 - 21:00'],
    ['龙湖重庆金沙天街<br> (Longhu Jinshatian Street Chongqing City, 충칭룽후금사천가)', '重庆市沙坪坝区北站东路188号附3号龙湖重庆金沙天街B馆-2F-42号<br>2F-42, Building B, Longhu Jinshatian Street, No.188, Beizhan East Road, Shapingba District, Chongqing <br>중경시 사평패구', 'MON - SUN 10:00 - 22:00'],
    ['柏威年购物中心<br> (Pavilion Shopping Center Dalian City, 대련 파빌리온 백화점)', '辽宁省大连市中山区中山路129号柏威年购物中心二层L2039号<br>L2039, 2nd Floor, Pavilion Shopping Center, No.129 Zhongshan Road, Zhongshan District, Dalian City, Liaoning Province <br>요녕성 대련시 중산구', 'MON - SUN 09:30 - 21:30'],
    ['济南万象城 <br>(Jingshi Road Jinan City, 지난 완샹청)', '山东省济南市历下区经十路11111号万象城4层-L442号<br>L442, 4th Floor, Mixc, No.11111, Jingshi Road, Lixia District, Jinan City, Shandong Province<br>산동성 제남시 역하구', 'MON - SUN 10:00 - 20:00']
  ];

  var ov_length = overseas_locations.length
  for (var i = 0; i < ov_length; i++) {
    $('#overseas').append("<ul class='shop_wrap'>" + "<li class='shop_img_box'><img src='images/overseas/" + i + ".jpg' alt='해외 매장'><span>" + overseas_locations[i][0] + "</span></li><li class='market_name'>" + overseas_locations[i][0] +
      "</li><li class='market_address'>" + overseas_locations[i][1] +
      "</li><li class='market_call'>" + overseas_locations[i][2] + "</li></ul>");

  } /////////// for i /////////////

}); ///////////////// JQB //////////////////////


function initMap() { /// 지도 보여주는 함수 //////////////////
  // 지도 깔기
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 38.549012,
      lng: 128.948546
    },
    zoom: 4.7
  });

  var total_locations = [
    ['청담 SHOW ROOM', 37.52445302234015, 127.04235101146038, '+82(0)2-512-7894', 'MON - SUN 11:00 - 20:00'],
    ['롯데백화점 본점 7F', 37.56517737513197, 126.98135826913165, '+82(0)2-772-3765', 'MON - THU 10:30 - 20:00', "FRI - SUN 10:30 - 20:30"],
    ['롯데백화점 부산 본점 7F', 35.15805565894189, 129.05633932576913, '+82(0)51-810-3776','MON - THU 10:30 - 20:00 <br> FRI - SUN 10:30 - 20:30'],
    ['롯데면세점 소공본점 9F', 37.56838171939088, 126.98145874519447, '+82-2-759-6732', 'MON - SUN 09:30 - 21:00'],
    ['신세계면세점 소공본점 9F', 37.5675942370541, 126.98081235595221, '02-6370-4347', 'MON - SUN 09:00 - 20:30'],
    ['현대면세점 동대문점 9F', 37.574316222499945, 127.00714131884084, '02-3668-8182', 'MON - SUN 10:30 - 23:00'],
    ['신라면세점 장충점 B1F', 37.56379012389607, 127.00743001769042, '02-2230-5940', 'MON - SUN 09:00 - 20:30'],
    ['HDC 신라면세점 6F', 37.533805476259275, 126.96210429830533, '02-490-3662', 'SAT.SUN OFF', 'MON - FRI 09:00 - 17:30'],
    ['신세계면세점 강남점 1F', 37.50816018344751, 127.00569782459291, '02-6288-0688', 'MON - SUN 09:00 - 20:30'],
    ['현대면세점 무역센터점 10F', 37.511824336360164, 127.06055060601436, '02-2142-6448', 'MON - SUN 09:00 - 20:30'],
    ['롯데면세점 부산점 8F', 35.157004336948226, 129.0563537381173, '+82-51-810-2840', 'MONDAY OFF', 'TUE - THU 09:30 - 20:00', 'FRI - SUN 09:30 - 20:30'],
    ['롯데면세점 제주점 3F', 33.49224645486054, 126.4858253298167, '+82-64-793-3134', 'SAT.SUN.HOLIDAY OFF', 'MON - FRI 09:30 - 19:00'],
    ['신라면세점 제주점 2F', 33.48771968527164, 126.48793167756556, '064-710-7314', 'SAT.SUN.HOLIDAY OFF', 'MON - FRI 14:00 - 18:00'],
    ['현대면세점 인천공항점 T1', 37.44892931413578, 126.45125718476869, '032-743-8324', 'MON - SUN 06:30 - 21:30'],
    ['스타필드 하남점 3F', 37.545819394951266, 127.22410036735336, '031-8072-1665', 'MON - THU 11:00 - 20:00', 'FRI - SUN 11:00 - 21:00'],
    ['신세계백화점 대구점 6F', 35.87821274787284, 128.6284553808968, '053-661-6670', 'MON - THU 11:00 - 20:00', "FRI - SUN 11:00 - 20:30"],

    ['沈阳恒隆广场', 41.80257192817375, 123.43423762689346, 'SUMMER 10:00 - 21:30', 'WINTER 10:00 - 22:00'],
    ['哈西万达广场', 45.701972851804015, 126.59425789630477, 'MON - SUN 09:30 - 21:30'],
    ['长春红旗街万达', 43.86625809087052, 125.29593618461192, 'MON - SUN 09:30 - 22:00'],
    ['太原街万达广场', 41.790975959940035, 123.39853944038778, 'MON - THU 09:30 - 21:30', "FRI - SUN 09:30 - 20:00"],
    /* ['大连开发区万达', 39.069446638550104, 121.83586822408596, '09:30 - 21:30'], */
    ['沈阳全运路万达广场店', 41.68468167872142, 123.45394934223168, 'MON - THU 10:00 - 21:30', "FRI - SUN 10:00 - 20:00"],
    ['沈阳大悦城', 41.80305653268377, 123.47159199626616, 'MON - SUN 10:00 - 21:30'],
    ['哈尔滨红博中央公园', 45.75897156040499, 126.64358408430776, 'MON - SUN 09:30 - 21:00'],
    /* ['大连东港威尼斯水城', 38.92659932612846, 121.6854046537263], */
    ['盘锦双兴南路万达广场店', 41.106164, 122.083683, 'MON - SUN 09:30 - 21:30'],
    ['哈尔滨金安国际购物广场', 46.24306090963639, 126.78115319543326, 'MON - SUN 09:30 - 21:00'],
    ['杭州湖滨银泰in77', 30.252388407439796, 120.16439399783297, 'MON - SUN 10:00 - 22:00'],

    ['凯德广场学府商场', 45.72133717611019, 126.6099074404811, 'MON - SUN 09:30 - 21:30'],
    ['天津大悦城', 39.134587639630645, 117.17983218450514, 'MON - SUN 10:00 - 22:00'],
    ['青岛凯德新都心', 36.12230102849811, 120.4044151322488, 'MON - THU 10:00 - 22:00', "FRI - SUN 09:30 - 22:00"],
    ['大连开发区安盛', 39.15587203607407, 121.76265407255893, 'MON - SUN 09:00 - 21:00'],
    ['苏州印象城', 31.318685538929778, 120.65735895552088, 'MON - SUN 10:00 - 22:00'],
    ['龙湖北京长楹天街 ', 39.92541585582887, 116.59964940875881, 'MON - SUN 10:00 - 22:00'],
    ['宁波来福士', 29.882967186628512, 121.55762219908702, 'MON - SUN 10:00 - 22:00'],
    ['上海新天地', 31.216590671133925, 121.47509555720748, 'MON - SUN 10:00 - 22:00'],
    ['重庆龙湖时代天街', 29.537298285488646, 106.51272488744954, 'MON - SUN 10:00 - 22:00'],
    ['上海环贸 iapm', 31.215969407570533, 121.45819839530789, 'MON - SUN 10:00 - 22:00'],
    ['成都万象城店', 30.646402509936806, 104.1159138959931, 'MON - THU 10:00 - 22:00', "FRI - SUN 10:00 - 22:30"],
    ['成都晶融汇', 30.65176854701062, 104.08124300181723, 'MON - SUN 10:00 - 22:00'],

    ['鞍山大悦城 ', 41.119581875837696, 122.97881654037246, 'MON - SUN 10:00 - 21:00'],
    ['龙湖重庆金沙天街', 29.554817608082317, 106.46199982822188, 'MON - SUN 10:00 - 22:00'],
    ['柏威年购物中心', 38.91796830198916, 121.62706291779756, 'MON - SUN 09:30 - 21:30'],
    ['济南万象城', 36.665342938715185, 117.07678239959624, 'MON - SUN 10:00 - 20:00'],
    ['Melbourne QV', -37.81038616887185, 144.965640298223, 'COMING SOON']
  ];


  var infowindow = new google.maps.InfoWindow();

  // 마커 이미지 변경
  var myIcon = new google.maps.MarkerImage('./images/marker.png');

  var marker, i, k;
  for (i = 0; i < total_locations.length; i++) {
    // 마커 for 문으로 생성
    marker = new google.maps.Marker({
      id: i,
      position: new google.maps.LatLng(total_locations[i][1], total_locations[i][2]),
      map: map,
      icon: myIcon,
    })



    // 마커 클릭 이벤트 
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent("<div class='title'>" + total_locations[i][0] +
          "</div><div class='call_info'>" + total_locations[i][3] +
          "</div><div class='open_close_info'>" + total_locations[i][4] +
          "</div><div class='open_close_info'>" + total_locations[i][5] +
          "</div><div class='open_close_info'>" + total_locations[i][6] + "</div>");
        infowindow.open(map, marker);
      }
    })(marker, i));
    if (marker) {
      marker.addListener('click', function () {
        map.setZoom(15);
        map.setCenter(this.getPosition());
      });
    }


    // console.log("위치"+[i]+" : "+ total_locations[i].length)
    //이중포문
    // for (k = 0; k < total_locations[i].length; k++) {
    // console.log("total_locations[i][k]"+total_locations[i][k])

    //오픈/클로즈 정보 마지막 줄 내용 없으면 공백
    if (total_locations[i][4] == undefined) {
      total_locations[i][4] = ''
    } /////////// if 문 ////////

    if (total_locations[i][5] == undefined) {
      total_locations[i][5] = ''
    } /////////// if 문 ////////

    if (total_locations[i][6] == undefined) {
      total_locations[i][6] = ''
    } /////////// if 문 ////////

  } /////////// for문 ////////


} //////////// 지도 function /////////////////////////////////////////////



function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}