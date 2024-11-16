import Swal from 'sweetalert2';
import {AlertIcon} from "../../enums/AlertIcon";

const Alert = async (title:string, message: string, icon:AlertIcon) => {
    await Swal.fire({
        title: title,
        text: message,
        icon: icon,
        customClass: {
            confirmButton: 'bg-indigo-600 text-white p-4 px-10 border-none outline-none',
        },
    });
};

export default Alert;