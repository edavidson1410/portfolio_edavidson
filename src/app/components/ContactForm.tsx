'use client';

import Button from '@/components/Button';
import React, { ChangeEvent, useState } from 'react';

function ContactForm() {

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  // TODO: change to false after form validation
  const [formValid, setFormValid] = useState<boolean>(true);

  const url: string = '/api/email';
  const date: Date = new Date();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const formValidation = () => {
    // TODO: Complete validation
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    formValidation();
    if(formValid != true) {
      return;
    }
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, message: message, date: date }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response);
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="md:max-w-xl min-h-fit md:m-auto">
      <form id="contactForm" onSubmit={onSubmit}>
        <div className="mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input onChange={handleNameChange} value={name} type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input onChange={handleEmailChange} value={email} type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                <textarea onChange={handleMessageChange} value={message} id="textarea" name="textarea" cols={30} rows={5} placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" />
            </div>
        </div>
          <div className="text-center">
            <Button type="submit" text="Send Message" className="px-6 py-3" />
          </div>
       </form>
     </div>
  );
}

export default ContactForm;
