import { type IconName } from "node_modules/jsx-social-icons/dist/react/icons";
export type SiteConfig = {
  metadata: {
    title?: string;
    description?: string;
    baseUrl?: string;
    name?: string;
    ogImage?: string;
  };
  socialLinks: Array<{ name: IconName; link: string }>;
  navItems: Array<{ path: string; name: string }>;
  contentDir: string;
};
const siteConfig: SiteConfig = {
  metadata: {
    title: "PHO THIN MAUNG",
    description: "Personal Blog",
  },
  socialLinks: [
    {
      name: "github",
      link: "https://github.com/",
    },
    {
      name: "twitter-X",
      link: "https://github.com/",
    },
  ],
  navItems: [
    { path: "/projects", name: "Projects" },
    { path: "/blog", name: "Blog" },
  ],
  contentDir: "content",
};

export default siteConfig;
