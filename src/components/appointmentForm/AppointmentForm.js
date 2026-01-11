import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="appointmentTitle" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="date" 
          name="appointmentDate" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          min={getTodayString()}
        />
        <input 
          type="time" 
          name="appointmentTime" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
        <ContactPicker 
          name="contacts"
          value={contact} 
          handleChange={(e) => setContact(e.target.value)} 
          contacts={contacts} />
        <input type="submit" />
      </form>
    </>
  );
};
