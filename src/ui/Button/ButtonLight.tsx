import React, {MouseEventHandler} from 'react';

interface IButtonLight {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;

    rightIcon?: React.JSX.Element;
}

const ButtonLight: React.FC<IButtonLight> = ({ label, onClick, rightIcon }) => {
    return (
        <button className="flex items-center py-[10px] px-[24px] bg-white rounded-xl font-bold text-sm text-black hover:bg-[#c9c9c9]" onClick={onClick}>
            {label}
            {rightIcon}
        </button>
    );
};

export default ButtonLight;