import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png"
import Resume from "../data/Shubham_Khirwadkar_Resume.pdf"
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300">
            <div>
                <img src={Logo} alt="Logo image" style={{width: '100px'}}/>
            </div>

            <ul className="hidden md:flex">
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='work' smooth={true} duration={500}>
                        Work Experience
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='education' smooth={true} duration={500}>
                        Education
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='certification' smooth={true} duration={500}>
                        Certification
                    </Link>
                </li>
                <li className="hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
                
            <div className="md:hidden z-10" onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1a1818] text-gray-300 flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work Experience
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='education' smooth={true} duration={500}>
                        Education
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='certification' smooth={true} duration={500}>
                        Certification
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-white hover:font-bold hover:scale-110 hover:border-b-2 hover:border-[#b9db17]">
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a href="https://www.linkedin.com/in/sk-b62963111/" target='_blank' className="flex justify-between items-center w-full text-gray-300">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800">
                        <a href="https://github.com/khirwadkarshubham25/" target='_blank' className="flex justify-between items-center w-full text-gray-300">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
                        <a href='mailto:shubhamkhirwadkar@outlook.com' className="flex justify-between items-center w-full text-gray-300">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
                        <a href={Resume} target='_blank' rel='noopener noreferrer' className="flex justify-between items-center w-full text-gray-300">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;