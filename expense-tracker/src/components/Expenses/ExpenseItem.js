// styles
import './ExpenseItem.css';

//imports
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
    let title = props.title

    const handleClick = () => {
        title = 'updated'
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card> 
        
        
    )
    }

export default ExpenseItem;