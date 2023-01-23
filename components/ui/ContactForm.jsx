import { useState } from "react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { consultation } from "../../constants";

import { sendContactForm } from "../../lib/api";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(11, "Too Short!")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { locale } = useRouter();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          await sendContactForm(values);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form
          className="w-full flex flex-col space-y-6 md:items-center items-start"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent lg:w-[60%]"
            placeholder={consultation.name[locale]}
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            required
          />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <input
            className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent lg:w-[60%]"
            placeholder={consultation.phone[locale]}
            type="tel"
            name="phone"
            onChange={handleChange}
            value={values.phone}
            required
          />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          <input
            className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent lg:w-[60%]"
            placeholder={consultation.mail[locale]}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <div className="w-full flex justify-center items-center">
            <button type="submit" className="button">
              {isLoading ? (
                <svg
                  class="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Отправить"
              )}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
