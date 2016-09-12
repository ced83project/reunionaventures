function initMap() {

    //var myLatLng = {lat: -21.115141, lng: 55.536384};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -21.115141, lng: 55.536384},
      scrollwheel: false,
      zoom: 10 
    });
    
    $.getJSON("locations.json", function(json1) {
      $.each(json1, function(key, data) {
        var latLng = new google.maps.LatLng(data.lat, data.lng); 
        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            title: data.title
        });
        marker.setMap(map);
      });
    });
        
    /*
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });
    */
}
                  
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('[data-toggle="tooltip"]').tooltip();
    
/*    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Top Navigation
    $('#topNav').affix({
        offset: {
            top: 100
        }
    })
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
*/
})(jQuery); // End of use strict
