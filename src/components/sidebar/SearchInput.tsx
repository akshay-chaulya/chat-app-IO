import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-2 w-full">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full" />
            <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                <IoSearch className="h-6 w-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;