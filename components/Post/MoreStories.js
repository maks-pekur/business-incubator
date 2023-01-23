import { useRouter } from "next/router";
import { i18n } from "../../constants";
import PostPreview from "./PostPreview";

export default function MoreStories({ posts }) {
  const { locale } = useRouter();
  if (posts[0].localeVersion) {
    posts = posts.map((post) => post.localeVersion).filter((post) => post);
  }
  return (
    <section>
      <h2 className="mb-8 text-5xxl md:text-7xl font-bold tracking-tighter leading-tight">
        {i18n.more[locale]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}x
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>
    </section>
  );
}
