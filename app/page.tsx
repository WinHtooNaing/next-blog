import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import SkeletonGrid from "@/components/SkeletonGrid";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      updatedAt: true,
      authorId: true,
    },
  });
  return data;
};
export default function Page() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Latest Posts</h1>
      <Suspense fallback={<SkeletonGrid />}>
        <BlogPost />
      </Suspense>
    </div>
  );
}
const BlogPost = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((data) => (
        <BlogPostCard key={data.id} data={data} />
      ))}
    </div>
  );
};
