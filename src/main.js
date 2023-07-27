try {

  var latitude, longitude, altitude = undefined;

  function UpdateLocation() {
    navigator.geolocation.getCurrentPosition( async position => {

      latitude = await position.coords.latitude;
      longitude = await position.coords.longitude;
      altitude = await position.coords.altitude;

      document.getElementById('debug-info').innerHTML = `
      <h1>Longitude: ${longitude}, Latitude: ${latitude}</h1>
      <h1>Altitude: ${altitude}</h1>`;

      document.getElementById('map').innerHTML =
        `<iframe width="700" height="300" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`;
    }, error => { console.log('Error:', error); }, { enableHighAccuracy: true });
  }

  document.getElementById('update-location').onclick = UpdateLocation();

  document.getElementById('copy-location').onclick = () => {
    navigator.clipboard.writeText(`${latitude},${longitude},${altitude}`);
    alert('Location copied to clipboard!');
  }
}
catch (error) {
  console.log('Error', error);
}