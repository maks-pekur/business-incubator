import Image from "next/image";
import Link from "next/link";

import arrowUp from "../public/assets/images/arrow-up.png";

const Person = ({ img, name, position, mail, phone }) => {
  return (
    <article className="flex justify-center items-center">
      <div className="rounded-full bg-gradient-to-t from-[#2C5F40] to-white w-[330px] h-[330px] overflow-hidden relative ">
        <div className="w-full h-full flex items-end justify-center">
          <Image src={img} alt="photo" height={280} />
        </div>

        <div className="absolute top-[80%] left-0 right-0 bottom-0 text-white hover:top-[40%] transition-all duration-500">
          <div className="w-full h-full bg-black opacity-70 z-0"></div>
          <div className="absolute top-0 flex flex-col items-center justify-center w-full">
            <div className="text-center text-md mt-3">{name}</div>
            <div className="w-full flex items-end justify-center h-8 animate-bounce">
              <Image src={arrowUp} alt="" width={30} height={30} />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-center text-md">{position}</div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div>
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 0H1.8C0.81 0 0.00899999 0.84375 0.00899999 1.875L0 13.125C0 14.1563 0.81 15 1.8 15H16.2C17.19 15 18 14.1563 18 13.125V1.875C18 0.84375 17.19 0 16.2 0ZM15.84 3.98438L9.477 8.12813C9.189 8.31563 8.811 8.31563 8.523 8.12813L2.16 3.98438C1.935 3.83438 1.8 3.58125 1.8 3.30938C1.8 2.68125 2.457 2.30625 2.97 2.63437L9 6.5625L15.03 2.63437C15.543 2.30625 16.2 2.68125 16.2 3.30938C16.2 3.58125 16.065 3.83438 15.84 3.98438Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  <div className="text-[12px]">
                    <Link href={`mailto:${mail}`}>{mail}</Link>
                  </div>
                </div>
                {!phone || phone === "" ? null : (
                  <div className="flex items-center space-x-2">
                    <div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4323 10.9109L12.17 10.6526C11.6267 10.5903 11.0923 10.7773 10.7093 11.1603L9.07041 12.7992C6.54978 11.5166 4.4834 9.45909 3.20082 6.92954L4.84858 5.28177C5.23157 4.89877 5.41862 4.36436 5.35627 3.82104L5.09797 1.57652C4.99109 0.676922 4.23401 0 3.32551 0H1.78464C0.778165 0 -0.0590758 0.837245 0.0032719 1.84372C0.475333 9.45018 6.55869 15.5247 14.1562 15.9967C15.1627 16.0591 15.9999 15.2218 15.9999 14.2154V12.6745C16.0088 11.7749 15.3319 11.0178 14.4323 10.9109V10.9109Z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                    <div className="text-[12px]">
                      <Link href={`tel:${phone}`}>{phone}</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Person;
