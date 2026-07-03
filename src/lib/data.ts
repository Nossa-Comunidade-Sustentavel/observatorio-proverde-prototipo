// DADOS 100% FICTÍCIOS — apenas ilustrativos do protótipo conceitual.
// Ferramenta EDUCATIVA gamificada. Nenhuma informação real, nenhum dado pessoal, não coleta denúncias.

export type Tema = "Resíduos" | "Arborização" | "Transversal";

/* ============================ TRILHAS / CARTILHA GAMIFICADA ============================ */

export type QuizQ = {
  pergunta: string;
  opcoes: string[];
  correta: number; // índice da opção correta
  explica: string;
};

export type Modulo = {
  id: string;
  tema: Tema;
  titulo: string;
  descricao: string;
  licoes: number;
  concluidas: number;
  xp: number; // XP ao concluir
  medalha: string;
  conceitos: string[];
  boasPraticas: string[];
  dicas: string[];
  quiz: QuizQ[];
};

export const modulos: Modulo[] = [
  {
    id: "residuos",
    tema: "Resíduos",
    titulo: "Resíduos & coleta seletiva",
    descricao: "Aprenda a separar corretamente e a evitar o descarte irregular no seu bairro.",
    licoes: 6,
    concluidas: 4,
    xp: 120,
    medalha: "Guardião da Coleta",
    conceitos: [
      "Os 5 R: repensar, recusar, reduzir, reutilizar, reciclar.",
      "Cores da coleta seletiva (azul=papel, verde=vidro, vermelho=plástico, amarelo=metal, marrom=orgânico).",
      "O que NÃO vai na coleta comum: entulho, volumosos, eletrônicos, pilhas, óleo.",
    ],
    boasPraticas: [
      "Leve entulho e volumosos aos ecopontos, nunca a terrenos baldios.",
      "Reduza o lixo doméstico começando pela compostagem de orgânicos.",
      "Descarte pilhas, lâmpadas e eletrônicos em pontos de logística reversa.",
    ],
    dicas: [
      "Um ponto de descarte irregular limpo e sinalizado tende a não voltar.",
      "Óleo de cozinha usado vira sabão — guarde em garrafa PET.",
    ],
    quiz: [
      {
        pergunta: "Onde descartar corretamente entulho de uma pequena reforma?",
        opcoes: ["Em terreno baldio próximo", "Em um ecoponto ou caçamba licenciada", "Na coleta comum, ensacado"],
        correta: 1,
        explica: "Entulho (RCC) é resíduo da construção civil e deve ir a ecopontos ou caçambas licenciadas — nunca a terrenos baldios.",
      },
      {
        pergunta: "Qual a cor da lixeira para plástico na coleta seletiva?",
        opcoes: ["Verde", "Vermelho", "Azul"],
        correta: 1,
        explica: "Vermelho = plástico. Azul = papel, verde = vidro, amarelo = metal, marrom = orgânico.",
      },
    ],
  },
  {
    id: "arborizacao",
    tema: "Arborização",
    titulo: "Arborização urbana",
    descricao: "Entenda o papel das árvores na cidade e como cuidar da arborização do seu território (Lei 11.996/2013).",
    licoes: 5,
    concluidas: 2,
    xp: 100,
    medalha: "Amigo das Árvores",
    conceitos: [
      "Benefícios: sombra, redução de temperatura, drenagem, fauna e bem-estar.",
      "A árvore certa no lugar certo: porte x fiação, calçada e recuo.",
      "Cuidados legais: poda e supressão exigem autorização do órgão competente.",
    ],
    boasPraticas: [
      "Regue mudas novas nos primeiros meses — a sobrevivência depende disso.",
      "Nunca pregue, ancore ou pinte troncos.",
      "Comunique falhas de plantio e árvores em risco pelos canais oficiais.",
    ],
    dicas: [
      "Cada muda que sobrevive é sombra por décadas.",
      "Prefira espécies nativas adaptadas ao clima de Londrina.",
    ],
    quiz: [
      {
        pergunta: "Quem pode autorizar a poda ou supressão de uma árvore em via pública?",
        opcoes: ["Qualquer morador", "O órgão ambiental competente", "A empresa de energia, sempre"],
        correta: 1,
        explica: "Poda e supressão dependem de autorização do órgão ambiental competente — o cidadão apenas comunica e cuida.",
      },
      {
        pergunta: "O que mais influencia a sobrevivência de uma muda recém-plantada?",
        opcoes: ["A cor das folhas", "A rega nos primeiros meses", "O tamanho do vaso original"],
        correta: 1,
        explica: "A rega e os cuidados iniciais são decisivos para a muda pegar.",
      },
    ],
  },
  {
    id: "compostagem",
    tema: "Transversal",
    titulo: "Compostagem & consumo consciente",
    descricao: "Transforme resíduos orgânicos em adubo e repense o consumo do dia a dia.",
    licoes: 4,
    concluidas: 1,
    xp: 80,
    medalha: "Mestre da Composteira",
    conceitos: [
      "Metade do lixo doméstico é orgânico e pode virar adubo.",
      "Composteira doméstica: camadas de úmido (restos) e seco (folhas/papelão).",
      "Consumo consciente: menos descartáveis, mais durabilidade.",
    ],
    boasPraticas: [
      "Evite carnes e laticínios na composteira doméstica.",
      "Use sacola retornável e recuse descartáveis desnecessários.",
    ],
    dicas: ["Composto pronto vira adubo para hortas e para o plantio de árvores."],
    quiz: [
      {
        pergunta: "Qual resíduo NÃO deve ir na composteira doméstica comum?",
        opcoes: ["Casca de frutas", "Restos de carne", "Borra de café"],
        correta: 1,
        explica: "Carnes e laticínios atraem vetores e dificultam o processo na composteira doméstica.",
      },
    ],
  },
  {
    id: "cidadania",
    tema: "Transversal",
    titulo: "Cidadania & território",
    descricao: "Conheça seu bairro, os canais oficiais e como agir de forma segura e colaborativa.",
    licoes: 4,
    concluidas: 0,
    xp: 80,
    medalha: "Cidadão Ativo",
    conceitos: [
      "Canais oficiais do Município (ex.: Londrina ON / 156) para solicitações e serviços.",
      "Educação ambiental como prevenção: mudar hábito custa menos que remediar.",
      "Observação segura: aprender e cuidar, sem intervir em áreas de risco.",
    ],
    boasPraticas: [
      "Use os canais oficiais para pedir coleta, poda ou reparo.",
      "Multiplique o que aprendeu: leve a cartilha para casa e para a escola.",
    ],
    dicas: ["Comunidade informada é comunidade que previne."],
    quiz: [
      {
        pergunta: "Este app é um canal de denúncia?",
        opcoes: ["Sim, substitui os canais oficiais", "Não — é uma ferramenta educativa; os pedidos vão aos canais oficiais"],
        correta: 1,
        explica: "O projeto é EDUCATIVO e complementar. Solicitações e denúncias seguem pelos canais oficiais do Município (ex.: Londrina ON / 156).",
      },
    ],
  },
];

/* ============================ MISSÕES EDUCATIVAS ============================ */

export type Missao = {
  id: string;
  titulo: string;
  descricao: string;
  pontos: number;
  tema: Tema;
  status: "disponivel" | "em_andamento" | "concluida";
};

export const missoes: Missao[] = [
  { id: "m1", titulo: "Detetive da coleta seletiva", descricao: "Aprenda a separar 5 tipos de resíduo e acerte o quiz relâmpago.", pontos: 50, tema: "Resíduos", status: "concluida" },
  { id: "m2", titulo: "Caça ao ecoponto", descricao: "Descubra onde ficam os ecopontos e o que cada um recebe.", pontos: 40, tema: "Resíduos", status: "em_andamento" },
  { id: "m3", titulo: "Adote uma muda", descricao: "Aprenda os cuidados de plantio e acompanhe uma muda por 30 dias.", pontos: 80, tema: "Arborização", status: "em_andamento" },
  { id: "m4", titulo: "Mapa afetivo do bairro", descricao: "Identifique árvores e áreas verdes que você gosta no seu território.", pontos: 60, tema: "Arborização", status: "disponivel" },
  { id: "m5", titulo: "Composteira em casa", descricao: "Monte uma composteira simples e registre a primeira camada.", pontos: 70, tema: "Transversal", status: "disponivel" },
  { id: "m6", titulo: "Presença na oficina", descricao: "Participe de uma oficina no seu polo e ganhe a medalha do encontro.", pontos: 90, tema: "Transversal", status: "disponivel" },
];

