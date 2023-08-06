function Dest() {
    var destinationsTab = document.getElementById('dest');
    destinationsTab.style.display = 'block';
 }
  $(document).ready(function() {
  // Add hover effect on cards
  $('.card').hover(
    function() {
      $(this).addClass('card-hover');
    },
    function() {
      $(this).removeClass('card-hover');
    }
  );
});




 let latitude;
  let longitude;

  function getCurrentLocation() {
    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      alert("Geolocation is not available on this device.");
    }
  }

  function successCallback(position) {
    // Get the latitude and longitude from the position object
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    // Use the latitude and longitude variables as needed
    alert("Location stored successfully:\nLatitude: " + latitude + "\nLongitude: " + longitude);
  }

