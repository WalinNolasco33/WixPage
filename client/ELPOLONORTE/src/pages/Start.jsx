import Banner from "../components/Banner";
import Newcomers from "../components/Newcomers";
import Product from "../components/Product";
import Offers from "../components/Offers";
import { Aboutus } from "../components/Aboutus";
import { Forms } from "../components/Form";


function Start() {
  return (
    <main>
      <Banner />
      <Newcomers />
      <Product />
      <Offers />
      <Aboutus />
      <section className=" w-full md:h-[500px] bg-neutral-950	 md:grid md:grid-cols-2 items-center  md:px-36  flex flex-wrap flex-col-reverse py-5">
        <Forms
          errors={false}
          elements={[
            {
              as: "input",
              type: "text",
              name: "name",
              placeholder: "Nombre",
            },
            {
              as: "input",
              type: "tel",
              name: "phone",
              placeholder: "Teléfono",
            },
            {
              as: "input",
              type: "email",
              name: "email",
              placeholder: "Correo Electrónico",
            },
            {
              as: "textarea",
              name: "message",
              placeholder: "Escribe un comentario",
            },
            {
              buttonText1: ["Enviar"],
            },
          ]}
        />
        <article className="text-white text-justify text-[22px] h-full relative -left-6 px-2 w-[100%]">
          <h2 className="text-6xl mt-14 mb-4">CONTACTO</h2>
          <p className="max-md:text-[18px]">
            Párrafo. Haz clic aquí para agregar tu propio<br/> texto y editar. Aquí
            puedes contar tu historia y<br/>  permitir a tus usuarios saber más sobre
            ti.
          </p>
          ​<p className="max-md:text-[18px]">info@misitio.com</p>
          <p className="max-md:text-[18px]">Tel: 914-123-456</p>
        </article>
      </section>

      <section className="bg-neutral-800	text-center text-neutral-500	 py-12">
        <p>
          © 2035 hecho para POLONORTE. Creado con{" "}<u>
          <a
            href="https://es.wix.com/?utm_campaign=vir_created_with"
            target="_blank"
          >
            {" "}
            Wix.com
          </a></u>
        </p>
      </section>
    </main>
  );
}
export default Start;
