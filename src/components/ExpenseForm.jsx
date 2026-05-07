import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <button type="submit">
          Add Expense
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;