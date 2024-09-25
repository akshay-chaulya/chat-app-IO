import { Glassmorphism, MainContainer, MessageContainer, Sidebar } from "../components";

const Home = () => {
    console.log("Home")
    return (
        <MainContainer className="h-screen">
            <Glassmorphism className="h-[90%] w-[90%] shadow-2xl sm:w-[80%] overflow-hidden flex transition-all">
                <Sidebar />
                <MessageContainer />
            </Glassmorphism>
        </MainContainer>
    );
};

export default Home;