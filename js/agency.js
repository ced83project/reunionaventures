/*!
 * Outdoor eXperience v1.0.0 
 * Copyright 2016
 *
 */
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
                  
jQuery(document).ready(function($) {

    // ---------- Parallax Effect
    $('#header').css({'background-image': 'url(./img/Ile-de-la-Reunion.jpg'});
    $('#header').parallax("100%", 0.3);
    
    //$('#header-img-1').css({'background-image': 'url(./img/Ile-de-la-Reunion.jpg'});
    //$('#header-img-2').css({'background-image': 'url(./img/carousel/001.jpg'});
    //$('#header-img-3').css({'background-image': 'url(./img/carousel/006.jpg'});
    //$('#header-img-4').css({'background-image': 'url(./img/carousel/002.jpg'});
    //$('#header-img-1').parallax("100%", 0.3);
    //$('#header-img-2').parallax("100%", 0.3);
    //$('#header-img-3').parallax("100%", 0.3);
    //$('#header-img-4').parallax("100%", 0.3);
    
    $('#slide-img-1').css({'background-image': 'url(./img/carousel/001.jpg'});
    $('#slide-img-2').css({'background-image': 'url(./img/carousel/006.jpg'});
    $('#slide-img-3').css({'background-image': 'url(./img/carousel/002.jpg'});
    //$('#slide-img-1').parallax("100%", 0.3);
    //$('#slide-img-2').parallax("100%", 0.3);
    //$('#slide-img-3').parallax("100%", 0.3);
    
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
    
    // ---------- Wow Effect
    //new WOW().init();
    
    // ---------- Show Header on Scroll-Up
    
    // Primary navigation slide-in effect
    var headerHeight = $('.navbar-custom').height();
    $(window).on('scroll', { previousTop: 0 },
    function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    $('.navbar-custom').addClass('is-visible');
                    $('.navbar-custom').removeClass('is-hidden');
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    $('.navbar-custom').addClass('is-hidden');
                }
                this.previousTop = currentTop;
    });
    
    $('[data-toggle="tooltip"]').tooltip();
    
});
