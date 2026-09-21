let title="welcpome to monthly expese tracker";
alert(title)

function getsalary(){
     let salary = document.getElementById("salary").value;
     console.log(salary);
}
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
