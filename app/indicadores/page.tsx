import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen } from "lucide-react";
import { indicadores as I, serieCiclos } from "@/lib/data";

const kpis = [
  { num: I.registros, lab: "Registros validados" },
  { num: Math.round(I.georreferenciados * 100) + "%", lab: "Georreferenciados" },
  { num: Math.round(I.closedLoop * 100) + "%", lab: "Com closed-loop" },
  { num: I.tempoEncaminhamento + " dias", lab: "Tempo médio até encaminhamento" },
  { num: I.hotspotsPriorizados, lab: "Pontos críticos priorizados" },
  { num: I.hotspotsReincidentes, lab: "Hotspots reincidentes encaminhados" },
  { num: I.arvoresMapeadas, lab: "Indivíduos arbóreos mapeados" },
  { num: Math.round(I.sobrevivenciaPlantio * 100) + "%", lab: "Sobrevivência de plantio observada" },
];

const max = Math.max(...serieCiclos.map((c) => c.valor));

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Indicadores &amp; dados abertos</h1>
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Dados simulados</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Metas SMART (atividade, qualidade e impacto) e legado ao município. Dados ilustrativos.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.lab}>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-extrabold text-primary">{k.num}</div>
              <div className="mt-1 text-xs text-muted-foreground">{k.lab}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Registros validados por ciclo bimestral</CardTitle>
            <CardDescription>Série histórica — base de linha do Ciclo 1.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-44 items-end gap-3">
              {serieCiclos.map((c) => (
                <div key={c.ciclo} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                  <div className="text-xs font-medium text-muted-foreground">{c.valor}</div>
                  <div
                    className="w-full rounded-t-md bg-primary/80"
                    style={{ height: `${Math.round((c.valor / max) * 140)}px` }}
                  />
                  <div className="text-xs text-muted-foreground">{c.ciclo}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Legado · dados abertos</CardTitle>
            <CardDescription>Tudo exportável, sob guarda da NCS/Município.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="size-4" /> Baixar dados abertos (CSV)
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="size-4" /> Baixar dados abertos (GeoJSON)
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <BookOpen className="size-4" /> Dicionário de dados
            </Button>
            <Badge variant="secondary" className="mt-1">Licença aberta · interoperável com 156/SIG</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
