import React, { useRef, useState } from 'react';
import { useClickOutsideElement } from '../../hooks/useClickOutsideElement';

interface IHorizontalShake {
    children: React.ReactNode;
    className?: string;
}

const HorizontalShake: React.FC<IHorizontalShake> = ({ children, className }) => {
    const [state, setState] = useState(false);
    const ref = useRef<HTMLDivElement>(null!);
    useClickOutsideElement(ref, handleOutsideClick);

    function handleOutsideClick() {
        if(state) { return; }
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 400);

    }

    return (
        <div ref={ref} className={ `${state ? "shake-horizontal": ""} ${className}` }>
            { children }
        </div>
    );
};

export default HorizontalShake;
