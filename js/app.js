/**
 * @author YANXUEFENG
 */
(function ($, g) {
	"use strict";
	//$(".js-doc-nav").height($(window).height() - 100);
	var $window = $(window);
    var $body   = $(document.body);

    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
      target: '.doc-nav-wrap',
      offset: navHeight
    });

    $window.on('load', function () {
      $body.scrollspy('refresh');
    });

    $('.doc-container [href=#]').click(function (e) {
      e.preventDefault();
    });

    // back to top
    setTimeout(function () {
      var $sideBar = $('.doc-nav-wrap');

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top;
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10);
            var navOuterHeight = $('.doc-nav').height();

            return (this.top = offsetTop - navOuterHeight - sideBarMargin);
          }, bottom: function () {
            return (this.bottom = $('footer').outerHeight(true));
          }
        }
      });
    }, 100);
}(jQuery, window));
