import { sortByDate } from './utils';

const testArray = [
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

describe('sortByDate', function() {
  it('ascending', function() {
    const actual = sortByDate(testArray, 'asc');
    expect(actual[0].fields.find(x => x.key === 'LastName')?.value).toBe(
      'Bake'
    );
    expect(actual[1].fields.find(x => x.key === 'LastName')?.value).toBe('Bay');
    expect(actual[2].fields.find(x => x.key === 'LastName')?.value).toBe(
      'Buckley'
    );
    expect(actual[3].fields.find(x => x.key === 'LastName')?.value).toBe(
      'Bean'
    );
  });
  it('descending', function() {
    const actual = sortByDate(testArray, 'desc');
    expect(actual[0].fields.find(x => x.key === 'LastName')?.value).toBe(
      'Bake'
    );
    expect(actual[1].fields.find(x => x.key === 'LastName')?.value).toBe('Bay');
    expect(actual[2].fields.find(x => x.key === 'LastName')?.value).toBe(
      'Buckley'
    );
    expect(actual[3].fields.find(x => x.key === 'LastName')?.value).toBe(
      'Bean'
    );
  });
});
