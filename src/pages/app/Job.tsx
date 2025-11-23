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
    <section className="px-4 md:px-10 py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[70vh] flex items-start">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-1 h-10 w-10 flex items-center justify-center rounded-full border border-blue-100 bg-white text-blue-800 shadow-sm hover:bg-blue-50 transition"
              aria-label="Voltar para início"
            >
              ←
            </button>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Passo 1 de 2
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
                Descreva a vaga
              </h1>
              <p className="text-gray-700 max-w-2xl">
                Quanto mais detalhada a vaga, mais preciso o parecer da IA sobre
                o currículo. Inclua requisitos, senioridade, tecnologias e
                contexto do time.
              </p>
            </div>
          </div>
          <Link
            to="/historico"
            className="text-sm font-semibold text-indigo-700 hover:underline"
          >
            Ver histórico de pareceres
          </Link>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-6 md:p-8 space-y-4">
              <label className="block text-sm font-semibold text-blue-900">
                Descrição da vaga
              </label>
              <p className="text-sm text-gray-600">
                Cole o texto da vaga ou escreva em detalhes. Recomendamos ao
                menos 3-4 linhas para melhor contexto.
              </p>
              <textarea
                value={vaga}
                onChange={(e) => setVaga(e.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-gray-50 focus:bg-white px-4 py-3 text-sm min-h-[220px] focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Ex: Desenvolvedor(a) Back-end Pleno com experiência em Java, Spring Boot, bancos relacionais..."
              />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Mínimo recomendado: 20 caracteres</span>
                <span
                  className={
                    vaga.trim().length >= 20
                      ? "text-emerald-600 font-semibold"
                      : ""
                  }
                >
                  {vaga.trim().length} caracteres
                </span>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAvancar}
                  disabled={!podeAvancar}
                  className="px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
                >
                  Avançar para upload do currículo
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6">
              <p className="text-sm font-semibold text-blue-900">
                Dicas rápidas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Inclua tecnologias essenciais e desejáveis.</li>
                <li>• Cite senioridade e contexto do time/projeto.</li>
                <li>• Adicione soft skills ou certificações relevantes.</li>
              </ul>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6">
              <p className="text-sm font-semibold text-blue-900">
                O que analisamos
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Alinhamento técnico com a vaga.</li>
                <li>• Experiência e senioridade.</li>
                <li>• Sinais de aderência cultural e contexto.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
