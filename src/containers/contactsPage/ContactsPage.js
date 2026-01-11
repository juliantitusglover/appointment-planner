import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isDuplicate) {
      addContact(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      alert(`Contact name "${name}" is already in Contact list.`);
    }
  };

  useEffect(() => {
    for(let i = 0; i < contacts.length; i++) {
      if(contacts[i].name === name) {
        setIsDuplicate(true);
        break;
      } else {
        setIsDuplicate(false);
      }
    }
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          phoneNumber={phoneNumber} 
          email={email} 
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
