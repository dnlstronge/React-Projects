// styles
import './ExpenseItem.css'



function ExpenseItem() {

    const expenseDate = "11/01/2023"
    const expenseTitle = "Eating out"
    const expenseAmount = 75.40

return (
    <div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">{expenseAmount}</div>
        </div>
    </div> 
    
    
)
}

export default ExpenseItem;