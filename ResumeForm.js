import React, { useState } from "react";
import axios from "axios";

function ResumeForm({ setResumeData, setSuggestions }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResumeData(formData);

    const response = await axios.post("http://localhost:5000/api/resumes/suggest", {
      content: JSON.stringify(formData),
    });
    setSuggestions(response.data.suggestions);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      {["name", "email", "education", "experience", "skills"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Resume
      </button>
    </form>
  );
}

export default ResumeForm;