/* ============================ PERFIL / CONQUISTAS ============================ */

export type Medalha = { id: string; nome: string; descricao: string; conquistada: boolean };

export const medalhas: Medalha[] = [
  { id: "d1", nome: "Guardião da Coleta", descricao: "Concluiu a trilha de resíduos & coleta seletiva.", conquistada: true },
  { id: "d2", nome: "Amigo das Árvores", descricao: "Concluiu a trilha de arborização urbana.", conquistada: false },
  { id: "d3", nome: "Mestre da Composteira", descricao: "Montou uma composteira e concluiu a trilha.", conquistada: false },
  { id: "d4", nome: "Cidadão Ativo", descricao: "Concluiu a trilha de cidadania & território.", conquistada: false },
  { id: "d5", nome: "Presença de Ouro", descricao: "Participou de 3 oficinas no polo.", conquistada: true },
  { id: "d6", nome: "Multiplicador", descricao: "Levou a cartilha para a escola ou para casa.", conquistada: false },
];

export const perfil = {
  nome: "Monitor(a) exemplo",
  polo: "Vila Nova",
  titulo: "Guardião Verde nível 4",
  nivel: 4,
  xp: 640,
  xpProximo: 800,
  missoesConcluidas: 1,
  trilhasConcluidas: 1,
};

export type Jogador = { pos: number; nome: string; nivel: number; xp: number; polo: string; voce?: boolean };

export const ranking: Jogador[] = [
  { pos: 1, nome: "Turma 7ºB — E.M. do Ernani", nivel: 6, xp: 1180, polo: "Igreja Batista" },
  { pos: 2, nome: "Grupo Sementes", nivel: 5, xp: 940, polo: "CJV" },
  { pos: 3, nome: "Monitor(a) exemplo", nivel: 4, xp: 640, polo: "Vila Nova", voce: true },
  { pos: 4, nome: "Coletivo Verde Vila Nova", nivel: 4, xp: 610, polo: "Vila Nova" },
  { pos: 5, nome: "Família Andrade", nivel: 3, xp: 480, polo: "CJV" },
  { pos: 6, nome: "Turma 5ºA", nivel: 3, xp: 420, polo: "Igreja Batista" },
];

/* ============================ INDICADORES EDUCATIVOS ============================ */

export const indicadoresEdu = {
  participantes: 82, // formados/ativos (referência ilustrativa)
  oficinas: 11,
  trilhasConcluidas: 214,
  medalhas: 386,
  alcanceEscolar: 5, // turmas/escolas
  taxaConclusao: 0.78,
};

export const serieEngajamento = [
  { ciclo: "C1", valor: 24 },
  { ciclo: "C2", valor: 41 },
  { ciclo: "C3", valor: 58 },
  { ciclo: "C4", valor: 73 },
  { ciclo: "C5", valor: 69 },
  { ciclo: "C6", valor: 88 },
];

/* ============================ OFICINAS (PROGRAMA) ============================ */

export type Oficina = { titulo: string; tema: Tema; formato: string; carga: string; publico: string };

export const oficinas: Oficina[] = [
  { titulo: "Separar para transformar", tema: "Resíduos", formato: "Oficina prática", carga: "2h", publico: "Comunidade e escolas" },
  { titulo: "Composteira do zero", tema: "Transversal", formato: "Oficina mão na massa", carga: "2h30", publico: "Famílias" },
  { titulo: "Plantar e cuidar", tema: "Arborização", formato: "Oficina + campo", carga: "3h", publico: "Comunidade e escolas" },
  { titulo: "Meu bairro, minha responsa", tema: "Transversal", formato: "Roda de conversa", carga: "1h30", publico: "Comunidade" },
  { titulo: "Devolutiva do ciclo", tema: "Transversal", formato: "Encontro de resultados", carga: "1h", publico: "Todos os polos" },
];
