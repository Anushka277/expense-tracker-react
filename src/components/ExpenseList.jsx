function ExpenseList({
    expenses,
    deleteExpense,
}) {
    return (
        <div className="card">
            <h2>All Expenses</h2>

            {expenses.length === 0 ? (
                <p>No expenses found</p>
            ) : (
                expenses.map((expense) => (
                    <div
                        key={expense.id}
                        className="expense-item"
                    >
                        <div className="expense-info">
                            <h3>{expense.title}</h3>

                            <p>
                                {expense.category} • ₹
                                {expense.amount}
                            </p>

                            <p>
                                {expense.date}
                            </p>
                        </div>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                deleteExpense(expense.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ExpenseList;