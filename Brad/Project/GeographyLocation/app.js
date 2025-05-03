
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };


  const success = (position) => {
    console.log('position', position.coords);
  }


  const error = (err) => {
    console.log('err', err);
  }
const test  = navigator.geolocation.getCurrentPosition(success, error, options);
console.log('test', test);