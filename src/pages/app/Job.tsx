import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Job() {
  const [vaga, setVaga] = useState("");
  const navigate = useNavigate();

  const podeAvancar = vaga.trim().length > 20;

  const handleAvancar = () => {
    if (!podeAvancar) return;
    navigate("/upload", { state: { vaga } });
  };

  return (
    <section className="px-4 md:px-10 py-12 min-h-[70vh] bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-1 h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              ←
            </button>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                Passo 1 de 2
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Descreva a vaga
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Quanto mais detalhada a vaga, mais preciso o parecer da IA.
              </p>
            </div>
          </div>

          <Link
            to="/historico"
            className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 hover:underline"
          >
            Ver histórico de pareceres
          </Link>
        </div>


        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-6 md:p-8 space-y-4">
              <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                Descrição da vaga
              </label>

              <textarea
                value={vaga}
                onChange={(e) => setVaga(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm min-h-[220px] focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800 text-gray-800 dark:text-gray-100"
                placeholder="Ex: Desenvolvedor(a) Back-end Pleno com experiência em Java..."
              />

              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Mínimo recomendado: 20 caracteres</span>
                <span className={vaga.trim().length >= 20 ? "text-emerald-500 font-semibold" : ""}>
                  {vaga.trim().length} caracteres
                </span>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleAvancar}
                  disabled={!podeAvancar}
                  className="px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-50 hover:bg-indigo-700 transition disabled:cursor-not-allowed"
                >
                  Avançar
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Dicas rápidas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Inclua tecnologias essenciais.</li>
                <li>• Cite senioridade e contexto do time.</li>
                <li>• Adicione soft skills desejadas.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
