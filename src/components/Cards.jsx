import React from "react";

const Cards = (props) => {
  return (
    <div className="card flex gap-24 justify-between mt-24 mb-20">
      <div className="image bg-[#1A1A1A] w-[350px] relative h-[300px] rounded-lg flex justify-center items-center">
        <span className="absolute top-0 left-0 m-2 text-xs py-1 px-3 font-[Body] text-center bg-[#0A0A0A] rounded-xl">
          {props.capsule}
        </span>
        <img
          className="rounded-lg w-[270px] h-[180px]"
          src={props.url}
          alt="Campus placement"
        />
      </div>
      <div className="about bg-[#0A0A0A] w-[700px] h-[350px]">
        <p className="title font-[Heading1] text-xl font-medium mb-5">
          {props.title}
        </p>
        <p className="description font-[Body] text-justify text-sm mb-5">
          {props.description}
        </p>
        <p className="font-[Body] text-xs tracking-widest font-semibold">
          TECH STACK
        </p>
        <div className="mt-2 mb-3 border-b border-[#484848]"></div>
        <div className="text-sm flex gap-2 mb-8">
          {props.tech.map((tech, index) => (
            <span
              key={index}
              className={`${
                index !== props.tech.length - 1 ? "border-e-2" : " "
              } pe-2`}
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="flex gap-7">
          {/* Github Button */}
          <span className="flex items-center group hover:border-b-2 w-fit cursor-pointer">
            <span className="text-xs font-semibold font-[Heading1] tracking-widest text-[#D3E97A] group-hover:text-[#d6ff0b]">
              SEE ON GITHUB
            </span>
            <svg
              className="size-5 ml-2 group-hover:fill-[#d6ff0b]"
              width="28"
              height="27"
              viewBox="0 0 28 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0347 0.666687C6.68933 0.666687 0.735992 6.62002 0.735992 13.9654C0.735992 19.84 4.54533 24.8254 9.83066 26.5854C10.496 26.7054 10.736 26.296 10.736 25.944C10.736 25.628 10.7253 24.7907 10.7213 23.6827C7.02133 24.4854 6.23999 21.8987 6.23999 21.8987C5.63733 20.3627 4.76399 19.9534 4.76399 19.9534C3.55733 19.128 4.85599 19.1467 4.85599 19.1467C6.19199 19.24 6.89199 20.5174 6.89199 20.5174C8.07866 22.5494 10.0067 21.9627 10.7613 21.6227C10.8827 20.7627 11.2293 20.176 11.608 19.844C8.65599 19.5094 5.55199 18.368 5.55199 13.2707C5.55199 11.8214 6.07066 10.632 6.91733 9.70402C6.78266 9.36669 6.32266 8.01335 7.04933 6.18402C7.04933 6.18402 8.16533 5.82535 10.7053 7.54535C11.7901 7.25025 12.9091 7.09961 14.0333 7.09735C15.1576 7.09918 16.2766 7.24982 17.3613 7.54535C19.9027 5.82402 21.0173 6.18402 21.0173 6.18402C21.744 8.01335 21.288 9.36669 21.1493 9.70402C22.0027 10.632 22.5147 11.82 22.5147 13.2707C22.5147 18.3814 19.408 19.504 16.4453 19.8334C16.9187 20.244 17.3453 21.0547 17.3453 22.2947C17.3453 24.0734 17.3293 25.508 17.3293 25.944C17.3293 26.3 17.5667 26.7134 18.2453 26.5827C23.528 24.82 27.3333 19.8387 27.3333 13.9654C27.3333 6.62002 21.38 0.666687 14.0347 0.666687Z"
                fill="#D3E97A"
              />
            </svg>
          </span>

          {props.wantLive && (
            <span className="flex items-center group hover:border-b-2 w-fit cursor-pointer">
              <span
                className="text-xs text-[#D3E97A] group-hover:text-[#d6ff0b]
            font-semibold font-[Heading1] tracking-widest"
              >
                LIVE DEMO
              </span>
              <svg
                className="fill-[#D3E97A] group-hover:fill-[#d6ff0b]"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7_368)">
                  <circle cx="20" cy="20" r="20" fill="#0A0A0A" />
                  <g clip-path="url(#clip1_7_368)">
                    <path d="M14.9914 26.0146L23.5863 17.4197L23.5863 23.6576L25.2527 23.6576L25.2527 14.5748L16.1699 14.5748L16.1699 16.2412L22.4077 16.2412L13.8129 24.8361L14.9914 26.0146Z" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_7_368">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_7_368">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(10 10)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Cards;
