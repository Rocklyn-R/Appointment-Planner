import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import { useForm } from 'react-hook-form';

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
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleUserInputTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleUserInputDate = (e) => {
    setDate(e.target.value);
  }

  const handleUserInputTime = (e) => {
    setTime(e.target.value);
  }

  const handleUserInputContact = (e) => {
    setContact(e.target.value);
  }

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Appointment Title"
        value={title}
        onChange={handleUserInputTitle}
        required
      >
      </input>
      <input
        type="date"
        name="date"
        value={date}
        min={getTodayString()}
        onChange={handleUserInputDate}
        required
      >
      </input>
      <input
        type="time"
        name="time"
        value={time}
        onChange={handleUserInputTime}
        required
      >
      </input>
      <ContactPicker 
        contacts={getContactNames()}
        onChange={handleUserInputContact}
      />
      <input
        type="submit"
      >
      </input>
    </form>
  );
};
