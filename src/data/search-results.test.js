describe("Search results data validation", () => {
  it("validates my json", () => {
    const data = require("./search-results.json");

    for (const { fields } of data.searchResults) {
      const pick = (key) => fields.find((x) => x.key === key).value;
      expect(pick("LastName")).toBeTruthy();
      expect(pick("FirstName")).toBeTruthy();
      expect(pick("YearOfBirth")).toBeTruthy();
      expect(pick("DisplayAddress")).toBeTruthy();
      expect(pick("BirthMonth")).toBeTruthy();
      expect(pick("BirthDay")).toBeTruthy();
    }
  });
});
