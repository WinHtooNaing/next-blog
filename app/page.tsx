import { prisma } from "./utils/db";

const getData = async () => {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
  });
  return data;
};
export default async function Page() {
  const data = await getData();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((base) => (
          <div key={base.id}>
            <h1>Title is :{base.title}</h1>
            <p>Content is : {base.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
