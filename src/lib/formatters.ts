const sanitizeLink = (link?: string) => {
  if (!link) return "";

  return link
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLocaleLowerCase();
};

export { sanitizeLink };
