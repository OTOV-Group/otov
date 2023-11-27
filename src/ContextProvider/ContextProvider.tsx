import React, {createContext, useState} from 'react';

interface IContextProvider {
    children: React.JSX.Element;
}

export enum AuthSteps {
    Closed = 0,
    ShowLoginModal = 1,
    ShowRegisterModal = 2,
    ShowForgotModal = 3,
    ShowVerifyModal = 4,
}

interface IState {
    isShowedAuthModal: AuthSteps;
    shakeLoginModal: boolean;
    sideOpen: boolean;
}

interface IAppContext {
    appState: IState;
    setAppState: React.Dispatch<React.SetStateAction<IState>>;
}

export function changeStateShakeLogin(type: boolean): (prevState: IState) => IState {
    return function handleOutsideClick(prevState: IState): IState {
        return {
            ...prevState,
            shakeLoginModal: type
        };
    }
}


export function changeSidebarState(type: boolean) : (prevState: IState) => IState{
    return function handleSidebar(prevState: IState): IState {
        return {
            ...prevState,
            sideOpen: type
        }
    }
}

// Login Modal

export function changeStateAuthModals(type: AuthSteps): (prevState: IState) => IState {
    return (prevState: IState): IState => {
        return {
            ...prevState,
            isShowedAuthModal: type
        }
    };
}

// Ending Login Modal



// Ending Register Modal

export const AppContext = createContext<IAppContext>(null!);
const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
    const [ state, setState ] = useState<IState>({
        isShowedAuthModal: AuthSteps.Closed,
        shakeLoginModal: false,
        sideOpen: false,
    });



    return (
        <AppContext.Provider value={{ appState: state, setAppState: setState,  }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;