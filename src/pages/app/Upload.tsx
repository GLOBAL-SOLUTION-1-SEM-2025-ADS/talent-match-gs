import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import UploadCard from "../../components/UploadCard";
import LoadingStatus from "../../components/LoadingStatus";
import { talentMatchService } from "../../services/talentMatch";
import type { AnaliseIA } from "../../types";
import { salvarAnaliseNova } from "../../utils/storage";

interface LocationState {
  vaga?: string;
}

export default function Upload() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  const vaga = state?.vaga || "";

  const [status, setStatus] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  if (!vaga) {
    return (
      <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[70vh] flex items-center">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
            Nenhuma vaga foi informada. Volte e preencha a descrição da vaga antes
            de enviar um currículo.
          </p>
          <Link
            to="/vaga"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow-md"
          >
            ← Voltar para descrição da vaga
          </Link>
        </div>
      </section>
    );
  }

  const enviarArquivo = async (file: File) => {
    try {
      setErro(null);
      setStatus("Enviando currículo e analisando com IA...");

      const analise: AnaliseIA = await talentMatchService.analisarPdf(file, vaga);

      const id = crypto.randomUUID();
      const registro = {
        id,
        data: new Date().toISOString(),
        vaga,
        analise,
      };

      salvarAnaliseNova(registro);

      setStatus("Análise concluída. Redirecionando para o parecer...");
      navigate(`/analise/${id}`);
    } catch (e: unknown) {
      setStatus(null);
      if (e instanceof Error) {
        setErro(e.message);
      } else {
        setErro("Ocorreu um erro ao enviar o currículo.");
      }
    }
  };

  return (
    <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[80vh]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => navigate("/vaga")}
              className="mt-1 h-10 w-10 flex items-center justify-center rounded-full border border-blue-100 bg-white text-blue-800 shadow-sm hover:bg-blue-50 transition"
              aria-label="Voltar para vaga"
            >
              ←
            </button>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Passo 2 de 2
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
                Faça o upload do currículo
              </h1>
              <p className="text-gray-700 max-w-2xl">
                Envie o PDF do candidato para a IA gerar o parecer. Apenas .pdf são aceitos.
              </p>
            </div>
          </div>
          <Link
            to="/historico"
            className="text-sm font-semibold text-indigo-700 hover:underline"
          >
            Abrir histórico de pareceres
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-5">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Vaga selecionada
              </p>
              <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                {vaga}
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-4 md:p-6">
              <UploadCard onUpload={enviarArquivo} />
              {status && <LoadingStatus mensagem={status} />}
              {erro && (
                <p className="mt-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                  {erro}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6">
              <p className="text-sm font-semibold text-blue-900">Requisitos do arquivo</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Formato PDF.</li>
                <li>• Texto legível (evite imagens escaneadas).</li>
                <li>• Tamanho moderado para análise mais rápida.</li>
              </ul>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6">
              <p className="text-sm font-semibold text-blue-900">Dicas de envio</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Garanta que o currículo está atualizado.</li>
                <li>• Destaque experiências alinhadas à vaga.</li>
                <li>• Inclua links para portfólio quando relevante.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
