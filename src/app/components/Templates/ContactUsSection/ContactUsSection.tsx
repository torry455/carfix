import { ContactForm } from "../../Organisms/ContactForm/ContactForm";
import { ContactCard } from "../../Organisms/ContactCard/ContactCard";

export const ContactUsSection = () => {
  return (
    <section
      id="contacts"
      className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 animate-fadeInUp"
    >
      <ContactCard />

      <div className="flex-1 bg-black/70 rounded-lg p-8 shadow-lg">
        <ContactForm />
      </div>
    </section>
  );
};
