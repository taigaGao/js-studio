$(function(){
    //⑤コンテンツがスクロール時に浮き上がってくる仕様
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

    //②ハンバーガーメニューの実装
    $('#snav-bar').click(function() {
        if ($('.snav-bar-menu').css('display') == 'block') {
            $('.snav-bar-menu').slideUp()
        } else {
            $('.snav-bar-menu').slideDown()
        }
    });
        //メニュー表示時にメニュー外をクリックした時にメニューを非表示にする
    $('#snav-bar').click(function() {　event.stopPropagation();　});
    $(document).click(function() {
        if ($('.snav-bar-menu').css('display') == 'block') {
            $('.snav-bar-menu').slideUp()
        }
        
    });

    //②ページ内リンク(Q&Aはページ最下部までへのジャンプ)
    $('header a').click(function(){
        var id = $(this).attr('href');
        if (id === '#Q&A') {
            $('html, body').animate({
                scrollTop: $(document).height()
            },500);
        } else {
            var position = $(id).offset().top;
            $('html,body').animate({ 
                'scrollTop': position 
                }, 500);
        }
    });

     //トップ画像のスライド
    // $('.bg-slider').bgSwitcher({
    //     images: ['../img/top1.png','../img/top2.png','../img/top3.png'], // 切替背景画像を指定
	//     interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    //     loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    //     shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    //     effect: "blind", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    //     duration: 500, // エフェクトの時間を指定します。
    //     easing: "swing" // エフェクトのイージングをlinear,swingから指定
    // });
});