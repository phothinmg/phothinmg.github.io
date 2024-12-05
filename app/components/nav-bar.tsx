import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import siteConfig from "@/site-config";

export default function NavBar() {
  return (
    <header>
      <div className="flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.metadata.title}
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            {siteConfig.navItems.map((i) => (
              <li key={i.path} className="md:mr-12">
                <Link href={i.path}>{i.name}</Link>
              </li>
            ))}
            <li className="md:mr-12" key="theme-switch">
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
