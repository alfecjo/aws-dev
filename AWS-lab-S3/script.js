/*=============================================================
    Authour URI: ACFA
    License: Commons Attribution 3.0
    ========================================================  */

    (function ($) {
        "use strict";
        var mainApp = {
    
            main_fun: function () {
                /*====================================
                 CUSTOM LINKS SCROLLING FUNCTION
                ======================================*/
    
                $('nav a[href*=#]').click(function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                   && location.hostname == this.hostname) {
                        var $target = $(this.hash);
                        $target = $target.length && $target
                        || $('[name=' + this.hash.slice(1) + ']');
                        if ($target.length) {
                            var targetOffset = $target.offset().top;
                            $('html,body')
                            .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                            return false;
                        }
                    }
                });
    
    
                /*====================================
                    NAV SCRIPTS
                ======================================*/
                $(window).bind('scroll', function () {
                    var navHeight = $(window).height() -50;
                    if ($(window).scrollTop() > navHeight) {
                        $('nav').addClass('fixed');
                    }
                    else {
                        $('nav').removeClass('fixed');
                    }
                });
    
            },
    
            initialization: function () {
                mainApp.main_fun();
    
            }
    
        }
        // Initializing ///
    
        $(document).ready(function () {
            mainApp.main_fun();
        });
    
    }(jQuery));
