import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import siteConfig from "@/site-config";

const NavBar = () => {
  return (
    <nav className="lg:mb-3 mb-2 py-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center"></div>
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
