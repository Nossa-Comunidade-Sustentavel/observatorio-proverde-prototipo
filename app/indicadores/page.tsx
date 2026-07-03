import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen } from "lucide-react";
import { indicadoresEdu as I, serieEngajamento } from "@/lib/data";

const kpis = [
  { num: I.participantes, lab: "Participantes formados" },
  { num: I.oficinas, lab: "Oficinas realizadas" },
  { num: I.trilhasConcluidas, lab: "Trilhas concluídas" },
  { num: I.medalhas, lab: "Medalhas concedidas" },
  { num: I.alcanceEscolar, lab: "Turmas / escolas alcançadas" },
  { num: Math.round(I.taxaConclusao * 100) + "%", lab: "Taxa de conclusão das trilhas" },
];

const max = Math.max(...serieEngajamento.map((c) => c.valor));

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Indicadores &amp; dados abertos</h1>
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Dados simulados</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Métricas de <strong>educação e engajamento</strong> — aferidas e reportadas — e o legado aberto ao município.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
            <CardTitle className="text-base">Participação por ciclo bimestral</CardTitle>
            <CardDescription>Engajamento nas trilhas, missões e oficinas (referência ilustrativa).</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-44 items-end gap-3">
              {serieEngajamento.map((c) => (
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
            <CardTitle className="text-base">Legado · aberto ao município</CardTitle>
            <CardDescription>Cartilha e app abertos, sob guarda da NCS/Município.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <BookOpen className="size-4" /> Baixar a cartilha (PDF · CC-BY)
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="size-4" /> Materiais e conteúdos abertos
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="size-4" /> Indicadores de engajamento (CSV)
            </Button>
            <Badge variant="secondary" className="mt-1">Licença aberta · código do app na org da NCS</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
