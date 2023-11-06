import {toast} from 'react-hot-toast'


const toastError = (message: string, toastId?: string | undefined) => {
    return toast.error(message, {
        duration: 4000,
        position: "bottom-center",
        id: toastId,
    });
};

const toastSuccess = (message: string, toastId?: string | undefined) => {
    return toast.success(message, {
        duration: 4000,
        position: "bottom-center",
        id: toastId
    });
};

const toastLoading = (message: string) => {
    return toast.loading(message, {
        position: "bottom-center",
    });
}


export { toastError, toastSuccess, toastLoading };