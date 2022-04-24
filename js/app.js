let employees = [];
let renderedData = [];
let submit = document.querySelector("#btn");
let main = document.querySelector(".mainData");

function Employee(id, fullName, department, level, img) {
  this.employeeId = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = img;
  this.netSalary = Math.floor(this.salary() * 0.925);
  employees.push(this);
}

Employee.prototype.salary = function () {
  if (this.level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500) + 1500);
  } else if (this.level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000) + 1000);
  } else if (this.level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500) + 500);
  }
};

employees = [];

function idGenerator(employee) {
    let IdArray = employee.map((ele) => ele.employeeId);
    do {
        for (let i = 0; i < IdArray.length; i++) {
            if (IdArray[i] < 1000 || IdArray[i] > 9999) {
                employee[i].employeeId = Math.floor(
                    Math.random() * (9999 - 1000) + 1000
                );
            }
        }
    } while (IdArray == [...new Set(IdArray)]);
}

