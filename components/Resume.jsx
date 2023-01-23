import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Button from "./ui/Button";
import plain from "../public/assets/images/plain.png";
import uploadImg from "../public/assets/images/upload.png";
import { useTranslation } from "next-i18next";

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
  personalData: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
  // file: Yup.object({
  //   profile: Yup.array().min(1, "select at least 1 file"),
  // }),
});

const Resume = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="bg-gradient-to-b from-[#4B8765] to-[#FFFFFF] rounded-3xl lg:rounded-t-[100px] pt-10 ">
        <div className="sm:text-[48px] text-center text-[24px]">
          {t("career:resume.title")}
        </div>
        <div className="w-full h-full py-10 px-6 lg:px-20">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "+4",
              message: "",
              position: "",
              personalData: false,
              file: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
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
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                className="w-full grid md:grid-cols-3 lg:gap-20 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-center space-y-6 w-full">
                  <input
                    className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent "
                    placeholder={t("career:resume.name")}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    required
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <input
                    className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent "
                    placeholder={t("career:resume.phone")}
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    required
                  />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                  <textarea
                    className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-[30px] bg-transparent h-40 resize-none"
                    placeholder={t("career:resume.message")}
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                </div>
                <div className="flex flex-col items-center space-y-6 w-full">
                  <input
                    className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent "
                    placeholder={t("career:resume.email")}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <input
                    className="w-full border-2 border-[#4B8765] py-3 px-6 rounded-full bg-transparent "
                    placeholder={t("career:resume.position")}
                    type="text"
                    name="position"
                    onChange={handleChange}
                    value={values.position}
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
                          className="absolute top-4 left-12 scale-125 opacity-0 cursor-pointer"
                        />
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="checkbox"
                        onChange={handleChange}
                        name="personalData"
                        className="border-2 border-black"
                      />
                      <label for="personalData">
                        {t("career:resume.policy")}
                      </label>
                    </div>
                    {errors.personalData && touched.personalData ? (
                      <div>{errors.personalData}</div>
                    ) : null}
                    <div className="w-full flex justify-center items-center">
                      <Button title={t("career:resume.btn")} />
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-end justify-start h-full">
                  <Image src={plain} alt="" width={200} />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Resume;
