// let select_arrow=$(".arrow");
// let select=$(".langs");
// $(select_arrow).on("click",function(){
//     $(select).click();
//     console.log(1)
// })

// Product-Carousel
let scroll = 0;
$(".carousel-arrow").click(function () {
  let carousel = $(this).parent().find(".carousel");
  let carousel_item = carousel.find(".carousel-item");
  let outer_width = carousel_item.outerWidth();
  let margin = carousel_item.css("margin-right") + "";
  margin = margin.slice(0, margin.length - 2);
  let child_witdh = +margin + outer_width;
  let maxScroll = $(carousel).parent().outerWidth();

  if ($(this).prop("class").includes("arrow-right")) {
    scroll -= child_witdh;
  } else {
    scroll += child_witdh;
  }
  if (scroll <= -1110) {
    scroll = 0;
  } else if (scroll >= 0) {
    scroll = -1100;
  }

  $(this)
    .parent()
    .find(carousel)
    .css("transform", "translateX(" + scroll + "px)");
});

// NAVIGATION

let nav_btn = $(".mobile-icon");

nav_btn.click(function () {
  $(".nav").toggleClass("left-0");
  $(this).toggleClass("mobile-clicked-icon");
});

// LOGIN-REGISTER
let login = $(".login-body");
let reg = $(".reg-body");
let login_btn = $(".login-btn");
let reg_btn = $(".reg-btn");

login_btn.click(function () {
  login.css("display", "flex");
  reg.css("display", "none");
  $(this).addClass("active-btn");
  $(".reg-btn").removeClass("active-btn");
});
reg_btn.click(function () {
  login.css("display", "none");
  reg.css("display", "block");
  $(this).addClass("active-btn");
  $(".login-btn").removeClass("active-btn");
});

// MORE TEXT
let more_btn = $(".more-text-btn");
more_btn.click(function () {
  $(".more-text").toggleClass("inline");
  $(".more-dots").toggleClass("dis-none");

  if ($(this).text() == "daha çox") $(this).text("daha az");
  else $(this).text("daha çox");
});

// PRODUCT SUM AND MINUS
let count_block = $(".count h6");
let count = +count_block.text();
let math_btn = $(".count-math");
math_btn.click(function () {
  if ($(this).prop("class").includes("count-plus")) {
    count += 1;
  } else {
    if (count > 1) {
      count -= 1;
    }
  }
  count_block.text(count);
});

// PRODUCT-IMAGE-SELECTED

$(".product-image").click(function () {
  let img_src = $(this).find("img").prop("src");
  $(".product-image-body img").prop("src", img_src);
});

// PRODUCT COMMENTS

let mark_star = $(".product-evaluation .info-stars i");
mark_star.click(function () {
  let mark = $(this).index();
  mark_star.removeClass("active-star");
  for (let i = 0; i <= mark; i++) {
    mark_star.eq(i).addClass("active-star");
  }
});
$(".comment-send-btn").click(function (e) {
    e.preventDefault();
  let comment = $("#comment-area").val();
  let mark_block = $(".product-evaluation .info-stars").clone();
  let person_result = $(".comment").eq(0).clone();
  person_result.find("p").text(comment);
  person_result.find(".info-stars").html(mark_block);
  person_result.find("h3").text("Ka**** Al****");
  $(".comments").append(person_result);

  let scroll_body=$("#product-review").offset().top;
  let totalScroll=scroll_body+$(".comments").height();
  $('html,body').stop().animate({
    scrollTop: totalScroll
}, 1000)
});

// DROPDOWN

let dropdown=$(".dropdown");
let arrow=dropdown.parent().find(".arrow i");

$(".langs").click(function(){
    dropdown.toggleClass("opacity-1");
    arrow.toggleClass("fa-chevron-up");
})

dropdown.find("li").click(function(){
    let drop_item=$(this).text();
    $(".main-lang").text(drop_item);
    arrow.removeClass("fa-chevron-up");
})
