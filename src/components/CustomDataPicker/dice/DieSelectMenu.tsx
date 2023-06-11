import React from "react";

type DieSelectMenuProps<ValueType> = {
    isOpen: Boolean,
    selected?: ValueType,
    onChange: (value: ValueType) => void,
    options: { value: ValueType, label: React.ReactNode }[]
}

export default function DieSelectMenu<ValueType>({ isOpen, selected, onChange, options }: DieSelectMenuProps<ValueType>) {

    const handleKeyDown = (newValue: ValueType) => (event: React.KeyboardEvent) => {
        if (event.key === " " || event.key === "SpaceBar" || event.key === "Enter") {
            event.preventDefault();
            onChange(newValue)
        }
    };

    const menuClasses = "position-absolute bg-secondary list-unstyled text-center py-1 px-2 ms-1 rounded-bottom border-top-0"

    return (
        <ul className={`${menuClasses} ${isOpen ? "" : "d-none"}`}
            tabIndex={-1}
            style={{ zIndex: 1000 }}
            role="listbox"
            aria-activedescendant={`die-selector-${selected}`}
        >
            {options.map(option => (
                <li key={String(option.value)}
                    className="p-1"
                    id={`die-selector-${option.value}`}
                    tabIndex={0}
                    role="option"
                    aria-selected={selected === option.value}
                    onClick={() => onChange(option.value)}
                    onKeyDown={handleKeyDown(option.value)}
                >
                    { option.label }
                </li>
            ))}
        </ul>
    )
}
