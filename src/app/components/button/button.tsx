import React from 'react';

interface ButtonProps {
    primary?: boolean;
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    primary = false,
    type = 'button', ...props }) => {
    return (
        <button
            type={type}
            className={['min-w-[250px]', 'h-[48px]', `${primary ? 'hover:bg-primary' : 'hover:bg-secondary'}`, 'bg-inactive', 'cursor-pointer', 'text-primary', 'hover:text-white', 'py-2 px-4', 'rounded-[8px]', 'transition', 'font-medium'].join(' ')}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;