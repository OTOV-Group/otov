import React, { useContext, useRef, useState } from 'react';
import { useClickOutsideElement } from '../../hooks/useClickOutsideElement';
import { AppContext, changeStateShakeLogin } from '../../ContextProvider/ContextProvider';

interface IHorizontalShake {
    children: React.ReactNode;
    className?: string;
}

const HorizontalShake: React.FC<IHorizontalShake> = ({ children, className }) => {
    const { appState, setAppState } = useContext(AppContext);
    const ref = useRef<HTMLDivElement>(null!);
    useClickOutsideElement(ref, handleOutsideClick);

    function handleOutsideClick() {
        if(appState.shakeLoginModal) { return; }
        setAppState(changeStateShakeLogin(true));
        setTimeout(() => {
            setAppState(changeStateShakeLogin(false));
        }, 400);

    }

    return (
        <div ref={ref} className={ `${appState.shakeLoginModal ? "shake-horizontal": ""} ${className}` }>
            { children }
        </div>
    );
};

export default HorizontalShake;
