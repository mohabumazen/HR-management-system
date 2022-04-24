function Employee(id, fullName, department, level) {
    this.employeeId = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    thisimageURL = `../assets/${id}.png`
    this.salary = () => {
        if (this.level.toLowerCase() == "senior") {
            return Math.floor(Math.random() * (2000 - 1500) + 1500)
        } else if (this.level.toLowerCase() == "mid-senior") {
            return Math.floor(Math.random() * (1500 - 1000) + 1000)
        } else if (this.level.toLowerCase() == "junior") {
            return Math.floor(Math.random() * (1000 - 500) + 500)
        }
    }
    this.netSalary = Math.floor(this.salary() * 0.925)
}

export default Employee