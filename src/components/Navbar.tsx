import { useState } from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";

const SECTIONS = [
  "Home",
  "Work",
  "Service",
  "Our Customers",
  "Team",
  "Career",
  "Contact",
];

type navbarProps = {
  activeSection: string;
};

const Navbar = ({ activeSection }: navbarProps) => {
  const [search, setSearch] = useState('')

  const handleSearch = (
    query: string, 
    clearSearch: () => void
  ) => {
    if(search.trim() === '') {
      alert('Search input is empty')
      return
    }

    alert(`Searching for ${query}`)
    clearSearch()
  }
  return (
    <div className="flex px-30 py-5 shadow-md">
      <div className="mr-auto">
        <img src={Logo} alt="" />
      </div>
      <nav className="flex items-center">
        <ul className="flex">
          {SECTIONS.map((section) => (
            <li
              key={section}
              className={`font-poppins relative mr-6 cursor-pointer font-medium text-black transition after:absolute after:bottom-[-5px] after:left-0 after:h-[1px] after:w-0 after:bg-black after:duration-75 hover:after:w-[70%] ${activeSection == section && "after:w-[70%]"}`}
            >
              {section}
            </li>
          ))}
        </ul>
        <div className="group relative flex items-center">
          <input 
            className="hidden rounded-[100px] bg-gray-200 group-hover:block focus:outline-none text-[14pt] px-5 py-2 focus:block" 
            placeholder="Search..." 

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            value={search}

            onKeyDown={e => { if(e.key === 'Enter') handleSearch(search, () => setSearch(''))}}
          />
          <span 
            className="ml-3 cursor-pointer text-3xl"
            onClick={() =>handleSearch(search, () => setSearch(''))}  
          >
            <IoSearch />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
