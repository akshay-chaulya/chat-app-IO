import { useLocation } from "react-router-dom";
import { Glassmorphism, MainContainer, RightSidebar, LeftSidebar } from "../components";
import { useGetAllUsers } from "../features/chatApp/chatAppHookes";
import { useMemo } from "react";

const Home = () => {
    useGetAllUsers()

    const { pathname } = useLocation();
    const isMessageOpen = useMemo(() => pathname.includes("send-message"), [pathname]) 

    return (
        <MainContainer className="h-screen">
            <Glassmorphism className="relative h-[90%] w-[90%] shadow-2xl sm:w-[80%] overflow-hidden transition-all grid md:grid-cols-[350px_auto]">
                <LeftSidebar isOpen={!isMessageOpen} />
                <RightSidebar isOpen={isMessageOpen} />
            </Glassmorphism>
        </MainContainer>
    );
};

export default Home;