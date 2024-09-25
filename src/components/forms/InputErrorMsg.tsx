import { FC } from "react"

const InputErrorMsg: FC<{ error?: string }> = ({ error }) => {
    return (
        <>
            {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
        </>
    );
};


export default InputErrorMsg;