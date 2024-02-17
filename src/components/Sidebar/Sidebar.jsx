import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Slider.css'
const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };



  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden absolute top-0 right-0 rounded-full hover:outline-none">
        <button onClick={toggleSidebar} className="relative group p-2 border-none rounded-full ">
        <div className="relative outline-none flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left   ${isSidebarVisible  ? 'rotate-[42deg]' :  ''}  `}></div>
            <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300   ${isSidebarVisible ? '-translate-x-10' : '' } `}></div>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  ${isSidebarVisible  ? '-rotate-[42deg]' : '' } `}></div>
          </div>
        </div>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar  text-white h-screen xl:w-68 lg:w-68  ${isSidebarVisible ? '' : 'lg:block hidden'}`}>
        <div className="p-2  flex flex-col  justify-center items-center text-center">
        <img className='profile hover:transform hover:scale-105  hover:transition-transform' src="profile1.jpg" alt=""  />

          <h2 className="text-xl font-bold">Om Chevli</h2>
          <div className="social-links mt-3 text-center ">
          <a href="#" className="twitter  hover:text-black hover:bg-white hover:transform hover:scale-105  hover:transition-transform    "><i className=" fab fa-twitter"></i></a>
          <a href="#" className="facebook hover:text-black hover:bg-white hover:transform hover:scale-105  hover:transition-transform    "><i className=" fab fa-facebook"></i></a>
          <a href="#" className="instagram hover:text-black hover:bg-white hover:transform hover:scale-105  hover:transition-transform    "><i className=" fab fa-instagram"></i></a>
          <a href="#" className="google-plus hover:text-black hover:bg-white hover:transform hover:scale-105  hover:transition-transform    "><i className=" fab fa-skype"></i></a>
          <a href="#" className="linkedin hover:text-black hover:bg-white hover:transform hover:scale-105  hover:transition-transform    "><i className=" fab fa-linkedin"></i></a>
        </div>
        </div>
        <nav className="mt-0 pl-2">
            <ul>
              <li className=" flex items-center pl-5 mmd:t-5  lg:mb-2 sm:mt-5  mt-2  hover:bg-white hover:rounded-full p-2 hover:ml-2 hover:mr-5 hover:text-black ">
              <i className="fa fa-sharp  fa-house"></i><Link to="/" className="block px-4 py-2 hover:text-black  ">Home</Link>
              </li>
              <li className=" flex items-center pl-5 md:mt-5 lg:mb-2 sm:mt-5 mt-2 hover:bg-white hover:rounded-full p-2 hover:ml-2 hover:mr-5  hover:text-black">
                <i className="fa-sharp fa-regular fa-user"></i><Link to="/about" className="block px-4 py-2 hover:text-black ">About</Link>
              </li>
              <li className=" flex items-center pl-5 md:mt-5 lg:mb-2 sm:mt-5 mt-2 hover:bg-white hover:rounded-full p-2 hover:ml-2 hover:mr-5  hover:text-black">
                <i className="fa-sharp fa-regular fa-file"></i><Link to="/services" className="block px-4 py-2 hover:text-black  ">Resume</Link>
              </li>
              <li className=" flex items-center pl-5 md:mt-5 lg:mb-2 sm:mt-5 mt-2 hover:bg-white hover:rounded-full p-2 hover:ml-2 hover:mr-5  hover:text-black">
                <i className="fa-sharp fa-regular fa-file-text"></i><Link to="/contact" className="block px-4 py-2  hover:text-black 0">Portfolio</Link>
              </li>
              <li className=" flex items-center pl-5 md:mt-5 lg:mb-2 sm:mt-5 mt-2 hover:bg-white hover:rounded-full p-2 hover:ml-2 hover:mr-5  hover:text-black">
                <i className="fa fa-sharp  fa-server"></i><Link to="/contact" className="block px-4 py-2  hover:text-black ">Services</Link>
              </li>
              <li className=" flex items-center pl-5 md:mt-5 lg:mb-2 sm:mt-5  mt-2 hover:bg-white hover:rounded-full p-2 hover:ml-2 hover:mr-5 hover:text-black  ">
                <i className="fa-sharp fa-regular fa-envelope"></i><Link to="/contact" className="block px-4 py-2 hover:text-black ">Contect</Link>
              </li>
            </ul>
        </nav>
        <div className=" absolute lg:block bottom-0 p-2 left-[25%] flex items-center justify-center">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
