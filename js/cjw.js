$(function(){
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
        $('.gnb > li > a').click(function(){
            $(this).parent().siblings().removeClass('open')
            $(this).parent().toggleClass('open')
        })
        $('.btn_nav').click(function(){
            $(this).toggleClass('on');
            $('#navWrap').toggleClass('on');
            $('body').toggleClass('no-scroll');
        });
        $('.sch_wrap .sch_on').click(function(){
            $('.sch_form').show();
        });
        $('.sch_wrap .sch_off').click(function(){
            $('.sch_form').hide();
        });



        // var swiper = new Swiper('#story', {
        //     slidesPerView:3,
        //     spaceBetween:56,
        //     speed:500,
        //     loop:true,
        //     autoplay: {
        //         delay: 3000,
        //         disableOnInteraction:false,
        //     },
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        
        //     },
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
  
        //     breakpoints: {
        //         1276: {
        //             slidesPerView:2,
        //             spaceBetween:17,
        //         },
        //         768: {
        //             slidesPerView:2,
        //             spaceBetween:6,
        //         },
        //         375: {
        //             slidesPerView:1,
        //             spaceBetween:32,
        //         }
        //     }
          
        //   });
        //   $('.btn_pause').on('click', function(){
        //         var $this = $(this);
        
        //         if ( $this.hasClass('on') ) {
        //             $this.removeClass('on').text('재생');
        //             swiper.autoplay.start();
        //         }else {
        //             $this.addClass('on').text('정지');
        //             swiper.autoplay.stop();
        //         }
        //     });
    // $('#story .story_inner').slick({
    //     slidesToShow:3,
    //     slidesToScroll:1,
    //     autoplay:true,
    //     autoplaySpeed:3000,
    //     speed:500,
    //     arrows:true, 
    //     dots:true,
    //     prevArrow:"<button class='prev'>이전</button>",    
    //     nextArrow:"<button class='next'>다음</button>",    
    //     responsive:[
	// 				{
	// 					breakpoint:1276, 
	// 					settings:{
	// 						slidesToShow:2,
    //                         arrows:false 
	// 					}
	// 				},
    //                 {
	// 					breakpoint:768,
	// 					settings:{
    //                         slidesToShow:1,
    //                         arrows:false
	// 					}
	// 				},
    //                 {
    //                     breakpoint:375,
    //                     settings: {
    //                         slidesToShow: 1,
    //                         arrows:false,
    //                         pauseOnHover:false
    //                     }
    //                 }
            
	// 			]
    // });

    
    // $('.btn_pause').on('click', function(){
    //     var $this = $(this),
    //         si = $('.story_inner');

    //     if ( $this.hasClass('on') ) {
    //         $this.removeClass('on').text('재생');
    //         si.slick('slickPause');
    //     }else {
    //         $this.addClass('on').text('정지');
    //         si.slick('slickPlay');
    //     }
    // });
   
});
