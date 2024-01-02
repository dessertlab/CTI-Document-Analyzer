console.log('main.js 2');

body_width = jQuery('body').width();

jQuery(function () {
	jQuery('.inc-search input[type="Text"]').bind("enterKey",function(e){
		goUrl = 'https://threatpoint.checkpoint.com/ThreatPortal/search?pattern=' + jQuery('.inc-search input[type="Text"]').val().toLowerCase() + '&type=all&page=0';
		window.location = goUrl;
	});
	jQuery('.inc-search input[type="Text"]').keyup(function(e){
		if(e.keyCode == 13)
		{
			jQuery(this).trigger("enterKey");
		}
	});
	jQuery('#searchsubmit').click(function(e){
		goUrl = 'https://threatpoint.checkpoint.com/ThreatPortal/search?pattern=' + jQuery('.inc-search input[type="Text"]').val().toLowerCase() + '&type=all&page=0';
		window.location = goUrl;
	});
});

/* sticky-nav */
jQuery(function () {
	
	if(body_width > 991){
 
		jQuery(window).scroll(function () {
			animate_elems();
		});

		function animate_elems() {
			wintop = jQuery(window).scrollTop();
			
			if (wintop > 250) {
				jQuery('.navbar-top').addClass('animated');
			} else {
				jQuery('.navbar-top').removeClass('animated');
			}
			if (wintop > 275) {
				jQuery('.navbar-top').addClass('animated-initial');
			} else {
				jQuery('.navbar-top').removeClass('animated-initial');
			}
			if (wintop > 300) {
				jQuery('.navbar-top').addClass('animated-passed');
			} else {
				jQuery('.navbar-top').removeClass('animated-passed');
			}
		}
	}
}); 




/*menu*/
jQuery(function () {
	jQuery('.navbar-nav').find('.sub-menu').each(function () {
		jQuery('<span class="arrowdown"><svg style="fill: currentColor;" class="icon" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"  viewBox="0 0 129 129" >			<path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>		</symbol></svg></span>').insertBefore(this);
	});
	jQuery('.arrowdown').click(function () {
		if (jQuery(this).hasClass('close-arrow')) {
			jQuery(this).removeClass('close-arrow');
			jQuery(this).closest('li').find('.sub-menu').first().removeClass('open-mobile');
		} else {
			jQuery(this).addClass('close-arrow');
			jQuery(this).closest('li').find('.sub-menu').first().addClass('open-mobile');
		}
	});
});
/*Amination  manubger*/
jQuery(function () {
	jQuery('.nav-icon').click(function () {
		jQuery(this).toggleClass('open');
		jQuery('.nav-menu').toggleClass('open');
	});
});
/* vid popup */
var active = false;
jQuery(document).ready(function () {
	jQuery('.play-video').click(function () {
		if (!active) {
			var vid_frame = jQuery(this).attr('data-vid');
			if (vid_frame) {
				jQuery('body').append('<div class="vid-popup"><div class="close-popup" onclick="closepopup()">✕</div><iframe src="' + vid_frame + '?rel=0&autoPlay=1;"></div>');
				jQuery('.vid-popup').hide().show('slow');
				active = true;
			}
		}
	});
});
function closepopup() {
	jQuery('.vid-popup').hide('slow', function () {
		jQuery('.vid-popup').remove();
	});
	active = false;
} 

/* background-image */
jQuery(function () {
	jQuery('.background-image').each(function () {
		if(jQuery(this).find('img').attr('src')){
			image_src = jQuery(this).find('img').attr('src');
		}
		if(jQuery(this).find('img').attr('data-src')){
			image_src = jQuery(this).find('img').attr('data-src');
		}
		jQuery(this).attr('style','background-image: url('+image_src+');');
	});
});

/* share button */
jQuery(function () {
	jQuery('.icon-sharing').click(function () {
		jQuery(this).closest('.social-button').find('.icon-sharing-links').toggleClass('active');
	});
});

