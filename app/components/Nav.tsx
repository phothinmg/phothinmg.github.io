import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import siteConfig from "@/site-config";

const NavBar = () => {
  return (
    <nav className="lg:mb-7 mb-3 py-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {siteConfig.metadata.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {siteConfig.navItems.map((i) => (
            <Link key={i.path} href={i.path}>
              {i.name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
