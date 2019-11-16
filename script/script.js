$(function(){
    //コンテンツがスクロール時に浮き上がってくる仕様(ライブラリの使用)
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

    //ハンバーガーメニューの実装
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

    $('.logo').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    });

     //トップ画像のスライド(背景画像の切り替え)
    // $('.bg-slider').bgSwitcher({
    //     images: ['../img/top1.png','../img/top2.png','../img/top3.png'], // 切替背景画像を指定
	//     interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    //     loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    //     shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    //     effect: "blind", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    //     duration: 500, // エフェクトの時間を指定します。
    //     easing: "swing" // エフェクトのイージングをlinear,swingから指定
    // });

    //トップ画像のスライド(背景画像の切り替え)
    // $('#slide').slide({
    //     interval_normal : 5000,
    // });

    //トップ画像のスライド(時間切り替え)
    setInterval(function(){
        if($('.slide--one').hasClass('active')){
            $('.slide--one').removeClass('active');
            $('.slide--two').addClass('active');
        } else if ($('.slide--two').hasClass('active')){
            $('.slide--two').removeClass('active');
            $('.slide--three').addClass('active');
        } else {
            $('.slide--three').removeClass('active');
            $('.slide--one').addClass('active');
        }
    },5000);
    //トップ画像のスライド(ボタン切り替え)
    $('.index__btn--one').click(function() {
        $(this).parent().parent().removeClass('active');
        $('.slide--one').addClass('active');
    });
    $('.index__btn--two').click(function() {
        $(this).parent().parent().removeClass('active');
        $('.slide--two').addClass('active');
    });
    $('.index__btn--three').click(function() {
        $(this).parent().parent().removeClass('active');
        $('.slide--three').addClass('active');
    });


    $('.angle-icon').click(function() {
        var $answer = $(this).parent().parent().find('.faq__item--ans');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $(this).parent().find('.fa-angle-up').hide();
            $(this).parent().find('.fa-angle-down').show();
            $answer.slideUp();
        } else {
            $answer.addClass('open'); 
            $(this).parent().find('.fa-angle-down').hide();
            $(this).parent().find('.fa-angle-up').show();
            $answer.slideDown();
        }
    });



});