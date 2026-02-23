import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./ExpenseTracker.css";

const STORAGE_KEY = "expense_tracker_data_v1";

export default function Tracker() {

    // Read saved data once
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    const [transactionType, setTransactionType] = useState(
        savedData.transactionType || "income"
    );

    const [inputAmount, setInputAmount] = useState("");

    const [incomeType, setIncomeType] = useState(
        savedData.incomeType || "Salary"
    );

    const [expenseType, setExpenseType] = useState(
        savedData.expenseType || "Food"
    );

    const [Income, setIncome] = useState(
        savedData.Income || { total: 0, history: [] }
    );

    const [Expense, setExpense] = useState(
        savedData.Expense || { total: 0, history: [] }
    );

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                transactionType,
                inputAmount,
                incomeType,
                expenseType,
                Income,
                Expense
            })
        );
    }, [transactionType, inputAmount, incomeType, expenseType, Income, Expense]);

    const addAmount = () => {
        const value = Number(inputAmount);

        if (!inputAmount || isNaN(value) || value <= 0) {
            alert("Enter a valid positive amount");
            return;
        }

        if (transactionType === "income") {
            setIncome(prev => ({
                total: prev.total + value,
                history: [...prev.history, value]
            }));
        } else {
            setExpense(prev => ({
                total: prev.total + value,
                history: [...prev.history, value]
            }));
        }

        setInputAmount("");
    };

    const resetTracker = () => {
        setTransactionType("income");
        setInputAmount("");
        setIncomeType("Salary");
        setExpenseType("Food");
        setIncome({ total: 0, history: [] });
        setExpense({ total: 0, history: [] });
        localStorage.removeItem(STORAGE_KEY);
    };

    const balance = Income.total - Expense.total;

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <p>
                Manage your daily finances with ease. Track your income,
                monitor your spending, and visualize your financial growth all in one place.
            </p>

            <div className="money-details">
                <div className="income box">
                    <h2>💵 Income</h2>
                    <p>$ {Income.total}</p>
                </div>

                <div className="expense box">
                    <h2>💴 Expense</h2>
                    <p>$ {Expense.total}</p>
                </div>

                <div className="balance box">
                    <h2>💶 Balance</h2>
                    <p>$ {balance}</p>
                </div>
            </div>

            <div className="Transaction">
                <h2>Add Transaction</h2>

                <div className="Transaction-type">
                    <button
                        onClick={() => setTransactionType("income")}
                        className={transactionType === "income" ? "incomeActive" : ""}
                    >
                        Income
                    </button>

                    <button
                        onClick={() => setTransactionType("expense")}
                        className={transactionType === "expense" ? "expenseActive" : ""}
                    >
                        Expense
                    </button>
                </div>

                <div className="Add-Transaction">
                    <div className="I-E">
                        {transactionType === "income" && (
                        <select onChange={(e) => setIncomeType(e.target.value)} id="type">
                            <option value="Salary">Salary</option>
                            <option value="Stipend">Stipend</option>
                            <option value="FreeLancing">FreeLancing</option>
                            <option value="Other">Other</option>
                        </select>
                        )}
    
                        {transactionType === "expense" && (
                            <select onChange={(e) => setExpenseType(e.target.value) } id="type">
                                <option value="Food">Food</option>
                                <option value="Bills">Bills</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Health">Health</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Other">Other</option>
                            </select>
                        )}
                    </div>

                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={inputAmount}
                        onChange={(e) => setInputAmount(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addAmount()}
                    />

                    <button onClick={addAmount}>Add Amount</button>
                    <button onClick={resetTracker} type="button">
                        Reset Data
                    </button>
                </div>

            </div>
        </div>
    );
}