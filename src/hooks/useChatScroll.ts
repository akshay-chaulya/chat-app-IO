import { useEffect, useRef } from "react";

function useChatScroll(dep: Message[]) {
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        setTimeout(() => {
            if (ref.current) {
                ref.current.scrollTop = ref.current.scrollHeight;
            }
        }, 500);
    }, [dep])

    return ref
};

export default useChatScroll;