import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="container my-5">
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          {contact.linkedin}
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          {contact.github}
        </a>
      </p>
      <p>
        Telegram:{" "}
        <a href={contact.telegram} target="_blank" rel="noopener noreferrer">
          {contact.telegram}
        </a>
      </p>
    </div>
  );
};

export default Contact;
