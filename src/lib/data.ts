// DADOS 100% FICTÍCIOS — apenas ilustrativos do protótipo conceitual.
// "Jogo de Educação Ambiental" — ferramenta EDUCATIVA gamificada.
// Nenhuma informação real, nenhum dado pessoal, não coleta denúncias.

export type IconeKey =
  | "recycle" | "tree" | "hammer" | "sprout" | "trees" | "droplets" | "waves";

/* ============================ FASES DO JOGO (CARTILHA GAMIFICADA) ============================ */

export type QuizQ = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explica: string;
};

export type Modulo = {
  id: string;
  tema: string;
  icone: IconeKey;
  ancora?: boolean; // temas prioritários (resíduos + arborização)
  titulo: string;
  descricao: string;
  licoes: number;
  concluidas: number;
  xp: number;
  medalha: string;
  conceitos: string[];
  boasPraticas: string[];
  dicas: string[];
  quiz: QuizQ[];
};

export const modulos: Modulo[] = [
  {
    id: "residuos-urbanos", tema: "Resíduos urbanos", icone: "recycle", ancora: true,
    titulo: "Resíduos sólidos urbanos", descricao: "Coleta seletiva, redução e destino correto do lixo do dia a dia.",
    licoes: 6, concluidas: 4, xp: 120, medalha: "Guardião da Coleta",
    conceitos: [
      "Os 5 R: repensar, recusar, reduzir, reutilizar, reciclar.",
      "Cores da coleta seletiva (azul=papel, verde=vidro, vermelho=plástico, amarelo=metal, marrom=orgânico).",
      "O que não vai na coleta comum: volumosos, eletrônicos, pilhas e óleo.",
    ],
    boasPraticas: [
      "Leve volumosos e recicláveis aos ecopontos, nunca a terrenos baldios.",
      "Composte os orgânicos e reduza o lixo doméstico.",
    ],
    dicas: ["Óleo de cozinha usado vira sabão — guarde em garrafa PET."],
    quiz: [
      { pergunta: "Qual a cor da lixeira para plástico?", opcoes: ["Verde", "Vermelho", "Azul"], correta: 1, explica: "Vermelho = plástico; azul = papel; verde = vidro; amarelo = metal; marrom = orgânico." },
      { pergunta: "Onde descartar um sofá velho (volumoso)?", opcoes: ["Na esquina, junto ao lixo comum", "Em ecoponto/ponto de coleta de volumosos"], correta: 1, explica: "Volumosos têm coleta específica ou ecopontos — não vão no lixo comum nem em terrenos baldios." },
    ],
  },
  {
    id: "arborizacao", tema: "Arborização", icone: "tree", ancora: true,
    titulo: "Arborização urbana", descricao: "O papel das árvores na cidade e os cuidados que garantem a sobrevivência das mudas (Lei 11.996/2013).",
    licoes: 5, concluidas: 2, xp: 100, medalha: "Amigo das Árvores",
    conceitos: [
      "Benefícios: sombra, redução de temperatura, drenagem, fauna e bem-estar.",
      "A árvore certa no lugar certo: porte x fiação, calçada e recuo.",
      "Poda e supressão exigem autorização do órgão competente.",
    ],
    boasPraticas: [
      "Regue mudas novas nos primeiros meses — a sobrevivência depende disso.",
      "Nunca pregue, ancore ou pinte troncos.",
    ],
    dicas: ["Prefira espécies nativas adaptadas ao clima de Londrina."],
    quiz: [
      { pergunta: "Quem autoriza a poda de uma árvore em via pública?", opcoes: ["Qualquer morador", "O órgão ambiental competente"], correta: 1, explica: "A poda/supressão depende de autorização do órgão ambiental — o cidadão comunica e cuida." },
    ],
  },
  {
    id: "residuos-construcao", tema: "Resíduos da construção", icone: "hammer",
    titulo: "Resíduos da construção civil", descricao: "Entulho (RCC): como reduzir, reaproveitar e destinar sem virar ponto de descarte irregular.",
    licoes: 4, concluidas: 1, xp: 90, medalha: "Obra Consciente",
    conceitos: [
      "RCC é entulho de obra: concreto, tijolo, argamassa, madeira, gesso.",
      "Boa parte pode ser reaproveitada ou reciclada (agregado reciclado).",
      "Descarte em áreas de transbordo/ecopontos ou caçambas licenciadas.",
    ],
    boasPraticas: [
      "Contrate caçamba de empresa licenciada e exija a destinação correta.",
      "Separe madeira, metal e gesso do entulho inerte.",
    ],
    dicas: ["Entulho jogado em fundo de vale entope a drenagem e causa enchente."],
    quiz: [
      { pergunta: "Para onde vai o entulho de uma reforma?", opcoes: ["Terreno baldio mais próximo", "Ecoponto ou caçamba licenciada"], correta: 1, explica: "RCC deve ir a ecopontos ou caçambas licenciadas, com destinação comprovada." },
    ],
  },
  {
    id: "areas-permeaveis", tema: "Áreas permeáveis", icone: "sprout",
    titulo: "Áreas permeáveis nos lotes", descricao: "Deixar o solo respirar: quintais verdes, pisos drenantes e menos enchente.",
    licoes: 4, concluidas: 0, xp: 80, medalha: "Solo que Respira",
    conceitos: [
      "Área permeável deixa a água da chuva infiltrar no solo em vez de escorrer.",
      "Mais permeabilidade = menos enchente, mais recarga de água e menos calor.",
      "Pisos drenantes, jardins e canteiros aumentam a permeabilidade do lote.",
    ],
    boasPraticas: [
      "Evite impermeabilizar todo o quintal — mantenha faixas verdes.",
      "Use piso drenante ou intertravado em vez de concreto liso.",
    ],
    dicas: ["Um jardim de chuva no quintal reduz alagamento na rua."],
    quiz: [
      { pergunta: "Para que serve manter área permeável no lote?", opcoes: ["Deixar a chuva infiltrar e reduzir enchente", "Só enfeitar o quintal"], correta: 0, explica: "A permeabilidade infiltra a água, recarrega o lençol e reduz enchentes e ilhas de calor." },
    ],
  },
  {
    id: "fundo-vale", tema: "Fundo de vale", icone: "trees",
    titulo: "Fundo de vale & mata ciliar", descricao: "A vegetação que protege córregos e nascentes — e por que preservar.",
    licoes: 4, concluidas: 0, xp: 80, medalha: "Guardião do Córrego",
    conceitos: [
      "Mata ciliar é a vegetação às margens de rios e córregos.",
      "Ela segura o solo, filtra a água e evita assoreamento e erosão.",
      "Fundos de vale são áreas de proteção — não são lugar de lixo nem de ocupação.",
    ],
    boasPraticas: [
      "Não descarte lixo, entulho ou esgoto em fundos de vale.",
      "Apoie o plantio de mudas nativas nas margens.",
    ],
    dicas: ["Córrego limpo começa com a mata ciliar preservada."],
    quiz: [
      { pergunta: "Qual a função da mata ciliar?", opcoes: ["Proteger as margens e filtrar a água dos córregos", "Atrapalhar a passagem da água"], correta: 0, explica: "A mata ciliar protege as margens, filtra a água e evita o assoreamento." },
    ],
  },
  {
    id: "esgoto", tema: "Esgoto sanitário", icone: "droplets",
    titulo: "Esgoto sanitário", descricao: "Ligações corretas, o que não jogar na pia/vaso e por que isso protege os rios.",
    licoes: 3, concluidas: 0, xp: 70, medalha: "Ciclo da Água",
    conceitos: [
      "O esgoto tem de ir para a rede coletora — nunca para a galeria de chuva ou o córrego.",
      "Ligações irregulares poluem rios e nascentes.",
      "Óleo, fio dental, fralda e lenço entopem a rede e as bombas.",
    ],
    boasPraticas: [
      "Conecte o esgoto à rede coletora; não ligue no sistema de águas pluviais.",
      "Jogue no lixo o que não é esgoto (óleo, absorventes, lenços).",
    ],
    dicas: ["Água de chuva vai para a galeria; esgoto vai para a rede de coleta — não misture."],
    quiz: [
      { pergunta: "Onde deve ser ligado o esgoto de uma casa?", opcoes: ["Na rede coletora de esgoto", "Na galeria de águas pluviais / no córrego"], correta: 0, explica: "Esgoto vai à rede coletora; ligar na drenagem pluvial polui rios e nascentes." },
    ],
  },
  {
    id: "recursos-hidricos", tema: "Recursos hídricos", icone: "waves",
    titulo: "Recursos hídricos", descricao: "Nascentes, rios e lagos: uso consciente e proteção da água que a cidade bebe.",
    licoes: 3, concluidas: 0, xp: 70, medalha: "Amigo das Águas",
    conceitos: [
      "Nascentes, rios e lagos abastecem a cidade e sustentam a vida.",
      "Poluição e desperdício ameaçam a segurança hídrica.",
      "Proteger a mata ciliar e evitar poluição preserva a água.",
    ],
    boasPraticas: [
      "Economize água e conserte vazamentos.",
      "Não descarte óleo, lixo ou produtos químicos em ralos e córregos.",
    ],
    dicas: ["Cada nascente protegida é água limpa para o futuro."],
    quiz: [
      { pergunta: "O que ajuda a proteger uma nascente?", opcoes: ["Preservar a vegetação ao redor", "Impermeabilizar e ocupar o entorno"], correta: 0, explica: "A vegetação no entorno protege a nascente e mantém a água limpa e perene." },
    ],
  },
];

