import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

interface ArrowButtonProps {
  direction?: "left" | "right" | "up" | "down";
  onClickFn?: () => void;
  arrowSize?: number;
  style?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClickFn,
  arrowSize = 16,
  style,
}) => {
  let Icon;

  switch (direction) {
    case "right":
      Icon = FaChevronRight;
      break;
    case "left":
      Icon = FaChevronLeft;
      break;
    case "up":
      Icon = FaChevronUp;
      break;
    case "down":
      Icon = FaChevronDown;
      break;
    default:
      Icon = FaChevronUp;
  }

  return (
    <button
      onClick={onClickFn}
      className={
        style
          ? `transition rounded-full shadow-lg text-[var(--color-brand-gold)] p-3
        ${style}`
          : "bg-black/40 hover:bg-black/70 transition rounded-full shadow-lg text-[var(--color-brand-gold)] p-3"
      }
    >
      <Icon size={arrowSize} />
    </button>
  );
};
