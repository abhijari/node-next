"use client";
import { getRequest, postRequest } from "@/service/api";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    (async () => {
      const categoriesData = await getRequest("/categories");
      setCategories(categoriesData);
    })();
  }, []);

  const create = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      categoryId: formData.get("categoryId"),
      quantity: parseInt((formData.get("quantity") as string) ?? "0"),
      price: parseFloat((formData.get("price") as string) ?? "0"),
    };
    try {
      await postRequest("/products", data);
      router.push("/products");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="max-w-sm mx-auto p-4" onSubmit={create}>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product name
        </label>
        <input
          type="text"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="product name"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an Category
        </label>
        <select
          name="categoryId"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a category</option>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Quantity
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="number"
          name="quantity"
        ></input>
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Price
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="number"
          name="price"
        ></input>
      </div>
      <div className="flex items-start mb-5"></div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
};

export default Page;
