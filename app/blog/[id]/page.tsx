import { Metadata } from "next";
import { getUniqueData } from "@/app/utils";

export interface DynamicPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: DynamicPageProps): Promise<Metadata> {
  const post = await getUniqueData(id);
  return {
    title: post.title,
  };
}

export default async function SinglePost({ params: { id } }: DynamicPageProps) {
  const post = await getUniqueData(id);
  return (
    <div>
      <h1 className="mb-3 text-4xl">Info about specific post :</h1>
      <h3>Post page number : {post.id}</h3>
      <p>Title: {post.title}</p>
      <p>Body's Post : {post.body}</p>
    </div>
  );
}
