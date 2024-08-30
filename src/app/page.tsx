/* eslint-disable @next/next/no-img-element */
"use client";
import Main from "@/components/main/main";
import HorizontalNonLinearStepper from "@/components/bussiness_stepper/stepper";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState({ id: null, mobile: "" });
  const [showStepper, setShowStepper] = useState(false); 

  const addItem = async () => {
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: newItem }),
      });
      localStorage.setItem("mobile", JSON.stringify(newItem));
      setNewItem("");
      setShowStepper(true); 
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
       <div>
      {showStepper ? (
        <HorizontalNonLinearStepper /> 
      ) : (
        <Main
          newItem={newItem}
          setNewItem={setNewItem}
          addItem={addItem}
        />
      )}
    </div>

  );
}