jQuery(function () {
	jQuery('.navbtn').click(function (e) {
		e.preventDefault();
		openPopup('subscribe-us-popup');
	});
});
/* slick slider */
jQuery(function () {
	
	var rtl_flag;
	//rtl: rtl_flag,
	if (document.dir == "lrt"){
		rtl_flag = true;
	}else{
		rtl_flag = false;
	}
	
	jQuery('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon" style="fill: currentColor;"  viewBox="0 0 512.005 512.005" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005,L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251,l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"/></g></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon" style="fill: currentColor;"  viewBox="0 0 512.005 512.005" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(-1 0 0 1 512.005 0)"><path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005,L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251,l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"/></g></svg></button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	jQuery('.slider-dots').slick({
		
		lazyLoad: 'ondemand',
		dots: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});
	jQuery('.category-slider').slick({
		//class="icon" style="fill: currentColor;"
		lazyLoad: 'ondemand',
		speed: 1500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="39" height="27" viewBox="0 0 39 27"><defs><clipPath id="clip-path"><rect width="39" height="27" fill="none"/></clipPath></defs><g id="Arrow_Right_Black" data-name="Arrow Right Black" clip-path="url(#clip-path)"><path id="Arrow_Right_Black-2" data-name="Arrow Right Black" d="M26.113,0l-1.7,1.985s7.122,7.147,10.174,9.926C23.882,11.8,0,11.912,0,11.912v2.382s23.89-.087,34.591,0c-3.052,3.176-10.174,10.324-10.174,10.324L26.113,27,39,13.1Z" fill="#fff"/></g></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="39" height="27" viewBox="0 0 39 27"><defs><clipPath id="clip-path"><rect width="39" height="27" fill="none"/></clipPath></defs><g id="Arrow_Left_Black" data-name="Arrow Left Black" clip-path="url(#clip-path)"><path id="Arrow_Left_Black-2" data-name="Arrow Left Black" d="M-26.113,0l1.7,1.985s-7.122,7.147-10.174,9.926c10.709-.111,34.591,0,34.591,0v2.382s-23.89-.087-34.591,0c3.052,3.176,10.174,10.324,10.174,10.324L-26.113,27-39,13.1Z" transform="translate(39)" fill="#fff"/></g></svg></button>',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '60px',
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '60px',
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '60px',
			}
		}]
	});
	
	jQuery('.postcast-slider').slick({
		lazyLoad: 'ondemand',
		speed: 1500,
		infinite: true,
		dots: true,		
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '30px',
		variableWidth: true,
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
			breakpoint: 991,
			settings: { 
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}]
	});
	var $slider = jQuery('.postcast-slider');
	var $progressBar = jQuery('.postcast-progress');
	var $progressBarLabel = jQuery( '.postcast_label' );
	$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
	$progressBar
	.css('background-size', calc + '% 100%')
	.attr('aria-valuenow', calc );
	$progressBarLabel.text( calc + '% completed' );
	}); 
	
	jQuery('.news-slider-wrapper').slick({
		lazyLoad: 'ondemand',
		speed: 1500,
	    infinite: true,
	    slidesToShow: 4,
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
			breakpoint: 991,
			settings: { 
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}]
	});
	var $mobileslider = jQuery('.news-slider-wrapper');
	var $mobileprogressBar = jQuery('.mobile-progress');
	var $mobileprogressBarLabel = jQuery( '.mobile_label' );
	$mobileslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
	$mobileprogressBar
	.css('background-size', calc + '% 100%')
	.attr('aria-valuenow', calc );
	$mobileprogressBarLabel.text( calc + '% completed' );
	});
	
	jQuery('.blog-most-recent').slick({
		lazyLoad: 'ondemand',
		speed: 1500,
		infinite: true,
		dots: true,		
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '30px',
		variableWidth: true,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
			breakpoint: 991,
			settings: { 
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
				variableWidth: false,
			}
		}]
	});
	var $recentslider = jQuery('.blog-most-recent');
	var $recentprogressBar = jQuery('.blog-most-recent-bar');
	var $recentprogressBarLabel = jQuery( '.blog-recent-bar' );
	$recentslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
	$recentprogressBar
	.css('background-size', calc + '% 100%')
	.attr('aria-valuenow', calc );
	$recentprogressBarLabel.text( calc + '% completed' );
	});
}); 


