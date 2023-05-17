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



  const handleUserInputName = (e) => {
    setName(e.target.value)
  }

  const handleUserInputPhone = (e) => {
    setPhone(e.target.value)
  }

  const handleUserInputEmail = (e) => {
    setEmail(e.target.value)
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="name"
      placeholder="Contact Name"
      onChange={handleUserInputName}
      value={name}
      required
      >
      </input>
      <input
      type="tel"
      name="phone"
      placeholder="Phone Number (xxx-xxx-xxxx)"
      value={phone}
      onChange={handleUserInputPhone}
      pattern="^[0-9]+$"
      title="Numbers only are allowed."
      required
      >
        
      </input>
      <input
      type="email"
      name="email"
      placeholder="E-mail Address"
      onChange={handleUserInputEmail}
      value={email}

      required
      >
      </input>
      <input type="submit" value="Add Contact"></input>
    </form>
  );
};
