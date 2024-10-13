import React, { useEffect, useRef, useState } from "react";
import FilterIcon from "./SVGIcons/FilterIcon";

const FilterDropdown = ({ handleFilter, filterFor }) => {
    const incomeFilter = ['salary', 'outsourcing', 'bond', 'dividend']
    const expenseFilter = ['education', 'food', 'health', 'bill', 'insurance', 'tax', 'transport', 'telephone']
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [filterItems, setFilterItems] = useState([]);

    const handleChecked = (e) => {
        const newFilterItem = e.target.value;
        const updatedFilterItems = [...filterItems, newFilterItem];
        setFilterItems(updatedFilterItems);
        handleFilter(updatedFilterItems);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    <FilterIcon />
                </button>
            </div>
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1 grid grid-cols-1">
                        {
                            filterFor === 'expense' ? (
                                expenseFilter.map((filter, index) => {
                                    return (
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                onChange={handleChecked}
                                                value={filter}
                                                checked={filterItems.includes(filter)}
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                            />
                                            <span className="ml-2 capitalize">{filter}</span>
                                        </label>
                                    )
                                })
                            ):(
                                incomeFilter.map((filter, index) => {
                                    return (
                                        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                onChange={handleChecked}
                                                value={filter}
                                                checked={filterItems.includes(filter)}
                                                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                            />
                                            <span className="ml-2 capitalize">{filter}</span>
                                        </label>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
