import { useEffect, useState } from "react";
import type { AnaliseComMeta } from "../../types";
import { carregarHistorico } from "../../utils/storage";
import LoadingStatus from "../../components/LoadingStatus";
import AnalysisCard from "../../components/AnalysisCard";
import FilterBar from "../../components/Filterbar";

export default function Historico() {
  const [lista, setLista] = useState<AnaliseComMeta[]>([]);
  const [status, setStatus] = useState<string | null>("Carregando histórico...");
  const [termo, setTermo] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  useEffect(() => {
    const registros = carregarHistorico();
    setLista(registros);
    setStatus(null);
  }, []);

  const filtrados = lista.filter((item) => {
    const data = new Date(item.data);

    if (dataInicial) {
      const di = new Date(dataInicial);
      if (data < di) return false;
    }
    if (dataFinal) {
      const df = new Date(dataFinal);
      df.setHours(23, 59, 59, 999);
      if (data > df) return false;
    }

    if (!termo.trim()) return true;

    const base = (
      item.analise.nome +
      " " +
      item.vaga +
      " " +
      item.analise.pontos_fortes +
      " " +
      item.analise.pontos_a_melhora_riscos +
      " " +
      item.analise.resumo_final
    ).toLowerCase();

    return base.includes(termo.toLowerCase());
  });

  if (status) {
    return <LoadingStatus mensagem={status} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-slate-900">
          Histórico de pareceres
        </h1>
        <p className="text-xs text-gray-500">
          Total de análises: {lista.length}
        </p>
      </div>

      <FilterBar
        termo={termo}
        onTermoChange={setTermo}
        dataInicial={dataInicial}
        dataFinal={dataFinal}
        onDataInicialChange={setDataInicial}
        onDataFinalChange={setDataFinal}
      />

      {filtrados.length === 0 ? (
        <p className="text-sm text-gray-500">
          Nenhum parecer encontrado com os filtros atuais.
        </p>
      ) : (
        <div className="space-y-3">
          {filtrados.map((item) => (
            <AnalysisCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
