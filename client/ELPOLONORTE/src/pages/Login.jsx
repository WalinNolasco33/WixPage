import { Forms } from "../components/Form";

function Login() {
  return (
    <section className="w-full bg-black h-screen flex items-center text-center px-56">
      <div className="w-full  bg-gray-900 h-[70%]  grid items-center">
        <h1 className="text-white font-principal text-[22px]">Crea tu usuario o accede a tu sesión</h1>
        <Forms
          errors={true} 
          elements={[
            {
              as: "input",
              type: "text",
              name: "name",
              placeholder: "Nombre",
            },
            {
              as: "input",
              type: "email",
              name: "user",
              placeholder: "Correo Electrónico",
            },
            {
              as: "input",
              type: "password",
              name: "password",
              placeholder: "Escribe tu contraseña",
            },
            {
              buttonText1: ["login", "session"],
            },

          ]
        
        }/>
      </div>
    </section>
  );
}

export default Login;
