import Link from "next/link";
import React, { useState } from "react";
import { allBlogs } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allBlogs.map((p) => ["pageviews", "blogs", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allBlogs[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const allblogs = allBlogs.filter((p) => p.published);
  // const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = allBlogs
    // .filter((post) =>
    //   post.title.toLowerCase().includes(searchValue.toLowerCase())
    // )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blogs
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`I mostly write about web development, and some challanges aroud software development.
            In total, I've written ${allblogs.length} articles on my blog.`}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0">
          <div className="grid grid-cols-2 gap-4">
            {filteredBlogPosts
              // .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article blog={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
