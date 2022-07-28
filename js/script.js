/*#gnb>li에 mouseover하면 그것의 children인 요소 .news-menu 토글 */

        $(document).ready(function() { //document가 ready되면
            if(window.innerWidth>1023){ // innerWidth가 1023보다 크다면
                $("#gnb>li").mouseover(function() {
                    $(this).children(".news-menu").stop().slideDown();
                });
                $("#gnb>li").mouseleave(function() {
                    $(this).children(".news-menu").stop().slideUp();
                });
            }else{ //그게 아니라면
                $("#gnb>li").click(function() {
                    $(this).children(".news-menu").stop().slideToggle();
                });
            }
        });


        if(window.innerWidth<1023 && window.innerWidth>768){
            $(window).on("scroll",function(){
                if($(window).scrollTop()>600){
                    $('header').addClass('navfixed');
                }else if($(window).scrollTop()<1){
                    $('header').removeClass('navfixed');
                }
            });
        }else if(window.innerWidth<767){
            $(window).on("scroll",function(){
                if($(window).scrollTop()>400){
                    $('header').addClass('navfixed');
                }else if($(window).scrollTop()<1){
                    $('header').removeClass('navfixed');
                }
            });
        }


/*마우스가 움직이는 만큼 이미지가 움직임 */

        var currentX = '';
        var currentY = '';
        var movementConstant = 0.015;
        
            $(document).mousemove(function(e) {
                if (currentX == '') currentX = e.pageX;
            var xdiff = e.pageX - currentX;
            currentX = e.pageX;
                if (currentY == '') currentY = e.pageY;
            var ydiff = e.pageY - currentY;
            currentY = e.pageY;
                $('.parallax>div').each(function(i, el) {
                    var movement = (i + 1) * (xdiff * movementConstant);
                    var movementy = (i + 1) * (ydiff * movementConstant);
                    var newX = $(el).position().left + movement;
                    var newY = $(el).position().top + movementy;
                $(el).css('left', newX + 'px');
                $(el).css('top', newY + 'px');
        });
    });


/*작은 이미지를 클릭하면 큰이미지가 보임 */
        $(function(){
            var smallImg=$('#button>label'); //작은이미지
            var bigImg=$('.champ .par>img'); //큰이미지
            
            smallImg.click(function(){

                var path=$(this).attr('href');
                bigImg.attr('src',path);
                bigImg.css('opacity','0').stop().animate({'opacity':'1'},500);

            });
        });


/*스킨이미지가 2초마다 자동으로 바뀜 */

    var now_text;
    var last_text;

    window.onload = function(){
        setInterval("text_ch()",2000);
    }
    function text_ch(){
        now_text =$('.skin_area>li').eq(0);
        last_text =$('.skin_area>li').eq(-1);

        last_text.addClass("z-idx").stop().animate({},1000, function(){
            $(".skin_area").prepend(last_text);
            now_text.removeClass("z-idx");
        });

    }


/* 탭에서 선택을 하면 비디오가 바뀜 */

$(function(){
    var tab=$('#tab>ul>li');
    var content=$('.act-video>li');

    tab.on('click',function(){
        var tg=$(this);
        var tc=tg.find('>a'); //.find 부모요소를 끌고들어와 하위요소 찾기
        tab.find('>a').removeClass('on');
        tc.addClass('on');
        
        i=tg.index();
        console.log(i);
        content.css('display','none');
        content.eq(i).css('display','block');
    });
});

    AOS.init({
    disable: function() {
        var maxWidth = 767;
        return window.innerWidth < maxWidth;
    }
    });

    /*.allMenu_menu 클릭했을때 네비게이션 항목들*/
    $('.hamburger').click(function(){ //메뉴버튼 클릭시
                $('nav').toggleClass('open'); //.gnb 슬라이드토글

                if($('nav').hasClass('open')){
                    $('nav').animate({right:'0px'},500);
                }else{
                    $('nav').animate({right:'-80%'},100);
                }
        });

        /*햄버거 메뉴 클릭 시 햄버거가 X 모양으로 변경*/
        const menuTrigger = document.querySelector('.hamburger');

        menuTrigger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active-1');
        });
