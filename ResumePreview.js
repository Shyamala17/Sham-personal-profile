import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function ResumePreview({ resumeData }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div ref={componentRef} className="mt-6 p-4 bg-gray-200 rounded">
      <h2 className="text-xl font-bold">Resume Preview</h2>
      <pre>{JSON.stringify(resumeData, null, 2)}</pre>
      <button onClick={handlePrint} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
        Export as PDF
      </button>
    </div>
  );
}

export default ResumePreview;
