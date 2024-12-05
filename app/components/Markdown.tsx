import { markdownConverter } from "@/lib/converter";
const MarkdownComponent = ({ content }: { content: string }) => {
  const htmlContent = markdownConverter(content).converteredMd;
  const html = { __html: htmlContent };
  return (
    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={html} />
  );
};

export default MarkdownComponent;
