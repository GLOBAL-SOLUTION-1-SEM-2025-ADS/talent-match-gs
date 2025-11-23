import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const perguntas = [
    {
      pergunta: "Como funciona a análise de curriculos?",
      resposta:
        "Nossa plataforma utiliza inteligência artificial para extrair informações do currículo (formação, cursos, experiências) e compará-las com os requisitos da vaga selecionada, gerando um percentual de compatibilidade e insights detalhados.",
    },
    {
      pergunta: "Quais formatos de arquivo são aceitos?",
      resposta:
        "Aceitamos currículos no formato PDF. Certifique-se de que o arquivo não esteja corrompido e tenha no máximo 5MB.",
    },
    {
      pergunta: "Como é calculado o percentual de compatibilidade?",
      resposta:
        "O percentual é calculado com base na compatibilidade entre as competências, experiências e formação do candidato com os requisitos específicos da vaga selecionada.",
    },
    {
      pergunta: "Os dados dos candidatos ficam salvos?",
      resposta:
        "Os currículos são processados de forma segura e os dados podem ser salvos para consulta futura, permitindo comparar múltiplos candidatos para a mesma vaga.",
    },

    {
      pergunta: "Posso cadastrar minhas próprias vagas?",
      resposta:
        "Não! Mas você tem a opção de definir competências necessárias e também fazer uma analise de um curriculo em cima disso",
    },

    {
      pergunta: "A análise elimina o viés na seleção?",
      resposta:
        "Sim, nossa IA foca apenas em competências técnicas e experiências relevantes, eliminando fatores subjetivos e ajudando a reduzir viés inconsciente no processo de seleção.",
    },
  ];

  return (
    <>
      <main className="max-w-4xl mx-auto mt-12 p-6">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-10">
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col gap-4">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left text-lg font-semibold text-neutral-600 flex justify-between items-center"
                aria-expanded={openIndex === index}
              >
                <span className={openIndex === index ? "text-blue-700" : ""}>
                  {item.pergunta}
                </span>
                <span
                  className={`text-blue-700 text-xl leading-none transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 bg-gray-50 rounded-xl p-4 text-sm leading-relaxed whitespace-pre-line border border-gray-100">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
