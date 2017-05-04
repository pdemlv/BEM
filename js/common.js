// set different timeout of carousels
$(function(){
    $('#creative-design__carousel').carousel({
      interval: 20000
    });
    $('#our-products__carousel').carousel({
      interval: 12000
    });
});

//map
 function initMap() {
        var uluru = {lat: 49.843668, lng: 24.026369};  
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

//smooth scrolling
$('.dropdown-toggle').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top -70;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

//menu items highlight on scroll
var skBar = true;
$(window).scroll(function() {
   var hTHome = $('#home').offset().top,
       hHHome = $('#home').outerHeight(),
       hTProducts = $('#products').offset().top,
       hHProducts = $('#products').outerHeight(),
       hTAbout = $('#about').offset().top,
       hHAbout = $('#about').outerHeight(),
       hTContact = $('#contact').offset().top,
       hHContact = $('#contact').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   	if (wS > (hTHome+hHHome-wH)){
       $('#aHome').css('font-weight', '700');
       $('#aProducts').css('font-weight', '300');
       $('#aAbout').css('font-weight', '300');
       $('#aContact').css('font-weight', '300');
   	}
	if (wS > (hTProducts+hHProducts-wH)){
       $('#aHome').css('font-weight', '300');
       $('#aProducts').css('font-weight', '700');
       $('#aAbout').css('font-weight', '300');
       $('#aContact').css('font-weight', '300');
   	}
   	if (wS > (hTAbout+hHAbout-wH)){
       $('#aHome').css('font-weight', '300');
       $('#aProducts').css('font-weight', '300');
       $('#aAbout').css('font-weight', '700');
       $('#aContact').css('font-weight', '300');
       if (skBar){
       		$('.skillbar').each(function(){
			$(this).find('.skillbar__bar').animate({
				width:jQuery(this).attr('data-percent')
			},3000);
			});
			skBar = false;
        	}
      	}
   	if (wS > (hTContact+hHContact-wH)){
       $('#aHome').css('font-weight', '300');
       $('#aProducts').css('font-weight', '300');
       $('#aAbout').css('font-weight', '300');
       $('#aContact').css('font-weight', '700');
   	}
});