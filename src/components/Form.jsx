import React from "react";

const Form = () => {
  return (
    <div>
      <label className='text-sm font-[Body]' htmlFor="name">Name</label>
      <br />
      <input className="bg-[#1A1A1A] w-[300px] rounded-md mb-3" type="text" id="name" name="name" />
      <br />
      <label className='text-sm font-[Body]' htmlFor="email">Email</label>
      <br />
      <input className="bg-[#1A1A1A] w-[300px] rounded-md mb-3" type="text" id="email" name="email" />
      <br />
      <label className='text-sm font-[Body]' htmlFor="subject">Subject</label>
      <br />
      <input className="bg-[#1A1A1A] w-[300px] rounded-md mb-3" type="text" id="subject" name="subject" />
      <br />
      <label className='text-sm font-[Body]' htmlFor="message">Message</label>
      <br />
      <textarea rows={5} className="bg-[#1A1A1A] w-full rounded-md mb-3" type="textarea" id="message" name="message" />

      <button className="bg-[#D3E97A] hover:bg-[#b8d529] text-black rounded-3xl w-[80px] mt-4 font-[Heading1] p-1">SEND</button>
    </div>
  );
};

export default Form;
