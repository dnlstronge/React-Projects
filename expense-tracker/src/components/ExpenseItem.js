// styles
import './ExpenseItem.css'


function ExpenseItem() {
return (
    <div className="expense-item">
        <div>11th Jan 2023</div>
        <div className="expense-item__description">
            <h2>Eating out</h2>
            <div className="expense-item__price">£75.40</div>
        </div>
    </div> 
    
    
)
}

export default ExpenseItem;