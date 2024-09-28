import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { debounce } from "lodash"
import { useSearchUsers } from "../../features/chatApp/chatAppHookes";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearchTerm = debounce((value: string) => {
        setSearchTerm(value)
    }, 500)

    useSearchUsers(searchTerm)

    return (
        <form className="flex items-center gap-2 w-full">
            <input
                onChange={(e) => debouncedSearchTerm(e.target.value)}
                type="text"
                placeholder="Search..."
                className="input input-bordered rounded-full w-full"
            />
            <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                <IoSearch className="h-6 w-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;