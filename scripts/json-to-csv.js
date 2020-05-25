const fs = require("fs");
const data = require("../src/data/search-results");
const rows = [];

const header = data.searchResults[0].fields.map(({ key }) => key).join("|");

rows.push(header);

for (const { fields } of data.searchResults) {
  const row = fields.map(({ value }) => value).join("|");
  rows.push(row);
}

fs.writeFileSync(`${__dirname}/../src/data/raw.csv`, rows.join("\n"));
