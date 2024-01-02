/**
 * @file
 * CKEditor Expandable Textbox functionality.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.ckeditorExpandableTextbox = {
    attach: function (context, settings) {

      // Create expandable textbox functionality if the required elements exist is available.
      var $ckeditorExpandableTextbox = $('.ckeditor-expandabletextbox');
      if ($ckeditorExpandableTextbox.length > 0) {
        // Create simple expandable textbox mechanism for each tab.
        $ckeditorExpandableTextbox.each(function () {
          var $accordion = $(this);
          if ($accordion.hasClass('styled')) {
            return;
          }

          // The first one is the correct one.
          if (!drupalSettings.ckeditorExpandableTextbox.accordionStyle.collapseAll) {
            $accordion.children('dt:first').addClass('active');
            $accordion.children('dd:first').addClass('active');
            $accordion.children('dd:first').css('display', 'block');
          }

          // Turn the accordion tabs to links so that the content is accessible & can be traversed using keyboard.
          $accordion.children('dt').each(function () {
            var $tab = $(this);
            var tabText = $tab.text().trim();

            // var tempBody = $tab.next('dd').text().trim().substring(0, 200);

            // console.log($tab.text());
            // console.log(tempBody);

            var toggleClass = $tab.hasClass('active') ? ' active' : '';
            $tab.html('<a class="ckeditor-expandabletextbox-toggler" href="#"><span class="ckeditor-expandabletextbox-toggle' + toggleClass + '"></span>' + tabText + '</a>');    // <div>' + tempBody + '</div>'

            let $tabBody = $tab.next('dd');
            $tabBody.after('<div class="ckeditor-expandabletextbox-morebutton-wrapper"><div class="ckeditor-expandabletextbox-morebutton">Read more</div></div>');

            
          });

          // Wrap the accordion in a div element so that quick edit function shows the source correctly.
          $accordion.addClass('styled').removeClass('ckeditor-expandabletextbox').wrap('<div class="ckeditor-expandabletextbox-container"></div>');

          // Trigger an ckeditorExpandableTextboxAttached event to let other frameworks know that the accordion has been attached.
          $accordion.trigger('ckeditorExpandableTextboxAttached');
        });

        // Add click event to body once because quick edits & ajax calls might reset the HTML.
        $('body').once('ckeditorExpandableTextboxToggleEvent').on('click', '.ckeditor-expandabletextbox-toggler', function (e) {
          var $t = $(this).parent();
          var $parent = $t.parent();

          // Clicking on open element, close it.
          if ($t.hasClass('active')) {
            $t.removeClass('active');
            // $t.next().slideUp();
            $t.next().removeClass('ckeditor-expandabletextbox-open');
            $t.next().next().find('.ckeditor-expandabletextbox-morebutton').removeClass('open').html("Read more");

            // console.log('close open element');
          }
          else {
            if(!drupalSettings.ckeditorExpandableTextbox.accordionStyle.keepRowsOpen) {
              // Remove active classes.
              $parent.children('dt.active').removeClass('active').children('a').removeClass('active');
              // $parent.children('dd.active').slideUp(function () {
              //   $(this).removeClass('active');
              // });
              $parent.children('dd.active').removeClass('ckeditor-expandabletextbox-open').removeClass('active');
            }

            // console.log('open element');

            // Show the selected tab.
            $t.addClass('active');
            $t.next().addClass('ckeditor-expandabletextbox-open');
            $t.next().next().find('.ckeditor-expandabletextbox-morebutton').addClass('open').html("Read less");
            // $t.next().slideDown(300).addClass('active');
          }

          // Don't add hash to url.
          e.preventDefault();
        });

        $('body').once('ckeditorExpandableTextboxToggleEvent2').on('click', '.ckeditor-expandabletextbox-morebutton-wrapper', function (e) {
          // let tempParent = $(this).parent();
          let $t = $(this).prev('dd').prev('dt');
          var $parent = $t.parent();

          // Clicking on open element, close it.
          if ($t.hasClass('active')) {
            $t.removeClass('active');
            // $t.next().slideUp();
            $t.next().removeClass('ckeditor-expandabletextbox-open');
            $(this).find('.ckeditor-expandabletextbox-morebutton').removeClass('open').html("Read more");

            // console.log('close element');
          }
          else {
            if(!drupalSettings.ckeditorExpandableTextbox.accordionStyle.keepRowsOpen) {
              // Remove active classes.
              $parent.children('dt.active').removeClass('active').children('a').removeClass('active');
              // $parent.children('dd.active').slideUp(function () {
              //   $(this).removeClass('active');
              // });
              $parent.children('dd.active').removeClass('ckeditor-expandabletextbox-open').removeClass('active');
            }

            // console.log('open element');

            // Show the selected tab.
            $t.addClass('active');
            $t.next().addClass('ckeditor-expandabletextbox-open');
            $(this).find('.ckeditor-expandabletextbox-morebutton').addClass('open').html("Read less");
            // $t.next().slideDown(300).addClass('active');
          }

          // Don't add hash to url.
          e.preventDefault();
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
