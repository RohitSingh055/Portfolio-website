import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label className="text-sm font-[Body]" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="bg-[#1A1A1A] w-[300px] rounded-md mb-3"
          type="text"
          id="name"
          name="from_name"
          required
        />
        <br />
        <label className="text-sm font-[Body]" htmlFor="email">
          Email
        </label>
        <br />
        <input
          className="bg-[#1A1A1A] w-[300px] rounded-md mb-3"
          type="text"
          id="email"
          name="email"
          required
        />
        <br />
        <label className="text-sm font-[Body]" htmlFor="subject">
          Subject
        </label>
        <br />
        <input
          className="bg-[#1A1A1A] w-[300px] rounded-md mb-3"
          type="text"
          id="subject"
          name="subject"
          required
        />
        <br />
        <label className="text-sm font-[Body]" htmlFor="message">
          Message
        </label>
        <br />
        <textarea
          rows={5}
          className="bg-[#1A1A1A] w-full rounded-md mb-3"
          type="textarea"
          id="message"
          name="message"
          required
        />
        {!isSubmitted ? (
          <button className="bg-[#D3E97A] hover:bg-[#191919] hover:text-white hover:border text-black rounded-3xl w-[80px] mt-4 font-[Heading1] p-1">
            SEND
          </button>
        ) : (
          <span><p className="text-[Body] text-sm tracking-wider">YAY! Recieved your message.😉</p></span>
        )}
      </form>
    </div>
  );
};

export default Form;
