import React, { useContext } from 'react'
import HorizontalShake from '../HorizontalShake/HorizontalShake';
import CloseIcon  from '@mui/icons-material/Close';
import { toastSuccess } from '../Toast/toast';
import { AppContext, AuthSteps, changeStateAuthModals } from '../../ContextProvider/ContextProvider';

const ForgotModal = () => {

        const { appState, setAppState } = useContext(AppContext);
    
        const handleSubmit = () => {
            toastSuccess("Message succesfully sended");
            setAppState(changeStateAuthModals(AuthSteps.Closed));
        }
    
        const closeModal = () => {
            setAppState(changeStateAuthModals(AuthSteps.Closed));
        }
    
        if(appState.isShowedAuthModal !== AuthSteps.ShowForgotModal) { return null; }
    
        return (
            <div className="flex flex-col modal items-center absolute justify-center w-full h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow fixed z-30 opacity-1 md:mt-0 sm:max-w-md xl:p-0">
                    <HorizontalShake className="bg-[#138d80] rounded-lg dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="flex items-center justify-between">
                                <CloseIcon style={{fill: "#fff"}} onClick={closeModal} className="cursor-pointer"/>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your number</label>
                                    <input type='tel' name="phone" id="password" placeholder="+99800 000-00-00" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button onClick={handleSubmit} type="submit" className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800">Send to Number</button>
                            </form>
                        </div>
                    </HorizontalShake>
                </div>
            </div>
    );
}

export default ForgotModal