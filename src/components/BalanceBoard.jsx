import React from "react";

const BalanceBoard = ({ transactionHistory }) => {

    const incomeList = transactionHistory.filter(
        (income) => income.type === "income"
    );
    const expenseList = transactionHistory.filter(
        (expense) => expense.type === "expense"
    );

    const totalIncome = incomeList.reduce(
        (acc, income) => acc + parseFloat(income.amount), 0
    );
    const totalExpense = expenseList.reduce(
        (acc, expense) => acc + parseFloat(expense.amount), 0
    );
    const totalAmount = totalIncome - totalExpense;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className={`text-base leading-7 ${totalAmount<0 ?'text-rose-600':'text-gray-600'}`}>
                            Balance
                        </dt>
                        <dd className={`order-first text-xl font-semibold tracking-tight sm:text-3xl ${totalAmount<0 ?'text-rose-700':'text-gray-700'}`}>
                            BDT {totalAmount}
                        </dd>
                    </div>
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">
                            Total Income
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            BDT {totalIncome}
                        </dd>
                    </div>
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">
                            Total Expense
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            BDT {totalExpense}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default BalanceBoard;
