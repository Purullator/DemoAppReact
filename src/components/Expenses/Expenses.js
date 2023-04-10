
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {

        setFilteredYear(selectedYear)
    }

    return (
    
    <div>
        <Card className="expenses"> 

            <ExpensesFilter selectedvalue={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
          
        </Card>
    </div>
    )
}

export default Expenses;