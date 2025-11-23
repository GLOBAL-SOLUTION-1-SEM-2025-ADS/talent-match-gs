import type { AnaliseComMeta } from "../types";

const KEY = "talentmatch_historico";

export function carregarHistorico(): AnaliseComMeta[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as AnaliseComMeta[];
  } catch {
    return [];
  }
}

export function salvarAnaliseNova(registro: AnaliseComMeta) {
  const atual = carregarHistorico();
  const atualizado = [registro, ...atual];
  localStorage.setItem(KEY, JSON.stringify(atualizado));
}

export function buscarAnalisePorId(id: string): AnaliseComMeta | undefined {
  return carregarHistorico().find((item) => item.id === id);
}
