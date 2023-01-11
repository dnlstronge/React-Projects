// styles
import './ExpenseItem.css'



function ExpenseItem() {

    const expenseDate = new Date(2023, 0 , 11)
    const expenseTitle = "Eating out"
    const expenseAmount = 75.42

return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">£{expenseAmount}</div>
        </div>
    </div> 
    
    
)
}

export default ExpenseItem;