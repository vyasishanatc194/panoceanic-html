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
    mobile: false,
  }).init();

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
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
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
        touchDrag: false,
        mouseDrag: false,
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

  checkClasses();
  owl.on("translated.owl.carousel", function (event) {
    checkClasses();
  });

  function checkClasses() {
    var total = $(".owl-carousel-buisness .owl-stage-outer .owl-stage .owl-item.active").length;

    $(".owl-carousel-buisness .owl-stage-outer .owl-stage .owl-item").removeClass("firstActiveItem lastActiveItem");

    $(".owl-carousel-buisness .owl-stage-outer .owl-stage .owl-item.active").each(function (index) {
      if (index === 0) {
        // this is the first one
        $(this).addClass("firstActiveItem center");
      }
      if (index === total - 0 && total > 0) {
        // this is the last one
        $(this).addClass("lastActiveItem");
      }
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
    }

    if (src == "item two") {
      $(".b-slide.active").removeClass("active");
      $(".slide-two").addClass("active");
    }

    if (src == "item three") {
      $(".b-slide.active").removeClass("active");
      $(".slide-three").addClass("active");
    }

    if (src == "item four") {
      $(".b-slide.active").removeClass("active");
      $(".slide-four").addClass("active");
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
      owl.trigger("next.owl.carousel");
    }
  );

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
