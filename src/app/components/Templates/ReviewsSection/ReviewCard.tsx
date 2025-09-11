import { Review } from "@/types/reviewType";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
   review: Review
}

export const ReviewCard: React.FC<ReviewCardProps> = ({review}) => {
   return( <div
                 className="
                   bg-black/70 text-[var(--foreground)] 
                   p-[13px] md:p-5
                   w-[200px] md:w-[288px]
                   h-[300px] md:h-[335px]
                   rounded-2xl shadow-lg border border-black/50 flex-shrink-0
                   flex flex-col gap-[9px]
                 "
               >
                 <p className="text-sm md:text-md font-[Manrope-Bold] tracking-wider">
                   {review.author}
                 </p>
                 <p className="text-xs md:text-sm text-gray-500 font-[Manrope-Regular] tracking-wide">
                   {review.time}
                 </p>
                 <div className="flex items-center gap-2">
                   {[...Array(review.rating)].map((_, idx) => (
                     <FaStar
                       key={idx}
                       className="text-[var(--color-brand-gold)]"
                     />
                   ))}
                 </div>
                 <p className="text-xs md:text-sm lg:text-md font-[Manrope-Regular] tracking-wider leading-relaxed">
                   “{review.text}”
                 </p>
               </div>);
}