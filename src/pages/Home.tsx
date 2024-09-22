import { Glassmorphism, MessageContainer, Sidebar } from "../components";

const Home = () => {

    return (
        <Glassmorphism className="h-[90%] w-[90%] shadow-2xl sm:w-[80%] overflow-hidden flex transition-all">
            <Sidebar />
            <MessageContainer />
        </Glassmorphism>
    );
};

export default Home;