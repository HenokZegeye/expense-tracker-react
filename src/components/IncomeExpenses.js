import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  const amounts = transactions.map((txn) => txn.amount);

  const totalIncome = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, val) => (acc += val), 0);

  const totalExpense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, val) => (acc += val), 0);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+{totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
