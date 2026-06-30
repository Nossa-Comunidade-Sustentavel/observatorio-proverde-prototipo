"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MapPin, Camera, CheckCircle2, QrCode } from "lucide-react";

const TEMAS: Record<string, string[]> = {
  Resíduos: ["Entulho / RCC", "Volumoso", "Poda / galhada", "Doméstico", "Pneus", "Indefinido"],
  Arborização: ["Falha de plantio", "Árvore de risco", "Supressão aparente", "Solicitação de plantio"],
};
const PASSOS = ["Tema", "Local", "Evidência", "Confirmações", "Pronto"];

export default function Page() {
  const [p, setP] = useState(0);
  const [tema, setTema] = useState("Resíduos");
  const [subtipo, setSubtipo] = useState("");
  const [sev, setSev] = useState("media");
  const [gates, setGates] = useState({ seguro: false, semPii: false, lgpd: false });
  const [protocolo, setProtocolo] = useState("");

  const gatesOk = gates.seguro && gates.semPii && gates.lgpd;
  const next = () => setP((x) => Math.min(x + 1, PASSOS.length - 1));
  const back = () => setP((x) => Math.max(x - 1, 0));

  function finalizar() {
    const pre = tema === "Resíduos" ? "RES" : "ARB";
    const n = String(100 + Math.floor(Math.random() * 900));
    setProtocolo(`PVD-2026-${pre}-000${n}`);
    next();
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <h1 className="text-2xl font-bold tracking-tight text-primary">Registrar ocorrência</h1>

      <div className="flex flex-wrap gap-1.5">
        {PASSOS.map((s, i) => (
          <Badge key={s} variant={i <= p ? "default" : "secondary"} className="font-normal">
            {i + 1}. {s}
          </Badge>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 pt-6">
          {p === 0 && (
            <>
              <div className="space-y-2">
                <Label>Tema</Label>
                <ToggleGroup type="single" value={tema} onValueChange={(v) => v && (setTema(v), setSubtipo(""))} variant="outline">
                  {Object.keys(TEMAS).map((t) => (
                    <ToggleGroupItem key={t} value={t} className="px-4">{t}</ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
              <div className="space-y-2">
                <Label>Tipo</Label>
                <div className="flex flex-wrap gap-2">
                  {TEMAS[tema].map((s) => (
                    <Button key={s} type="button" size="sm" variant={subtipo === s ? "default" : "outline"} onClick={() => setSubtipo(s)}>
                      {s}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Gravidade percebida</Label>
                <ToggleGroup type="single" value={sev} onValueChange={(v) => v && setSev(v)} variant="outline">
                  <ToggleGroupItem value="baixa" className="px-4">baixa</ToggleGroupItem>
                  <ToggleGroupItem value="media" className="px-4">média</ToggleGroupItem>
                  <ToggleGroupItem value="alta" className="px-4">alta</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </>
          )}

          {p === 1 && (
            <>
              <Button type="button" variant="outline" className="w-full gap-2"><MapPin className="size-4" /> Usar minha localização</Button>
              <Alert>
                <MapPin className="size-4" />
                <AlertDescription>
                  No mapa público, a localização aparece só por <strong>logradouro/quadra aproximado</strong> — nunca o endereço exato.
                </AlertDescription>
              </Alert>
              <div className="space-y-2">
                <Label htmlFor="ref">Ponto de referência (opcional)</Label>
                <Input id="ref" placeholder="ex.: próximo à praça / esquina" />
              </div>
            </>
          )}

          {p === 2 && (
            <>
              <Button type="button" variant="outline" className="w-full gap-2"><Camera className="size-4" /> Anexar foto</Button>
              <Alert>
                <Camera className="size-4" />
                <AlertDescription>
                  A foto deve mostrar <strong>a cena, sem pessoas e sem placas</strong>. Imagens com pessoas/placas são bloqueadas na curadoria.
                </AlertDescription>
              </Alert>
              <div className="space-y-2">
                <Label htmlFor="desc">Descrição curta</Label>
                <Textarea id="desc" rows={3} placeholder="o que você observou, sem citar nomes" />
              </div>
            </>
          )}

          {p === 3 && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Confirmações obrigatórias para enviar:</p>
              {[
                { k: "seguro", t: <>Registrei por <strong>observação visual segura</strong>, sem entrar em área de risco, APP ou local sem autorização.</> },
                { k: "semPii", t: <>Não incluí <strong>dados pessoais</strong> (nomes, documentos, placas, rostos) nem acusações individualizadas.</> },
                { k: "lgpd", t: <>Li e concordo com o <strong>aviso de privacidade (LGPD)</strong>.</> },
              ].map((g) => (
                <label key={g.k} className="flex items-start gap-2.5 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-4 accent-[var(--primary)]"
                    checked={gates[g.k as keyof typeof gates]}
                    onChange={(e) => setGates({ ...gates, [g.k]: e.target.checked })}
                  />
                  <span>{g.t}</span>
                </label>
              ))}
            </div>
          )}

          {p === 4 && (
            <div className="space-y-3 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" />
              <h2 className="text-lg font-semibold">Registro recebido!</h2>
              <p className="text-sm text-muted-foreground">Seu protocolo é</p>
              <p><code className="rounded bg-secondary px-2 py-1 text-base">{protocolo}</code></p>
              <QrCode className="mx-auto size-16 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Acompanhe pelo QR ou pelo protocolo, na aba Acompanhar.</p>
              <Button asChild><Link href="/acompanhar">Acompanhar este registro</Link></Button>
            </div>
          )}

          {p < 4 && (
            <div className="flex justify-between pt-2">
              <Button variant="outline" onClick={back} disabled={p === 0}>Voltar</Button>
              {p < 3 && <Button onClick={next} disabled={p === 0 && !subtipo}>Continuar</Button>}
              {p === 3 && <Button onClick={finalizar} disabled={!gatesOk}>Enviar registro</Button>}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
