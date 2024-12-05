import { type PostData, formatDate } from "@/lib/converter";

export type BlogCardProps = {
  link: string;
  title: PostData["title"];
  date: PostData["publishedDate"];
  description?: PostData["summary"];
  tags?: string[];
};
export default function BlogCard({
  link,
  title,
  date,
  description,
  tags,
}: BlogCardProps) {
  return (
    <div className="p-4 flex flex-col w-full justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-[#292525] dark:border-gray-400/40">
      <a
        className="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100"
        href={link}
      >
        {title}
      </a>
      <p>{formatDate(date, false)}</p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
        {tags?.map((tg) => (
          <span
            key={tg}
            className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600"
          >
            {tg}
          </span>
        ))}
      </div>
      <p className="text-gray-800 two-lines dark:text-gray-300">
        {description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <a
          href={link}
          className="text-blue-700 hover:underline dark:text-white"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
