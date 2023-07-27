try {

  document.getElementById('copy-location').onclick = () => {
    navigator.clipboard.writeText(`${latitude},${longitude},${altitude}`);
    alert('Location copied to clipboard!');
  }

  const rooms = {
    'A1-01': [ 100, 256 ],
    'B3-05': [ 200, 512 ]
  }

  navigator.geolocation.getCurrentPosition( async position => {

    const altitude = await position.coords.altitude;

    document.getElementById('debug-info').innerHTML = `
      <h1>Altitude: ${altitude}</h1>`;

    const { latitude, longitude } = await position.coords;

    const html = `<iframe width="700" height="300" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`;
    console.log('HTML:', html);

    document.getElementById('map').innerHTML = html;
    
    console.log('Location:', latitude, longitude);
  }, error => { console.log('Error:', error); }, { enableHighAccuracy: true });
}
catch (error) {
  console.log('Error:', error);
}


// async () => {
//   try {

//   navigator.geolocation.getCurrentPosition( position => {
//     await const { latitude, longitude } = position.coords;

//     console.log(position.coords);

//     // document.getElementById('map').innerHTML = `
//     //  <iframe width="700" height="300" src="https://maps.google.com/maps
//     //  ?q=${latitude},${longitude}&amp;z=15&amp;output=embeded"></iframe>`;

//     document.getElementById('map').innerHTML = `
//       <iframe width="700" height="300" src="https://maps.google.com/maps
//       ?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`;
//   });
// }
// catch (err) {
//   console.log('Error:', err);
// }
// }








// var geoLocation, geoSpeed, geoHeading, geoAltitude;

// document.getElementById('update-location').onclick = UpdateLocation();

// function UpdateLocation() {

//   var latitude, longitude;

//   navigator.geolocation.getCurrentPosition( (position) => {

//     let { latitude, longitude } = position.coords;

//     console.log('Location:', position.coords);

//     console.log('Latitude:', latitude, 'Longitude:', longitude);
//     console.log('Speed:', position.coords.speed);
//     console.log('Heading:', position.coords.heading);
//     console.log('Altitude:', position.coords.altitude);
//     console.log('Accuracy', position.coords.accuracy);
//   });

//   document.getElementById('map').innerHTML = `
//     <iframe width="700" height="300" src="https://maps.google.com/maps
//     ?q=${latitude},${longitude}&amp;z=15&amp;output=embeded"></iframe>`;
  
//   UpdateDebug();

// }

// function UpdateDebug() {

//   document.getElementById('debug-info').innerHTML += `
//     <h3>Location: ${geoLocation}</h3>
//     <h3>Speed: ${geoSpeed}</h3>
//     <h3>Heading: ${geoHeading}</h3>
//     <h3>Altitude: ${geoAltitude}</h3>
//     `;
// }


// try {

//   navigator.geolocation.getCurrentPosition(
//     (position) => { console.log('Location', position); },
//     () => { console.log('Error, was unable to fetch location!'); }
//     );

// }
// catch (err) {
//   console.log('Error:', err);
// }