import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Navbar({toggleAboutUs}){
    useEffect(() => {
        Aos.init({ duration: 3000 }); 
    }, []);
    const [open, setOpen] = useState(false);

    function open_options(){
        setOpen(!open);
    }
    


    return(
        <>
            <div className="navbar text-white">
                <nav className='"'>
                    <div className="business_name flex items-center ">
                        <h1 className="name fixed text-lg left-3 top-3 z-50 lg:top-5 lg:left-10 lg:text-2xl" data-aos="zoom-out">Bestie's</h1>
                        <FontAwesomeIcon icon={faBars} className='fixed right-3 top-3 text-2xl z-50 cursor-pointer lg:hidden ' onClick={open_options}/>
                    </div>
                    <ul className='fixed w-screen left-0 top-0 h-12 z-10 lg:h-16 bg-[#5868A8]' data-aos="zoom-out">
                        <div className={`list w-screen overflow-hidden bg-[#303756] flex flex-col items-center transition-all duration-500 ${open ? 'h-72 opacity-100' : 'h-0 opacity-0'} lg:h-16 lg:opacity-100 lg:flex-row lg:justify-end lg:pr-5 lg:bg-transparent lg:-ml-10 cursor-pointer`}>
                            <a href=""><li className='items bg-transparent transition hover:bg-black duration-500 mt-20 w-screen h-[50px] flex justify-center items-center lg:w-20 lg:mt-0 lg:mr-10 lg:hover:bg-transparent lg:hover:text-black lg:text-lg'>Home</li></a>
                            <a href="#products"><li className='items  bg-transparent transition hover:bg-black duration-500 w-screen h-[50px] flex justify-center items-center lg:w-20 lg:mr-10 lg:hover:bg-transparent lg:hover:text-black lg:text-lg'>Products</li></a>
                            <a href="#aboutus"><li className='items  bg-transparent transition hover:bg-black duration-500  w-screen h-[50px] flex justify-center items-center lg:w-20 lg:hover:bg-transparent lg:hover:text-black lg:text-lg' onClick={toggleAboutUs}>About us</li></a>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar