# Observatório Comunitário PROVERDE — Protótipo conceitual

**Material ilustrativo da proposta da NCS — Nossa Comunidade Sustentável ao Edital de Chamamento Público PROVERDE nº 001/2026** (SEMA Londrina, área *Monitoramento Ambiental e/ou Novas Tecnologias*).

> ⚠️ **Protótipo conceitual com dados 100% fictícios.** Não é o sistema em produção, não contém dados reais nem dados pessoais. Serve apenas para dar "cara" à proposta — ilustrar o fluxo do Observatório. A construção do sistema financiado é etapa posterior, contratada de forma independente.

## O que ilustra

Uma infraestrutura cidadã de **subsídio à fiscalização** (a OSC *abastece e direciona quem fiscaliza; não fiscaliza*), com foco em **descarte irregular de resíduos** e **arborização urbana** (Lei 11.996/2013):

| Tela | O que mostra |
|---|---|
| **Início** | Problema público → solução → valor (inteligência territorial + retorno ao cidadão) |
| **Registrar** | Canal cidadão georreferenciado, com *gates* anti-PII e LGPD, gera protocolo |
| **Acompanhar** | Closed-loop: status público por protocolo (termina em "encaminhado ao órgão") |
| **Mapa público** | Mapa de calor / hotspots priorizados — o subsídio à fiscalização para a SEMA |
| **Curadoria** | Máquina de estados (curadoria-muralha + deduplicação) |
| **Indicadores** | Metas SMART + dados abertos (CSV/GeoJSON + dicionário) |

## Stack

Next.js 16 (App Router, RSC) · React 19 · TypeScript · Tailwind v4 · shadcn/ui (`radix-nova`) · lucide-react · Leaflet (mapa de calor, OpenStreetMap).

## Rodar localmente

```bash
pnpm install
pnpm dev          # http://localhost:3000
# build de produção:
pnpm build && pnpm start
```

## Governança

Repositório destinado a ser transferido para a **organização GitHub da NCS** (a OSC passa a ser dona — não um terceiro). Código aberto (licença MIT) como bem público / legado, reforçando independência de fornecedor.

Sem marca ou menção de terceiros: a identidade é **Prefeitura de Londrina / SEMA / CONSEMMA / PROVERDE**, com a inscrição "Projeto executado com recursos do Fundo Municipal do Meio Ambiente".
