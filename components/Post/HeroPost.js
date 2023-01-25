import Link from "next/link";

import Date from "../ui/Date";
import Avatar from "../ui/Avatar";
import CoverImage from "../ui/CoverImage";
import Heading from "../ui/Heading";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="md:grid  md:gap-x-16 lg:gap-x-4 mb-20 md:mb-28">
        <Heading tag={"h3"} classNames={"text-start"}>
          <Link href={`/posts/${slug}`}>{title}</Link>
        </Heading>
        <div className="mb-4 md:mb-0 text-lg">
          <Date dateString={date} />
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
