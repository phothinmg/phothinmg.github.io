import type { FC } from "react";
import { type BlogPost, formatDate } from "@/lib/converter";

const MarkdownComponent: FC<Omit<BlogPost, "slug">> = ({
  metadata,
  converteredMd,
}) => {
  const html = { __html: converteredMd };
  return (
    <section>
      <h1 className="title mb-3 font-medium text-2xl tracking-tight">
        {metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(metadata.publishedDate, false)}
        </p>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={html}
      />
    </section>
  );
};

export default MarkdownComponent;
