import React, { useEffect, useRef, useState } from "react";
import SortingIcon from "./SVGIcons/SortingIcon";

const SortingDropdown = ({handleSorting}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = (type) => {
        setIsOpen(false)
        handleSorting(type)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
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
                    <SortingIcon />
                </button>
            </div>

            {isOpen && (
                <div ref={dropdownRef}  className="absolute z-10 mt-2 right-0 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="none">
                        <button
                            onClick={() => handleClick('low2high')}
                            type="button"
                            className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                        >
                            Low to High
                        </button>
                        <button
                            onClick={() => handleClick('high2low')}
                            type="button"
                            className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                        >
                            High to Low
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SortingDropdown;
