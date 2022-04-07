import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesLists from './ExpensesList';
import Expensechart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);  
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <div>
    <div className='expenses'>
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      <Expensechart expense={filteredExpenses}/>
      <ExpensesLists items={filteredExpenses}/>
    </div>
    </div>
  )
}

export default Expenses;