import { useEffect, useRef, useState } from "react";


function Product() {
  
   const [animation, setAnimation]=useState(false);
   //variable donde se guardan los elementos vinculador en un array 
   const elemensRef =useRef();
   
   useEffect(()=>{
    //nos da el elemento 
    const elemento= elemensRef.current;
    
    const Observer= new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        //nos dice si estamos en el elemento
        setAnimation(entry.isIntersecting)
      })
    })
    // si existe el elemento
    if(elemento){
      //le pasamos el elemento
      Observer.observe(elemento)
    }
    console.log(animation)
    

   },[])
  return (
    <section ref={elemensRef} className="h-80 overflow-hidden grid md:grid-cols-3 gap-0 bg-black products-area grid-rows-2 grid-cols-2">
      <div className="max-md:[grid-area:mochilas] relative bg-productos-1 md:h-80 bg-no-repeat bg-cover object-cover bg-center group w-full z-10">
        <p className="text-center font-serif text-white h-full w-full opacity-0 group-hover:opacity-100 translate-y-28 transition-all ease-linear bg-black/50 -my-28 py-36 duration-500">
          <a href="">MOCHILAS</a>
        </p>
      </div>

      {animation ?  <div className="max-md:[grid-area:bolsas-de-lona]  relative bg-productos-2 md:h-80 bg-no-repeat bg-cover object-cover bg-center group w-full animate-slide-right ">
        <p className="text-center font-serif text-white h-full w-full opacity-0  group-hover:opacity-100 md:translate-y-28 transition-all ease-linear bg-black/50 -my-28 py-36 duration-500">
          <a href="" className="">BOLSOS DE LONA</a>
        </p>
      </div>:<p className="text-white">Loading...</p> }

      {animation ? <div className="max-md:[grid-area:bolsas-de-viaje]  relative bg-productos-3  md:h-80 bg-no-repeat bg-cover object-cover bg-center group animate-slide-right-2 overflow-hidden">
        <p className=" text-center text-white  font-serif h-full w-full opacity-0 group-hover:opacity-100 translate-y-11 md:translate-y-28  transition-all ease-linear bg-black/50 -my-28 py-36 duration-500">
          <a href="">BOLSAS DE VIAJE</a>
        </p>
      </div>:<p className="text-white">Loading...</p> }
    </section>
  );
}

export default Product;
