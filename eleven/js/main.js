$(document).ready(function(){
    let scroll_dir //방향 - 0보다 크면 위로 스크롤
    let scroll_prev //이전 스크롤값
    let scroll_curr //현재 스크롤값
 
     function scroll_chk(){
         scroll_prev = scroll_curr
         scroll_curr = $(window).scrollTop()
         scroll_dir = scroll_prev - scroll_curr
         console.log(scroll_dir)
         if(scroll_curr > 0){
             $('.header').addClass('fixed')
             if(scroll_dir > 0){
                 $('.header').attr('style','transform: translate(0, 0)')
             }else{ 
                 $('.header').attr('style','transform: translate(0, -100px)')
                 $('.header .gnb .depth1 > li').removeClass('on')
                 $('.header').removeClass('menu_over')
             }
         }else{
             $('.header').removeClass('fixed')
             $('.header').attr('style','transform: translate(0, 0)')
         }
     }
     scroll_chk()  //처음 로딩됐을때 1번 실행
     $(window).scroll(function(){ //스크롤 할때마다 1번 실행
         scroll_chk() 
     })
 
  
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .lang').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    $(".header .gnb ul.depth1 > li > a").on("click", function(){
        if($(this).parent().hasClass('sub_open') == true){ 
            console.log('sub_open있음')
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        }else{
            console.log('sub_open없음')
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
    });


    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
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

    $('.icon .icon_inner > ul > li').on('click', function(){
        $('.icon .icon_inner > ul > li').removeClass('active')
        $(this).addClass('active')
    })
    $('.notice .notice_wrap > ul > li').on('click', function(){
        $('.notice .notice_wrap > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    const icon_swiper = new Swiper('.icon .swiper1', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                768: {
                    slidesPerView: 'auto', /* 사이즈제한 */
                    spaceBetween: 0,
                },
            },
            pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.icon .swiper1 + .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

    const icon_swiper2 = new Swiper('.icon .swiper2', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                768: {
                    slidesPerView: 'auto', /* 사이즈제한 */
                    spaceBetween: 0,
                },
            },
            pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.icon .swiper2 + .pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });


    
    AOS.init({
        offset: 50, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 300, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });
    
    let now = new Date();
    let weekday=new Array(7);
    weekday[0]="일";
    weekday[1]="월";
    weekday[2]="화";
    weekday[3]="수";
    weekday[4]="목";
    weekday[5]="금";
    weekday[6]="토";
    let countday
    let dayText
    let today = now.getMonth()+1
    today = today + '/' + now.getDate();
    today = today + '(' + weekday[now.getDay()] + ')'

    $('.schedule .today h3').text(today)


    const schedule_swiper = new Swiper('.schedule .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 6, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {
                slidesPerView: '10', /* 사이즈제한 */
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: '14', /* 사이즈제한 */
                spaceBetween: 10,
            },
        },
    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.schedule .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.schedule .prev',  
    },
    });






    const footer_swiper = new Swiper('.footer .swiper', {
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 10, /* 팝업과 팝업 사이 여백 */
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,
        
        navigation: {
            nextEl: '.footer .next',
            prevEl: '.footer .prev',  
        },
        on : {
            slideChange: function(){
                
            },
        },
    });

    footer_swiper.on('slideChange', function(){
        footer_swiper.update()
    })
    

    $('.footer .ctrl_btn button.stop').on('click', function(){
        $(this).hide()
        $('.footer .ctrl_btn button.play').show()
        footer_swiper.autoplay.stop();
    })
    $('.footer .ctrl_btn button.play').on('click', function(){
        $(this).hide()
        $('.footer .ctrl_btn button.stop').show()
        footer_swiper.autoplay.start();
    })

    $('.footer .top').on('click', function(){
        $('html, boby').animate({
            scrollTop : 0
        },500)
    })

})