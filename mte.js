function calculateBudget() {

    let salary = Number(document.getElementById("salary").value);

    let food = salary * 20 / 100;
    let transport = salary * 15 / 100;
    let rent = salary * 30 / 100;
    let saving = salary * 35 / 100;

    document.getElementById("foodBudget").textContent = food;
    document.getElementById("transportBudget").textContent = transport;
    document.getElementById("rentBudget").textContent = rent;
    document.getElementById("savingBudget").textContent = saving;
}
function addExpense() {
    let amount = Number(document.getElementById("expenseAmount").value);
     let category = document.getElementById("expenseCategory").value;
     let date = document.getElementById("expenseDate").value;
    let description = document.getElementById("expenseDescription").value;

     if (amount <= 0 || category == "" || date == "" || description == "") {
        alert("Please fill all fields correctly");
        return;
    }

    console.log("Amount:", amount);
    console.log("Category:", category);
    console.log("Date:", date);
    console.log("Description:", description);

    alert("Expense added successfully!");
}
