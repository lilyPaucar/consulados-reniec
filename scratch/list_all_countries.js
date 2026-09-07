const fs = require('fs');

const content = fs.readFileSync('src/app/data/consulados-data.ts', 'utf8');
const match = content.match(/export const CONTINENTS_DATA: ContinentData\[\] = (\[[\s\S]*?\]);\s*export const/);
const cleaned = match[1].replace(/0x([0-9a-fA-F]+)/g, (m, p) => parseInt(p, 16));
const continents = JSON.parse(cleaned);

const allCountries = [];
for (const cont of continents) {
  for (const country of cont.countries) {
    allCountries.push({
      continent: cont.name,
      continentId: cont.id,
      color: cont.color,
      name: country.name,
      flag: country.flag,
      cities: country.cities.map(c => ({ name: c.city, lat: c.lat, lng: c.lng }))
    });
  }
}

console.log('Total countries:', allCountries.length);
console.log(JSON.stringify(allCountries, null, 2));
