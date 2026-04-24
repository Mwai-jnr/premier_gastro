import { useState } from "react";
import axios from "axios";

export default function AppointmentForm() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/appointments", form);

    alert("Appointment submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">

      <input
        className="w-full border p-2"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border p-2"
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <select
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      >
        <option>Select Service</option>
        <option>Esophageal Manometry</option>
        <option>pH Monitoring</option>
        <option>Anorectal Manometry</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 w-full">
        Submit
      </button>

    </form>
  );
}