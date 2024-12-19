import { ContactForm } from './contact/ContactForm';
import { SocialLinks } from './contact/SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <ContactForm />
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}