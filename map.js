import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

console.log('Mapbox GL JS Loaded:', mapboxgl);

mapboxgl.accessToken = 'pk.eyJ1IjoieHh6aGFuZ3p6eCIsImEiOiJjbXA3d2JtcDYwN3JsMnNwdGQ3aGwyOWpoIn0.vPBp2gND5xjxIjqDDX_Z4Q';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/xxzhangzzx/cmp7wxee7005l01sna9dchv7o',
  center: [-71.09415, 42.36027],
  zoom: 12,
  minZoom: 5,
  maxZoom: 18,
});