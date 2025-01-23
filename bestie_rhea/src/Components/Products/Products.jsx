import shoesImage from './../../assets/shoes.jpg';
import pabango from './../../assets/perfume_cosmetic.jpg';
import baby from './../../assets/baby.jpg';
import men from './../../assets/men.jpg';
import lady from './../../assets/lady.jpg';
import ready from './../../assets/ready.jpg';
import jewelry from './../../assets/jewelry.jpg';
import blanket from './../../assets/blanket.jpg';
import personal from './../../assets/personal.jpg';
import handbag from './../../assets/handbags.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Products(){
    useEffect(() => {
        Aos.init({ duration: 2000 }); 
    }, []);
    return(
        <>
            <div className="products_container h-[155vh] md:h-[165vh] lg:h-[90vh] xl:h-[90vh] scroll-mt-[83px]" id='products'>
                <h1 className="text-center mt-5 italic text-md md:text-lg xl:text-xl" data-aos="fade-in">What we provide?</h1>
                <div className="card-container flex justify-center">
                    <div className="card grid grid-cols-2 p-2 justify-center items-center gap-x-1 gap-y-2 mt-5 md:grid-cols-3 md:gap-x-5 lg:grid-cols-5">
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={shoesImage} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]" >Shoes Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={pabango} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Perfumes & Cosmetic <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={baby} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]  duration-[0.5s] group-hover:tracking-[3px]">Baby Wear <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={men} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Men Underwear's <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={lady} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Ladies Garment <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={ready} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 cursor-pointer flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Readymade Garment <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={jewelry} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 cursor-pointer flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Imitation Jewellery <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={blanket} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Blankets, Towel <br/> & Linens Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={personal} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Beauty & Personal <br/> Care Requisites <br/> Trading</h1>
                        </div>
                        <div className="card_bg bg-black cursor-pointer h-[180px] w-[180px] relative rounded-[5px] md:h-[240px] md:w-[240px] lg:w-[190px] xl:w-[250px] transition-all group overflow-hidden" data-aos="slide-up">
                            <img src={handbag} alt="" className="opacity-60 h-full w-full object-cover transition-transform duration-[0.5s] group-hover:scale-110"/>
                            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] duration-[0.5s] group-hover:tracking-[3px]">Handbags & Leather <br/> Products Trading</h1>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );

}

export default Products