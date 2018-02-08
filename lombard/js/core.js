$(function(){
	function initMap() {
		var coords = {
			lat: 49.844406852391835,
			lng: 24.020223766565323
		};
	    var mapOptions = {
	        center: new google.maps.LatLng(coords),
	        zoom: 17,
	        mapTypeId: 'roadmap',
  			gestureHandling: 'greedy'
	    }
		var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

		  var marker = new google.maps.Marker({
		    position: coords,
		    map: map
		  });
	}
	initMap();

    $( ".tabs" ).tabs();

    $(".about-company-link").on("click", function(event){
    	event.preventDefault();
    	window.scroll({
		  top: 400, 
		  left: 0, 
		  behavior: 'smooth' 
		});
    });

    $(".contact-link").on("click", function(event){
    	event.preventDefault();
    	window.scroll({
		  top: 900, 
		  left: 0, 
		  behavior: 'smooth' 
		});
    });

    $(".find-us-link").on("click", function(event){
    	event.preventDefault();
    	window.scroll({
		  top: 1300, 
		  left: 0, 
		  behavior: 'smooth' 
		});
    });
});