/* ============================ MISSÕES EDUCATIVAS ============================ */

export type Missao = {
  id: string; titulo: string; descricao: string; pontos: number; tema: string;
  icone: IconeKey; status: "disponivel" | "em_andamento" | "concluida";
};

export const missoes: Missao[] = [
  { id: "m1", titulo: "Detetive da coleta seletiva", descricao: "Separe 5 tipos de resíduo e acerte o quiz relâmpago.", pontos: 50, tema: "Resíduos urbanos", icone: "recycle", status: "concluida" },
  { id: "m2", titulo: "Adote uma muda", descricao: "Aprenda os cuidados de plantio e acompanhe uma muda por 30 dias.", pontos: 80, tema: "Arborização", icone: "tree", status: "em_andamento" },
  { id: "m3", titulo: "Caça ao ecoponto", descricao: "Descubra onde levar entulho e volumosos no seu bairro.", pontos: 40, tema: "Resíduos da construção", icone: "hammer", status: "em_andamento" },
  { id: "m4", titulo: "Quintal que respira", descricao: "Identifique áreas permeáveis e proponha uma melhoria no seu lote.", pontos: 60, tema: "Áreas permeáveis", icone: "sprout", status: "disponivel" },
  { id: "m5", titulo: "Guardião do córrego", descricao: "Conheça um fundo de vale do bairro e sua mata ciliar.", pontos: 70, tema: "Fundo de vale", icone: "trees", status: "disponivel" },
  { id: "m6", titulo: "Ligação certa", descricao: "Aprenda a diferença entre esgoto e água de chuva.", pontos: 50, tema: "Esgoto sanitário", icone: "droplets", status: "disponivel" },
  { id: "m7", titulo: "Cada gota conta", descricao: "Faça o diagnóstico de consumo de água da sua casa.", pontos: 60, tema: "Recursos hídricos", icone: "waves", status: "disponivel" },
  { id: "m8", titulo: "Presença na oficina", descricao: "Participe de uma oficina no seu polo e ganhe a medalha do encontro.", pontos: 90, tema: "Todos", icone: "sprout", status: "disponivel" },
];

