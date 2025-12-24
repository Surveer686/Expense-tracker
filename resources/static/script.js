function addExpense() {

    const expense = {
        category: document.getElementById("category").value,
        amount: document.getElementById("amount").value,
        type: document.getElementById("type").value,
        date: document.getElementById("date").value
    };

    fetch("/expenses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    })
    .then(response => response.json())
    .then(data => {
        alert("Expense added with ID: " + data.id);
    });
}

function getExpenses() {

    fetch("/expenses")
        .then(response => response.json())
        .then(data => {

            const list = document.getElementById("expenseList");
            list.innerHTML = "";

            data.forEach(expense => {
                const item = document.createElement("li");
                item.textContent =
                    expense.category + " - " +
                    expense.amount + " - " +
                    expense.type + " - " +
                    expense.date;
                list.appendChild(item);
            });
        });
        const item = document.createElement("li");
        item.textContent =
            expense.category + " - " +
            expense.amount + " - " +
            expense.type + " - " +
            expense.date;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteExpense(expense.id);

        item.appendChild(delBtn);
        list.appendChild(item);


}
function deleteExpense(id) {
    fetch(`/expenses/${id}`, {
        method: "DELETE"
    }).then(() => {
        getExpenses();
    });
}

