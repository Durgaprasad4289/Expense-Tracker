import { useMemo } from "react";
import "./History.css";

function History() {
    const STORAGE_KEY = "expense_tracker_data_v1";
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    const incomeHistory = saveData.Income?.history || [];
    const expenseHistory = saveData.Expense?.history || [];
    const incomeTypes = saveData.Income?.IncomeType || [];
    const expenseTypes = saveData.Expense?.ExpenseType || [];

    const totalIncome = useMemo(
        () => incomeHistory.reduce((acc, val) => acc + Number(val), 0),
        [incomeHistory]
    );

    const totalExpense = useMemo(
        () => expenseHistory.reduce((acc, val) => acc + Number(val), 0),
        [expenseHistory]
    );

    const balance = totalIncome - totalExpense;

    return (
        <div className="history-wrapper">

            <h1 className="history-title">Financial Command Center</h1>

            {/* Summary Section */}
            <div className="summary-section">
                <div className="card income-card">
                    <h3>Total Income</h3>
                    <p>₹ {totalIncome}</p>
                </div>

                <div className="card expense-card">
                    <h3>Total Expense</h3>
                    <p>₹ {totalExpense}</p>
                </div>

                <div className="card balance-card">
                    <h3>Net Balance</h3>
                    <p>₹ {balance}</p>
                </div>
            </div>

            {/* Income History */}
            <div className="history-section">
                <h2 className="income-h2">Income History</h2>

                {incomeHistory.length === 0 ? (
                    <p className="empty-state">No income recorded yet.</p>
                ) : (
                    incomeHistory.map((amount, index) => (
                        <div className="transaction-card income" key={index}>
                            <div>
                                <h4>{incomeTypes[index] || "Unknown Source"}</h4>
                                <span>Transaction #{index + 1}</span>
                            </div>
                            <p>+ ₹ {amount}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Expense History */}
            <div className="history-section">
                <h2 className="expense-h2">Expense History</h2>

                {expenseHistory.length === 0 ? (
                    <p className="empty-state">No expenses recorded yet.</p>
                ) : (
                    expenseHistory.map((amount, index) => (
                        <div className="transaction-card expense" key={index}>
                            <div>
                                <h4>{expenseTypes[index] || "Unknown Category"}</h4>
                                <span>Transaction #{index + 1}</span>
                            </div>
                            <p>- ₹ {amount}</p>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default History;