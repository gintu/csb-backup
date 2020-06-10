class Department {
  private employee: string[];
  constructor(private readonly name: string) {
    this.employee = [];
  }

  describe() {
    console.log("the department is", this.name);
  }

  getEmployee() {
    console.log(this.employee);
  }
  setEmployee(emp: string) {
    this.employee.push(emp);
  }
}

let accounting = new Department("Accouunting");

// accounting.describe();

// let accountingCopy = new Department('AccountingCopy')

// accountingCopy={...accountingCopy,describe:accounting.describe}

// accountingCopy.describe()

// let accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe());

accounting.setEmployee("gintu");

console.log(accounting);
accounting.getEmployee();
