let index = 0;

const totalWorkItems = $(".work-item").length;

$(document).ready(function(){
$(window).on("load", function(){
$(".preloader").addClass("loaded");

})
    
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height", wHeight+"px");
    
    $(".work-item-inner").click(function(){
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass(".open");
        lightboxSlideShow();
    })

    $(".lightbox .prev").click(function(){
        if (index == 0) {
            index = totalWorkItems -1;
        }else{
            index --;
        }
        lightboxSlideShow();
    })
    $(".lightbox .next").click(function(){
        if (index == totalWorkItem -1) {
            index = 0
        }else{
            index++
        }
        lightboxSlideShow();
    })
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })

    $(".lightbox").click(function(event){
        if ($(event.target).hasClass(".lightbox")) {
            $(this).removeClass("open")
        }
    })

    function lightboxSlideShow(){
        const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
        const category = $(".work-item").eq(index).find("h4").html();
        $(".lightbox-img").attr("src",imgSrc);
        $(".lightbox-category").html(category);
        $(".lightbox-counter").html(totalWorkItem+"/"+(index+1)); 
    }

})

