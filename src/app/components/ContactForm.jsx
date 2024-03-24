'use client';

import Button from '@/components/Button';
import React, { useState } from 'react';

function ContactForm(props) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const url = 'http://localhost:3000/api/email';
  const date = new Date();

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="md:max-w-1/2 md:ml-1/4">
      <form id="contactForm" onSubmit={onSubmit}>
        <div className="mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input onChange={handleNameChange} type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input onChange={handleEmailChange} type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea onChange={handleMessageChange} id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
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
