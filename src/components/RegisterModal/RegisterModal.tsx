import React, {useContext, useState} from 'react'
import HorizontalShake from '../HorizontalShake/HorizontalShake';
import CloseIcon from '@mui/icons-material/Close';
import {AppContext, AuthSteps, changeStateAuthModals} from '../../ContextProvider/ContextProvider';
import {toastError, toastSuccess} from '../Toast/toast';
import $host from "../../http";
import VerifyAuthModal from "../VerifyModal/VerifyAuthModal";

const RegisterModal = () => {

    const { appState, setAppState } = useContext(AppContext);
    const [ input, setInput ] = useState({
        name: "",
        phone: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { name, phone, password } = input;
            const { data } = await $host.post("/users/register", {
                phone_number: phone,
                password: password,
            });
            toastSuccess(data.message);
            setAppState(changeStateAuthModals(AuthSteps.ShowVerifyModal));
        } catch (e) {
            if(e instanceof Error) {
                toastError((e as any).response.data.message);
            }
            console.log(e);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(prevState => ({ ...prevState, [name]: value }));
    }

    const closeModal = () => {
        setAppState(changeStateAuthModals(AuthSteps.Closed));
    }

    const openModal = () =>{
        setAppState(changeStateAuthModals(AuthSteps.ShowLoginModal));
    }


    if(appState.isShowedAuthModal === AuthSteps.ShowVerifyModal) {
        return <VerifyAuthModal phone={input.phone}/>
    }

    if(appState.isShowedAuthModal !== AuthSteps.ShowRegisterModal) { return null; }

    return (
        <div className="flex flex-col modal items-center absolute justify-center w-full h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full rounded-lg shadow fixed z-30 opacity-1 md:mt-0 sm:max-w-md xl:p-0">
                <HorizontalShake className="bg-[#138d80] rounded-lg dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Ro'yxatdan o'ting
                            </h1>
                            <CloseIcon style={{fill: "#fff"}} onClick={closeModal} className="cursor-pointer"/>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ismingiz kiriting</label>
                                <input
                                    value={input.name}
                                    onChange={handleChange}
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ism Familiya"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon raqamingiz</label>
                                <input
                                    value={input.phone}
                                    onChange={handleChange}
                                    type='tel'
                                    name="phone"
                                    id="password"
                                    placeholder="+99800 000-00-00"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                                <input
                                    value={input.password}
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            
                            <button type="submit" className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800">Jo'natish</button>
                            <p className="text-sm flex items-center justify-around font-light text-white">
                                Akkauntingiz bormi?<button onClick={openModal} className="font-medium border-2 worn border-white p-2 rounded-lg text-primary-600 hover:underline  dark:text-primary-500">Kirish</button>
                            </p>
                        </form>
                    </div>
                </HorizontalShake>
            </div>
        </div>
);
}

export default RegisterModal