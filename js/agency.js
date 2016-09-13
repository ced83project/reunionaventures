function initMap() {

    //var myLatLng = {lat: -21.115141, lng: 55.536384};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -21.115141, lng: 55.536384},
      scrollwheel: false,
      zoom: 11 
    });
    
    $.getJSON("/locations.json", function(json1) {
      $.each(json1, function(key, data) {
      
        // Create the latLng
        var latLng = new google.maps.LatLng(data.lat, data.lng);         
      
        // Creating the icon
        var pinColor = data.color;
        var pinLetter = data.letter;
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + pinLetter + "|" + pinColor,
          new google.maps.Size(21, 34),
          new google.maps.Point(0,0),
          new google.maps.Point(10, 34));
        
        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            title: data.title,
            icon: pinImage
        });
        
        // Creating the info Windows
        var contentString = '<span>'+ data.name +'</span>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
        // Add the infoWindow listener
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        
        // Add the marker to the map
        marker.setMap(map);
        
      });
    }).error(function(jqXhr, textStatus, error) {
        console.log("ERROR: " + textStatus + ", " + error);
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
