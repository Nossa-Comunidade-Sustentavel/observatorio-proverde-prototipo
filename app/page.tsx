import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Trophy, Recycle, TreeDeciduous, GraduationCap, Info } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Badge variant="secondary" className="gap-1">
          <GraduationCap className="size-3.5" /> Educação ambiental · lúdica e gamificada
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Aprender, jogar e transformar o bairro</h1>
        <p className="max-w-3xl text-[15px] text-muted-foreground">
          Um programa de <strong className="text-foreground">educação ambiental</strong> para a comunidade e as escolas,
          que transforma a cartilha em <strong className="text-foreground">trilhas gamificadas</strong>, missões e
          oficinas — com foco em <strong>resíduos</strong> e <strong>arborização urbana</strong>. A ideia é simples:{" "}
          <strong className="text-foreground">quem aprende brincando, cuida melhor da cidade</strong>.
        </p>
      </section>

      {/* 3 pilares */}
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { icon: BookOpen, t: "1 · Aprender", d: "A cartilha vira trilhas: conceitos, boas práticas e quizzes sobre o que fazer no dia a dia." },
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

      {/* 2 dores */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Recycle className="size-6 text-amber-700" />
            <CardTitle className="text-base">Resíduos & coleta seletiva</CardTitle>
            <CardDescription>
              Separar certo, evitar o descarte irregular, compostar e consumir com consciência.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <TreeDeciduous className="size-6 text-primary" />
            <CardTitle className="text-base">Arborização urbana (Lei 11.996/2013)</CardTitle>
            <CardDescription>
              O valor das árvores, a árvore certa no lugar certo e os cuidados que garantem a sobrevivência das mudas.
            </CardDescription>
          </CardHeader>
        </Card>
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
              <Link href="/trilhas">Começar as trilhas</Link>
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
