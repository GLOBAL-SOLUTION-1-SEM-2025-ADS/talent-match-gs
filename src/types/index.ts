export interface AnaliseIA {
  nome: string;
  score_percent: number;
  nivel_compatibilidade: string;
  pontos_fortes: string;
  pontos_a_melhora_riscos: string;
  recomendacao: string;
  resumo_final: string;
}

export interface AnaliseComMeta {
  id: string;
  data: string;
  vaga: string;
  analise: AnaliseIA;
}
