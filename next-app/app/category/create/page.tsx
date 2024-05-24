"use client";
import { postRequest } from "@/service/api";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const Router = useRouter();
  const create = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
    };
    try {
      await postRequest("/categories", data);
      Router.push("/category");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="max-w-sm mx-auto p-4" onSubmit={create}>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          category name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="category name"
          required
        />
      </div>

      <div className="flex items-start mb-5"></div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create category
      </button>
    </form>
  );
};

export default Page;
