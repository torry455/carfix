type BookButtonProps = {
  buttonName: string;
  onClickFn: () => void;
};

export const BookButton: React.FC<BookButtonProps> = ({
  buttonName,
  onClickFn,
}) => {
  return (
    <button
      className="bg-[#BE7D00] text-[#17181C] font-[Manrope-ExtraBold] tracking-widest uppercase px-6 py-2 rounded-lg shadow-md hover:bg-[#a36600] transition-colors duration-300"
      onClick={onClickFn}
    >
      {buttonName}
    </button>
  );
};
