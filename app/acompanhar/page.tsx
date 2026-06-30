"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const linha = [
  { t: "Recebido", q: "12/10/2026 · 14:20", estado: "done" as const },
  { t: "Triado pela curadoria", q: "12/10/2026 · 18:05", estado: "done" as const },
  { t: "Agregado a ponto crítico reincidente", q: "13/10/2026 · 09:10", estado: "done" as const },
  { t: "Encaminhado ao órgão competente (SEMA / Ouvidoria 156)", q: "13/10/2026 · 11:42", estado: "now" as const },
  { t: "Retorno do órgão", q: "aguardando (quando houver)", estado: "todo" as const },
];

export default function Page() {
  const [proto, setProto] = useState("PVD-2026-RES-000123");
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-primary">Acompanhar registro</h1>
        <p className="text-sm text-muted-foreground">Sem login. Consulte pelo protocolo (ou pelo QR recebido no registro).</p>
      </header>

      <Card>
        <CardHeader>
          <div className="space-y-2">
            <Label htmlFor="proto">Protocolo</Label>
            <Input id="proto" value={proto} onChange={(e) => setProto(e.target.value)} />
          </div>
          <CardTitle className="flex flex-wrap items-center gap-2 pt-2 text-sm font-normal">
            Status de <code className="rounded bg-secondary px-1.5 py-0.5">{proto}</code>
            <Badge variant="outline">Resíduos</Badge>
            <Badge variant="destructive">gravidade alta</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="relative space-y-0">
            {linha.map((l, i) => (
              <li key={l.t} className="relative border-l-2 pb-5 pl-6 last:border-l-transparent"
                  style={{ borderColor: l.estado === "done" ? "var(--primary)" : l.estado === "now" ? "#f6c453" : "var(--border)" }}>
                <span
                  className="absolute top-0 size-3.5 rounded-full"
                  style={{
                    left: -8,
                    background: l.estado === "done" ? "var(--primary)" : l.estado === "now" ? "#f6c453" : "var(--border)",
                    boxShadow: l.estado === "now" ? "0 0 0 4px #f6c45333" : undefined,
                  }}
                />
                <div className={i === 4 ? "text-muted-foreground" : "font-medium"}>{l.t}</div>
                <div className="text-xs text-muted-foreground">{l.q}</div>
              </li>
            ))}
          </ol>

          <Alert>
            <Info className="size-4" />
            <AlertDescription>
              O encaminhamento <strong>não garante autuação</strong>; a decisão é do órgão competente. A linha do tempo termina
              em &ldquo;encaminhado&rdquo; — o Observatório não fiscaliza nem aplica sanção.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
