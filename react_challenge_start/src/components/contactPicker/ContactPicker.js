import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select name="contact" onChange={onChange}>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => (
        <option key={contact} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};

//Iteratively add option elements using the contact 
//names from the array passed in via props