/* ============================ PERFIL / CONQUISTAS ============================ */

export type Medalha = { id: string; nome: string; descricao: string; conquistada: boolean };

export const medalhas: Medalha[] = [
  { id: "d1", nome: "Guardião da Coleta", descricao: "Concluiu a fase de resíduos sólidos urbanos.", conquistada: true },
  { id: "d2", nome: "Amigo das Árvores", descricao: "Concluiu a fase de arborização urbana.", conquistada: false },
  { id: "d3", nome: "Obra Consciente", descricao: "Concluiu a fase de resíduos da construção.", conquistada: false },
  { id: "d4", nome: "Solo que Respira", descricao: "Concluiu a fase de áreas permeáveis.", conquistada: false },
  { id: "d5", nome: "Guardião do Córrego", descricao: "Concluiu a fase de fundo de vale e mata ciliar.", conquistada: false },
  { id: "d6", nome: "Ciclo da Água", descricao: "Concluiu a fase de esgoto sanitário.", conquistada: false },
  { id: "d7", nome: "Amigo das Águas", descricao: "Concluiu a fase de recursos hídricos.", conquistada: false },
  { id: "d8", nome: "Presença de Ouro", descricao: "Participou de 3 oficinas no polo.", conquistada: true },
];

export const perfil = {
  nome: "Monitor(a) exemplo", polo: "Vila Nova", titulo: "Guardião Verde nível 4",
  nivel: 4, xp: 640, xpProximo: 800, missoesConcluidas: 1, fasesConcluidas: 1,
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
  participantes: 82, oficinas: 11, fasesConcluidas: 214, medalhas: 386, alcanceEscolar: 5, taxaConclusao: 0.78,
};

export const serieEngajamento = [
  { ciclo: "C1", valor: 24 }, { ciclo: "C2", valor: 41 }, { ciclo: "C3", valor: 58 },
  { ciclo: "C4", valor: 73 }, { ciclo: "C5", valor: 69 }, { ciclo: "C6", valor: 88 },
];

/* ============================ OFICINAS (PROGRAMA) ============================ */

export type Oficina = { titulo: string; tema: string; icone: IconeKey; formato: string; carga: string; publico: string };

export const oficinas: Oficina[] = [
  { titulo: "Separar para transformar", tema: "Resíduos urbanos", icone: "recycle", formato: "Oficina prática", carga: "2h", publico: "Comunidade e escolas" },
  { titulo: "Plantar e cuidar", tema: "Arborização", icone: "tree", formato: "Oficina + campo", carga: "3h", publico: "Comunidade e escolas" },
  { titulo: "Quintal que respira", tema: "Áreas permeáveis", icone: "sprout", formato: "Oficina mão na massa", carga: "2h", publico: "Famílias" },
  { titulo: "Nosso córrego, nossa água", tema: "Fundo de vale", icone: "trees", formato: "Roda + campo", carga: "2h30", publico: "Comunidade" },
  { titulo: "Água e esgoto no bairro", tema: "Esgoto sanitário", icone: "droplets", formato: "Roda de conversa", carga: "1h30", publico: "Comunidade" },
  { titulo: "Devolutiva do ciclo", tema: "Todos", icone: "waves", formato: "Encontro de resultados", carga: "1h", publico: "Todos os polos" },
];
