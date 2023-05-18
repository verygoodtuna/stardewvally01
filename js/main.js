$(function(){
    $('.main_slide').slick({
        arrows: false,
        //fade: true,
        //vertical: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $ ('.main_visual .dots li').on('mouseenter', function(){
        //내가 클릭한 번호를 요소의 번호를 알려줘
        let idx = $(this).index(); 
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, false);
    });

    $('.main_visual .arrows .left').on('click', function(){
    //click, mouseenter 많이 쓰임
    $('.main_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .right').on('click', function(){
        //click, mouseenter 많이 쓰임
        $('.main_slide').slick('slickNext');
    
    });
})