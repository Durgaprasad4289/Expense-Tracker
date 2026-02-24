import { useState, useEffect, use } from "react"
import { Line, Pie } from "react-chartjs-2"
import "chart.js/auto"
import "./Analysis.css";

const STORAGE_KEY = "expense_tracker_data_v1";

function Analysis() {
    const [incomedata, setIncomeData] = useState(null);
    const [expensedata, setExpenseData] = useState(null);

    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    const [IncomePieData, setIncomePieData] = useState(null);
    const [ExpensePieData, setExpensePieData] = useState(null);

    useEffect(() => {
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
    
    useEffect(() => {
        if (savedData.Income && savedData.Income.history) {
            const IncomePieData = {
                labels: savedData.Income.IncomeType,
                datasets: [
                    {
                        data: savedData.Income.history,
                        backgroundColor: [
                            "#10b981",
                            "#3b82f6",
                            "#f59e0b",
                            "#ef4444",
                            "#8b5cf6"
                        ]
                    }
                ]
            };
            setIncomePieData(IncomePieData);
        }
        if (savedData.Expense && savedData.Expense.history) {
            const ExpensePieData = {
                labels: savedData.Expense.ExpenseType,
                datasets: [
                    {
                        data: savedData.Expense.history,
                        backgroundColor: [
                            "#de2c11ff",
                            "#f59e0b",
                            "#3b82f6",
                            "#8b5cf6",
                            "#10b981"
                        ]
                    }
                ]
            };
            setExpensePieData(ExpensePieData);
        }
    }, []);
    
        return (
            <div className="analysis-container">
            
                <div className="chart-card">
                    <h1>Income Analysis</h1>
                    {incomedata ? (
                        <div className="chart-wrapper">
                            <Line data={incomedata} />
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}

                    {IncomePieData && (
                        <div className="chart-wrapper Pie-chart">
                            <Pie data={IncomePieData} />
                        </div>
                    )}
                </div>
                
                <div className="chart-card">
                    <h1>Expense Analysis</h1>
                    {expensedata ? (
                        <div className="chart-wrapper">
                            <Line data={expensedata} />
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}

                    {ExpensePieData && (
                        <div className="chart-wrapper Pie-chart">
                            <Pie data={ExpensePieData} />
                        </div>
                    )}
                </div>
                
            </div>
        );
}
export default Analysis