function initMap() {
    var myLatLng = {
        lat: 22.606448,
        lng: 120.301208
    };

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: myLatLng.lat,
            lng: myLatLng.lng
        },
        zoom: 17,
        disableDefaultUI: true // 停用預設 UI
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng
    });

    // 資訊視窗
    var infowindow = new google.maps.InfoWindow({
        content: '<div id="mapInfo">六角西餐廳</div>'
    })
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}