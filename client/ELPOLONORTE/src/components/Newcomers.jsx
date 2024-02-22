import { useWix } from "../context/WixProvider";

function Newcomers() {
  

  return (
   
        <section className=" md:w-full  md:grid md:grid-rows-1 md:grid-cols-2 ">
          <article className="bg-black text-white text-center h-[100vh]">
            <h1 className="text-[40px] md:text-[60px] relative top-56 px-36">
              RECIÉN LLEGADOS
            </h1>
            <h3 className="md:text-[24px] font-serif relative top-60">
              COMPRAR AHORA
            </h3>
          </article>
          <div className="h-[60vh] md:h-[100vh] w-full bg-newcomers bg-no-repeat bg-cover bg-center"></div>
        </section>
  )
     
}

export default Newcomers;
