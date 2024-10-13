import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import DeleteIcon from "./SVGIcons/DeleteIcon";
import EditIcon from "./SVGIcons/EditIcon";
import SortingDropdown from "./SortingDropdown";
import IncomeIcon from "./SVGIcons/IncomeIcon";

const IncomeList = ({ transactionHistory }) => {
    const [sortedIncomes, setSortedIncomes] = useState([]);
    const [sorting, setSorting] = useState("");

    const incomes = transactionHistory.filter(
        (income) => income.type === "income"
    );

    const handleSorting = (type) => {
        setSorting(type);

        let sortedArray = [...incomes];

        if (type === "low2high") {
            sortedArray.sort(
                (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
            );
        } else if (type === "high2low") {
            sortedArray.sort(
                (a, b) => parseFloat(b.amount) - parseFloat(a.amount)
            );
        }

        setSortedIncomes(sortedArray);
    };

    const handleFilter = (filterItems) => {
        console.log(filterItems)
    }

    const displayedIncomes = sorting ? sortedIncomes : incomes;

    return (
        <div className="border rounded-md relative">
            {/* <!-- Header --> */}
            <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                <div className="flex items-center gap-2">
                    {/* <!-- Icon --> */}
                    <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center text-base flex items-center justify-center">
                        <IncomeIcon />
                    </div>
                    {/* <!-- Text --> */}
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-gray-800">
                            Income
                        </h3>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    {/* Sorting */}
                    <SortingDropdown handleSorting={handleSorting} />
                    {/* Filtering */}
                    <FilterDropdown handleFilter={handleFilter} filterFor='income' />
                </div>
            </div>

            {/* <!-- Income List --> */}
            <div className="p-4 divide-y min-h-20">
                {displayedIncomes.length > 0 ? (
                    displayedIncomes.map((income, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center py-2 relative group cursor-pointer"
                        >
                            <div>
                                <h3 className="text-base font-medium leading-7 text-gray-600">
                                    {income.category}
                                </h3>
                                <p className="text-xs text-gray-600">
                                    {income.date}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                                    BDT {income.amount}
                                </p>
                                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                                    <button className="hover:text-teal-600">
                                        <EditIcon />
                                    </button>
                                    <button className="hover:text-red-600">
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center">
                        No income added till now
                    </div>
                )}
            </div>
        </div>
    );
};

export default IncomeList;
