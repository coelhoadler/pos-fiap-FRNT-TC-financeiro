import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            className="w-[250px] h-[48px] bg-primary cursor-pointer text-white py-2 px-4 rounded-[8px] transition font-medium mt-6"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;