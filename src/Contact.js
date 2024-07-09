import React, { useEffect } from "react";

const Contact = ({ contact }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?4";
    script.setAttribute("data-telegram-post", "odilovschannel/39");
    script.setAttribute("data-width", "100%");
    document.getElementById("telegram-widget").appendChild(script);
  }, []);

  return (
    <div className="container my-5">
      <h1>Odilov's blog</h1>
      <div id="telegram-widget"></div>
      <br />
      <h2>Contacts</h2>
      <p>
        Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      </p>
      <p>
        Telegram:{" "}
        <a href={contact.telegram} target="_blank" rel="noopener noreferrer">
          {contact.telegram}
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          {contact.github}
        </a>
      </p>
      <p>
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          {contact.linkedin}
        </a>
      </p>
    </div>
  );
};

export default Contact;
