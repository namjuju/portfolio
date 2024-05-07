$(document).ready(function(){

     let device_status
     let window_w
     function device_chk(){
         window_w = $(window).width()
         if(window_w > 1024){ 
             device_status = 'pc'
         }else{ 
             device_status = 'mobile'
         }
         console.log(device_status)
     }
     device_chk()
     $(window).resize(function(){
         device_chk()
     })
 
     $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
         if(device_status == 'pc'){
             $('header .gnb .depth1 > li').removeClass('on')
             $(this).addClass('on')
             $('header').addClass('menu_over')
         }
     })
     $('header').on('mouseleave', function(){
         if(device_status == 'pc'){
             $('header .gnb .depth1 > li').removeClass('on')
             $('header').removeClass('menu_over')
         }
     })
     $('header .gnb .depth1 > li:last-child > .depth2 > li:last-child > a').on('focusout', function(){
         if(device_status == 'pc'){
             $('header .gnb .depth1 > li').removeClass('on')
             $('header').removeClass('menu_over')
         }
     })

    $("header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('on')
        }
    });
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })


    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 6000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },

        on: {
            slideChange: function(){
                $('.visual	.visual_btn .ctrl_btn .circle_wrap').attr('data-slide', 'slide'+this.realIndex)
            }
        },        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },
    });
    $('.visual .ctrl_btn button.stop').on('click', function(){
        $(this).hide()
        $('.visual .visual_btn .ctrl_btn button.play').show()
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual .ctrl_btn button.play').on('click', function(){
        $(this).hide()
        $('.visual .visual_btn .ctrl_btn button.stop').show()
        visual_swiper.autoplay.start();  /* 재생 기능 */
    })



    $('.event .depth3 > li').on('click', function(){
        $('.event .depth3 > li').removeClass('active')
        $(this).addClass('active')
    })
    const event_swiper = new Swiper('.event .swiper1', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {
                slidesPerView: '4', /* 사이즈제한 */
                spaceBetween: 27,
            },
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.event .swiper1 + .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });
    const event_swiper2 = new Swiper('.event .swiper2', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {
                slidesPerView: '4', /* 사이즈제한 */
                spaceBetween: 27,
            },
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.event .swiper2 + .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });
    const event_swiper3 = new Swiper('.event .swiper3', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {
                slidesPerView: '4', /* 사이즈제한 */
                spaceBetween: 27,
            },
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.event .swiper3 + .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

    const discount_swiper = new Swiper('.discount .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            1024: {  /* 1024px 이상이 되면 적용 */
                slidesPerView: "8", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: '.discount .next',
            prevEl: '.discount .prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.discount .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

 })//$(document).ready