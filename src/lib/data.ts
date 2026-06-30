// DADOS 100% FICTÍCIOS — apenas ilustrativos do protótipo conceitual.
// Nenhuma informação real, nenhum dado pessoal.

export const CENTRO: [number, number] = [-23.31, -51.162]; // Londrina/PR (aprox.)

export type Sev = "baixa" | "media" | "alta";
export type HeatPoint = [number, number, number];

// RNG determinístico (mulberry32) — mapa estável entre recarregamentos (sem hydration mismatch)
function rng(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(42);

function scatter(center: [number, number], n: number, spread: number, base: number): HeatPoint[] {
  const pts: HeatPoint[] = [];
  for (let i = 0; i < n; i++) {
    const lat = center[0] + (rand() - 0.5) * spread;
    const lng = center[1] + (rand() - 0.5) * spread * 1.3;
    pts.push([lat, lng, base * (0.4 + rand() * 0.6)]);
  }
  return pts;
}

export type Hotspot = { id: string; nome: string; centro: [number, number]; recorrencia: number; severidade: Sev };

export const hotspotsResiduos: Hotspot[] = [
  { id: "H1", nome: "Vila Nova — viela do fundo de vale", centro: [-23.296, -51.146], recorrencia: 14, severidade: "alta" },
  { id: "H2", nome: "Conj. Ernani — terreno baldio", centro: [-23.272, -51.189], recorrencia: 9, severidade: "alta" },
  { id: "H3", nome: "Margem do córrego (zona oeste)", centro: [-23.322, -51.201], recorrencia: 6, severidade: "media" },
  { id: "H4", nome: "Boca-de-lobo — av. central", centro: [-23.309, -51.158], recorrencia: 4, severidade: "media" },
  { id: "H5", nome: "Próx. à feira (zona sul)", centro: [-23.345, -51.151], recorrencia: 3, severidade: "baixa" },
];

export const hotspotsArborizacao: Hotspot[] = [
  { id: "A1", nome: "Quadras sem cobertura (zona sul)", centro: [-23.34, -51.17], recorrencia: 22, severidade: "alta" },
  { id: "A2", nome: "Falhas de plantio — Jd. das Palmeiras", centro: [-23.285, -51.14], recorrencia: 12, severidade: "media" },
  { id: "A3", nome: "Árvores em risco junto à fiação", centro: [-23.315, -51.18], recorrencia: 7, severidade: "alta" },
];

const peso: Record<Sev, number> = { alta: 9, media: 5, baixa: 2 };

export const heatResiduos: HeatPoint[] = hotspotsResiduos.flatMap((h) => scatter(h.centro, 18, 0.012, peso[h.severidade]));
export const heatArborizacao: HeatPoint[] = hotspotsArborizacao.flatMap((h) => scatter(h.centro, 22, 0.018, peso[h.severidade]));

export const pontosPriorizados = [...hotspotsResiduos, ...hotspotsArborizacao]
  .map((h) => ({ ...h, score: peso[h.severidade] * h.recorrencia, tema: h.id[0] === "H" ? "Resíduos" : "Arborização" }))
  .sort((a, b) => b.score - a.score);

export type Estado =
  | "recebido" | "em_triagem" | "valido" | "incompleto" | "duplicado"
  | "fora_de_escopo" | "sensivel" | "rejeitado" | "encaminhavel" | "encaminhado";

export type Registro = {
  protocolo: string; tema: "Resíduos" | "Arborização"; subtipo: string;
  severidade: Sev; bairro: string; data: string; estado: Estado; recorrencia: number; hotspot: string | null;
};

export const registros: Registro[] = [
  { protocolo: "PVD-2026-RES-000123", tema: "Resíduos", subtipo: "Entulho/RCC", severidade: "alta", bairro: "Vila Nova", data: "12/10/2026", estado: "encaminhado", recorrencia: 14, hotspot: "H1" },
  { protocolo: "PVD-2026-RES-000131", tema: "Resíduos", subtipo: "Volumoso", severidade: "media", bairro: "Centro", data: "13/10/2026", estado: "encaminhavel", recorrencia: 1, hotspot: null },
  { protocolo: "PVD-2026-ARB-000142", tema: "Arborização", subtipo: "Árvore de risco", severidade: "alta", bairro: "Zona oeste", data: "13/10/2026", estado: "valido", recorrencia: 3, hotspot: "A3" },
  { protocolo: "PVD-2026-RES-000150", tema: "Resíduos", subtipo: "Poda/galhada", severidade: "baixa", bairro: "Conj. Ernani", data: "14/10/2026", estado: "duplicado", recorrencia: 9, hotspot: "H2" },
  { protocolo: "PVD-2026-ARB-000155", tema: "Arborização", subtipo: "Falha de plantio", severidade: "media", bairro: "Jd. das Palmeiras", data: "14/10/2026", estado: "valido", recorrencia: 12, hotspot: "A2" },
  { protocolo: "PVD-2026-RES-000160", tema: "Resíduos", subtipo: "Indefinido", severidade: "media", bairro: "—", data: "15/10/2026", estado: "incompleto", recorrencia: 1, hotspot: null },
  { protocolo: "PVD-2026-RES-000164", tema: "Resíduos", subtipo: "Doméstico (placa visível)", severidade: "media", bairro: "Centro", data: "15/10/2026", estado: "sensivel", recorrencia: 1, hotspot: null },
  { protocolo: "PVD-2026-ARB-000170", tema: "Arborização", subtipo: "Solicitação de plantio", severidade: "baixa", bairro: "Zona sul", data: "16/10/2026", estado: "valido", recorrencia: 22, hotspot: "A1" },
];

export const ESTADOS: Record<Estado, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  recebido: { label: "Recebido", variant: "secondary" },
  em_triagem: { label: "Em triagem", variant: "secondary" },
  valido: { label: "Válido", variant: "default" },
  incompleto: { label: "Incompleto", variant: "outline" },
  duplicado: { label: "Duplicado", variant: "outline" },
  fora_de_escopo: { label: "Fora de escopo", variant: "secondary" },
  sensivel: { label: "Sensível (bloqueado)", variant: "destructive" },
  rejeitado: { label: "Rejeitado", variant: "destructive" },
  encaminhavel: { label: "Encaminhável", variant: "default" },
  encaminhado: { label: "Encaminhado", variant: "default" },
};

export const indicadores = {
  registros: 468,
  georreferenciados: 0.93,
  closedLoop: 0.84,
  tempoEncaminhamento: 8,
  hotspotsPriorizados: 60,
  hotspotsReincidentes: 31,
  arvoresMapeadas: 372,
  sobrevivenciaPlantio: 0.71,
};

export const serieCiclos = [
  { ciclo: "C1", valor: 38 },
  { ciclo: "C2", valor: 61 },
  { ciclo: "C3", valor: 84 },
  { ciclo: "C4", valor: 72 },
  { ciclo: "C5", valor: 96 },
  { ciclo: "C6", valor: 117 },
];
