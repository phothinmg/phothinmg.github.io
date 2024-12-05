import mmmark from "mm-mark";
import showdownprism from "showdown-prism";

export type PostData = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  image?: string;
};

const convert = mmmark.Converter({
  noHeaderId: true,
  extensions: [showdownprism({ theme: "okaidia" })],
});

export const markdownConverter = (mdContent: string) => {
  const fmatter = mmmark.frontmatter(mdContent);
  const data = fmatter.data as PostData;
  const converteredMd = convert.makeHtml(fmatter.content);
  return { data, converteredMd };
};
