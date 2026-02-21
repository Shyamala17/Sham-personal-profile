import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Suggestions from "./components/Suggestions";

function App() {
  const [resumeData, setResumeData] = useState({});
  const [suggestions, setSuggestions] = useState("");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Smart Resume Builder</h1>
      <ResumeForm setResumeData={setResumeData} setSuggestions={setSuggestions} />
      <ResumePreview resumeData={resumeData} />
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default App;
