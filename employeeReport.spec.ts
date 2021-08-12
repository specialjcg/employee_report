interface Employee {
  name: string;
  age: number;
}

const capitalize = (word: string) => {
  const chain = word.split('')
  const [first, ...rest] = chain;
  return [first.toUpperCase(), ...rest].join('');
}
const CompareByName = (first: Employee, second: Employee): number => second.name.localeCompare(first.name);

const capitalizeEmployee = (employee:Employee):Employee => ({name: capitalize(employee.name), age: employee.age});

const isAdult = (employee:Employee):boolean => employee.age >= 18;

const report = (employees: Employee[]): Employee[] => employees.filter(isAdult)
  .sort(CompareByName).map(capitalizeEmployee);

describe('test employee report', () => {
  it('should list employee ', () => {
    const employees: Employee[] = [{name: 'max', age: 17}, {name: 'sepp', age: 18}, {
      name: 'Nina',
      age: 15
    }, {name: 'Mike', age: 51},
    ]
    expect(report(employees)).toEqual<Employee[]>([{name: 'Sepp', age: 18},{name: 'Mike', age: 51} ])
  });

});
