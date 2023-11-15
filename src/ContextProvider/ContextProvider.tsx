import React, {createContext, useState} from 'react';

interface IContextProvider {
    children: React.JSX.Element;
}

interface IState {
    isShowedLoginModal: boolean;
}

interface IAppContext {
    appState: IState;
    setAppState: React.Dispatch<React.SetStateAction<IState>>;
}

export const openLoginModal = (prevState: IState): IState => {
    return {
        ...prevState,
        isShowedLoginModal: true
    }
}

export const closeLoginModal = (prevState: IState): IState => {
    return {
        ...prevState,
        isShowedLoginModal: false
    }
}
export const AppContext = createContext<IAppContext>(null!);
const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
    const [ state, setState ] = useState<IState>({
        isShowedLoginModal: false,
    });

    return (
        <AppContext.Provider value={{ appState: state, setAppState: setState }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;