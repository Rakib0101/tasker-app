import React, { useDebugValue, useEffect, useState } from 'react';
import TrackerBoard from './TrackerBoard';
import BalanceBoard from './BalanceBoard';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

const TrackerWrapper = () => {
  const [transactionHistory, setTransactionHistories] = useState([])

  const updateTransactionHistory = (newTransaction) => {
    setTransactionHistories([
      ...transactionHistory,
      newTransaction
    ])
  }


  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Submission Form  */}
        <TrackerBoard updateTransactionHistory={updateTransactionHistory} />

        {/* Right Column */}
        <div className="lg:col-span-2">
          {/* Total Balance Stat */}
          <BalanceBoard transactionHistory={transactionHistory} />

          {/* List Down */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {/* Income List */}
            <IncomeList transactionHistory={transactionHistory} />

            {/*  Expense List */}
            <ExpenseList transactionHistory={transactionHistory} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrackerWrapper;