'use client' 

import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    county: "",
    carDetails: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/entries", formData);
      toast.success("Details submitted. Proceed to security for checks!");
      setFormData({
        fullName: "",
        idNumber: "",
        phone: "",
        county: "",
        carDetails: "",
        date: "",
        time: "",
      });
    } catch (err) {
      toast.error("Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-4">
        <h1 className="text-sm font-bold">Fill Up this form</h1>
      </header>
      <main className="p-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border dark:border-gray-700 rounded"
            required
          />
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            placeholder="ID/Admission Number"
            className="w-full p-2 border dark:border-gray-700 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border dark:border-gray-700 rounded"
            required
          />
          <input
            type="text"
            name="county"
            value={formData.county}
            onChange={handleChange}
            placeholder="County"
            className="w-full p-2 border dark:border-gray-700 rounded"
            required
          />
          <input
            type="text"
            name="carDetails"
            value={formData.carDetails}
            onChange={handleChange}
            placeholder="Car Details (Optional)"
            className="w-full p-2 border dark:border-gray-700 rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-700 rounded"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-700 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-800 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </main>
      <footer className="bg-white  dark:bg-fuchsia-950-800 text-white p-4 text-center">
        &copy; 2024 Gate Pass System
      </footer>
      <ToastContainer />
    </div>
  );
}
