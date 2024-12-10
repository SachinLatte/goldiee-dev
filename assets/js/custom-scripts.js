//HOMEPAGE HERO CAROUSEL
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: true,
  parallax: true,
  effect: "fade",
// If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  on: {
slideChangeTransitionStart: function () {
    // Slide captions
    var swiper = this;
    setTimeout(function () {
      var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
    }, 500);
    gsap.to($(".current-title"), 0.4, {autoAlpha: 0, y: -40, ease: Power1.easeIn});
},
slideChangeTransitionEnd: function () {
    // Slide captions
    var swiper = this;
    var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
    $(".slide-captions").html(function() {
      return "<h2 class='current-title'>" + currentTitle + "</h2>";
    });
    gsap.from($(".current-title"), 0.4, {autoAlpha: 0, y: 40, ease: Power1.easeOut});
}
}
});
// Slide captions
var currentTitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
$(".slide-captions").html(function() {
return "<h2 class='current-title'>" + currentTitle + "</h2>";
});


//SMOOTH SCROLL
const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


//NAVIGATION DROPDOWN
$(document).ready(function() { 
  $(window).resize(function(){
    if ($(window).width() >= 980){	
        $(".navbar .dropdown-toggle").hover(function () {
           $(this).parent().toggleClass("show");
           $(this).parent().find(".dropdown-menu").toggleClass("show"); 
         });
        $( ".navbar .dropdown-menu" ).mouseleave(function() {
          $(this).removeClass("show");  
        });
    }	
  });  
  });


  //STICKY NAVIGATION
  let stickyHeader = document.querySelector(".navigation-main");
  window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
      stickyHeader.classList.add("sticky-header");
    } else {
      stickyHeader.classList.remove("sticky-header");
    }
  }

//STATS COUNTER
$('.usp-counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate(
    { countNum: countTo },
    {
      duration: 5000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    }
  );
});


//LATEST FROM GOLDIEE CAROUSEL
$(".latest-from-goldiee").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    }
  }
});