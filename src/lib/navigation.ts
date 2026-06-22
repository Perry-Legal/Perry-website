export const bookDemoUrl = "https://calendly.com/vaneesa-useperry/30min";

export const simpleNavLinks = [
  { href: "/about", label: "About" },
] as const;

export const footerNavLinks = [
  ...simpleNavLinks,
  { href: "/#contact", label: "Contact" },
] as const;
