$(document).ready(function() {
    
    /* FOR STICKY NAVIGATION BAR */
    
    $('.js--features-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
      offset: '65px'
    });
    
    
     /* FOR BUTTON SCROLL ANIMATION */
    
    $('.js--signup').click(function() {
        $('html, body').animate({scrollTop: $('.js--plans').offset().top}, 2000)
    });
    
    $('.js--show-more').click(function() {
        $('html, body').animate({scrollTop: $('.js--features-section').offset().top}, 900)
    });
    
    
    /* FOR NAVIGATION MENU SCROLL ANIMATION - SNIPPET CODE */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1500);
          }
        }
      });
    
    /* ANIMATION ON SCROLL */
    
    $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

})


                                                                                    /*
                                                                                    Suvam Das
                                                                                    suvamdas27@gmail.com
                                                                                    https://www.instagram.com/mesuvam
                                                                                    https://www.linkedin.com/in/suvam-das-81b3b2154/
                                                                                    https://www.facebook.com/chondro.bindu.chand.1997/
                                                                                    */
