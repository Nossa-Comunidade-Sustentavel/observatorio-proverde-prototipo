"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trees, MapPin, ClipboardList, Search, ListChecks, BarChart3, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Início", icon: Trees, exact: true },
  { href: "/registrar", label: "Registrar", icon: ClipboardList },
  { href: "/acompanhar", label: "Acompanhar", icon: Search },
  { href: "/mapa", label: "Mapa público", icon: MapPin },
  { href: "/curadoria", label: "Curadoria", icon: ListChecks },
  { href: "/indicadores", label: "Indicadores", icon: BarChart3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-center gap-2 bg-amber-300 px-4 py-1.5 text-center text-[12px] font-medium text-amber-950">
        <ShieldAlert className="size-4 shrink-0" />
        <span>Protótipo conceitual com dados fictícios · sem vínculo oficial · NÃO é canal de denúncia · não há coleta real de dados.</span>
      </div>
      <header className="sticky top-0 z-20 border-b border-black/10 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-primary-foreground/15">
              <Trees className="size-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Observatório Comunitário PROVERDE</div>
              <div className="text-[11px] opacity-80">Protótipo conceitual · proposta da NCS — Nossa Comunidade Sustentável</div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-1">
            {tabs.map((t) => {
              const active = t.exact ? path === t.href : path.startsWith(t.href);
              const Icon = t.icon;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors",
                    active
                      ? "bg-background font-semibold text-primary"
                      : "text-primary-foreground/85 hover:bg-primary-foreground/10",
                  )}
                >
                  <Icon className="size-3.5" />
                  {t.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>

      <footer className="border-t border-black/10 bg-[#11261a] text-[#cfe3d6]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-2.5 text-xs">
          <Badge className="bg-amber-300 text-amber-950 hover:bg-amber-300">
            PROTÓTIPO CONCEITUAL · dados ilustrativos
          </Badge>
          <span className="opacity-85">
            Material ilustrativo da proposta da NCS · Sem vínculo ou chancela oficial. Referência institucional do edital: Prefeitura de Londrina · SEMA · CONSEMMA · PROVERDE.
          </span>
        </div>
      </footer>
    </div>
  );
}
