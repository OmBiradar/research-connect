import Link from "next/link";
import SignUpButton from "@/app/components/custom/SignUpButton/SignUpButton";
import { PROJECT_NAME } from "@/config";

export default function Navbar() {
  return (
  <nav className="sticky top-0 z-1000">
    <div className="mx-auto justify-between items-center flex p-4 text-foreground">
      <div className="flex justify-start items-center">
        <Link href="/">
          {PROJECT_NAME}
        </Link>
      </div>
      <div className="hidden md:flex justify-end gap-4 items-center">
        <Link href='/'>
          Home
        </Link>
        <Link href='/features'>
          Features
        </Link>
        <Link href="/services">
          Services
        </Link>
          <Link href="/SignUp">
          <SignUpButton />
        </Link>
      </div>
    </div>
  </nav>
  );
};
