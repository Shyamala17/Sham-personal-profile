import React from "react";

function Suggestions({ suggestions }) {
  return (
    <div className="mt-6 p-4 bg-green-100 rounded">
      <h2 className="text-xl font-bold">AI Suggestions</h2>
      <p>{suggestions}</p>
    </div>
  );
}

export default Suggestions;
