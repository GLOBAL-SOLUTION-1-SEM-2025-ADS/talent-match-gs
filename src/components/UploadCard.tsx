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
      className={`border-2 rounded-xl p-10 text-center cursor-pointer bg-white transition-all ${
        dragging ? "border-indigo-500 bg-indigo-50" : "border-dashed border-gray-300"
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
      <p className="text-lg text-gray-800 mb-2">
        Arraste o currículo em PDF aqui ou clique para selecionar
      </p>
      <p className="text-xs text-gray-500">
        Apenas <strong>.pdf</strong> • tamanho moderado
      </p>

      {fileName && (
        <p className="mt-4 text-sm text-indigo-700">
          Arquivo selecionado: <strong>{fileName}</strong>
        </p>
      )}
    </div>
  );
}
