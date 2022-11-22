
import './App.css';
import React from 'react';
import Expenseitem from './components/Expenseitem/Expenseitem';

const expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: "August 19,1973 23:15:30 UTC"
  },

  {
    id: "e2",
    title: "New Tv",
    amount: 533,
    date: "August 16,1978 23:15:30 UTC"
  },

  {
    id: "e3",
    title: "Car Unsurace",
    amount: 294.67,
    date: "August 16,1978 23:15:30 UTC"
  },
  {
    id: "e4",
    title: "New disk",
    amount: 234,
    date: "August 16,1978 23:15:30 UTC"
  }

]

function App() {
  return (
    <div>
      <Expenseitem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Expenseitem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Expenseitem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Expenseitem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  )
}
export default App;
