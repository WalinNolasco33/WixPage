import {IoIosArrowDown} from 'react-icons/io'
function Banner(){
    return(
        <section className=' relative  w-full min-h-[100vh] bg-banner bg-cover bg-center px-12 grid  justify-center items-center grid-rows-3 '>
        <h1 className="text-white  text-[90px] text-center top-56 relative">PLANEA TU AVENTURA</h1>
        <a href="#" className='font-serif text-white text-center top-32 relative text-lg'>COMPRAR AHORA</a>        
        <a href="#" className='text-white mx-auto text-8xl'><IoIosArrowDown/></a>
        </section>    
        )
}
export default Banner;