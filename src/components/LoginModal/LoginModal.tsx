import React, { useState, useContext } from "react";
import "./LoginModal.css";
import CloseIcon from '@mui/icons-material/Close';
import { AppContext, AuthSteps, changeStateAuthModals, changeStateShakeLogin } from "../../ContextProvider/ContextProvider";
import {toastError, toastSuccess} from "../Toast/toast";
import HorizontalShake from "../HorizontalShake/HorizontalShake";
import $host from "../../http";

const LoginModal: React.FC = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [ input, setInput ] = useState({
    phone: "",
    password: ""
  });

  const closeModal = () => {
    setAppState(changeStateAuthModals(AuthSteps.Closed));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { phone, password } = input;
      const { data } = await $host.post("/users/login", {
        phone_number: phone,
        password: password,
      });
      toastSuccess("Successfully signed in");
      setAppState(changeStateAuthModals(AuthSteps.Closed));
    } catch (e) {
      if(e instanceof Error) {
        toastError((e as any).response.data.message);
      }
      console.log(e);
    }
    // if (validatePhoneNumber()) {
    //   toastSuccess("Successfully Signed In");
    //   closeModal();
    // }
    //
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(prevState => ({ ...prevState, [name]: value }));
  }

  function handleOutsideClick() {
    if(appState.shakeLoginModal) { return; }
    setAppState(changeStateShakeLogin(true));
    setTimeout(() => {
        setAppState(changeStateShakeLogin(false));
    }, 400);

}


  // const validatePhoneNumber = () => {
  //   // Define a regular expression for a valid phone number
  //   const phoneRegex = /^\+998\d{9}$/;
  //
  //   // Check if the phone number matches the regular expression
  //   if (!phoneRegex.test(phoneNumber)) {
  //     setPhoneNumberError("Please enter a valid phone number");
  //     handleOutsideClick();
  //     return false;
  //   } else {
  //     setPhoneNumberError("");
  //     return true;
  //   }
  // };

  const openModal = () => {
    setAppState(changeStateAuthModals(AuthSteps.ShowRegisterModal));
  };

  const openForgetModal = () => {
    setAppState(changeStateAuthModals(AuthSteps.ShowForgotModal));
  };

  if (appState.isShowedAuthModal !== AuthSteps.ShowLoginModal) {
    return null;
  }

  return (
    <div className="flex flex-col modal items-center absolute justify-center w-full h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow fixed z-30 opacity-1 md:mt-0 sm:max-w-md xl:p-0">
        <HorizontalShake className="bg-[#138d80] rounded-lg dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <CloseIcon style={{ fill: "#fff" }} onClick={closeModal} className="cursor-pointer" />
            </div>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="number" className={`block mb-2 text-sm font-medium ${phoneNumberError ? 'text-red-500' : 'text-gray-900'} dark:text-white`}>
                  Your number
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={input.phone}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${phoneNumberError ? 'text-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  `}
                    placeholder="+99800 000 00 00"
                    required
                />
                {phoneNumberError && <p className="text-white text-sm mt-1">{phoneNumberError}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <button onClick={openForgetModal} className="text-sm font-medium text-white hover:underline ">
                  Forgot password?
                </button>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-white">
                Don’t have an account yet?{" "}
                <button onClick={openModal} className="font-medium text-primary-600 hover:underline  dark:text-primary-500">
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </HorizontalShake>
      </div>
    </div>
  );
};

export default LoginModal;
