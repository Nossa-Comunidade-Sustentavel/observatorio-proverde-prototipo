import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ClipboardList, Recycle, TreeDeciduous, RotateCcw, ShieldCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Badge variant="secondary" className="gap-1">
          <ShieldCheck className="size-3.5" /> Subsídio à fiscalização · controle social
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Os olhos da cidade no ambiente urbano</h1>
        <p className="max-w-3xl text-[15px] text-muted-foreground">
          Pontos de descarte irregular se reinstalam mais rápido do que a fiscalização consegue mapear, e o cuidado com a
          arborização carece de <strong>&ldquo;olhos distribuídos&rdquo;</strong> pela cidade. O Observatório transforma a observação do
          cidadão em <strong className="text-foreground">inteligência territorial</strong> — para a gestão saber <strong className="text-foreground">onde agir
          primeiro</strong>, e para o cidadão <strong className="text-foreground">ver o retorno</strong> do que registrou.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { icon: ClipboardList, t: "1 · Captação cidadã", d: "Registro digital georreferenciado de descarte irregular e de arborização urbana, com proteção de dados." },
          { icon: MapPin, t: "2 · Inteligência territorial", d: "Curadoria técnica + mapas de calor de reincidência: a SEMA recebe pontos priorizados, não registros crus." },
          { icon: RotateCcw, t: "3 · Retorno ao cidadão", d: "Devolutiva de status (closed-loop): o cidadão acompanha o que aconteceu com o seu registro." },
        ].map((c) => (
          <Card key={c.t}>
            <CardHeader>
              <c.icon className="size-6 text-primary" />
              <CardTitle className="text-base">{c.t}</CardTitle>
              <CardDescription>{c.d}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Recycle className="size-6 text-amber-700" />
            <CardTitle className="text-base">Descarte irregular de resíduos</CardTitle>
            <CardDescription>
              Pontos críticos viram hotspots reincidentes priorizados — separando o que é fiscalização do que é só rota de coleta.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <TreeDeciduous className="size-6 text-primary" />
            <CardTitle className="text-base">Arborização urbana (Lei 11.996/2013)</CardTitle>
            <CardDescription>
              Falhas de plantio, árvores em risco e déficit de cobertura — inventário participativo que abastece o Plano Diretor.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <p className="text-sm text-muted-foreground">
            O Observatório <strong className="text-foreground">não fiscaliza</strong>: ele{" "}
            <strong className="text-foreground">abastece e direciona quem fiscaliza</strong>, como subsídio de uso
            discricionário do órgão competente.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button asChild size="lg">
              <Link href="/registrar">Registrar uma ocorrência</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/mapa">Ver o mapa público</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
