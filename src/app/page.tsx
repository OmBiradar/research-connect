import SignUpButton from "@/app/components/custom/SignUpButton/SignUpButton";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <section>
          <div className="mx-auto w-full px-4 py-20 text-center">
            <h2 className="text-7xl w-full font-extrabold text-foreground mb-2 lg:text-center text-left">
              Welcome to the World of{" "}
              <span className="text-red-500">Research</span>!
            </h2>
            <h3 className="text-xl text-foreground lg:text-center text-left">
              Indian Institute of Techonlogy (BHU) Varanasi
            </h3>
          </div>
        </section>
        <div className="text-center md:hidden text-[1.5rem] font-bold">
          <Link href='/SignUp'>
            <SignUpButton />
          </Link>
        </div>
      </div>
  );
}
