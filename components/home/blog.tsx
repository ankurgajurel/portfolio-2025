"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/blog";

export default function HomeBlog() {
  return (
    <section id="blogs" className="container p-4 flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/#blogs">
          <h2 className="text-6xl flex gap-2 items-end group">
            <span className="group-hover:underline">writes</span>
            <ArrowUp
              size={48}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </h2>
        </Link>
      </motion.div>

      <div className="flex flex-col gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={`/blog/${post.slug}`}
              className="group border-b-[0.5px] border-black pb-8 last:border-0"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl font-medium group-hover:underline">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-600">{post.date}</span>
                </div>
                <p className="text-lg font-light">{post.excerpt}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
