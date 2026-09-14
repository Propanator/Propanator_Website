export const site = {
  name: "Propane Games",
  owner: "Louis-Charles La Manna",
  email: "louischarles.lamanna@icloud.com",
  upwork: "https://www.upwork.com/freelancers/~01d363ad82ef101190",
  linkedin: "https://www.linkedin.com/in/louis-charles-la-manna-harvey-244191164/",
};

export type ContactIcon = "mail" | "briefcase" | "link";

export const contactChannels: {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  external?: boolean;
}[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "mail" },
  { label: "Upwork", value: "View profile", href: site.upwork, icon: "briefcase", external: true },
  { label: "LinkedIn", value: "Connect", href: site.linkedin, icon: "link", external: true },
];
