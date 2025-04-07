import type { CustomLink } from "@/app/actions/get-profile";

const normalizeLink = (link: string) => {
  if (!link) return "";

  return link.startsWith("http") ? link : `https://${link}`;
};

const sanitizeLink = (link?: string) => {
  if (!link) return "";

  return link
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLocaleLowerCase();
};

const sanitizeCustomLinks = (links: CustomLink[]) => {
  return links.filter((link) => link.title.trim() && link.url.trim());
};

export { normalizeLink, sanitizeCustomLinks, sanitizeLink };
