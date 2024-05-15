$(document).ready(function(){
    const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

		mousewheel: true,
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 0, /* 팝업과 팝업 사이 여백 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
		

		navigation: {  /* 이전, 다음 버튼 */
			nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
			prevEl: '.swiper-button-prev',  
		},

		on: {
			slideChange: function(){
				$('header ul li').removeClass('on')
				$('header ul li').eq(this.realIndex).addClass('on')
			}
		}

	});

	$('header ul li').on('click', function(){
		//console.log($(this).index())
		swiper.slideTo($(this).index())
		$('header ul li').removeClass('on')
		$(this).addClass('on')
	})
	$('.home .visual .scroll a').on('click', function(){
		swiper.slideTo($(this).index())

	})

})