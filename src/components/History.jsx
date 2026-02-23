function History(){
    const STORAGE_KEY = "expense_tracker_data_v1";
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const IncomeHistory = saveData.Income?.history || [];
    const ExpenseHistory = saveData.Expense?.history || [];
    return(
        <div className="history-container">
            <h1>Income History </h1>
            <ul>
                {IncomeHistory.map((income, index) => (
                    <li key={index}>{income}</li>
                ))}
            </ul>
            <h1>Expense History </h1>
            <ul>
                {ExpenseHistory.map((expense, index) => (
                    <li key={index}>{expense}</li>
                ))}
            </ul>
        </div>
    )
}
export default History