import "./NavLink.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  text: string;
};

export default function NavLink({ path, text }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={path} className={pathname === path ? "nav-active" : "nav-link"}>
      <span className="nav-line default">{text}</span>
      <span className="nav-line hover">{text}</span>
    </Link>
  );
}
