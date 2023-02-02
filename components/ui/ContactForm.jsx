import { useState } from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

import { contactForm } from "../../constants";

import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const { locale } = useRouter();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      telegram: "",
    },
  });

  const onSubmit = async ({ name, email, phone, telegram }) => {
    setLoading(true);
    try {
      const queryUrl = `${process.env.NEXT_PUBLIC_BITRIX_URL}/crm.lead.add.json`;

      const queryData = {
        fields: {
          TITLE: "Заявка с сайта Business Incubator",
          NAME: name,
          EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
          PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
          IM: [{ VALUE: telegram, VALUE_TYPE: "TELEGRAM" }],
        },
        params: { REGISTER_SONET_EVENT: "Y" },
      };
      await fetch(queryUrl, {
        method: "POST",
        body: JSON.stringify(queryData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <form
      className="w-full flex flex-col space-y-6 md:items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <label for="name" className="sr-only" />
        <input
          className={`w-full border-2  py-3 px-6 rounded-full bg-transparent ${
            errors.name?.type === "required"
              ? "border-red-400"
              : "border-[#4B8765]"
          }`}
          placeholder={contactForm.name[locale]}
          type="text"
          {...register("name", {
            required: true,
          })}
        />
      </div>

      <div className="w-full">
        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
              {...field}
              inputExtraProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
              country="pl"
              onlyCountries={["pl", "ua", "ru"]}
              inputStyle={{
                width: "100%",
                borderRadius: "999px",
                border: "2px solid #4B8765",
                padding: "22px 48px",
              }}
              buttonStyle={{
                borderRadius: "999px 0 0 999px",
                borderLeft: "2px solid #4B8765",
                borderTop: "2px solid #4B8765",
                borderBottom: "2px solid #4B8765",
              }}
              dropdownStyle={{
                width: "300px",
                marginTop: "4px",
                outline: "none",
                padding: "10px",
                boxShadow:
                  "0px 4px 40px rgba(0, 0, 0, 0.25), 0px 16px 40px rgba(33, 33, 33, 0.16)",
              }}
            />
          )}
        />
      </div>
      <div className="w-full">
        <label for="email" className="sr-only" />
        <input
          className={`w-full border-2  py-3 px-6 rounded-full bg-transparent ${
            errors.name?.type === "required"
              ? "border-red-400"
              : "border-[#4B8765]"
          }`}
          placeholder={contactForm.mail[locale]}
          type="email"
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className="w-full">
        <label for="telegram" className="sr-only" />
        <input
          className={`w-full border-2  py-3 px-6 rounded-full bg-transparent ${
            errors.name?.type === "required"
              ? "border-red-400"
              : "border-[#4B8765]"
          }`}
          placeholder={contactForm.telegram[locale]}
          type="text"
          name="telegram"
          {...register("telegram", {
            required: true,
          })}
        />
      </div>

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
                strokeWidth="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            contactForm.btn[locale]
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
