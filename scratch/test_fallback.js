const countriesAtlas = require('world-atlas/countries-110m.json');
const { feature } = require('topojson-client');

const america = new Set([
  '840', '124', '484', '304', '320', '084', '84', '340', '222', '558', '188', '591',
  '192', '214', '332', '388', '044', '44', '630', '780', '032', '32', '068', '68',
  '076', '76', '152', '170', '218', '238', '254', '328', '600', '604', '740', '858', '862'
]);
const europe = new Set([
  '724', '620', '250', '276', '380', '826', '372', '056', '56', '528', '756', '040', '40',
  '616', '203', '703', '348', '642', '100', '300', '752', '578', '246', '208', '352', '233',
  '428', '440', '112', '804', '498', '688', '191', '070', '70', '008', '8', '807', '705',
  '499', '383', '442', '020', '20', '470', '196', '792', '643', '031', '31', '268', '051', '51'
]);
const africa = new Set([
  '818', '434', '788', '012', '12', '504', '732', '478', '466', '686', '270', '324', '624',
  '694', '430', '384', '288', '768', '204', '566', '562', '148', '729', '728', '232', '231',
  '262', '706', '140', '120', '226', '266', '178', '180', '800', '404', '646', '108', '834',
  '024', '24', '894', '716', '454', '508', '516', '072', '72', '710', '426', '748', '450'
]);
const oceania = new Set([
  '036', '36', '554', '598', '242', '090', '90', '548', '540'
]);

const asia = new Set([
  '682', '400', '376', '422', '634', '784', '414', '368', '364', '048', '48', '512', '887', // Middle East
  '156', '392', '410', '408', '356', '586', '050', '50', '704', '764', '360', '458', '702', // East/South/SE Asia
  '608', '116', '398', '860', '762', '795', '417', '760', '004', '4', '524', '064', '64', '144'
]);

const geojsonData = feature(countriesAtlas, countriesAtlas.objects.countries);

for (const feat of geojsonData.features) {
  const id = String(feat.id || '');
  let cont = 'unknown';
  if (america.has(id)) cont = 'america';
  else if (europe.has(id)) cont = 'europa';
  else if (africa.has(id)) cont = 'africa';
  else if (oceania.has(id)) cont = 'oceania';
  else if (asia.has(id)) cont = 'asia';
  else {
    // fallback test
    let firstCoord = [0, 0];
    if (feat.geometry.type === 'Polygon') firstCoord = feat.geometry.coordinates[0][0];
    else if (feat.geometry.type === 'MultiPolygon') firstCoord = feat.geometry.coordinates[0][0][0];
    const [lng, lat] = firstCoord;
    if (lng >= -20 && lng <= 55 && lat >= -36 && lat < 36) cont = 'FALLBACK_AFRICA (id: ' + id + ', coord: ' + lng + ',' + lat + ')';
    else cont = 'asia (fallback)';
  }
  if (cont.startsWith('FALLBACK_AFRICA')) {
    console.log('Unclassified country falling into Africa fallback:', cont);
  }
}
