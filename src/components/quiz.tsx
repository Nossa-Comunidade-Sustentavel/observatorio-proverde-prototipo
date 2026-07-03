"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";
import type { QuizQ } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Quiz({ perguntas, medalha }: { perguntas: QuizQ[]; medalha: string }) {
  const [i, setI] = React.useState(0);
  const [sel, setSel] = React.useState<number | null>(null);
  const [acertos, setAcertos] = React.useState(0);
  const [fim, setFim] = React.useState(false);

  const q = perguntas[i];
  const respondido = sel !== null;

  function escolher(idx: number) {
    if (respondido) return;
    setSel(idx);
    if (idx === q.correta) setAcertos((a) => a + 1);
  }
  function proxima() {
    if (i + 1 < perguntas.length) {
      setI(i + 1);
      setSel(null);
    } else {
      setFim(true);
    }
  }
  function reiniciar() {
    setI(0);
    setSel(null);
    setAcertos(0);
    setFim(false);
  }

  if (fim) {
    const perfeito = acertos === perguntas.length;
    return (
      <div className="space-y-3 py-2 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary/10">
          <Trophy className="size-7 text-primary" />
        </div>
        <div className="text-lg font-bold text-primary">
          {acertos} de {perguntas.length} corretas
        </div>
        <p className="text-sm text-muted-foreground">
          {perfeito
            ? `Mandou bem! Você desbloqueou a medalha "${medalha}" (ilustrativo).`
            : "Boa! Revise os conceitos da trilha e tente de novo para gabaritar."}
        </p>
        <Button variant="outline" className="w-full" onClick={reiniciar}>
          Refazer o quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-xs font-medium text-muted-foreground">
        Pergunta {i + 1} de {perguntas.length}
      </div>
      <p className="font-medium">{q.pergunta}</p>
      <div className="grid gap-2">
        {q.opcoes.map((op, idx) => {
          const correta = idx === q.correta;
          const mostra = respondido && (correta || idx === sel);
          return (
            <button
              key={idx}
              onClick={() => escolher(idx)}
              disabled={respondido}
              className={cn(
                "flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors",
                respondido && correta && "border-primary bg-primary/10",
                respondido && idx === sel && !correta && "border-destructive bg-destructive/10",
                !respondido && "hover:bg-muted",
                respondido && "cursor-default",
              )}
            >
              <span>{op}</span>
              {mostra && correta && <CheckCircle2 className="size-4 shrink-0 text-primary" />}
              {mostra && idx === sel && !correta && <XCircle className="size-4 shrink-0 text-destructive" />}
            </button>
          );
        })}
      </div>
      {respondido && (
        <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">{q.explica}</div>
      )}
      {respondido && (
        <Button className="w-full" onClick={proxima}>
          {i + 1 < perguntas.length ? "Próxima pergunta" : "Ver resultado"}
        </Button>
      )}
    </div>
  );
}
