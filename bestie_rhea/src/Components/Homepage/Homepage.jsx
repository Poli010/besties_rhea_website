import './Homepage.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';

function Homepage(){
    useEffect(() => {
        Aos.init({ duration: 3000 }); 
    }, []);
    const sample = useRef();
    function contact(){
       sample.current.click()
    }
    return(
        <>
            <div className="homepage_container text-white h-[90vh] bg-[#5868A8] flex flex-col justify-center items-center overflow-y" id='homepage'>
                <div className="motto mt-10 lg:mt-12">
                    <h1 className="title1 text-[30px] text-center md:text-[60px] lg:text-[70px] lg:text-left xl:text-[90px]" data-aos="fade-up">DISCOVER, EXPRESS, SHINE</h1>
                    <h1 className='title2 text-center text-[20px] lg:text-left md:text-[30px] lg:text-[40px]' data-aos="fade-down">-Your Perfect Style Awaits!</h1>
                </div>
                <div className="description text-[12px] w-screen p-2 text-center md:w-[400px] md:text-[14px] lg:w-[700px] lg:text-left lg:ml-32  lg:text-[18px] xl:-ml-0">
                    <p data-aos="fade-right"> Are you looking for modern, trendy garments? What are you waiting for? Watch us live on Facebook and TikTok, and place your bids, or contact us for more information!</p>
                </div>
                <button class="contact-btn bg-white text-black font-bold text-sm px-6 py-2 rounded-[5px] mt-4 shadow-lg hover:bg-black hover:text-white transition duration-500 xl:text-lg" data-aos="slide-up" onClick={contact}>Contact us</button>
                <a href="#contact_us" className="hidden" ref={sample}>sample</a>
            </div>
        </>
    );

}

export default Homepage