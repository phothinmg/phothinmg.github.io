import fs from "fs";
import path from "path";
import mmmark from "mm-mark";
import showdownprism from "showdown-prism";
import siteConfig from "@/site-config";
export type PostData = {
  title: string;
  publishedDate: string;
  summary: string;
  tags: string[];
  image?: string;
};
export type BlogPost = {
  metadata: PostData;
  slug: string;
  converteredMd: string;
};
const convert = mmmark.Converter({
  noHeaderId: true,
  extensions: [showdownprism({ theme: "okaidia" })],
});

export const markdownConverter = (mdContent: string) => {
  const fmatter = mmmark.frontmatter(mdContent);
  const metadata = fmatter.data as PostData;
  const converteredMd = convert.makeHtml(fmatter.content);
  return { metadata, converteredMd };
};

function getMdFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function converter(dir: string) {
  const mdFiles = getMdFiles(dir);
  return mdFiles.map((file) => {
    const rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    const { metadata, converteredMd } = markdownConverter(rawContent);
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      converteredMd,
    };
  });
}

export function getBlogPosts(): BlogPost[] {
  return converter(path.join(process.cwd(), siteConfig.contentDir));
}

export function formatDate(date: string, includeRelative = false): string {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
