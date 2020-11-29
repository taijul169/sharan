      $(window).on('load', function () {
                $('#slider').nivoSlider({
                    effect: 'fade',

                    slices: 15,

                    boxCols: 8,

                    boxRows: 4,

                    animSpeed: 500,

                    pauseTime: 3000,

                    startSlide: 0,

                    directionNav: true,

                    controlNav: false,

                    controlNavThumbs: true,

                    pauseOnHover: false,

                    manualAdvance: true,

                    prevText: '<i class="fa fa-chevron-left"></i>',

                    nextText: '<i class="fa fa-chevron-right"></i>',

                    randomStart: true,

                    beforeChange: function () { },

                    afterChange: function () { },

                    slideshowEnd: function () { },

                    lastSlide: function () { },

                    afterLoad: function () { }

                });
            }); 

$(document).ready(function () {
    // owl-carousel-activation
  $('.about-owl-slider').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        nav:false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 1,
                nav:false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                loop: false
               
            }
        }
  });
      // owl-carousel-activation
  $('.room-filter-gallery').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay: true,
        dots:false,
        nav:true,
        responsiveClass: true,
         
        // animateOut: '',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 1,
                nav:false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                loop: false,
                nav:true 
            }
        }
  });
    //clients-carousel-active
  $('.clients-wrapper').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        animateOut: '',
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots:false
            },
            500: {
                items: 1,
                nav: false,
                dots:false
            },
            600: {
                items: 1,
                nav: false,
                dots:false
            },
            1000: {
                items: 2,
                loop: false,
                nav: false,
                dots:false
               
            }
        }
  });
//brand-carousel-active
  $('.brand').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        animateOut: '',
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            500: {
                items: 3,
                nav:true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                loop: false,
                nav: false,
                dots:false
               
            }
        }
  });
  //gallery-carousel-active
  $('.gallery').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        animateOut: '',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 1,
                nav:true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                loop: true,
                nav: true,
                dots: false,
                autoPlay:true
               
            }
        }
  });
// owl-carousel-dots-into-number
  $('.owl-dot').each(function(){
  $(this).children('span').text($(this).index()+1);
   });  
       // sticky nav-area-start
    $(window).scroll(function () {
        var topPosition = $(document).scrollTop();
        if (topPosition > 50) {
            $('#header').addClass("fixedNav");
        }
        else {
            $('#header').removeClass("fixedNav");
        }
    });
    // responsive-navbar-toggle
    $('.threebarBtn').click(function () {
        $('.nav-header').toggleClass('displayNav');
    });


    // top-scroll-button-active
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".scroll-top-indicator").fadeIn();
            
        }
        else {
            $(".scroll-top-indicator").fadeOut();
        }
    });
    // parallax-
    $('.parallax-window').parallax({
        imageSrc: 'assets/img/bg/1.jpg',

    });
      $('.client-bg').parallax({
        imageSrc: 'assets/img/bg/2.jpg',

    });
    $(".scroll-top-indicator").click(function () {
        $("html").animate({ scrollTop: 0 },2000);
    });
    // Filter Gallery
    $('.itm-list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.single-room-wrapper').show('1000');
        }
        else {
            $('.single-room-wrapper').not('.' + value).hide('1000');
            $('.single-room-wrapper').filter('.' + value).show('1000');
        }
    });
    $('.itm-list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // previous-date-disable
    var dateToday = new Date();    
    $(function () {
        $("#date").datepicker({ 
            minDate: dateToday 
        });
    });
    // preloader-activation
    $('.preloader').css('display', 'none');
    // nivo-slider-activation
    // $('#slider').nivoSlider();
    
});

