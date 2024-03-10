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
      <form
        className="flex flex-col lg:items-center max-lg:gap-1"
        ref={form}
        onSubmit={sendEmail}
      >
        <label
          className="text-sm 2xl:text-lg lg:w-10/12 font-[Body]"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="bg-[#3e3d3d] lg:w-10/12 max-lg:h-9 2xl:h-8 rounded-md mb-3 h-7"
          type="text"
          id="name"
          name="from_name"
          required
        />
        <label
          className="text-sm lg:w-10/12 2xl:text-lg max-lg:h-9  font-[Body]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-[#3e3d3d] lg:w-10/12 max-lg:h-9 2xl:h-8 rounded-md mb-3 h-7"
          type="text"
          id="email"
          name="email"
          required
        />
        <label
          className="text-sm lg:w-10/12 2xl:text-lg max-lg:h-9 font-[Body]"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          className="bg-[#3e3d3d] lg:w-10/12 max-lg:h-9 2xl:h-8 rounded-md mb-3 h-7"
          type="text"
          id="subject"
          name="subject"
          required
        />
        <label
          className="text-sm lg:w-10/12 2xl:text-lg font-[Body]"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          rows={5}
          className="bg-[#3e3d3d] lg:w-10/12 rounded-md mb-3 resize-none"
          type="textarea"
          id="message"
          name="message"
          required
        />
        {!isSubmitted ? (
          <button className="bg-[#D3E97A] hover:bg-[#191919] text-center hover:text-white hover:border text-black rounded-3xl w-[80px] mt-4 font-[Heading1] p-1">
            SEND
          </button>
        ) : (
          <span>
            <p className="text-[Body] lg:text-sm tracking-wider">
              YAY! Recieved your message.😉
            </p>
          </span>
        )}
      </form>
    </div>
  );
};

export default Form;
