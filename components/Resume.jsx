import { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import plain from "../public/assets/images/plain.svg";
import uploadImg from "../public/assets/images/upload.svg";
import { useTranslation } from "next-i18next";
import { Controller, useForm } from "react-hook-form";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const onSubmit = (values) => {
  console.log(values);

  // let data = new FormData();
  // values.profile.forEach((photo, index) => {
  //   data.append(`photo${index}`, values.profile[index]);
  // });
  // axios
  //   .post("http://localhost:3002/send", data, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

const Resume = () => {
  const { t } = useTranslation();
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
      message: "",
      position: "",
      personalData: false,
      file: "",
    },
  });
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
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent placeholder:text-gray-800"
              placeholder={t("career:resume.name")}
              type="text"
              {...register("name", {
                required: true,
              })}
            />
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
            <textarea
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-[30px] bg-transparent h-40 resize-none placeholder:text-gray-800"
              placeholder={t("career:resume.message")}
              type="text"
              {...register("text", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col items-center space-y-6 w-full">
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent  placeholder:text-gray-800"
              placeholder={t("career:resume.email")}
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent  placeholder:text-gray-800"
              placeholder={t("career:resume.position")}
              type="text"
              {...register("position", {
                required: true,
              })}
            />
            <div className="flex flex-col space-y-6 items-center w-full justify-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center space-x-2 cursor-pointer hover:bg-[var(--text-green)] hover:opacity-70 p-2 rounded-xl transition-all duration-300"
                >
                  <Image src={uploadImg} alt="" height={40} width={40} />
                  <div>{t("career:resume.upload")}</div>
                  <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={({ field: { ref, ...field } }) => (
                      <input
                        {...field}
                        ref={ref}
                        type="file"
                        name="file"
                        onChange={(event) => {
                          const files = event.target.files[0];
                        }}
                        className="absolute top-4 opacity-0 cursor-pointer w-full placeholder:text-gray-800"
                      />
                    )}
                  />
                </button>
              </div>
              <div className="flex space-x-2">
                <input
                  type="checkbox"
                  name="personalData"
                  className="border-2 border-black placeholder:text-gray-800"
                />
                <label for="personalData">{t("career:resume.policy")}</label>
              </div>
              <div className="w-full flex justify-center items-center">
                <Button title={t("career:resume.btn")} />
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
