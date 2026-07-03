import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { missoes } from "@/lib/data";
import { ICONES } from "@/lib/icons";
import { Coins, CheckCircle2, Clock3, Circle } from "lucide-react";

const statusInfo = {
  concluida: { label: "Concluída", cls: "bg-primary/10 text-primary", Icon: CheckCircle2 },
  em_andamento: { label: "Em andamento", cls: "bg-amber-100 text-amber-800", Icon: Clock3 },
  disponivel: { label: "Disponível", cls: "bg-muted text-muted-foreground", Icon: Circle },
} as const;

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Missões</h1>
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Dados simulados</Badge>
        </div>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Desafios educativos práticos, um por tema do jogo — para aprender fazendo, sem reportar ou denunciar. Cada
          missão concluída rende pontos e aproxima você da próxima medalha.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {missoes.map((m) => {
          const Icone = ICONES[m.icone];
          const st = statusInfo[m.status];
          return (
            <Card key={m.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icone className="size-5" />
                  </span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${st.cls}`}>
                    <st.Icon className="size-3" /> {st.label}
                  </span>
                </div>
                <CardTitle className="text-base">{m.titulo}</CardTitle>
                <CardDescription>{m.descricao}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex items-center justify-between">
                <Badge variant="outline" className="text-[10px]">{m.tema}</Badge>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  <Coins className="size-4" /> {m.pontos} pts
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
