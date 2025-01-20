import bestieImgage from './../../assets/bestie.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Bestie(){
        useEffect(() => {
            Aos.init({ duration: 2000 }); 
        }, []);
    return(
        <>
            <div className="bestie_container h-[30vh] mt-5 md:h-[40vh] lg:h-[50vh] xl:h-[60vh]" data-aos="fade-in">
                <img src={bestieImgage} alt="" srcset="" className='h-full w-full object-fill xl:object-fill' />
            </div>
        </>
    );
}

export default Bestie