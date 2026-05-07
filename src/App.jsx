import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];
  });

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(id) {
    const updatedExpenses =
      expenses.filter(
        (expense) => expense.id !== id
      );

    setExpenses(updatedExpenses);
  }

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category === filter
        );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <div className="card">
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
        </select>
      </div>

      <Summary expenses={expenses} />

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;