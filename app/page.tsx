import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Trophy, GraduationCap, Info, Star } from "lucide-react";
import { modulos } from "@/lib/data";
import { ICONES } from "@/lib/icons";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Badge variant="secondary" className="gap-1">
          <GraduationCap className="size-3.5" /> Jogo de Educação Ambiental · lúdico e gamificado
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Aprender, jogar e transformar o bairro</h1>
        <p className="max-w-3xl text-[15px] text-muted-foreground">
          Um <strong className="text-foreground">Jogo de Educação Ambiental</strong> para conscientizar a população
          sobre os <strong>problemas ambientais urbanos</strong> e como resolvê-los — gerando qualidade ambiental e de
          vida para a comunidade. Para escolas e comunidade, com fases, missões, oficinas, pontos e medalhas.{" "}
          <strong className="text-foreground">Quem aprende brincando, cuida melhor da cidade.</strong>
        </p>
      </section>

      {/* 3 pilares */}
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { icon: BookOpen, t: "1 · Aprender", d: "Cada fase traz conceitos, boas práticas e um quiz sobre o que fazer no dia a dia." },
          { icon: Target, t: "2 · Jogar", d: "Missões práticas e pontos: aprender fazendo, no bairro e na escola — sem denunciar." },
          { icon: Trophy, t: "3 · Transformar", d: "Medalhas, níveis e ranking amistoso entre polos e turmas: engajamento que muda hábito." },
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

      {/* 7 temas do jogo */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-primary">Os 7 temas do jogo</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modulos.map((m) => {
            const Icone = ICONES[m.icone];
            return (
              <div key={m.id} className="flex items-center gap-2.5 rounded-lg border p-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icone className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{m.tema}</div>
                  {m.ancora && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-primary">
                      <Star className="size-2.5" /> prioritário
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          Resíduos e arborização são as fases prioritárias, ligadas às oficinas e aos polos; os demais temas ampliam o
          conteúdo educativo do jogo.
        </p>
      </section>

      {/* Complementaridade + CTA */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-start gap-2 rounded-md bg-muted p-3 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Não é um canal de denúncia.</strong> Solicitações e reclamações
              seguem pelos <strong>canais oficiais do Município</strong> (ex.: Londrina&nbsp;ON / 156). Aqui a gente{" "}
              <strong className="text-foreground">forma, engaja e previne</strong> — a camada educativa que complementa
              os serviços da cidade.
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button asChild size="lg">
              <Link href="/trilhas">Jogar agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/conquistas">Ver minhas conquistas</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
