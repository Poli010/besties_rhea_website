import bestieLogo from './../../../public/bestie_logo.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Footer(){
        useEffect(() => {
            Aos.init({ duration: 1000 }); 
        }, []);
    return(
        <>
            <div className="footer_container h-[90vh] bg-[#303756] relative md:h-[55vh] overflow-hidden" id='contact_us'>
                <div className="footer_logo pt-3 pl-3" data-aos="fade-in">
                    <div className="logo h-[50px] w-[50px] rounded-[50%] flex items-center text-white xl:h-[60px] xl:w-[60px]">
                        <img src={bestieLogo} alt="bestie logo" title='bestie logo' className='h-full w-full object-cover rounded-[50%]'/>
                        <h1 className='name ml-1 text-xl xl:text-2xl'>Bestie</h1>
                    </div>
                </div>
                <div className="footer_items pl-3 md:grid md:grid-cols-3 md:gap-x- ">
                    <div className="watch_us pl-1 mt-5 text-white ">
                        <div className="watch_usItem" data-aos="slide-right">
                            <h1 className='font-bold text-white text-[1rem] xl:text-[1.2rem]'>Watch us live:</h1>
                            <div className="facebook_main mt-2">
                                <a href="https://www.facebook.com/Bestierheacloset" target="_blank" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500 group'><FontAwesomeIcon icon={faFacebook} className='text-[1.4rem] mr-1 text-blue-700 group-hover:text-black transition duration-500'/> Bestie Rhea's Closet(Main)</a> 
                            </div>
                            <div className="tiktok mt-2">
                                <a href="https://www.tiktok.com/@bestie_rhea" target="_blank" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500 group'><FontAwesomeIcon icon={faTiktok} className='text-[1.4rem] mr-1'/>@besite_rhea</a> 
                            </div>
                        </div>
                        <div className="other_pages  mt-5 text-white" data-aos="slide-right">
                            <h1 className='font-bold text-white text-[1rem] xl:text-[1.2rem]'>Follow our other pages:</h1>
                            <div className="facebook_2 mt-2">
                                <a href="https://www.facebook.com/Bestierheatrendy" target="_blank" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500 group'><FontAwesomeIcon icon={faFacebook} className='text-[1.4rem] mr-1 text-blue-700 group-hover:text-black transition duration-500'/> Bestie Rhea's Trendy Collection</a> 
                            </div>
                            <div className="facebook3 mt-2">
                                <a href="https://www.facebook.com/Bestierheafashion" target="_blank" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500 group'><FontAwesomeIcon icon={faFacebook} className='text-[1.4rem] mr-1 text-blue-700 group-hover:text-black transition duration-500'/> Bestie Rhea's Fashion Style</a> 
                            </div>
                        </div> 
                    </div>
                    <div className="contact_us pl-1 mt-5 text-white " data-aos="slide-right">
                        <h1 className='font-bold text-white text-[1rem] xl:text-[1.2rem]'>Contact us via:</h1>
                        <div className="facebook_2 mt-2">
                           <a href="https://wa.me/0565239677" target="_blank" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500 group'><FontAwesomeIcon icon={faWhatsapp} className='text-[1.4rem] mr-1 text-green-500 group-hover:text-black transition duration-500'/>056-523-9677</a> 
                        </div>
                        <div className="facebook_2 mt-2">
                           <a href="mailto:info@bestiesuae.com" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500'><FontAwesomeIcon icon={faEnvelope} className='text-[1.4rem] mr-1'/>info@bestiesuae.com</a> 
                        </div>
                        <div className="facebook_2 mt-2">
                           <a href="https://www.facebook.com/christine.geana" target="_blank" rel="noopener" className='text-sm flex items-center transition hover:text-black duration-500 group'><FontAwesomeIcon icon={faFacebook} className='text-[1.4rem] mr-1 text-blue-700 group-hover:text-black transition duration-500'/> Bestie Rhea</a> 
                        </div>
                    </div>
                    <div className="contact_us pl-1 mt-5 text-white" data-aos="slide-right">
                        <h1 className='font-bold text-white text-[1rem] xl:text-[1.2rem]'>Company:</h1>
                        <p className='text-sm mt-2'>BESTIES TRENDY COLLECTION GARMENTS TRADING L.L.C</p>
                    </div>
                </div>
                <div className="putres border-t border-white w-screen h-[50px] text-white absolute bottom-0">
                    <p className='text-[0.9rem] text-center mt-1'>Copyright <FontAwesomeIcon icon={faCopyright} className=''/>2025 | BESTIES TRENDY COLLECTION GARMENTS TRADING L.L.C</p>
                </div>
            </div>
        </>
    );
}

export default Footer