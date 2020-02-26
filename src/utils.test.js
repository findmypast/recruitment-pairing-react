import { sortByDate, constructBirthDate } from './utils';

describe('constructBirthDate', () => {
  const testSearchResults = [
    {
      fields: [
        {
          key: 'LastName',
          value: 'Buckley'
        },
        {
          key: 'YearOfBirth',
          value: '1990'
        },
        {
          key: 'BirthMonth',
          value: '6'
        },
        {
          key: 'BirthDay',
          value: '1'
        }
      ]
    },
    {
      fields: [
        {
          key: 'LastName',
          value: 'Bean'
        },
        {
          key: 'YearOfBirth',
          value: '1991'
        },
        {
          key: 'BirthMonth',
          value: '6'
        },
        {
          key: 'BirthDay',
          value: '1'
        }
      ]
    },
    {
      fields: [
        {
          key: 'LastName',
          value: 'Bay'
        },
        {
          key: 'YearOfBirth',
          value: '1990'
        },
        {
          key: 'BirthMonth',
          value: '5'
        },
        {
          key: 'BirthDay',
          value: '2'
        }
      ]
    },
    {
      fields: [
        {
          key: 'LastName',
          value: 'Bake'
        },
        {
          key: 'YearOfBirth',
          value: '1990'
        },
        {
          key: 'BirthMonth',
          value: '5'
        },
        {
          key: 'BirthDay',
          value: '1'
        }
      ]
    }
  ];

  it("Should format correctly for 1/6/1990", () => {
    const result = constructBirthDate(testSearchResults[0].fields);
    expect(result).toBe("1/6/1990");
  })

  it("Should format correctly for 1/6/1991", () => {
    const result = constructBirthDate(testSearchResults[1].fields);
    expect(result).toBe("1/6/1991");
  })

  it("Should format correctly for 2/5/1990", () => {
    const result = constructBirthDate(testSearchResults[2].fields);
    expect(result).toBe("2/5/1990");
  })
})


describe.skip('sortByDate', function() {
  const testSearchResults = [
    {
      fields: [
        {
          key: 'LastName',
          value: 'Buckley'
        },
        {
          key: 'YearOfBirth',
          value: '1990'
        },
        {
          key: 'BirthMonth',
          value: '6'
        },
        {
          key: 'BirthDay',
          value: '1'
        }
      ]
    },
    {
      fields: [
        {
          key: 'LastName',
          value: 'Bean'
        },
        {
          key: 'YearOfBirth',
          value: '1991'
        },
        {
          key: 'BirthMonth',
          value: '6'
        },
        {
          key: 'BirthDay',
          value: '1'
        }
      ]
    },
    {
      fields: [
        {
          key: 'LastName',
          value: 'Bay'
        },
        {
          key: 'YearOfBirth',
          value: '1990'
        },
        {
          key: 'BirthMonth',
          value: '5'
        },
        {
          key: 'BirthDay',
          value: '2'
        }
      ]
    },
    {
      fields: [
        {
          key: 'LastName',
          value: 'Bake'
        },
        {
          key: 'YearOfBirth',
          value: '1990'
        },
        {
          key: 'BirthMonth',
          value: '5'
        },
        {
          key: 'BirthDay',
          value: '1'
        }
      ]
    }
  ];

  it('ascending', function() {
    
  });
  it('descending', function() {

  });
});
