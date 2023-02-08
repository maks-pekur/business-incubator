import { useRef, useState } from "react";
import Image from "next/image";
import plain from "../public/assets/images/plain.svg";
import uploadImg from "../public/assets/images/upload.svg";
import { useTranslation } from "next-i18next";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { sendContactForm } from "../lib/api";

import "react-phone-input-2/lib/style.css";

const Resume = () => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const fileInput = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      position: "",
      checkbox: false,
      cv: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const formData = new FormData();
      console.log(formData);
      await sendContactForm(values);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#4B8765] to-[#FFFFFF] rounded-3xl lg:rounded-t-[100px] pt-10">
      <div className="sm:text-[48px] text-center text-[24px]">
        {t("career:resume.title")}
      </div>
      <div className="py-10 px-6 lg:px-20">
        <form
          className="grid gap-6 lg:grid-cols-3 lg:gap-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center space-y-6 w-full">
            <div className="w-full">
              <input
                placeholder={
                  errors.name
                    ? "Please enter your name"
                    : t("career:resume.name")
                }
                type="text"
                {...register("name", {
                  required: true,
                })}
                className={`w-full border-2 py-3 px-6 rounded-full bg-transparent placeholder:text-gray-800 ${
                  errors.name ? "border-[#e7795d]" : "border-[#4B8765]"
                }`}
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
                    name="phone"
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
                      backgroundColor: "transparent",
                    }}
                    buttonStyle={{
                      borderRadius: "999px 0 0 999px",
                      borderLeft: "2px solid #4B8765",
                      borderTop: "2px solid #4B8765",
                      borderBottom: "2px solid #4B8765",
                      backgroundColor: "transparent",
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
              <textarea
                placeholder={t("career:resume.message")}
                type="text"
                name="message"
                {...register("message")}
                className={`w-full border-2 py-3 px-6 rounded-full bg-transparent ${
                  errors.email
                    ? "border-[#e7795d]"
                    : "border-[#4B8765] placeholder:text-gray-800"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 w-full">
            <div className="w-full">
              <input
                placeholder={t("career:resume.email")}
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                className={`w-full border-2 py-3 px-6 rounded-full bg-transparent ${
                  errors.email
                    ? "border-[#e7795d]"
                    : "border-[#4B8765] placeholder:text-gray-800"
                }`}
              />
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder={t("career:resume.position")}
                {...register("position", {
                  required: true,
                })}
                className={`w-full border-2 py-3 px-6 rounded-full bg-transparent ${
                  errors.position
                    ? "border-[#e7795d]"
                    : "border-[#4B8765] placeholder:text-gray-800"
                }`}
              />
            </div>

            <div className="flex flex-col space-y-6 items-center w-full justify-center">
              <div className="w-full flex items-center justify-center">
                <label
                  htmlFor="cv"
                  onClick={() => fileInput.current.click()}
                  className="cursor-pointer flex items-center space-x-4"
                >
                  <Image src={uploadImg} width={50} height={50} alt="" />
                  <span>{t("career:resume.upload")}</span>
                </label>
                <Controller
                  control={control}
                  name="cv"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    formState,
                  }) => (
                    <input
                      className="hidden"
                      type="file"
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                      ref={fileInput}
                      value={value}
                    />
                  )}
                />
              </div>

              <div className="w-full">
                <Controller
                  name="checkbox"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className="w-full flex space-x-6">
                      <input
                        {...field}
                        type="checkbox"
                        className="border-2 border-black placeholder:text-gray-800"
                      />
                      <label htmlFor="checkbox">
                        {t("career:resume.policy")}
                      </label>
                    </div>
                  )}
                />
              </div>

              <div className="w-full flex justify-center items-center">
                <button type="submit" className="button">
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    t("career:resume.btn")
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-end justify-start h-full">
            <Image src={plain} alt="" width={200} height={200} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resume;
