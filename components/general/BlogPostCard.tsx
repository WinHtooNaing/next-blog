import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
const BlogPostCard = ({ data }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="image for blog post"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg mb-2 font-semibold text-gray-900 line-clamp-1">
            {data.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {data.content}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt="image for blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>
            <time className="text-sm text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
