import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, Layers } from "lucide-react";
import { registros, ESTADOS } from "@/lib/data";

const sevVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  alta: "destructive",
  media: "outline",
  baixa: "secondary",
};

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-primary">Curadoria · máquina de estados</h1>
        <p className="text-sm text-muted-foreground">
          Back-office (acesso restrito). Cada registro percorre uma máquina de estados antes de virar subsídio — com taxonomia
          técnico-informacional, nunca &ldquo;procedente/infração&rdquo;.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Alert>
          <ShieldAlert className="size-4" />
          <AlertTitle>Curadoria-muralha</AlertTitle>
          <AlertDescription>
            O status <strong>&ldquo;sensível&rdquo;</strong> (foto com pessoa/placa ou acusação individualizada) <strong>bloqueia o
            encaminhamento</strong> — é anonimizado ou descartado. Nada cru chega ao órgão.
          </AlertDescription>
        </Alert>
        <Alert>
          <Layers className="size-4" />
          <AlertTitle>Deduplicação → hotspot</AlertTitle>
          <AlertDescription>
            Registros próximos no espaço-tempo são agregados: <strong>14 registros</strong> viram <strong>1 ponto crítico
            reincidente</strong>. A SEMA recebe pontos priorizados, não duplicatas.
          </AlertDescription>
        </Alert>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Fila de curadoria</CardTitle>
          <CardDescription>Dados ilustrativos.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="py-2 pr-3 font-medium">Protocolo</th>
                <th className="py-2 pr-3 font-medium">Tema</th>
                <th className="py-2 pr-3 font-medium">Tipo</th>
                <th className="py-2 pr-3 font-medium">Gravidade</th>
                <th className="py-2 pr-3 font-medium">Bairro</th>
                <th className="py-2 pr-3 font-medium">Recorr.</th>
                <th className="py-2 pr-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((r) => (
                <tr key={r.protocolo} className="border-b last:border-0">
                  <td className="py-2 pr-3 font-mono text-xs">{r.protocolo}</td>
                  <td className="py-2 pr-3">
                    <Badge variant={r.tema === "Resíduos" ? "outline" : "secondary"}>{r.tema}</Badge>
                  </td>
                  <td className="py-2 pr-3 text-muted-foreground">{r.subtipo}</td>
                  <td className="py-2 pr-3">
                    <Badge variant={sevVariant[r.severidade]}>{r.severidade}</Badge>
                  </td>
                  <td className="py-2 pr-3 text-muted-foreground">{r.bairro}</td>
                  <td className="py-2 pr-3 text-muted-foreground">{r.recorrencia}×</td>
                  <td className="py-2 pr-3">
                    <Badge variant={ESTADOS[r.estado].variant}>{ESTADOS[r.estado].label}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
