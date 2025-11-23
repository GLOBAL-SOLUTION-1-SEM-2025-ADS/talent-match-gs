import api from "./api";
import type { AnaliseIA } from "../types";

export const talentMatchService = {
  analisarPdf: (file: File, vaga: string) => {
    const form = new FormData();
    form.append("file", file);
    form.append("vaga", vaga);

    return api.upload<AnaliseIA>("/analyze", form);
  },
};
