import Link from "next/link";
import { Metadata } from "next";
import { getData } from "../utils";
import { Fragment } from "react";
import { PostType } from "../types";
export const metadata: Metadata = {
  title: "Blog | Basic Routing",
};

export default async function Blog() {
  const allPosts = await getData();
  return (
    <Fragment>
      <h1 className="text-3xl mb-7">You will see posts below!!!</h1>
      <ul>
        {allPosts.map((post: PostType) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
