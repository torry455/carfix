import { ContactForm } from "../../Organisms/ContactForm/ContactForm";

export const ContactUsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-8">
      {/* Контакти + карти */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 bg-[#1c1e22] rounded-lg p-8 shadow-lg">
        {/* Ліва частина: контакти */}
        <div className="w-full sm:w-[48%] flex flex-col gap-4">
          <h3 className="text-2xl font-[Manrope-ExtraBold] text-[#BE7D00] mb-4">
            Контакти
          </h3>

          <p className="mb-2 font-[Manrope-ExtraBold] text-white">
            Графік роботи:
          </p>
          <ul className="mb-4 space-y-2 text-[#D0D0D0]">
            <li>
              ПН–ПТ:{" "}
              <span className="text-white font-[Manrope-Bold]">
                09:00 – 19:00
              </span>
            </li>
            <li>
              СБ–НД:{" "}
              <span className="text-white font-[Manrope-Bold]">вихідні</span>
            </li>
          </ul>

          <p className="mb-2 font-[Manrope-ExtraBold] text-white">
            Наші телефони:
          </p>
          <ul className="mb-4 space-y-2">
            <li>
              <a
                href="tel:+380672500925"
                className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]"
              >
                +38 067 250 09 25
              </a>
            </li>
            <li>
              <a
                href="tel:+380638753005"
                className="hover:text-[#FFD36E] transition-colors font-[Manrope-Bold]"
              >
                +38 063 875 30 05
              </a>
            </li>
          </ul>

          <p className="mb-2 font-[Manrope-ExtraBold] text-white">
            Наші адреси:
          </p>
          <ul className="mb-0 space-y-1 text-[#E0E0E0] font-[Manrope-Bold]">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#BE7D00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                />
              </svg>
              м. Вишневе, вул. Київська 6 А
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#BE7D00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                />
              </svg>
              с. Білогородка, вул. Франка 37
            </li>
          </ul>
        </div>

        {/* Права частина: карти */}
        <div className="w-full sm:w-[48%] flex flex-col gap-4">
          {/* Карта Вишневе */} {/* Вишневе */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Вишневе"
              src="https://www.google.com/maps?q=50.3883701,30.3532127&hl=uk&z=17&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Київська+6А,+Вишневе,+Київська+обл.,+Україна"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center bg-[#BE7D00] text-[#17181C] font-semibold px-1 py-2 rounded-md shadow-md hover:bg-[#d28f0a] transition-colors text-sm normal-case"
            >
              Маршрут до Вишневого
            </a>
          </div>
          {/* Карта Білогородка */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Білогородка"
              src="https://www.google.com/maps?q=Білогородка,+Франка+37&hl=uk&z=17&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Білогородка,+Франка+37"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center bg-[#BE7D00] text-[#17181C] font-semibold px-1 py-2 rounded-md shadow-md hover:bg-[#d28f0a] transition-colors text-sm normal-case"
            >
              Маршрут до Білогородки
            </a>
          </div>
        </div>
      </div>

      {/* Форма */}
      <div className="flex-1 bg-[#1c1e22] rounded-lg p-8 shadow-lg">
        <ContactForm />
      </div>
    </div>
  );
};
