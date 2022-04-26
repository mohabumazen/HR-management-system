let data = JSON.parse(localStorage.getItem("data"));
let departments = ["Administration", "Marketing", "Development", "Finance"];
let table = document.querySelector("table");
let tableHeader = [
  "Department",
  "Number of employees",
  "Total Salaries",
  "Average",
];
let tableData = [];

function Department(departmentName, arr) {
  this.departmentName = departmentName;
  this.noOfEmployees = arr.filter(
    (ele) => ele.department == departmentName
  ).length;
  this.totalSalaries = arr
    .filter((ele) => ele.department == departmentName)
    .map((ele) => ele.netSalary)
    .reduce((acc, cur) => acc + cur, 0);
  this.averageSalaries = Math.floor(
    arr
      .filter((ele) => ele.department == departmentName)
      .map((ele) => ele.netSalary)
      .reduce((acc, cur) => acc + cur, 0) / this.noOfEmployees
  );
}

departments.forEach((ele) => {
  tableData.push(new Department(ele, data));
});

const renderTableHeader = (arr) => {
  let tableRow = document.createElement("tr");
  for (let i = 0; i <= arr.length - 1; i++) {
    let tableHeader = document.createElement("th");
    tableHeader.textContent = arr[i];
    tableRow.appendChild(tableHeader);
    table.appendChild(tableRow);
  }
};

const populateData = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let tableRow = document.createElement("tr");
    let department = document.createElement("td");
    let employeesCount = document.createElement("td");
    let totalSalaries = document.createElement("td");
    let averageSalaries = document.createElement("td");
    department.textContent = arr[i].departmentName;
    employeesCount.textContent = arr[i].noOfEmployees;
    totalSalaries.textContent = arr[i].totalSalaries;
    averageSalaries.textContent = arr[i].averageSalaries;
    tableRow.appendChild(department);
    tableRow.appendChild(employeesCount);
    tableRow.appendChild(totalSalaries);
    tableRow.appendChild(averageSalaries);
    table.appendChild(tableRow);
  }
  let totalEmployees = arr
    .map((ele) => ele.noOfEmployees)
    .reduce((acc, cur) => acc + cur, 0);

  let salariesTotal = arr
    .map((ele) => ele.totalSalaries)
    .reduce((acc, cur) => acc + cur, 0);

  let total = [
    "Total",
    totalEmployees,
    salariesTotal,
    Math.floor(salariesTotal / totalEmployees),
  ];

  let tableRow = document.createElement("tr");
  let department = document.createElement("td");
  let employeesCount = document.createElement("td");
  let totalSalaries = document.createElement("td");
  let averageSalaries = document.createElement("td");
  department.textContent = total[0];
  employeesCount.textContent = total[1];
  totalSalaries.textContent = total[2];
  averageSalaries.textContent = total[3];
  tableRow.appendChild(department);
  tableRow.appendChild(employeesCount);
  tableRow.appendChild(totalSalaries);
  tableRow.appendChild(averageSalaries);
  table.appendChild(tableRow);
};
renderTableHeader(tableHeader);
populateData(tableData);

console.log(tableData);