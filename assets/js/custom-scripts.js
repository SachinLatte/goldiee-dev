//HOMEPAGE HERO CAROUSEL
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: true,
  parallax: true,
  effect: "fade",
  direction: 'horizontal',
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
  // console.log(e);
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
  margin: 15,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1500,
  animateIn: 'linear',
  animateOut: 'linear',
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1470: {
      items: 3
    },
    1536: {
      items: 3
    },
    1600: {
      items: 4
    }
  }
});


//TRUNCATE PARAGRAPH
let stringlength = 90;
var elements1 = document.querySelectorAll('.truncate-para');
for(let i = 0; i < elements1.length; i++){
    let str1 = elements1[i].innerHTML;
    if (str1.length > stringlength) {
        str1 = str1.substring(0, stringlength),
        str1.replace(/\w+$/, '');
        str1 +='..';
        elements1[i].innerHTML = str1;
      }
}

//TRUNCATE HEADING
let stringlength1 = 50;
var elements1 = document.querySelectorAll('.truncate-heading');
for(let i = 0; i < elements1.length; i++){
    let str1 = elements1[i].innerHTML;
    if (str1.length > stringlength1) {
        str1 = str1.substring(0, stringlength1),
        str1.replace(/\w+$/, '');
        str1 +='..';
        elements1[i].innerHTML = str1;
      }
}


//COPYRIGHT CURRENT YEAR
let data = new Date();
let currentYear = document.querySelector('#currentYear');
currentYear.innerText = data.getFullYear();



//SROLL TO TOP BUTTON
var amountScrolled = 200;
var amountScrolledNav = 25;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('.back-to-top').addClass('show');
  } else {
    $('.back-to-top').removeClass('show');
  }
});
$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});


//AOS ANIMATION
AOS.init({
  once:true,
});

