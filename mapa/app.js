/* global L */

function pridejMapuProjektu (divid, startLat, startLng, startZoom, backendURL) {

  var map = L.map(divid, {
    center: L.latLng(startLat, startLng),
    zoom: startZoom
  })

  function _makePopupHTML (p) {
    return '<div><h1>' + p.nazev + '</h1><p>' + p.popis + '</p>'
      + '<p>Cena: ' + p.cena + '</p>'
      + '<p>Stadium: ' + p.stadium + '</p></div>'
  }

  function addPoint (point) {
    var poloha = point.poloha.split(',');
    var marker = L.marker(poloha, {icon: getIcon(point.zanr)}).addTo(map);
    marker.bindPopup(_makePopupHTML(point));
  }
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  axios.get(backendURL + '')
  .then(function(res) {
    res.data.map(addPoint)
  })
  .catch(function(err) {
    alert(err)
  })
  
}

var colors = {
  'ziv_pros': '#00ff00',
  'doprava': '#483737',
  'bydleni': '#0000ff',
  'sprava': '#ffff00',
  'social': '#c10000',
  'kultura': '#808000',
  'volnycas': '#585470'
}

const icons = {}

function getIcon (zanr) {
  if (icons[zanr]) { return icons[zanr] }

  const markerHtmlStyles = `
    background-color: ${colors[zanr] || 'red'};
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
  icons[zanr] = icon
  return icon
}

