const BASE_URL =
  import.meta.env.VITE_API_URL || "https://talent-match-ia.onrender.com";

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(BASE_URL + endpoint, options);

  const contentType = res.headers.get("Content-Type") || "";

  if (!res.ok) {
    if (contentType.includes("application/json")) {
      const errData = await res.json();
      throw new Error(errData.error || errData.message || "Erro na API");
    }
    const text = await res.text();
    throw new Error(text || "Erro na API");
  }

  if (contentType.includes("application/json")) {
    return res.json() as Promise<T>;
  }

  return {} as T;
}

export const api = {
  upload: <T>(endpoint: string, formData: FormData) =>
    request<T>(endpoint, {
      method: "POST",
      body: formData,
    }),
};

export default api;
