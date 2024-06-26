import React from 'react';
import ContactForm from './ContactForm';
import Socials from '@/components/Socials';


function ContactSection() {
  return (
    <section id="contact" className="">
      <h1 className="text-4xl my-10 font-large">Contact</h1>
      <ContactForm/>
    </section>
  );
}

export default ContactSection;
