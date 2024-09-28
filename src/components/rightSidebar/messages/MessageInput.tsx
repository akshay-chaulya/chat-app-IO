import { FormEvent, useState } from "react";
import { BsSend } from "react-icons/bs";
import { useSendMessage } from "../../../features/chatApp/chatAppHookes";
import { useParams } from "react-router-dom";
import Loader from "../../Loader";

const MessageInput = () => {
    const [text, setText] = useState("");
    const friendsId = useParams().id as string

    const { mutate: sendMessage, isPending } = useSendMessage();

    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage({ friendsId, text })
        setText('');
    }
    return (
        <form onSubmit={handelSubmit} className="px-4 my-3">
            <div className="w-full relative">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Send a message"
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                />
                <button disabled={isPending || text.length == 0} type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {isPending ? <Loader className="h-4 w-4" /> : <BsSend />}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;