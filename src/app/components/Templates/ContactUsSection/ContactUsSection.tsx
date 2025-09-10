import { ContactForm } from "../../Organisms/ContactForm/ContactForm";
import { ContactCard } from "../../Organisms/ContactCard/ContactCard";

export const ContactUsSection = () => {
  return (
    <section
      id="contacts"
      className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-8"
    >
      {/* Контакти + карти */}
 <ContactCard />

      {/* Форма */}
      <div className="flex-1 bg-black/70 rounded-lg p-8 shadow-lg">
        <ContactForm />
      </div>
    </section>
  );
};
