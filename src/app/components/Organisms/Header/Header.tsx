// import Image from "next/image";
// import Link from "next/link";
// import { menuItems } from "../../Atoms/Constants/menuItems";
// import { BurgerMenu } from "../../Molecules/BurgerMenu/BurgerMenu";
// import { BurgerMenuButton } from "../../Atoms/Buttons/BurgerMenuButton";
// import { BookButton } from "../../Atoms/Buttons/BookButton";

// export const Header: React.FC = () => {
//   return (
//     <header className="bg-[#fff]/3 font-[Manrope-Bold] tracking-widest uppercase backdrop-blur-xl rounded-[50px] text-[#E5E4E4] py-4 px-6 w-full z-50 sticky top-5 max-w-[1500px]">
//       <div className="max-w-[1500px] mx-auto xlnav:mx-7 flex justify-between items-center">
//         <Link href="/" className="flex-shrink-0" aria-label="Carfix Home Page">
//           <Image
//             src="/img/carfix-logo.png"
//             alt="Carfix Logo"
//             width={75}
//             height={25}
//             priority
//           />
//         </Link>

//         <nav className="hidden xlnav:flex items-center gap-8 text-lg font-medium">
//           <ul className="flex gap-8" role="list">
//             {menuItems.map(({ label, anchor }) => (
//               <li key={anchor}>
//                 <a
//                   href={`#${anchor}`}
//                   className="hover:text-[#BE7D00] transition-colors duration-300"
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="mr-4" aria-label="записатись онлайн">
//             <BookButton
//               buttonName="записатись"
//               onClickFn={() => {
//                 document
//                   .getElementById("contacts")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//             />
//           </div>
//         </nav>
//         <div className="xlnav:hidden fixed top5 right-7 z-[150]">
//           <BurgerMenuButton />
//         </div>

//         <BurgerMenu />
//       </div>
//     </header>
//   );
// };




'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { menuItems } from "../../Atoms/Constants/menuItems";
import { BurgerMenu } from "../../Molecules/BurgerMenu/BurgerMenu";
import { BurgerMenuButton } from "../../Atoms/Buttons/BurgerMenuButton";
import { BookButton } from "../../Atoms/Buttons/BookButton";

export const Header: React.FC = () => {
  const router = useRouter();

  const handleNavClick = (anchor: string) => {
    if (anchor === "gallery") {
      router.push("/gallery");
      return;
    }

    if (window.location.pathname !== "/") {
      router.push(`/?scrollTo=${anchor}`);
    } else {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-[#fff]/3 font-[Manrope-Bold] tracking-widest uppercase backdrop-blur-xl rounded-[50px] text-[#E5E4E4] py-4 px-6 w-full z-50 sticky top-5 max-w-[1500px]">
      <div className="max-w-[1500px] mx-auto xlnav:mx-3 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0" aria-label="Carfix Home Page">
          <Image
            src="/img/carfix-logo.png"
            alt="Carfix Logo"
            width={75}
            height={25}
            priority
            className="cursor-pointer"
            onClick={() => handleNavClick("")}
          />
        </Link>

        <nav className="hidden xlnav:flex items-center gap-8 text-lg font-medium">
          <ul className="flex gap-8" role="list">
            {menuItems.map(({ label, anchor }) => (
              <li key={anchor}>
                <button
                  onClick={() => handleNavClick(anchor)}
                  className="uppercase cursor-pointer hover:text-[#BE7D00] transition-colors duration-300"
                >
                  {label}
                </button>
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

        <div className="xlnav:hidden fixed top-5 right-7 z-[150]">
          <BurgerMenuButton />
        </div>

        <BurgerMenu />
      </div>
    </header>
  );
};
