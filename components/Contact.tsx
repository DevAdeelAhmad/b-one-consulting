import React from 'react'
import ContactInfo from './Contact/ContactInfo'
import EmailForm from './Contact/EmailForm'

const Contact = () => {
  return (
    <>
    <main className='flex flex-col-reverse md:flex-col'>
      <ContactInfo/>
      <EmailForm/>
    </main>
    </>
  )
}

export default Contact