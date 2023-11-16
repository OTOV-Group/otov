import React, { useContext } from 'react'
import HorizontalShake from '../HorizontalShake/HorizontalShake';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext, AuthSteps, changeStateAuthModals } from '../../ContextProvider/ContextProvider';
import { toastSuccess } from '../Toast/toast';
import { Link } from 'react-router-dom';


const RegisterModal = () => {

    const { appState, setAppState } = useContext(AppContext);

    const handleSubmit = () => {
        toastSuccess("Succesfully Signed In");
        setAppState(changeStateAuthModals(AuthSteps.Closed));
    }

    const closeModal = () => {
        setAppState(changeStateAuthModals(AuthSteps.Closed));
    }

    const openModal = () =>{
        setAppState(changeStateAuthModals(AuthSteps.ShowLoginModal));
    }
   

    if(appState.isShowedAuthModal !== AuthSteps.ShowRegisterModal) { return null; }

    return (
        <div className="flex flex-col modal items-center absolute justify-center w-full h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full rounded-lg shadow fixed z-30 opacity-1 md:mt-0 sm:max-w-md xl:p-0">
                <HorizontalShake className="bg-[#138d80] rounded-lg dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register to your account
                            </h1>
                            <CloseIcon style={{fill: "#fff"}} onClick={closeModal} className="cursor-pointer"/>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type='tel' name="phone" id="password" placeholder="+99800 000-00-00" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            
                            <button onClick={handleSubmit} type="submit" className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                            <p className="text-sm font-light text-white">
                                Alredy have an account? <button onClick={openModal} className="font-medium text-primary-600 hover:underline  dark:text-primary-500">Sign in</button>
                            </p>
                        </form>
                    </div>
                </HorizontalShake>
            </div>
        </div>
);
}

export default RegisterModal