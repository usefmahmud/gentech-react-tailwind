import { useState } from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

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
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (query: string, clearSearch: () => void) => {
    if (search.trim() === "") {
      alert("Search input is empty");
      return;
    }

    alert(`Searching for ${query}`);
    clearSearch();
  }


  return (
    <div className="flex px-20 xl:px-25 py-2 lg:py-5 shadow-md">
      <div className="mr-auto">
        <img src={Logo} alt="" />
      </div>
      <nav
        className={`
          lg:flex lg:flex-row lg:relative lg:w-auto lg:z-auto lg:h-auto lg:p-0 lg:shadow-none lg:left-0
          fixed top-0 ${isOpen ? 'left-0' : 'left-full'} transition-[left] duration-500 w-full h-full bg-white z-50 p-20 shadow-2xl
        `}
      >
        <ul
          className={`
            lg:flex lg:items-center
          `}
        >
          {SECTIONS.map((section) => (
            <li
              key={section}
              className={`
                mb-[20px] text-3xl lg:text-[18px]
                lg:mb-[0px]
                font-poppins relative lg:mr-6 cursor-pointer font-medium text-black transitio w-fit
                after:none lg:after:block after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] lg:after:h-[1px] after:w-0 after:bg-black after:duration-75 hover:after:w-[80%] ${activeSection == section && "after:w-[80%]"}
              `}
              onClick={() => setIsOpen(false)}
            >
              {section}
            </li>
          ))}
        </ul>
        <div className="group relative flex items-center">
          <input
            className="block lg:hidden rounded-[100px] w-full bg-gray-200 group-hover:block focus:outline-none text-[14pt] px-5 py-2 focus:block"
            placeholder="Search..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(search, () => setSearch(""));
            }}
          />
          <span
            className="ml-3 cursor-pointer text-3xl"
            onClick={() => handleSearch(search, () => setSearch(""))}
          >
            <IoSearch />
          </span>
        </div>

        <div className="lg:hidden absolute top-10 right-20">
            <div 
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-4xl"><IoMdClose /></span>
            </div>
        </div>
      </nav>

      <div className="flex items-center lg:hidden">
        <div 
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-4xl"><GiHamburgerMenu /></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
