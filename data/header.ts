export type MenuItem = {
  menu: string;
  url: string;
  submenu?: { title: string; url: string }[];
};

const MenuItems: MenuItem[] = [
  { menu: "Home", url: "/" },
  { menu: "About", url: "/#about" },
  { menu: "Services", url: "/services" },
  { menu: "Companies", url: "/#companies" },
  { menu: "Contact", url: "/contact" },
];

export { MenuItems };
