import React, { useState } from "react";

function Form() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {}

  return (
    <form className="flex flex-col p-4">
      <input
        className="rounded-md py-2 px-3 bg-transparent border placeholder:italic border-darkGray border-opacity-40 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none mb-4 invalid:border-red-500 invalid:ring-red-500 invalid:ring-1 dark:border-offWhite dark:border-opacity-60"
        type={"text"}
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        className="rounded-md py-2 px-3 bg-transparent border placeholder:italic border-darkGray border-opacity-40 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none mb-4 invalid:border-red-500 invalid:ring-red-500 invalid:ring-1 dark:border-offWhite dark:border-opacity-60"
        type={"email"}
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <textarea
        className="rounded-md py-2 px-3 bg-transparent border placeholder:italic border-darkGray border-opacity-40 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none mb-4 dark:border-offWhite dark:border-opacity-60"
        name="message"
        placeholder="Message"
        required={true}
        onChange={handleChange}
      />
      <button
        className="h-12 rounded-md transition-colors cursor-pointer font-extralight hover:bg-darkGray hover:text-offWhite border border-darkGray dark:hover:bg-offWhite dark:hover:text-darkGray dark:border dark:border-offWhite"
        type={"submit"}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
