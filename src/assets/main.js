$('#loader').show();
$('#main-content').hide();
$(document).ready(function () {
  setTimeout(() => {
    $('#loader').hide();
    $('#main-content').show();
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 7400);

    window_ht = $(window).height();
    window_wt = $(window).width();
    head_ht = $('header').outerHeight();

    $('.window_ht').css('height', window_ht + 'px');

    if (window_wt < 420) {} else {};

    $('.submit-field').click(function () {
      $('.contact-from').hide('slow');
      $('.thankyou').show('slow');
    });

    $('.home-head .l').each(function (index) {
      var $this = $(this);
      setTimeout(function () {
        $this.addClass('rubberBand');
      }, 800);
    });

    setTimeout(function () {
      $('.home-head .l').removeClass('rubberBand');
    }, 3000);


    $(".l").hover(
      function () {
        $(this).addClass("animated rubberBand");
      },
      function () {
        var $this = $(this);
        setTimeout(function () {
          $this.removeClass("animated rubberBand");
        }, 800);

      }
    );


    function trans_zero(rel_el) {
      $('.page-anim').css({
        'transform': 'scale3d(0.9, 0.9, 0.9) translate3d(0px, 120%, 0)',
        'opacity': '0'
      });
      setTimeout(function () {
        $('.' + rel_el + '-section').css({
          "transform": "scale3d(1, 1, 1) translate3d(0px, 0%, 0)",
          "opacity": "1",
          "z-index": "10",
        });
      }, 300);
    };

    $('.nav-icon,.contact-me,.log-block').click(function () {
      var _rel = $(this).attr('rel');
      $('.nav-icon').removeClass('active');
      $(this).addClass('active');

      if (_rel == 'home') {
        trans_zero(_rel);
        setTimeout(function () {
          $('.home-section').addClass('home-loaded');
        }, 800);
        $('.home-head .l').each(function (index) {
          var $this = $(this);
          setTimeout(function () {
            $this.addClass('rubberBand');
          }, 2000);
        });

      } else {
        setTimeout(function () {
          $('.home-section').removeClass('home-loaded');
        }, 800);
        $('.home-section').css({
          'transform': 'scale3d(0.9, 0.9, 0.9) translate3d(0px, 40%, 0)',
          'opacity': '1',
          'z-index': '10'
        });
        setTimeout(function () {
          $('.home-head .l').removeClass('rubberBand');
        }, 2000);
      }

      if (_rel == 'about') {
        trans_zero(_rel);
      } else {
        $('.about-section').css({
          'transform': 'scale3d(0.86, 0.9, 0.9) translate3d(0px, 35%, 0)',
          'opacity': '0.98',
          'z-index': '9'
        });
      }

      if (_rel == 'skills') {
        trans_zero(_rel);
        setTimeout(function () {
          $('.progress-bar').each(function () {
            var $this = $(this);
            var progressbar = $this.data('progress');
            $this.animate({
              width: progressbar + '%'
            }, "slow");
          });
        }, 1400);

        setTimeout(function () {
          $('.timeline-event').each(function () {
            var $this = $(this);
            $this.addClass('fadeInUp animated')
          });
        }, 1400);

      } else {
        $('.skills-section').css({
          'transform': 'scale3d(0.82, 0.9, 0.9) translate3d(0px, 30%, 0)',
          'opacity': '0.96',
          'z-index': '8'
        });
        setTimeout(function () {
          $('.progress-bar').each(function () {
            var $this = $(this);
            var progressbar = 0;
            $this.animate({
              width: progressbar + '%'
            }, "slow");
          });
        }, 2000);
        setTimeout(function () {
          $('.timeline-event').each(function () {
            var $this = $(this);
            $this.removeClass('fadeInUp animated')
          });
        }, 1200);
      }

      if (_rel == 'gallery') {
        trans_zero(_rel);
        setTimeout(function () {
          $('.gallery-block').addClass('gallery-loaded');
        }, 1000);
      } else {
        $('.gallery-section').css({
          'transform': 'scale3d(0.78, 0.9, 0.9) translate3d(0px, 25%, 0)',
          'opacity': '0.94',
          'z-index': '7'
        });
        setTimeout(function () {
          $('.gallery-block').removeClass('gallery-loaded');
        }, 800);
      }

      if (_rel == 'contact') {
        trans_zero(_rel);
        $('.' + _rel).addClass('active');
        $('.contact-head .l').each(function (index) {
          var $this = $(this);
          setTimeout(function () {
            $this.addClass('rubberBand');
          }, 1800);
          setTimeout(function () {
            $('.contact-block').addClass('contact-loaded');
          }, 1200);
        });
      } else {
        $('.contact-section').css({
          'transform': 'scale3d(0.74, 0.9, 0.9) translate3d(0px, 20%, 0)',
          'opacity': '0.80',
          'z-index': '6'
        });
        setTimeout(function () {
          $('.contact-head .l').removeClass('rubberBand');
        }, 1000);
        setTimeout(function () {
          $('.contact-block').removeClass('contact-loaded');
        }, 1000);
      }

      if (_rel == 'resume') {
        $('.resume-btn').addClass('resume-btn-anim');
      } else {
        $('.resume-btn').removeClass('resume-btn-anim');
      }
    });
  }, 3000);
});
