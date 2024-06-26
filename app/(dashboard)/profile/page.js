"use client";

import { useState } from "react";
import styles from "../../../style/App.css";
import Image from "next/image";

function Profile() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChange1 = (e) => {
    setPassword(e.target.value);
  };

  const handleChange2 = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div>
      <div className="my-20 mx-auto flex dark:bg-gray-900">
        <div className="lg:w-[80%] md:w-[90%] sm:w-[92%] xs:w-[96%] mx-auto flex items-center justify-center">
          <div className="max-w-5xl w-full md:p-6 xs:p-4 rounded-lg md:mt-0 sm:p-8 dark:bg-gray-900">
            <div className="w-full mx-auto shadow-xl rounded-sm border border-gray-200 dark:border dark:border-gray-800">
              <h1 className="text-2xl p-4 bg-cyan-200 shadow-lg dark:bg-gray-800 dark:text-white rounded-sm">
                Profile
              </h1>

              <div className="w-full md:flex sm:gap-2 xs:gap-0">
                <div className="lg:w-[20%] md:w-[30%] xs:w-full bg-cyan-100 flex justify-center items-start pt-4 dark:bg-gray-700">
                  <Image
                    src="/user-circle.svg"
                    alt="user"
                    width={200}
                    height={200}
                    className="w-28"
                  />
                </div>

                <div className="bg-cyan-100 dark:bg-gray-700 md:w-[88%] xs:w-[92%] px-4 py-6">
                  <div className="w-full">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm  text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="last_name"
                      className="block mb-2 text-sm  text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      for="email"
                      className="block mb-2 text-sm  text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      for="phone_no"
                      className="block mb-2 text-sm  text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone_no"
                      id="phone_no"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      for="password"
                      className="block mb-2 text-sm  text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="current"
                      placeholder="Password"
                      value={password}
                      onChange={handleChange1}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      for="new-password"
                      className="block mb-2 text-sm  text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={handleChange2}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-4 bg-cyan-300 hover:bg-cyan-400 rounded-xl my-4 dark:bg-black dark:text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
