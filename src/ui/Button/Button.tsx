import React, {MouseEventHandler} from 'react';
import ButtonLight from "./ButtonLight";


interface IButton {
    type: "light" | "outline" | "dark";
    label: string;

    onClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: React.JSX.Element;
}
const Button: React.FC<IButton> = ({ type, label, onClick, rightIcon }) => {

    switch (type) {
        case "outline":
            return <div></div>;
        case "light":
            return <ButtonLight
                label={label}
                onClick={onClick}
                rightIcon={rightIcon}
            />
        default:
            return <div></div>
    }
};

export default Button;