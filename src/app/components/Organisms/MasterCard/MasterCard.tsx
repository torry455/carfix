import Image from "next/image";

interface MasterCardProps {
  index: number;
  image: string;
  name: string;
  highlight: string;
  title: string;
  bio: string;
}

export const MasterCard = ({
  index,
  image,
  name,
  highlight,
  title,
  bio,
}: MasterCardProps) => {
  return (
    <article
      key={index}
      className="bg-[#222327] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center p-6"
    >
      <div className="relative w-36 h-36 mx-auto mb-5">
        <Image
          src={image}
          alt={`${name} photo`}
          fill
          className="rounded-full object-cover border-[1px] border-[#BE7D00]"
        />
        {highlight && (
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#BE7D00] text-[#17181C] px-4 py-1 rounded-full text-xs font-[Manrope-ExtraBold] shadow whitespace-nowrap">
            {highlight}
          </div>
        )}
      </div>

      <h3 className="text-[22px] font-[Manrope-Bold] text-[#E5E4E4] uppercase tracking-widest mb-5">
        {name}
      </h3>
      {title && (
        <p className="text-sm text-[#CFCFCF] mt-1 mb-3 font-[Manrope-Medium] tracking-wider leading-6 mb-5">
          {title}
        </p>
      )}

      <p className="text-sm text-[#BFC0C0] leading-6 mb-4 font-[Manrope-Medium]">
        {bio}
      </p>
    </article>
  );
};
