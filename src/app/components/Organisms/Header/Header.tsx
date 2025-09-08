import Image from "next/image";
import Link from "next/link";
import { menuItems } from "../../Atoms/Constants/menuItems";
import { BurgerMenuButton } from "../../Atoms/Buttons/BurgerMenuButton";
import { BookButton } from "../../Atoms/Buttons/BookButton";

export const Header: React.FC = () => {
  return (
    <header
      className="bg-[#fff]/3 backdrop-blur-xl rounded-[50px]
                       font-[Manrope-Bold] tracking-widest uppercase text-[#E5E4E4]
                       py-2 px-6 xlnav:px-6
                       max-w-6xl mx-auto
                       z-50 fixed top-5 left-4 right-4"
    >
      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/" aria-label="Carfix Home Page">
          <Image
            src="/img/carfix-logo.png"
            alt="Carfix Logo"
            width={65}
            height={20}
            priority
          />
        </Link>

        <nav className="hidden xlnav:flex items-center gap-8 text-lg font-medium">
          <ul className="flex gap-8" role="list">
            {menuItems.map(({ label, anchor }) => (
              <li key={anchor}>
                <a
                  href={`/#${anchor}`}
                  className="hover:text-[#BE7D00] transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mr-4" aria-label="записатись онлайн">
            <BookButton
              buttonName="записатись"
              onClickFn={() => {
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </nav>
        <div className="xlnav:hidden z-[150]">
          <BurgerMenuButton />
        </div>
      </div>
    </header>
  );
};
