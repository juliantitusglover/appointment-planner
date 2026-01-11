import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="contactName" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="tel" 
          name="contactPhoneNumber" 
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <input 
          type="email" 
          name="contactEmail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input type="submit" />
      </form>
    </>
  );
};

