function getEmployeeDetails() {

    let empName = prompt("Enter Employee Name:");
    let basicSalary = Number(prompt("Enter Basic Monthly Salary:"));
    let workingDays = Number(prompt("Enter Number of Working Days:"));
    let bonus = Number(prompt("Enter Bonus Amount:"));

    let totalDays = 30;
    let grossSalary, tax, netSalary;

    function calculateGrossSalary() {
        let perDaySalary = basicSalary / totalDays;
        let earnedSalary = perDaySalary * workingDays;
        grossSalary = earnedSalary + bonus;
    }

    function calculateTax() {
        if (grossSalary <= 25000) {
            tax = grossSalary * 0.05;
        } else {
            tax = grossSalary * 0.10;
        }
    }

    function calculateNetSalary() {
        netSalary = grossSalary - tax;
    }

    // Call functions
    calculateGrossSalary();
    calculateTax();
    calculateNetSalary();

    // DOM output instead of document.writeln
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <p><strong>Employee Name:</strong> {empName}</p>
        <p><strong>Gross Salary:</strong> {grossSalary}</p>
        <p><strong>Tax Deduction:</strong> {tax}</p>
        <p><strong>Net Salary:</strong>  {netSalary}</p>
    `;
}