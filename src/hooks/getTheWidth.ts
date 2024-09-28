import { useEffect, useState } from "react"

const useGetTheWidth = () => {
    const [width, setWidth] = useState(Number);

    useEffect(() => {
        const handleWidthChange = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleWidthChange);
        return () => window.removeEventListener("resize", handleWidthChange);
    }, [])

    return width;
}

export default useGetTheWidth;