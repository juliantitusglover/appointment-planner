import React from "react";

export const ContactPicker = ({ name, value, handleChange, contacts }) => {
  return (
    <>
      <select onChange={handleChange} value={value} name={name}>
        <option value="" selected disabled>No Contact Selected</option>
        {contacts.map((contact) => {
          return (
            <option key={contact.name} value={contact.name}>{contact.name}</option>
          );
        })}
      </select>
    </>
  );
};
