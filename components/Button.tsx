import React, { ReactNode } from 'react';
import className from 'classnames';

interface ButtonProps {
    children: ReactNode;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
}

const Button: React.FC<ButtonProps> = ({children, type}) => {
    const classes = className("flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-indigo-600", {
        "bg-[#FF731D] text-white": type === 'primary',
        "border-gray-900 bg-gray-900 text-white": type === 'secondary',
        "border-green-500 bg-green-500 text-white": type === 'success',
        "border-yellow-400 bg-yellow-400 text-white": type === 'warning',
        "border-red-500 bg-red-500 text-white": type === 'danger',
    });

    return <button className={classes}>{children}</button>;
};

export default Button;
