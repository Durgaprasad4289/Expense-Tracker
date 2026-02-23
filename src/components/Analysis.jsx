import { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import "chart.js/auto"

const STORAGE_KEY = "expense_tracker_data_v1";

function Analysis() {
    const [incomedata, setIncomeData] = useState(null);
    const [expensedata, setExpenseData] = useState(null);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        if (savedData.Income && savedData.Income.history) {
            const IncomeLineData = {
                labels: savedData.Income.history.map((_, index) => `Entry ${index + 1}`),
                datasets: [
                    {
                        label: "Income Analysis",
                        data: savedData.Income.history,
                        borderColor: "#10b981",
                        backgroundColor: "#10b9811a",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: "#10b981",
                        borderWidth: 3
                    }
                ]
            }; 
            setIncomeData(IncomeLineData);
        }
        if (savedData.Expense && savedData.Expense.history) {
            const ExpenseLineData = {
                labels: savedData.Expense.history.map((_, index) => `Entry ${index + 1}`),
                datasets: [
                    {
                        label: "Expense Analysis",
                        data: savedData.Expense.history,
                        borderColor: "#de2c11ff",
                        backgroundColor: "#de2c111a",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: "#de2c11ff",
                        borderWidth: 3
                    }
                ]
            };
            setExpenseData(ExpenseLineData);
        }
    }, []);
    


    return (
        <div className="analysis-container">
            <h1>Income Analysis</h1>
            {incomedata ? <Line data={incomedata} /> : <p>No data available</p>}
            <h1>Expense Analysis</h1>
            {expensedata ? <Line data={expensedata} /> : <p>No data available</p>}
        </div>
    )
}
export default Analysis