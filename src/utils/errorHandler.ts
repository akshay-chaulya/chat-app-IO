import { isAxiosError } from "axios";
import { ErrorDataType } from "../types/dataTypes";
import toast from "react-hot-toast";

const errorHandler = (error: unknown) => {
    if (isAxiosError(error)) {
        const errorMessage = (error?.response?.data as ErrorDataType)?.message || error.message || "Server error!";

        toast.error(errorMessage)
    } else {
        toast.error("An unexpected error occurred.")
    }
}

export default errorHandler;