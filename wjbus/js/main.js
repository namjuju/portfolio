
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { 
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        loop: true,  
        pagination: {  
            el: '.visual .paging', 
            clickable: true, 
            renderBullet: function (index, className) {  
                return '<strong class="' + className + ' page'+(index+1)+'"><span></span></strong>';
            },
        },
    });
    
    $('.visual .ctrl button.stop').on('click', function(){
        $(this).hide()
        $('.visual .ctrl button.play').show()
        visual_swiper.autoplay.stop();
    })
    $('.visual .ctrl button.play').on('click', function(){
        $(this).hide()
        $('.visual .ctrl button.stop').show()
        visual_swiper.autoplay.start();
    })

    const swiper = new Swiper('.news .swiper', {
	slidesPerView: "1", 
	spaceBetween: 16,
	breakpoints: {
        450: {  
            slidesPerView: "2"
        },
		768: {  
            slidesPerView: "3"
		},
		1024: { 
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

    AOS.init({
        offset: 50, 
        duration: 300, 
        easing: 'ease', 
    });

})