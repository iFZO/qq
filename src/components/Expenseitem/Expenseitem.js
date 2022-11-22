import React, { useState } from 'react';
import './Expenseitem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';


//  props ni neg zuiless utga damjuulj bga hseg yumaa hoooy sn oilgo usuhuu t1 yumuu haishin!!!


// useState ni turul buriin data awj boldog yum.


function Expenseitem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("<3");
        console.log(title);
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
                <button className='btn' onClick={clickHandler}>Change Title</button>
                <div>
                    {props.date}
                </div>
            </div>
        </div>
    )

}
export default Expenseitem; 