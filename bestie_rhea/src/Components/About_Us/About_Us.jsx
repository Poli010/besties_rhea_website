import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Abouts_Us(){
        useEffect(() => {
            Aos.init({ duration: 2000 }); 
        }, []);
    return(
        <>
            <div>
                <div className="h-[75vh] mt-10 flex flex-col items-center md:h-[40vh] lg:h-[55vh] xl:h-[40vh] scroll-mt-[83px]" data-aos="fade-in" id='aboutus'>
                    <h1 className="text-center font-bold italic text-md lg:text-xl">About us</h1>
                    <div className="description w-[320px] text-center mt-5 text-sm md:text-md lg:text-lg md:w-[700px] lg:w-[900px] xl:w-[1200px] md:text-left">
                        <p className="pl-2 pr-2 mt-5">Welcome to <span className="font-bold">BESTIES TRENDY COLLECTION GARMENTS TRADING L.L.C</span>, where fashion meets quality. 
                            We specialize in trading and selling a wide range of clothing for men, women, and children. 
                            Our goal is to bring you stylish, comfortable, and affordable apparel for every occasion.
                            At <span className="font-bold">BESTIES TRENDY COLLECTION GARMENTS TRADING L.L.C</span>, we carefully select each item to ensure 
                            it fits your lifestyle and personal style. Whether you're looking for casual wear, trendy pieces, 
                            or something special, we've got you covered.
                            We are committed to providing a great shopping experience with fast shipping and excellent customer service. 
                            Thank you for choosing <span className="font-bold">BESTIES TRENDY COLLECTION GARMENTS TRADING L.L.C</span>  — your perfect style awaits!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Abouts_Us