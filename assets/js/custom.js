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

$("#opensearch").click(function () {
  $("#myOverlay").css("display", "block");
});

$("#closesearch").click(function () {
  $("#myOverlay").css("display", "none");
});

var headertopoption = $(window);
var headTop = $(".navbar-dark");

headertopoption.on("scroll", function () {
  if (headertopoption.scrollTop() > 100) {
    headTop.addClass("fixed-top fixed-top-bg-blue slideInDown animated");
    // $(".logo-blue").attr("src", "assets/images/logo-blue.png");
  } else {
    headTop.removeClass("fixed-top fixed-top-bg-blue slideInDown animated");
    // $(".logo-blue").attr("src", "assets/images/logo.png");
  }
});

// wow

$(document).ready(function () {
  var wow = new WOW({
    // mobile: false,
  }).init();
  var triggerEvents = false;
  /// smooth scroll

  $("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 70,
        },
        1500
      );
    e.preventDefault();
  });

  // menu click

  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass("show");

    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  });

  // readmore

  $("#toggle-read").click(function () {
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
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },

      1000: {
        items: 1,
        nav: false,
      },
      1025: {
        items: 1,
        nav: false,
        loop: true,
        dots: true,
      },
    },
  });

  $(".owl-carousel-technology").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    responsiveClass: true,
    navText: [
      "<i class='fe fe-arrow-left'></i>",
      "<i class='fe fe-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },

      1000: {
        items: 1,
        nav: false,
      },
      1025: {
        items: 1,
      },
    },
  });

  // buisness slider
  var owl = $(".owl-carousel-buisness").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots: false,
    dotsEach: true,
    nav: true,
    // rewindNav : true,
    // items: 4,
    // slideBy: 2,
    mouseDrag: false,
    // center: true,
    responsiveClass: true,
    navText: [
      "<i class='fe fe-arrow-left'></i>",
      "<i class='fe fe-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        touchDrag: true,
        nav: false,
        mouseDrag: true,
      },
      768: {
        items: 3,
        touchDrag: false,
        mouseDrag: false,
      },

      1000: {
        items: 3,
      },
      1025: {
        items: 4,
      },
    },
  });

  $(".buisness-slides .owl-item").mouseover(function(){
    $( ".buisness-slides .owl-item.center" ).each(function() {
      $( this ).removeClass( "center" );
    });
    $(this).addClass("center");
    var className = $('.buisness-slides .owl-item.center .item').attr('data-img-class');
    $( ".buisness-slides .b-slide.active" ).each(function() {
      $( this ).removeClass( "active" );
    });
    $( ".buisness-slides .b-slide."+className ).addClass( "active" );
  });


  checkClasses();
  owl.on("translated.owl.carousel", function (event) {
    if(triggerEvents !== true){
      checkClasses();
    }    
  });

  function checkClasses() {
    var total = $(".owl-carousel-buisness .owl-stage-outer .owl-stage .owl-item.active").length;
    $( ".buisness-slides .owl-item" ).each(function() {
      $( this ).removeClass( "center" );
    });
    $(".owl-carousel-buisness .owl-stage-outer .owl-stage .owl-item").removeClass("firstActiveItem lastActiveItem");

    $(".owl-carousel-buisness .owl-stage-outer .owl-stage .owl-item.active").each(function (index) {
      if (index === 0) {
        // this is the first one
        $(this).addClass("firstActiveItem center").removeClass("activeItem2");
      }
      if (index === total - 0 && total > 0) {
        // this is the last one
        $(this).addClass("lastActiveItem");
      }

      if (index === 1) {
        $(this).addClass("activeItem2").removeClass("activeItem3");
      }

      if (index === 2) {
        $(this).addClass("activeItem3").removeClass("activeItem4");

        // new click
        // setInterval(function(){
        //   var liObj = document.querySelectorAll(".owl-item.active");
          
        //   for (var i = 0; i < liObj.length; i++) {
        //       if(i === 4){
        //       profileDetails = liObj[4];
              
        //   ppp = profileDetails.querySelectorAll(
        //           ".btn-circle"
        //         );
              
        //       //ppp[0].classList.remove("mystyle");
        //       ppp[0].classList.add("change-img-div");
        //       ppp[0].onclick = function(){ ppp[0].click()};
        //       ppp[0].removeEventListener("click", elemEventHandler , false);
        //       liObj = {};
        //       break;
        //       //console.log(ppp[0].click());
        //       }
        //   } 
        // }, 100);
        // function elemEventHandler(){
        //   console.log('event remoed');
        // }
      }

      if (index === 3) {
        $(this).addClass("activeItem4").removeClass("activeItem3");

        // new click
        // setInterval(function(){
        //   var liObj = document.querySelectorAll(".owl-item.active");
          
        //   for (var i = 0; i < liObj.length; i++) {
        //       if(i === 5){
        //       profileDetails = liObj[5];
              
        //   ppp = profileDetails.querySelectorAll(
        //           ".btn-circle"
        //         );
              
        //       //ppp[0].classList.remove("mystyle");
        //       ppp[0].classList.add("change-img-div");
        //       ppp[0].onclick = function(){ ppp[0].click();ppp[0].click();};
        //       ppp[0].removeEventListener("click", elemEventHandler , false);
        //       liObj = {};
        //       break;
        //       //console.log(ppp[0].click());
        //       }
        //   } 
        // }, 100);
      }
      
      var className = $('.buisness-slides .owl-item.center .item').attr('data-img-class');
      $( ".buisness-slides .b-slide" ).each(function() {
        $( this ).removeClass( "active" );
      });
      $( ".buisness-slides .b-slide."+className ).addClass( "active" );
    });
  }


  owl.on("changed.owl.carousel", function (property) {
    
    var current = property.item.index;
    // var src = $(property.target).find(".owl-item").eq(current).find("img").attr('src');
    var src = $(property.target)
      .find(".owl-item")
      .eq(current)
      .find("div")
      .attr("class");

    // console.log('Image current is ' + src);

      if (src == "item one") {
        
        $(".b-slide.active").removeClass("active");
        $(".slide-one").addClass("active");
        $(".slide-one").parent().addClass("active-bx-1");
      }

      if (src == "item two") {
        $(".b-slide.active").removeClass("active");
        $(".slide-two").addClass("active");
        $(this).addClass("active-bx-2");
      }

      if (src == "item three") {
        $(".b-slide.active").removeClass("active");
        $(".slide-three").addClass("active");
        $(this).addClass("active-bx-3");
      }

      if (src == "item four") {
        $(".b-slide.active").removeClass("active");
        $(".slide-four").addClass("active");
        $(this).addClass("active-bx-4");
      }

      if (src == "item five") {
        $(".b-slide.active").removeClass("active");
        $(".slide-five").addClass("active");
      }

      if (src == "item six") {
        $(".b-slide.active").removeClass("active");
        $(".slide-six").addClass("active");
      }

      if (src == "item seven") {
        $(".b-slide.active").removeClass("active");
        $(".slide-seven").addClass("active");
      }
  });

  $(".buisness-slides .buiness .buisness-box .btn.btn-circle").click(
    function () {   
      triggerEvents = true;
      var item = $(this).attr('data-item');
      owl.trigger("next.owl.carousel");   
      setTimeout(function(){ 
       
        var newitem = 0;
        if(item !== "7"){
          var newitem = parseInt(item)+1;
        }else{
          var newitem = 1;
        }
        $( ".buisness-slides .owl-item" ).each(function() {
          $( this ).removeClass( "center" );
        });
        $("div").find(`[data-img-class='s-${newitem}']`).parent().addClass("center");
        
        var className = `s-${newitem}`;

        $( ".buisness-slides .b-slide" ).each(function() {
          $( this ).removeClass( "active" );
        });
        $( ".buisness-slides .b-slide."+className ).addClass( "active" );
       // triggerEvents = false;
      }, 1000);      
     
    }
  );
  $(".owl-next" ).click(function() {
    triggerEvents = false;
  });
  $(".owl-prev" ).click(function() {
    triggerEvents = false;
  });

  // $('.owl-carousel-buisness .owl-dots .owl-dot').hover(function() {
	// 	$(this).click();
  //   // $(".owl-item.active.firstActiveItem.center")
 	// })

  // $(".buisness-slides .buiness .buisness-box").hover(function() {
  //   $('.owl-item').removeClass('firstActiveItem');
  //   $('.hover-card-active').removeClass('hover-card-active');
  //   $(this).addClass("hover-card-active");
  // });

  $(".owl-carousel-testimonial").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    navText: [
      "<i class='fe fe-arrow-left'></i>",
      "<i class='fe fe-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },

      1000: {
        items: 1,
      },
      1025: {
        items: 1,
      },
    },
  });

  $(".nav-toggle").click(function () {
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
  });
});
