$(function(){
    /* 헤더 fixed */

    var hd = $('header'),
        win = $(window);

    win.scroll(function(){
        win = $(this);
        win_top = win.scrollTop();

        if(win_top > 0){
            hd.addClass('on');
        }else{
            hd.removeClass('on');
        };
    });    


    /* 메뉴 클릭, 마우스엔터 */

    var mq = window.matchMedia('(max-width:1024px)'),
        lia = $('.gnb > li > a');
        
    mediaqueryresponse(mq);
    mq.addListener(mediaqueryresponse);

    function navClick (){
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    }
    function navEnter() {
        $('.sub_wrap:not(:animated)').slideUp(300);
        $(this).next().stop().slideDown(300);
        $(this).parent().siblings().removeClass('open');
        $(this).parent().addClass('open');
        
    }
    function navLeave(){
        $(this).find('.sub_wrap').stop().slideUp(300);
        $(this).children().removeClass('open');
    }

    function mediaqueryresponse(mq){
        
        
        if (mq.matches) {
            lia.off().on('click',navClick);
            
        } else {
            lia.on('mouseenter',navEnter);
            $('.gnb').on('mouseleave',navLeave);

        };
        
    };
    
    /* 메뉴 햄버거버튼 클릭 */

    $('.btn_nav').click(function(){
        $(this).toggleClass('on');
        $('#navWrap').toggleClass('on');
        
    });
    
    
    /* 메뉴 햄버거버튼 클릭 */
    $('.sch_wrap .sch_on').click(function(){
        $('.sch_form').show();
    });
    $('.sch_wrap .sch_off').click(function(){
        $('.sch_form').hide();
    });

    /* story 슬라이더 */
    $('#story .story_slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:500,
        arrows:true, 
        dots:true,
        appendDots:$('.indicator'),  
        dotsClass:'dots',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive:[
                    {
                        breakpoint:1600, 
                        settings:{
                            arrows:true 
                        }
                    },
                    {
                        breakpoint:1300, 
                        settings:{
                            slidesToShow:2,
                            arrows:false 
                        }
                    },
                    {
                        breakpoint:768,
                        settings:{
                            slidesToShow:1,
                            arrows:false
                        }
                    },
                    {
                        breakpoint:375,
                        settings: {
                            slidesToShow: 1,
                            arrows:false,
                            pauseOnHover:false
                        }
                    }
            
                ]
        });
        
        $('.btn_pause').on('click', function(){
            var $this = $(this),
                si = $('.story_slider');
    
            if ( $this.hasClass('on') ) {
                $this.removeClass('on').text('재생');
                si.slick('slickPause');
            }else {
                $this.addClass('on').text('정지');
                si.slick('slickPlay');
            }
        });

        $('#story .prev').click(function(){
            si.slick('slickNext');
        });
        $('#story .next').click(function(){
            si.slick('slickNext');
        });
   
});
