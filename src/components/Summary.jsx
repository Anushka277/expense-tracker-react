import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const data = [
  "Food",
  "Travel",
  "Shopping",
  "Bills",
]
  .map((category) => ({
    name: category,
    value: expenses
      .filter(
        (expense) =>
          expense.category === category
      )
      .reduce(
        (sum, expense) =>
          sum + expense.amount,
        0
      ),
  }))
  .filter((item) => item.value > 0);
  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <div className="card">
      <h2>Total Expenses</h2>

      <div className="total">
        ₹{total}
      </div>

      <PieChart width={320} height={220}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={75}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index % COLORS.length
                ]
              }
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Summary;