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
});