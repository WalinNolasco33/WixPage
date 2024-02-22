import { useState } from "react";
import { Image } from "./Image";

function Offers() {
  const [pathImage, setPathImage] = useState([
    {
      image: "./../public/mochila-offers-1.webp",
      product: "MOCHILA DE LONA",
      price: "₪130.00  ₪67.50",
    },

    {
      image: "./../public/imagen-mochila-offers-2.webp",
      product: "MOCHILA COMPLETA VIAJES",
      price: " ₪130.00  ₪67.50",
    },

    {
      image: "./../public/imagen-mochila-offers-3.webp",
      product: "MOCHILA CAMUFLADA",
      price: " ₪130.00  ₪67.50",
    },
  ]);

  return (
    <section className="w-full md:h-[900px] bg-black pt-32  overflow-hidden relative ">
      <article className="text-center text-white ">
        <h1 className="text-6xl mb-4">AHORA EN OFERTA</h1>
        <h3 className="font-serif text-[24px]">HASTA 50% OFF</h3>
      </article>
      
     <figure className="flex  items-center relative w-[90%]  justify-center mx-auto max-md:flex-col">
         {pathImage.map((path, index) => (
           <Image key={index} image={path.image} product={path.product}  price={path.price}/>
         ))}
     </figure>
      
    </section>
  );
}

export default Offers;
