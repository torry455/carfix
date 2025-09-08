import Image from "next/image";

export const CarFixIcon: React.FC = () => {
  return (
    <Image
      src="/img/carfix-logo.png"
      alt="Carfix Logo"
      width={65}
      height={20}
      priority
    />
  );
};
