import { useRouter } from "next/router";
import { i18n } from "../constants";
import StarRating from "./ui/Rating";
import Avatar from "./ui/Avatar";
import Google from "./ui/Google";

const Reviews = ({ reviews }) => {
  const { locale } = useRouter();
  return (
    <section className="w-full space-y-10 flex flex-col items-center py-14">
      <h3 className="font-bold text-[24px] lg:text-[48px] pt-10 uppercase">
        {i18n.reviews[locale]}
      </h3>

      <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden w-full snap-x-mandatory scroll-p-6 rounded-xl gap-4 scrollbar-hide">
        {reviews.map(({ id, text, user, rating, picture, date }) => (
          <div
            key={id}
            className="p-4 snap-start flex-none w-[300px] lg:w-[450px] border-[1px] rounded-2xl shadow-md"
          >
            <div>
              <div className="flex justify-between">
                <Avatar picture={picture} name={user} />
                <Google />
              </div>
              <div className="pl-12">
                <div className="flex items-center space-x-3">
                  <StarRating value={rating} />
                  <div className="text-[12px] text-gray-500 text-center">
                    {date}
                  </div>
                </div>
                <div className="text-[12px] lg:max-h-[150px] max-h-[80px] overflow-y-scroll">
                  {text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Reviews;
