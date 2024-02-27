'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'
import { sendEmail } from '../api/send/route'

function ContactForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleNameChange = (event, set) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event, set) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event, set) => {
    setMessage(event.target.value);
  };

  const onClick = () => {
    sendEmail(name, email, message)
  }


  return (
    <div>
      <form id="contactForm">
        <div className="mb-6">
            <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" onChange={handleNameChange} autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" onChange={handleEmailChange} autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" onChange={handleMessageChange} name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
            </div>
        </div>
        <div className="text-center">
            <button type="button" onClick={onClick} className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
