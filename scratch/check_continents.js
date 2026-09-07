const fs = require('fs');

const content = fs.readFileSync('src/app/data/consulados-data.ts', 'utf8');

const match = content.match(/export const CONTINENTS_DATA: ContinentData\[\] = (\[[\s\S]*?\]);\s*export const/);
if (!match) {
  console.log('Could not find CONTINENTS_DATA block');
  process.exit(1);
}

const cleaned = match[1].replace(/0x([0-9a-fA-F]+)/g, (m, p) => parseInt(p, 16));
const continents = JSON.parse(cleaned);
console.log('Found continents:', continents.length);

for (const cont of continents) {
  console.log(`\n========================================`);
  console.log(`CONTINENT: ${cont.name} (id: ${cont.id}, color: ${cont.color})`);
  console.log(`Total countries: ${cont.countries.length}`);
  for (const country of cont.countries) {
    const cities = country.cities.map(c => `${c.city} (${c.lat}, ${c.lng})`).join(', ');
    console.log(`  - [${country.name}] (${country.cities.length} sedes): ${cities}`);
  }
}
