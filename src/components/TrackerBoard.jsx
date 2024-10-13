import React, { useState } from "react";

const TrackerBoard = ({ updateTransactionHistory }) => {
    const [tab, setTab] = useState("expense");
    const [transaction, setTransaction] = useState({
        category: "",
        amount: "",
        date: "",
        type: tab,
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    const handleForm = (e) => {
        e.preventDefault();
        const updatedTransaction = {
            ...transaction,
            type: tab,
        };
        setTransaction(updatedTransaction);
        updateTransactionHistory(updatedTransaction);
    };

    return (
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
            <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
                Expense Tracker
            </h2>

            <form onSubmit={handleForm}>
                <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                    <div
                        onClick={() => setTab("expense")}
                        className={`cursor-pointer text-center flex-1 px-4 py-2 ${
                            tab === "expense"
                                ? "bg-teal-500 hover:bg-teal-600 text-white"
                                : "bg-transparent hover:bg-slate-50 hover:text-slate-900"
                        }`}
                    >
                        Expense
                    </div>
                    <div
                        onClick={() => setTab("income")}
                        className={`cursor-pointer text-center flex-1 px-4 py-2 ${
                            tab === "income"
                                ? "bg-teal-500 hover:bg-teal-600 text-white"
                                : "bg-transparent hover:bg-slate-50 hover:text-slate-900"
                        }`}
                    >
                        Income
                    </div>
                </div>

                {/* <!-- Note --> */}
                {/* <!-- Income Categories - Salary, Outsourcing, Bond, Dividend --> */}
                <div className="mt-3">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Category
                    </label>
                    <div className="mt-2">
                        <select
                            id="category"
                            name="category"
                            onChange={handleChange}
                            value={transaction.category || ""}
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {tab === "expense" && (
                                <>
                                    <option value="Education">Education</option>
                                    <option value="Food">Food</option>
                                    <option value="Health">Health</option>
                                    <option value="Bill">Bill</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="Tax">Tax</option>
                                    <option value="Transport">Transport</option>
                                    <option value="Telephone">Telephone</option>
                                </>
                            )}
                            {tab === "income" && (
                                <>
                                    <option value="Salary">Salary</option>
                                    <option value="Outsourcing">
                                        Outsourcing
                                    </option>
                                    <option value="Bond">Bond</option>
                                    <option value="Dividend">Dividend</option>
                                </>
                            )}
                        </select>
                    </div>
                </div>

                <div className="mt-3">
                    <label
                        htmlFor="amount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Amount
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            onChange={handleChange}
                            value={transaction.amount}
                            autoComplete="off"
                            placeholder="12931"
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="mt-3">
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="date"
                            value={transaction.date}
                            onChange={handleChange}
                            id="date"
                            autoComplete="off"
                            placeholder="12931"
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default TrackerBoard;
