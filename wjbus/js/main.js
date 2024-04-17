
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<strong class="' + className + ' page'+(index+1)+'"><span></span></strong>';
            },
        },
    });
    
    $('.visual .ctrl button.stop').on('click', function(){
        $(this).hide()
        $('.visual .ctrl button.play').show()
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual .ctrl button.play').on('click', function(){
        $(this).hide()
        $('.visual .ctrl button.stop').show()
        visual_swiper.autoplay.start();  /* 재생 기능 */
    })

    $('.work .inner .work_tit ul li').on('mouseenter', function(){
        $('.work .inner .work_tit ul li').removeClass('on')
        $(this).addClass('on')
    })

    const swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: "4", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
	spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
	breakpoints: {
        320: {  
            slidesPerView: "1"
        },
        375: {  
            slidesPerView: "1.2"
        },
        550: {  
            slidesPerView: "2"
        },
		768: {  
            slidesPerView: "2.5"
		},
		1024: { 
            slidesPerView: "3.5"
		},
        1280: { 
            slidesPerView: "4"
		},
	},
        navigation: {
            nextEl: '.news .next',
            prevEl: '.news .prev',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },

    });


    $('.quick .quick_btn ul li').on('mouseenter', function(){
        $('.quick .quick_btn ul li').removeClass('active')
        $(this).addClass('active')
    });

    AOS.init({
        offset: 50, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 300, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

})//$(document).ready