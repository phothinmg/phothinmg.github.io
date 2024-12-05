"use client";
import ReactSocialIcon from "jsx-social-icons/react";
import siteConfig from "@/site-config";
const YEAR = new Date().getFullYear();

const SocialLinks = () => {
  return (
    <div className="flex text-base gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      {siteConfig.socialLinks.map((i) => (
        <ReactSocialIcon key={i.name} name={i.name} href={i.link} size={18} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time> <SocialLinks />
    </small>
  );
};

export default Footer;
