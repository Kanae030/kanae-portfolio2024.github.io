const tabMenus = document.querySelectorAll('.tab_menu-item');
  console.log(tabMenus);
 // イベント付加
 tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})
 // イベントの処理
function tabSwitch(e) {

  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;

   // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab_menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab_menu-item');
  console.log(tabItems);

  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab_panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-activated');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-shown');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-activated');

  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-shown');
    }
  })
}

//header_background
$(function () {
  $(window).on('scroll', function () {
      if($(window).scrollTop() > 50) {
          $('header').addClass('change-color');
    } else {
          $('header').removeClass('change-color');
    }
  });
});


//header current position highligt

//基準点の準備
var elemTop = [];

//現在地を取得するための設定を関数でまとめる
function PositionCheck(){

//headerの高さを取得
var headerH = $("#header").outerHeight(true);

//.scroll-pointというクラス名がついたエリアの位置を取得する設定
$(".scroll-point").each(function(i) {//.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
elemTop[i] =Math.round(parseInt($(this).offset().top-headerH));//追従するheader分の高さ（70px）を引き小数点を四捨五入
});
}

//ナビゲーションに現在地のクラスをつけるための設定
function ScrollAnime() {//スクロールした際のナビゲーションの関数にまとめる
var scroll = Math.round($(window).scrollTop());
var NavElem = $("#g-nav li");//ナビゲーションのliの何番目かを定義するための準備
$("#g-nav li").removeClass('current-page');//全てのナビゲーションの現在地クラスを除去
if(scroll >= 0 && scroll < elemTop[1]) {//スクロール値が0以上 .scroll-point 1つめ（area-1）の高さ未満
$(NavElem[0]).addClass('current-page');//1つめのliに現在地クラスを付与
}
else if(scroll >= elemTop[1]) {//.scroll-point 1つめ（area-1）以上
$(NavElem[1]).addClass('current-page');//2つめのliに現在地クラスを付与
}
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-nav a').click(function () {
var elmHash = $(this).attr('href'); //hrefの内容を取得
var headerH = $("#header").outerHeight(true);//追従するheader分の高さを引く
var pos = Math.round($(elmHash).offset().top-headerH); //headerの高さを引き小数点を四捨五入
$('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
return false;//リンクの無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PositionCheck();/* 現在地を取得する関数を呼ぶ*/
ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PositionCheck();/* 現在地を取得する関数を呼ぶ*/
ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

$(window).resize(function() {
//リサイズされたときの処理
PositionCheck()
});
