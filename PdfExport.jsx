import { useReactToPrint } from "react-to-print";

export default function PdfExport({ componentRef }) {
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <button
      onClick={handlePrint}
      className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    >
      Download PDF
    </button>
  );
}
