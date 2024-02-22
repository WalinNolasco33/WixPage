import { Formik, Form, Field, useFormik } from "formik";
import { useWix } from "../context/WixProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Forms({ elements }) {
  const { Logwix, Sessionwix, Deletewix, Emailwix, isAuthenticated, cookie } =
    useWix();

  const [errors, setMessageError] = useState("");
  const navigate = useNavigate();
  let ObjError = {};
  let purpose = "";

  const setPurpose = (p) => {
    purpose = p;
  };
  const handleSession = async (values, { setSubmitting, resetForm }) => {
    switch (purpose) {
      case "session":
        ObjError = await Sessionwix(values);

        if (ObjError.response && ObjError.response.status > 299) {
          setMessageError(ObjError.response.data.message);
        } else if (
          cookie == null &&
          ObjError.response &&
          ObjError.response.status < 299
        ) {
          isAuthenticated(true);
          navigate("/");
        } else {
          isAuthenticated(true);
          navigate("/");
        }

        setSubmitting(false);

        break;
      case "login":
        ObjError = await Logwix(values);

        if (ObjError.response && ObjError.response.status > 299) {
          setMessageError(ObjError.response.data.message);
        } else {
          isAuthenticated(true);
          navigate("/");
        }

        break;
      case "email":
        await Emailwix(values);
        setSubmitting(false);
        resetForm({
            name: "",
            user: "",
            password: "",
            email: "",
            phone: "",
            message: "",
          });
        break;
      case "delete":
        await Deletewix(values);
        setSubmitting(false);
    }
  };

  return (
    <>
      {errors ? <div className="text-white  bg-red-500 ">{errors}</div> : null}

      <Formik
        enableReinitialize={true}
        initialValues={{
          name: "",
          user: "",
          password: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={handleSession}
      >
        {({ isSubmitting }) => (
          <Form className="max-md:w-[100%] mx-9">
            {elements.map((e, index) => (
              <div key={index}>
                {e.as === "input" ? (
                  <Field
                    className="w-[75%] px-2 py-2 my-2 h-12 "
                    type={e.type}
                    name={e.name}
                    placeholder={e.placeholder}
                  />
                ) : e.as === "textarea" ? (
                  <>
                    <Field
                      className="w-[75%] px-2 py-2 my-2 h-12 "
                      type={e.type}
                      name={e.name}
                      placeholder={e.placeholder}
                    />
                  </>
                ) : e.buttonText1.length > 1 ? (
                  e.buttonText1.map((x, bIndex) => (
                    <button
                      key={bIndex}
                      type="submit"
                      disabled={isSubmitting}
                      onClick={() => setPurpose(x)}
                      className="block bg-slate-600 mx-auto w-2/4 text-2xl mb-4 rounded-lg py-2 text-white hover:bg-blue-300"
                    >
                      {x}
                    </button>
                  ))
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white py-2 px-8 text-xl"
                    onClick={() => {
                      setPurpose("email");
                    }}
                  >
                    {e.buttonText1[0]}
                  </button>
                )}
              </div>
            ))}
          </Form>
        )}
      </Formik>
    </>
  );
}
