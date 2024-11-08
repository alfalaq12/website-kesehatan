function initMap() {
    // Latitude dan Longitude STIKES Jombang
    var myLatLng = {lat: -7.5704, lng: 112.2251};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'STIKES Jombang' // Judul Lokasi
    });
}