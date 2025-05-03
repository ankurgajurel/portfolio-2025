import { redirect } from "next/navigation";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = posts.find((post) => post.id === id);

  if (!post) redirect("/");

  return (
    <section className="container p-4 my-10 md:my-16 lg:my-20">
      <Link href="/" className="inline-block mb-10 group">
        <div className="flex items-center gap-2 text-sm">
          <ArrowUp
            size={20}
            className="rotate-90 group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="group-hover:underline">back to home</span>
        </div>
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-medium mb-4">
            {post.title}
          </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600">
            <time>{post.date}</time>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 border-[0.5px] border-black hover:bg-gray-200 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg font-light leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t-[0.5px] border-black">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 group text-lg"
          >
            <ArrowUp
              size={20}
              className="rotate-90 group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="group-hover:underline">back to home</span>
          </Link>
        </footer>
      </article>
    </section>
  );
}
