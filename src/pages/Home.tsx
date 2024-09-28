import { Glassmorphism, MainContainer, RightSidebar, LeftSidebar } from "../components";
import { useGetAllUsers } from "../features/chatApp/chatAppHookes";

const Home = () => {
    useGetAllUsers()

    return (
        <MainContainer className="h-screen">
            <Glassmorphism className="h-[90%] w-[90%] shadow-2xl sm:w-[80%] overflow-hidden flex transition-all">
                <LeftSidebar />
                <RightSidebar />
            </Glassmorphism>
        </MainContainer>
    );
};

export default Home;