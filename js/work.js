$(function () {
	$(".next-project_box").slick({
		infinite: true,
  		speed: 300,
  		slidesToShow: 3,
  		arrows: true,
  		responsive: [
	      {
	        breakpoint: 1025,
	        settings: {
	        slidesToShow: 2,
	        },
	      },
	      {
	        breakpoint: 577,
	        settings: {
	          slidesToShow: 1,
	          arrows: false,
            infinite: false,
	        },
	      },
	    ],
	});
});

$(function () {
  // navカレント表示
  var set = 200; //ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array();
  var current = -1;
  //各要素の位置
  //position-nowは場所を取得したい対象の要素に付ける
  $(".position-now").each(function (i) {
    boxTop[i] = $(this).offset().top;
  });
  //最初の要素にclass="position-now"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    }
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
      $(".header nav ul li a").removeClass("link-current");

      //位置によって個別に処理をしたい場合
      if (current == 0) {
        $("#home_link_js").addClass("link-current");
        // 現在地がsection1の場合の処理
      } else if (current == 1) {
        $("#work_link_js").addClass("link-current");
        // 現在地がsection2の場合の処理
      }
    }
  }
});

$(function () {
  // スムーススクロール
  $('a[href^="#"]').click(function () {
    let header = $(".header").innerHeight();
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed
    );
    return false;
  });
});