import Image from "next/image";
import Button from "./ui/Button";
import plain from "../public/assets/images/plain.svg";
import uploadImg from "../public/assets/images/upload.svg";
import { useTranslation } from "next-i18next";

// initialValues={{
//   name: "",
//   email: "",
//   phone: "+4",
//   message: "",
//   position: "",
//   personalData: false,
//   file: "",
// }}

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
  return (
    <div className="bg-gradient-to-b from-[#4B8765] to-[#FFFFFF] rounded-3xl lg:rounded-t-[100px] pt-10">
      <div className="sm:text-[48px] text-center text-[24px]">
        {t("career:resume.title")}
      </div>
      <div className="py-10 px-6 lg:px-20">
        <form
          className="grid gap-6 lg:grid-cols-3 lg:gap-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center space-y-6 w-full">
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent placeholder:text-gray-800"
              placeholder={t("career:resume.name")}
              type="text"
              name="name"
              onChange={() => {}}
            />
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent placeholder:text-gray-800"
              placeholder={t("career:resume.phone")}
              type="tel"
              name="phone"
              onChange={() => {}}
            />
            <textarea
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-[30px] bg-transparent h-40 resize-none placeholder:text-gray-800"
              placeholder={t("career:resume.message")}
              type="text"
              name="message"
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-col items-center space-y-6 w-full">
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent  placeholder:text-gray-800"
              placeholder={t("career:resume.email")}
              type="email"
              name="email"
              onChange={() => {}}
            />
            <input
              className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent  placeholder:text-gray-800"
              placeholder={t("career:resume.position")}
              type="text"
              name="position"
              onChange={() => {}}
            />
            <div className="flex flex-col space-y-6 items-center w-full justify-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center space-x-2 cursor-pointer hover:bg-[var(--text-green)] hover:opacity-70 p-2 rounded-xl transition-all duration-300"
                >
                  <Image src={uploadImg} alt="" height={40} width={40} />
                  <div>{t("career:resume.upload")}</div>
                  <input
                    type="file"
                    name="file"
                    onChange={(event) => {
                      const files = event.target.files[0];
                    }}
                    multiple
                    className="absolute top-4 opacity-0 cursor-pointer w-full placeholder:text-gray-800"
                  />
                </button>
              </div>
              <div className="flex space-x-2">
                <input
                  type="checkbox"
                  onChange={() => {}}
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
