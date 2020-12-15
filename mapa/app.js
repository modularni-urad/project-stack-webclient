/* global L */

function addPoint (point, map) {  
  var marker = L.marker([point.lat, point.lng], {icon: icon}).addTo(map);
  const content = JSON.stringify(point, null, 2)
  marker.bindPopup(content)
}

function pridejMapuProjektu (divid, startLat, startLng, backendURL) {

  var map = L.map(divid, {
    center: L.latLng(startLat, startLng),
    zoom: 14
  })
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
  
  var point = {
    lat: startLat,
    lng: startLng
  }
  addPoint(point, map)

  // axios.get(backendURL + '')
  // .then(function(res) {

  // })
  // .catch(function(err) {
  //   alert(err)
  // })
  
}

const myCustomColour = '#583470'

const markerHtmlStyles = `
  background-color: ${myCustomColour};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const icon = L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles}" />`
})