/* animation */
jQuery(function() {
	var $elems = jQuery('.ani');
	var winheight = jQuery(window).height();
	var fullheight = jQuery(document).height();

	animate_elems_initial();
	
	jQuery(window).scroll(function(){
		animate_elems();
	});

	function animate_elems() {
		wintop = jQuery(window).scrollTop(); // calculate distance from top of window

		// loop through each item to check when it animates
		$elems.each(function(){
			$elm = jQuery(this);

		//	if($elm.hasClass('active')) { return true; } // if already animated skip to the next item

			topcoords = $elm.offset().top; // element's distance from top of page in pixels
			
			if(windowWidth767()){
				//desktop
				if(wintop > (topcoords - (winheight*.75))) {
					// animate when top of the window is 3/4 above the element
					$elm.addClass('active');
				} else {
					$elm.removeClass('active');
				}
			}else{
				//mobile
				if(wintop > (topcoords - (winheight*.8))) {
					// animate when top of the window is 3/4 above the element
					$elm.addClass('active');
				} else {
					$elm.removeClass('active');
				}		
			}
			
		});
	} 
	
	
	function animate_elems_initial() {
		wintop = jQuery(window).height(); // calculate distance from top of window

		// loop through each item to check when it animates
		$elems.each(function(){
			$elm = jQuery(this);

			if($elm.hasClass('active')) { return true; } // if already animated skip to the next item

			topcoords = $elm.offset().top; // element's distance from top of page in pixels
			
		
			if(winheight > topcoords ) {
				// animate when top of the window is 3/4 above the element
				$elm.addClass('active');
			}	
			
		});
	} 
});

//Check width of window 767px
function windowWidth767(){
	if ( jQuery( window ).width() > 767 )
		return true;
	else
		return false
}

//Check width of window 767px
function windowWidth767(){
	if ( jQuery( window ).width() > 767 )
		return true;
	else
		return false
}
function closePopup(id){
	var elements = document.getElementById(id);
	elements.classList.remove("active");	
}

id_initial = '';
link_initial = '';
function openPopup(id){
	var elements = document.getElementById(id);
	// console.log(elements);
	id_initial = id+'-massage';
	link_initial = id+'-link';
	// console.log('openPopup');	
	// console.log('id_initial',id_initial);
	addClass(elements,"active");	
}
function openPopupMassage(id){
	var elements = document.getElementById(id);
	// console.log(elements);
	// console.log('openPopupMassage');	
	// console.log('id',id);	
	// console.log('id_initial',id_initial);	
	if(id_initial == id){
		// console.log('id_initial==id',id);	
		addClass(elements,"active");	
	}
}
function downloadLink(id){
	var elements = document.getElementById(id);
	// console.log(elements);
	// console.log('downloadLink');	
	// console.log('id',id);	
	// console.log('link_initial',link_initial);	
	if(link_initial == id){
		// console.log('link_initial==id',id);	
		document.getElementById(link_initial).click();
	}
}
function addClass(element, classname){
    var currentClassList = (element.className || '').split(/\s+/);
    currentClassList
     .push(currentClassList.indexOf(classname) > -1 ? '' : classname);
    element.className = currentClassList.join(' ').trim();
}
jQuery(function() {
	jQuery('.video-play-button').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		jQuery('.video-play-button .vid-popup').hide('slow', function(){ jQuery('.vid-popup').remove(); });
		active = false;
	});
});	

var active = false;
jQuery(document).ready(function(){
	jQuery('.video-play-button').click(function(){
		if (!active){
			var vid_frame = jQuery(this).attr('data-vid');
			console.log(vid_frame);
			if(vid_frame) {
				jQuery(this).parent().append('<div class="vid-popup"><div class="video-close-popup" onclick="videoclosepopup()"><svg style="fill: currentColor;" class="icon" xmlns="http://www.w3.org/2000/svg" width="15.828" height="15.828" viewBox="0 0 15.828 15.828"><g id="close-black" transform="translate(-505.586 -1939.086)"><line id="Line_70" data-name="Line 70" x2="13" y2="13" transform="translate(507 1940.5)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-width="2"/><line id="Line_71" data-name="Line 71" x1="12.5" y2="13" transform="translate(507.25 1940.5)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-width="2"/></g></svg></div><iframe src="' + vid_frame + '?rel=0;" allow="autoplay; encrypted-media"></div>'  ) 
				jQuery('.vid-popup').hide().show('slow');
				active = true;
			}
		}
	});
});
function videoclosepopup() {
	jQuery('.vid-popup').hide('slow', function(){ jQuery('.vid-popup').remove(); });
	active = false;
}

jQuery(function(){	
	jQuery('.mobile-categories-nav').click(function(){
		jQuery('.mobile-categories-nav .post-category').toggleClass('active');
	});
});


function copyToClipboard(element) {
	var $temp = jQuery("<input>");
	jQuery("body").append($temp);
    $temp.val(jQuery(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}