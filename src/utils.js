function constructBirthDate(fields) {
  const year = fields.find((x) => x.key === "YearOfBirth")?.value;
  const month = fields.find((x) => x.key === "BirthMonth")?.value;
  const day = fields.find((x) => x.key === "BirthDay")?.value;

  return `${day}/${month}/${year}`;
}

function sortSearchResults(searchResults, { direction, column }) {
  if (column !== "FirstName") {
    return searchResults;
  }
  return searchResults.sort((a, b) => {
    const aName = a.fields.find((x) => x.key === "FirstName")?.value;
    const bName = b.fields.find((x) => x.key === "FirstName")?.value;
    return aName.localeCompare(bName);
  });
}

export { constructBirthDate, sortSearchResults };
