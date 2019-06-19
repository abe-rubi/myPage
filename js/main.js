$(function(){

// 左側サブメニューのアコーディオン
$('.left-header').click(function(){
  $('.li1').toggleClass("open").slideToggle();

  if($('.li1').hasClass('open')){
    $('.left-header').find('span').text('▼')
  }else{
    $('.left-header').find('span').text('▲')
  }
});

// 右側インデックスのアコーディオン
$('.right-header').click(function(){
  $('.li-r').toggleClass('open').slideToggle();

  if($('.li-r').hasClass('open')){
    $('.right-header').find('span').text('▼');
  }else{
    $('.right-header').find('span').text('▲')
  }
});

// // 中央スライドショー
$('.li-r').click(function(){
  $('.active').removeClass('active');
  var clickIndex=$('.li-r').index($(this));
    //eqメソッド＝jQueryオブジェクトの中から、
    //eqの引数の数字と同じインデックス番号の要素を取得でき
    //<li>は実はオブジェクトのようになって並んでいるのでインデックス番号を持っている
  $('.slide').eq(clickIndex).addClass('active');
})

//スクロールトップ
$('.logo').click(function(){
  $('html, body').animate({
    'scrollTop':0
  },'slow');
});
//ページリロード時にページトップへ
 $('html,body').animate({
    scrollTop: 0
  }, );

//オートスライドショーslick  (今回は使用しない)
// $('.slick1').slick({
//     // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
//     accessibility: true,
//     // 自動再生。trueで自動再生される。
//     autoplay: false,
//     // 自動再生で切り替えをする時間
//     autoplaySpeed: 400,
//     // 自動再生や左右の矢印でスライドするスピード
//     speed: 400,
//     // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
//     pauseOnHover: true,
//     // 自動再生時にドットにマウスオンで一時停止するかどうか
//     pauseOnDotsHover: true,
//     // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
//     cssEase: 'ease',
//
// 		dots: true, // スライダー下部に表示される、ドット状のページネーションです
// 		infinite: true, // 無限ループ
// 		slidesToShow: 1, //通常 1024px以上の領域では1画像表示
// 		slidesToScroll: 1,
//     variableWidth: true, //異なるwidth集かどうか
//     adaptiveHeight: true  //heightに合わせて動かすかどうか


		// responsive: [{      //レスポンシブルデザインに対応させることが可能
		// 	breakpoint: 1024,settings: { //601px～1024pxでは3画像表示
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 	}
		// },
		// {
		// 	breakpoint: 600,settings: { //481px～600pxでは1画像表示
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 	}
		// },
		// {
		// 	breakpoint: 480,settings: {//480px以下では1画像表示
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 	}
		// }]
	// });               //ここまでスライドショー


});
