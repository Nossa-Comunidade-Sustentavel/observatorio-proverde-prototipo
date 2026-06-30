"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CENTRO, heatResiduos, heatArborizacao, pontosPriorizados, indicadores as I,
} from "@/lib/data";
import type { HeatLayer, MapMarker } from "@/components/mapa-calor";

const MapaCalor = dynamic(() => import("@/components/mapa-calor"), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

const GRAD_RES = { 0.2: "#fde68a", 0.5: "#f59e0b", 1.0: "#9a3412" };
const GRAD_ARB = { 0.2: "#bbf7d0", 0.5: "#22c55e", 1.0: "#14532d" };

export default function Page() {
  const [filtro, setFiltro] = useState<"ambos" | "Resíduos" | "Arborização">("ambos");

  const layers = useMemo<HeatLayer[]>(() => {
    const ls: HeatLayer[] = [];
    if (filtro !== "Arborização") ls.push({ points: heatResiduos, gradient: GRAD_RES });
    if (filtro !== "Resíduos") ls.push({ points: heatArborizacao, gradient: GRAD_ARB });
    return ls;
  }, [filtro]);

  const pontos = useMemo(
    () => pontosPriorizados.filter((p) => filtro === "ambos" || p.tema === filtro),
    [filtro],
  );

  const markers = useMemo<MapMarker[]>(
    () => pontos.slice(0, 8).map((p) => ({
      lat: p.centro[0], lng: p.centro[1],
      color: p.tema === "Resíduos" ? "#9a3412" : "#14532d",
      popup: `<b>${p.nome}</b><br/>${p.tema} · ${p.severidade} · ${p.recorrencia}× recorrências`,
    })),
    [pontos],
  );

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-primary">Mapa público · inteligência territorial</h1>
            <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Dados simulados</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Mapa de calor de reincidência, agregado por recorte amplo (sem expor pessoas). Dados ilustrativos.
          </p>
        </div>
        <ToggleGroup type="single" value={filtro} onValueChange={(v) => v && setFiltro(v as typeof filtro)} variant="outline">
          <ToggleGroupItem value="ambos">Ambos</ToggleGroupItem>
          <ToggleGroupItem value="Resíduos">Resíduos</ToggleGroupItem>
          <ToggleGroupItem value="Arborização">Arborização</ToggleGroupItem>
        </ToggleGroup>
      </header>

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <Card className="overflow-hidden p-0">
          <div className="h-[520px] w-full">
            <MapaCalor center={CENTRO} layers={layers} markers={markers} />
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pontos priorizados para a SEMA</CardTitle>
              <CardDescription>Ranking severidade × recorrência</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {pontos.slice(0, 6).map((p, i) => (
                <div key={p.id} className="flex items-start gap-2 rounded-md border p-2">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{p.nome}</div>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <Badge variant={p.tema === "Resíduos" ? "outline" : "secondary"} className="text-[10px]">{p.tema}</Badge>
                      <span className="text-xs text-muted-foreground">{p.recorrencia}× · {p.severidade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="grid grid-cols-2 gap-3 pt-6 text-center">
              <div><div className="text-2xl font-extrabold text-primary">{I.hotspotsPriorizados}</div><div className="text-[11px] text-muted-foreground">pontos priorizados</div></div>
              <div><div className="text-2xl font-extrabold text-primary">{Math.round(I.closedLoop * 100)}%</div><div className="text-[11px] text-muted-foreground">com closed-loop</div></div>
              <div><div className="text-2xl font-extrabold text-primary">{I.tempoEncaminhamento}d</div><div className="text-[11px] text-muted-foreground">até encaminhamento</div></div>
              <div><div className="text-2xl font-extrabold text-primary">{I.hotspotsReincidentes}</div><div className="text-[11px] text-muted-foreground">reincidentes enc.</div></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
