


function openNav2() {
    $("#mySidenav2").addClass("width-menu");
    $("#cd-shadow-layer").css("display", "flex");
    $("body").css("position", "relative");
    $("body").css("overflow", "hidden");
    $("body").css("height", "100vh");
    // $(".position-fixed-overlay").addClass("position-show");
    $(".closebtn2").css("position", "fixed");
}
  
function closeNav2() {
    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");  
}

$('#opensearch').click(function(){
    $('#myOverlay').css("display", "block")
  });


  $('#closesearch').click(function(){
    $('#myOverlay').css("display", "none");
});

var headertopoption = $(window);
var headTop = $(".navbar-dark");

headertopoption.on("scroll", function () {
    if (headertopoption.scrollTop() > 100) {
        headTop.addClass("fixed-top slideInDown animated");
    } else {
        headTop.removeClass("fixed-top slideInDown animated");
    }
});

  
// wow

$(document).ready(function(){

    var wow = new WOW(
    {  
        mobile:  false,
    }
).init();
    

/// smooth scroll

$("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top - 70
    }, 1500);
    e.preventDefault();
});

// menu click

$(".nav-link").click(function(){
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
});


$(".nav-link").click(function(){
    $(".navbar-collapse").removeClass("show");

    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
});

// readmore

$("#toggle-read").click(function() {
    var elem = $("#toggle-read").text();
    if (elem === "Read more..") {
      $("#toggle-read").text("Read Less");
      $("#text_hide_show").show();
    } else {
      $("#toggle-read").text("Read more..");
      $("#text_hide_show").hide();
    }
  });




// our service

$(".owl-carousel-banner").owlCarousel({
    loop:true,
    margin:0,
    smartSpeed:2000,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:1,
            nav:false
        },

        1000:{
            items:1,
            nav:false
        },
        1025:{
            items:1,
            nav:false,
            loop:true,
            dots: true,
        }
    }
});


$(".owl-carousel-technology").owlCarousel({
    loop:true,
    margin:0,
    smartSpeed:2000,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: false,
    nav: true,
    responsiveClass: true,
    navText: [
        "<i class='fe fe-arrow-left'></i>",
        "<i class='fe fe-arrow-right'></i>",
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false,
        },
        768:{
            items:1,
            nav: false,
        },

        1000:{
            items:1,
            nav: false,
        },
        1025:{
            items:1,
        }
    }
});


$(".owl-carousel-buisness").owlCarousel({
    loop:true,
    margin:0,
    smartSpeed:2000,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: false,
    nav: true,
    responsiveClass: true,
    navText: [
        "<i class='fe fe-arrow-left'></i>",
        "<i class='fe fe-arrow-right'></i>",
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:3,
        },

        1000:{
            items:4,
        },
        1025:{
            items:4,
        }
    }
});


$(".owl-carousel-testimonial").owlCarousel({
    loop:true,
    margin:0,
    smartSpeed:2000,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: true,
    nav: false,
    responsiveClass: true,
    navText: [
        "<i class='fe fe-arrow-left'></i>",
        "<i class='fe fe-arrow-right'></i>",
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:1,
        },

        1000:{
            items:1,
        },
        1025:{
            items:1,
        }
    }
});

$(".nav-toggle").click(function(){
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
});

});