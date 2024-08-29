"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState({ id: null, mobile: "" });

  const addItem = async () => {
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: newItem }),
      });
      localStorage.setItem("mobile", JSON.stringify(newItem));
      setNewItem("");
    } catch (err) {
      console.log(err);
    }
  };

  const updateItem = async () => {
    await fetch("/api", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editItem),
    });
    setEditItem({ id: null, mobile: "" });
  };

  const deleteItem = async (id: number) => {
    await fetch("/api", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
              />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center"></div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Unlock Best Business Loan Offers for meeting your Capital
                    requirements
                  </div>

                  <p>Best Offers from 10+ Lenders</p>
                  <p>Hassle-Free Documentation</p>
                  <p>Hassle-Free Documentation</p>
                </div>

                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="number"
                    placeholder="moblie number"
                    onChange={(e) => setNewItem(e.target.value)}
                    value={newItem}
                  />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    onClick={addItem}
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">proceed</span>
                  </button>
                  <p>
                    By clicking on proceed, you have read and agree to the
                    Credit Report Terms of Use, Terms of Use and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            >
              <h2>Business Loan</h2>
              <p>
                Every business needs capital to grow and at Paisabazaar, we
                ensure you get the best of what you need. Whether you are
                launching or expanding your business, we pledge to give you best
                business loan offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
