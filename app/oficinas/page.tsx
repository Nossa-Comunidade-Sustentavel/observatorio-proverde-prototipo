import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { oficinas, type Tema } from "@/lib/data";
import { Recycle, TreeDeciduous, Sparkles, Clock, Users, Award, Medal } from "lucide-react";

const iconeTema: Record<Tema, typeof Recycle> = {
  "Resíduos": Recycle,
  "Arborização": TreeDeciduous,
  "Transversal": Sparkles,
};

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Oficinas nos polos</h1>
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Programa ilustrativo</Badge>
        </div>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Encontros presenciais, gratuitos e abertos à comunidade e às escolas nos polos parceiros. A oficina é o coração
          do projeto — a cartilha e o app apoiam e dão continuidade ao que se aprende no encontro.
        </p>
      </header>

      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="grid gap-4 pt-6 sm:grid-cols-3">
          <div className="flex items-start gap-2">
            <Users className="mt-0.5 size-5 shrink-0 text-primary" />
            <div className="text-sm"><strong>Comunidade + escolas</strong><br /><span className="text-muted-foreground">formação aberta a todos os públicos</span></div>
          </div>
          <div className="flex items-start gap-2">
            <Medal className="mt-0.5 size-5 shrink-0 text-primary" />
            <div className="text-sm"><strong>Participou, ganhou</strong><br /><span className="text-muted-foreground">presença na oficina rende medalha no app</span></div>
          </div>
          <div className="flex items-start gap-2">
            <Award className="mt-0.5 size-5 shrink-0 text-primary" />
            <div className="text-sm"><strong>Formação certificada</strong><br /><span className="text-muted-foreground">certificado de conclusão da trilha formativa</span></div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {oficinas.map((o) => {
          const Icone = iconeTema[o.tema];
          return (
            <Card key={o.titulo}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icone className="size-5" />
                  </span>
                  <Badge variant="outline" className="text-[10px]">{o.tema}</Badge>
                </div>
                <CardTitle className="text-base">{o.titulo}</CardTitle>
                <CardDescription>{o.formato}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> {o.carga}</span>
                <span className="inline-flex items-center gap-1"><Users className="size-3.5" /> {o.publico}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
