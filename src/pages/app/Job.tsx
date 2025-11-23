import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Vaga() {
  const [vaga, setVaga] = useState("");
  const navigate = useNavigate();

  const podeAvancar = vaga.trim().length > 20;

  const handleAvancar = () => {
    if (!podeAvancar) return;
    navigate("/upload", { state: { vaga } });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Descrição da vaga
        </h1>
        <Link
          to="/historico"
          className="text-xs text-indigo-600 hover:underline"
        >
          Ver histórico de pareceres
        </Link>
      </div>

      <p className="text-sm text-gray-600">
        Cole ou escreva abaixo a descrição da vaga para a qual o currículo será
        avaliado. Quanto mais detalhada, melhor a análise da IA.
      </p>

      <textarea
        value={vaga}
        onChange={(e) => setVaga(e.target.value)}
        className="w-full border rounded-xl px-3 py-3 text-sm min-h-[200px]"
        placeholder="Ex: Desenvolvedor(a) Back-end Pleno com experiência em Java, Spring Boot, bancos relacionais..."
      />

      <div className="flex justify-end">
        <button
          onClick={handleAvancar}
          disabled={!podeAvancar}
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700"
        >
          Avançar para upload do currículo
        </button>
      </div>
    </div>
  );
}
