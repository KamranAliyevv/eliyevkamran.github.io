// let select_arrow=$(".arrow");
// let select=$(".langs");
// $(select_arrow).on("click",function(){
//     $(select).click();
//     console.log(1)
// })



// Product-Carousel
let carousel=$(".similar-products-carousel");
let carousel_item=carousel.find(".carousel-product");
let left_arrow=$(".arrow-left");
let right_arrow=$(".arrow-right");
let outer_width=carousel_item.outerWidth();
let margin=carousel_item.css("margin-right")+"";
margin=margin.slice(0,margin.length-2);
let child_witdh=+margin+outer_width;
let scroll=0;
let maxScroll=$(carousel).parent().outerWidth();
$(right_arrow).click(function(){
    scroll-=child_witdh;
    if(scroll<=-1110){
        scroll=0;
    }
    carousel.css("transform","translateX("+scroll+"px)");
    console.log(scroll+"-->"+maxScroll);
})
$(left_arrow).click(function(){
    scroll+=child_witdh;
    if(scroll>=0){
        scroll=-1100;
    }
    carousel.css("transform","translateX("+scroll+"px)");
    console.log(scroll+"-->"+maxScroll)
})