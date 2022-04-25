let employees = [];
let submit = document.querySelector("#btn");

function Employee(id, fullName, department, level, img) {
  this.employeeId = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = img;
  this.netSalary = Math.floor(this.salary() * 0.925);
  employees.push(this);
}

Employee.prototype.salary = function() {
  if (this.level.toLowerCase() == "senior") {
    return Math.floor(Math.random() * (2000 - 1500) + 1500);
  } else if (this.level.toLowerCase() == "mid-senior") {
    return Math.floor(Math.random() * (1500 - 1000) + 1000);
  } else if (this.level.toLowerCase() == "junior") {
    return Math.floor(Math.random() * (1000 - 500) + 500);
  } 
};

employees = [
  new Employee(
    1000,
    "Ghazi Samer",
    "Adminstration",
    "Senior",
    "assets/Ghazi.jpg"
  ),
  new Employee(
    1001,
    "Lana Ali",
    "Finance",
    "Senior",
    "assets/Lana.jpg"
  ),
  new Employee(
    1002,
    "Tamara Ayoub",
    "Marketing",
    "Senior",
    "assets/Tamara.jpg"
  ),
  new Employee(
    1003,
    "Safi Walid",
    "Adminstration",
    "Mid-Senior",
    "assets/Safi.jpg"
  ),
  new Employee(
    1004,
    "Omar Zaid",
    "Development",
    "Senior",
    "assets/Omar.jpg"
  ),
  new Employee(
    1005,
    "Rana Saleh",
    "Development",
    "Junior",
    "assets/Rana.jpg"
  ),
  new Employee(
    1006,
    "Hadi Ahmad",
    "Finance",
    "Mid-Senior",
    "assets/Hadi.jpg"
  ),
  
];

let main = document.querySelector(".mainData");

const idGenerator = (employee) => {
  let IdArray = employee.map((ele) => ele.employeeId);
  do {
    for (let i = 0; i < IdArray.length; i++) {
      if (IdArray[i] < 1000) {
        employee[i].employeeId = Math.floor(
          Math.random() * (9999 - 1000) + 1000
        );
      }
    }
  } while (IdArray == [...new Set(IdArray)]);

};

Employee.prototype.render = function () {
  let div = document.createElement("div");
  let childDiv = document.createElement("div");
  let employeeImage = document.createElement("img");
  let employeeName = document.createElement("h4");
  let employeeId = document.createElement("h4");
  let employeeDepartment = document.createElement("h3");
  let employeeLevel = document.createElement("h3");
  let employeeSalary = document.createElement("h2");
  employeeImage.setAttribute("src", this.imageURL);
  employeeName.textContent = `Employee: ${this.fullName}`;
  employeeId.textContent = `ID: ${this.employeeId}`;
  employeeDepartment.textContent = `Department: ${this.department}`;
  employeeLevel.textContent = `Level: ${this.level}`;
  employeeSalary.textContent = `Net Salary: ${this.netSalary}`;
  childDiv.appendChild(employeeId);
  childDiv.appendChild(employeeName);
  childDiv.appendChild(employeeLevel);
  childDiv.appendChild(employeeDepartment);
  childDiv.appendChild(employeeSalary);
  div.appendChild(employeeImage);
  div.appendChild(childDiv);
  div.classList.add("employee-card");
  return div;
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let fullName = event.target.form[0].value;
  let department = event.target.form[1].value;
  let level = event.target.form[2].value;
  let imageUrl = event.target.form[3].value;
  let newEmployee = new Employee(0, fullName, department, level, imageUrl);
  idGenerator(employees);
  main.appendChild(newEmployee.render());
});

employees.forEach((ele) => {
  main.appendChild(ele.render());
});