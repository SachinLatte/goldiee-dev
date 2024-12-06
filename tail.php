<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.0/js/swiper.min.js'></script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script> 
<script>
  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        parallax: true,
        speed: 600,
    });
</script>
  <script>
      const lenis = new Lenis();
      lenis.on('scroll', (e) => {
        console.log(e);
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  </script>
  <script>
    $(document).ready(function() {
    $('#navbarDropdown').mouseenter(function() {
      $('.dropdown-menu').slideToggle(300, "linear");
    });
    $('.dropdown-menu').mouseleave(function() {
      $(this).slideToggle(300, "linear");
    });
  });
  </script>
</body>
</html>