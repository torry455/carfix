import Image from "next/image";

interface ExpertCardProps {
   image: string;
   name: string;
   highlight: string;
   title: string;
   bio: string;
}

export const ExpertCard = ({
   image,
   name,
   highlight,
   title,
   bio,
}: ExpertCardProps) => {
   return (
      <article
         className="bg-black/70 rounded-2xl overflow-hidden shadow-lg
                    hover:scale-103 transition-all duration-300
                    w-[300px]
                    h-[420px]
                    mx-auto
                    py-6 px-4
                    flex flex-col
                    text-center uppercase"
      >
         <div className="relative 
                         w-36 h-36 
                         mx-auto">
            <Image
               src={image}
               alt={`${name} photo`}
               fill
               className="rounded-full object-cover border-[3px] border-[#BE7D00]"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#BE7D00] text-[#17181C] px-4 py-1 rounded-full text-xs font-[Manrope-ExtraBold] whitespace-nowrap uppercase tracking-widest">
               {highlight}
            </div>
         </div>

         <h3 className="text-[22px] text-[#E5E4E4]
                       font-[Manrope-Bold] uppercase tracking-widest
                       mt-6">
            {name}
         </h3>
         {title && (
            <p className="text-[11px] text-[#CFCFCF] font-[Manrope-Medium] tracking-[1.8px] leading-6">
               {title}
            </p>
         )}

         <p className="text-[11px] text-[#BFC0C0] leading-5 tracking-[1.8px] font-[Manrope-Regular] mt-6">
            {bio}
         </p>
      </article>
   );
};
