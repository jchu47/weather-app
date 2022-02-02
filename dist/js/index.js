import CurrentLocation from "./CurrentLocation";
const currentLoc = new CurrentLocation();


const initApp {

  const geoButton = document.getElementById('getLocation');
  getButton.addEventListener('click', getGeoWeather);
}

document.addEventListener('DOMContentLoaded', initApp);

const getGeoWeather = (e) => {
  if (e) {
    if (e.type === 'click'){
      const mapIcon = document.querySelector('fas fa-search-location')
      addSpinner(mapIcon);
    }
  } if (!navigator.getlocation) {return getError()};
  navigator.geolocation.getCurrentPosition(getSuccess, geoError);
}