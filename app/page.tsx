import MarkdownComponent from "@/components/Markdown";
import fs from "node:fs";
const content = fs.readFileSync("./app/posts/test.md", "utf-8");
export default function Home() {
  return (
    <div>
      <MarkdownComponent content={content} />
    </div>
  );
}
