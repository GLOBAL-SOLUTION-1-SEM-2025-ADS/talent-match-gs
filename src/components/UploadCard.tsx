import { useState } from "react";

interface Props {
  onUpload: (file: File) => void;
}

export default function UploadCard({ onUpload }: Props) {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (files: FileList | null) => {
    if (!files || !files[0]) return;
    const file = files[0];
    if (file.type !== "application/pdf") {
      alert("Envie um arquivo em PDF.");
      return;
    }
    setFileName(file.name);
    onUpload(file);
  };

  return (
    <div
      className={`border-2 rounded-2xl p-10 text-center cursor-pointer bg-gradient-to-br from-slate-50 to-white shadow-sm transition-all ${
        dragging
          ? "border-indigo-400 bg-indigo-50"
          : "border-dashed border-blue-200 hover:border-indigo-300 hover:shadow-md"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files);
      }}
      onClick={() => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/pdf";
        input.onchange = () => handleFile(input.files);
        input.click();
      }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wide bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
        PDF
      </div>
      <p className="text-lg text-gray-800 mb-2 font-semibold">
        Arraste o currículo em PDF aqui ou clique para selecionar
      </p>
      <p className="text-xs text-gray-500">
        Apenas <strong>.pdf</strong> • ideal: texto legível • tamanho moderado
      </p>

      {fileName && (
        <p className="mt-4 text-sm text-indigo-700">
          Arquivo selecionado: <strong>{fileName}</strong>
        </p>
      )}
    </div>
  );
}
