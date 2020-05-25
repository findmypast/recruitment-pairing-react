import { sortSearchResults, constructBirthDate } from "./utils";

const testSearchResults = [
  {
    fields: [
      {
        key: "FirstName",
        value: "Boris"
      },
      {
        key: "LastName",
        value: "Buckley"
      },
      {
        key: "YearOfBirth",
        value: "1990"
      },
      {
        key: "BirthMonth",
        value: "6"
      },
      {
        key: "BirthDay",
        value: "1"
      }
    ]
  },
  {
    fields: [
      {
        key: "FirstName",
        value: "Alex"
      },
      {
        key: "LastName",
        value: "Bean"
      },
      {
        key: "YearOfBirth",
        value: "1991"
      },
      {
        key: "BirthMonth",
        value: "6"
      },
      {
        key: "BirthDay",
        value: "1"
      }
    ]
  },
  {
    fields: [
      {
        key: "FirstName",
        value: "Derek"
      },
      {
        key: "LastName",
        value: "Bay"
      },
      {
        key: "YearOfBirth",
        value: "1990"
      },
      {
        key: "BirthMonth",
        value: "10"
      },
      {
        key: "BirthDay",
        value: "2"
      }
    ]
  },
  {
    fields: [
      {
        key: "FirstName",
        value: "Charlie"
      },
      {
        key: "LastName",
        value: "Bake"
      },
      {
        key: "YearOfBirth",
        value: "1990"
      },
      {
        key: "BirthMonth",
        value: "10"
      },
      {
        key: "BirthDay",
        value: "1"
      }
    ]
  }
];

describe("constructBirthDate", () => {
  it("Should format correctly for 1/6/1990", () => {
    const result = constructBirthDate([...testSearchResults][0].fields);
    expect(result).toBe("1/6/1990");
  });

  it("Should format correctly for 1/6/1991", () => {
    const result = constructBirthDate([...testSearchResults][1].fields);
    expect(result).toBe("1/6/1991");
  });

  it("Should format correctly for 2/5/1990", () => {
    const result = constructBirthDate([...testSearchResults][2].fields);
    expect(result).toBe("2/10/1990");
  });
});

describe("sortSearchResults", function () {
  it("ascending", function () {
    const [a, b, c, d] = sortSearchResults([...testSearchResults], {
      direction: "ascending",
      column: "FirstName"
    });
    const pickFirstName = (fields, keyName) =>
      fields.find(({ key }) => key === "FirstName").value;
    expect(pickFirstName(a.fields)).toBe("Alex");
    expect(pickFirstName(b.fields)).toBe("Boris");
    expect(pickFirstName(c.fields)).toBe("Charlie");
    expect(pickFirstName(d.fields)).toBe("Derek");
  });
  it.skip("descending", function () {});
});
