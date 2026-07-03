import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { perfil, medalhas, ranking } from "@/lib/data";
import { Medal, Lock, Trophy, Star, BookOpen, Target } from "lucide-react";

export default function Page() {
  const pct = Math.round((perfil.xp / perfil.xpProximo) * 100);
  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Conquistas &amp; ranking</h1>
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">Dados simulados</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Seu progresso, suas medalhas e o ranking amistoso entre polos e turmas.</p>
      </header>

      {/* Perfil / nível */}
      <Card>
        <CardContent className="grid gap-4 pt-6 sm:grid-cols-[1fr_auto]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
                <Star className="size-6" />
              </span>
              <div>
                <div className="font-semibold">{perfil.titulo}</div>
                <div className="text-xs text-muted-foreground">Polo {perfil.polo}</div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Nível {perfil.nivel} · {perfil.xp} XP</span>
                <span>faltam {perfil.xpProximo - perfil.xp} XP p/ o nível {perfil.nivel + 1}</span>
              </div>
              <Progress value={pct} />
            </div>
          </div>
          <div className="flex gap-4 sm:flex-col sm:justify-center">
            <div className="text-center"><div className="inline-flex items-center gap-1 text-xl font-extrabold text-primary"><Target className="size-4" />{perfil.missoesConcluidas}</div><div className="text-[11px] text-muted-foreground">missões</div></div>
            <div className="text-center"><div className="inline-flex items-center gap-1 text-xl font-extrabold text-primary"><BookOpen className="size-4" />{perfil.fasesConcluidas}</div><div className="text-[11px] text-muted-foreground">fases</div></div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Medalhas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Medalhas</CardTitle>
            <CardDescription>Conquiste concluindo trilhas, missões e oficinas.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {medalhas.map((d) => (
              <div
                key={d.id}
                className={`flex flex-col items-center gap-1 rounded-lg border p-3 text-center ${d.conquistada ? "border-primary/30 bg-primary/5" : "opacity-60"}`}
                title={d.descricao}
              >
                <span className={`grid size-10 place-items-center rounded-full ${d.conquistada ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {d.conquistada ? <Medal className="size-5" /> : <Lock className="size-5" />}
                </span>
                <span className="text-[11px] font-medium leading-tight">{d.nome}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ranking */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ranking amistoso</CardTitle>
            <CardDescription>Entre turmas, grupos e polos — colaboração, não competição.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {ranking.map((j) => (
              <div
                key={j.pos}
                className={`flex items-center gap-3 rounded-md border p-2 ${j.voce ? "border-primary/40 bg-primary/5" : ""}`}
              >
                <span className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${j.pos <= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {j.pos}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">
                    {j.nome} {j.voce && <span className="text-primary">(você)</span>}
                  </div>
                  <div className="text-[11px] text-muted-foreground">Polo {j.polo}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary">Nv {j.nivel}</div>
                  <div className="text-[11px] text-muted-foreground">{j.xp} XP</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Trophy className="size-3.5" /> Ranking e medalhas são ilustrativos, sem premiação em dinheiro — o foco é o
        aprendizado e o engajamento.
      </p>
    </div>
  );
}
