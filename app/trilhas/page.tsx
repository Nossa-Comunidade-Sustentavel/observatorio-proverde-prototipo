"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Quiz } from "@/components/quiz";
import { modulos, type Modulo, type Tema } from "@/lib/data";
import { Recycle, TreeDeciduous, Sparkles, Medal, PlayCircle } from "lucide-react";

const iconeTema: Record<Tema, typeof Recycle> = {
  "Resíduos": Recycle,
  "Arborização": TreeDeciduous,
  "Transversal": Sparkles,
};

function ModuloCard({ m }: { m: Modulo }) {
  const Icone = iconeTema[m.tema];
  const pct = Math.round((m.concluidas / m.licoes) * 100);
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icone className="size-5" />
          </span>
          <Badge variant="secondary" className="gap-1 text-[10px]">
            <Medal className="size-3" /> {m.medalha}
          </Badge>
        </div>
        <CardTitle className="text-base">{m.titulo}</CardTitle>
        <CardDescription>{m.descricao}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{m.concluidas}/{m.licoes} lições · +{m.xp} XP</span>
            <span>{pct}%</span>
          </div>
          <Progress value={pct} />
        </div>

        <Accordion type="single" collapsible className="rounded-md border px-3">
          <AccordionItem value="conceitos">
            <AccordionTrigger>Conceitos</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                {m.conceitos.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="praticas">
            <AccordionTrigger>Boas práticas</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                {m.boasPraticas.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="dicas">
            <AccordionTrigger>Dicas</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                {m.dicas.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full gap-2">
              <PlayCircle className="size-4" /> Fazer o quiz da trilha
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Quiz · {m.titulo}</DialogTitle>
              <DialogDescription>Responda e desbloqueie a medalha (ilustrativo).</DialogDescription>
            </DialogHeader>
            <Quiz perguntas={m.quiz} medalha={m.medalha} />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Trilhas · Cartilha gamificada</h1>
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Dados simulados</Badge>
        </div>
        <p className="max-w-3xl text-sm text-muted-foreground">
          A cartilha vira <strong>trilhas de aprendizagem</strong>: leia os conceitos, veja boas práticas e faça o quiz
          para ganhar XP e medalhas. Foco nas duas dores prioritárias — resíduos e arborização — mais temas transversais.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {modulos.map((m) => <ModuloCard key={m.id} m={m} />)}
      </div>
    </div>
  );
}
