import { useRouter } from "next/router";
import { i18n } from "../constants";
import StarRating from "./ui/Rating";
import Avatar from "./ui/Avatar";

const Reviews = ({ reviews }) => {
  const { locale } = useRouter();
  return (
    <section className="w-full space-y-10 flex flex-col items-center py-14">
      <h3 className="font-bold text-[24px] lg:text-[48px] pt-10 uppercase">
        {i18n.reviews[locale]}
      </h3>

      <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden w-[90%] snap-x-mandatory scroll-p-6 rounded-xl gap-6 scrollbar-hide">
        {reviews.map(({ id, text, user, rating, picture }) => (
          <div
            key={id}
            className="p-6 snap-start flex-none w-[290px] lg:w-[500px] border-2 rounded-2xl shadow-lg"
          >
            <div>
              <Avatar picture={picture} name={user} />
              <div className="pl-12">
                <StarRating value={rating} />
                <div className="text-[12px]">{text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Reviews;
