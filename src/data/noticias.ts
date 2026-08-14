export interface NoticiaVideo {
  src: string;
  poster: string;
  /** Miniatura leve para o ticker; cai no poster quando ausente. */
  thumb?: string;
  titulo: string;
}

export interface NoticiaImagem {
  src: string;
  alt: string;
  /** Miniatura leve para o ticker; usa o src quando ausente. */
  thumb?: string;
}

export interface NoticiaLink {
  href: string;
  label: string;
}

export interface Noticia {
  /** Slug estável usado no link direto (#/noticia/<id>) e nas âncoras da página. */
  id: string;
  dia: string;
  mes: string;
  ano: string;
  titulo: string;
  /** Versão curta usada no ticker de últimas notícias */
  curto?: string;
  texto: string;
  meta: string;
  badge: { label: string; cls: string };
  imagem?: NoticiaImagem;
  videos?: NoticiaVideo[];
  /** Fontes da matéria (post oficial, matéria de agência). Renderizadas em linha. */
  links?: NoticiaLink[];
}

export const noticias: Noticia[] = [
  {
    id: 'estiagem-planejamento-preventivo-marinha',
    dia: '14', mes: 'AGO', ano: '2026',
    titulo: 'Prefeitura antecipa o planejamento da estiagem em reunião com a Marinha do Brasil, em Tabatinga',
    curto: 'Defesa Civil, SEMEE e comerciantes planejam com a Marinha a resposta à vazante',
    texto: 'A Prefeitura de Benjamin Constant intensificou nesta sexta-feira (14) o planejamento preventivo para reduzir os impactos da estiagem. Representantes das secretarias municipais de Proteção e Defesa Civil e de Empreendedorismo e Emprego, acompanhados da Associação dos Comerciantes, reuniram-se com a Marinha do Brasil em Tabatinga, recebidos pelo comandante, capitão de fragata Eduardo Guimarães de Held. Na pauta, os possíveis efeitos da vazante sobre a navegação, a logística, o abastecimento e o comércio local — quando o rio baixa, é essa base que sustenta o dia a dia do Alto Solimões que entra em risco. Entre as alternativas discutidas está a implantação de um porto intermediário durante o período crítico, com o objetivo de reduzir custos logísticos, atender aos empreendedores e evitar o aumento excessivo dos preços e a escassez de alimentos da cesta básica. A presença da SEMEE nessa mesa tem endereço certo: é o comércio e o pequeno negócio local, o mesmo público atendido todos os dias na Sala do Empreendedor, que mais sentem a vazante no custo do frete e na prateleira. Com diálogo e articulação institucional, a administração municipal antecipa desafios e busca soluções para proteger a população e manter as atividades essenciais do município.',
    meta: 'PREFEITURA · DEFESA CIVIL · SEMEE · MARINHA DO BRASIL · 14 DE AGOSTO',
    badge: { label: 'Governo', cls: 'badge-yellow' },
    imagem: {
      src: '/noticias/estiagem-marinha.jpg',
      alt: 'Card da Prefeitura com dois momentos da agenda em Tabatinga: a comitiva de Benjamin Constant reunida em sala com o capitão de fragata Eduardo Guimarães de Held, da Marinha do Brasil, e o grupo diante do pórtico do 9º Distrito Naval – Capitania Fluvial, sob a faixa "Cuidando do presente, construindo o futuro"',
      thumb: '/noticias/estiagem-marinha-thumb.jpg',
    },
  },
  {
    id: 'caixa-economica-parceria-sala-empreendedor',
    dia: '12', mes: 'AGO', ano: '2026',
    titulo: 'SEMEE recebe gerente da Caixa Econômica Federal para fortalecer parceria com a Sala do Empreendedor',
    curto: 'SEMEE e Caixa discutem acesso a crédito e planejamento financeiro para empreendedores',
    texto: 'Nesta terça-feira (11), a Secretaria Municipal de Empreendedorismo e Emprego recebeu a visita do gerente da Caixa Econômica Federal em Benjamin Constant, João Paulo Fonseca Aguiar. Na agenda com o secretário Fred Deivyd Monteiro, os dois trataram do fortalecimento da parceria entre a instituição financeira e a SEMEE, com atuação direta pela Sala do Empreendedor. Entre as frentes discutidas estão orientações sobre planejamento financeiro e alternativas para facilitar o acesso ao crédito — duas demandas que aparecem com frequência no balcão da Sala e que ganham peso quando há uma instituição bancária disposta a caminhar junto. A aproximação com a Caixa se soma ao trabalho que a Secretaria vem construindo no Cidade Empreendedora, renovado para o ciclo 2027/2028, e amplia o leque de serviços que chegam ao empreendedor local sem que ele precise sair do município.',
    meta: 'SEMEE · CAIXA ECONÔMICA FEDERAL · SALA DO EMPREENDEDOR · 11 DE AGOSTO',
    badge: { label: 'Economia', cls: 'badge-blue' },
    imagem: {
      src: '/noticias/caixa-semee.jpg',
      alt: 'Montagem com três momentos da visita: a equipe da SEMEE e o gerente da Caixa reunidos entre os banners da Sala do Empreendedor, a conversa entre o secretário Fred Deivyd Monteiro e João Paulo Fonseca Aguiar à mesa, e os dois diante do painel da Casa do Empreendedor',
      thumb: '/noticias/caixa-semee-thumb.jpg',
    },
  },
  {
    id: 'comunidades-ribeirinhas-nova-alianca',
    dia: '10', mes: 'AGO', ano: '2026',
    titulo: 'Curso de doces e salgados abre a ida da SEMEE às comunidades ribeirinhas, em Nova Aliança',
    curto: 'Curso de doces e salgados abre a ida da SEMEE às comunidades ribeirinhas',
    texto: 'A ida da SEMEE às comunidades ribeirinhas começou nesta segunda-feira (10), na comunidade de Nova Aliança, com um curso de preparação de doces e salgados voltado às mulheres do lugar. São cerca de 30 inscritas, e a formação segue até sexta-feira (14), na própria comunidade — a equipe da Secretaria foi de barco levar capacitação, treinamento e orientação sobre empreendedorismo aos moradores. Escolher doces e salgados como primeiro conteúdo tem uma razão prática: é uma das portas de entrada mais curtas entre aprender uma técnica e ter o que vender, e o curso trabalha justamente o preparo, a apresentação e a organização de quem já produz ou quer começar. Nova Aliança é o piloto de uma frente que vai se repetir: Feijoal e Nova Esperança já estão na fila, e outras comunidades devem entrar no roteiro. Sair da sede e atender na própria comunidade é uma escolha que diz muito sobre como a Secretaria entende o seu trabalho — quem está mais longe do balcão costuma ser justamente quem tem menos acesso à orientação que faz um pequeno negócio andar. A ação se apoia no Cidade Empreendedora, a parceria com o Sebrae que o município acabou de renovar para o ciclo 2027/2028, e conversa com o que a SEMEE mantém na sede: a Sala do Empreendedor, o SIME e a plataforma ContrataBC. "Nosso compromisso é levar oportunidades, capacitação e apoio para quem move nossa cidade", resume o material da Secretaria sobre a ida às comunidades ribeirinhas.',
    meta: 'SEMEE EM AÇÃO · NOVA ALIANÇA · 10 A 14 DE AGOSTO · CIDADE EMPREENDEDORA',
    badge: { label: 'Capacitação', cls: 'badge-green' },
    imagem: {
      src: '/noticias/comunidades-ribeirinhas.jpg',
      alt: 'Card "Rumo às comunidades ribeirinhas": equipe da SEMEE e moradores reunidos em um barco no rio, com os pilares capacitação e orientação, inovação e soluções, parcerias que geram resultados e desenvolvimento sustentável',
      thumb: '/noticias/comunidades-ribeirinhas-thumb.jpg',
    },
  },
  {
    id: 'cidade-empreendedora-2027-2028',
    dia: '06', mes: 'AGO', ano: '2026',
    titulo: 'Prefeito assina a adesão de Benjamin Constant ao Cidade Empreendedora 2027/2028',
    curto: 'Benjamin Constant adere ao Cidade Empreendedora 2027/2028',
    texto: 'Na manhã do dia 6 de agosto, o prefeito Semeide Bermeguy assinou o Termo de Adesão ao Cidade Empreendedora, o programa do Sebrae que trabalha dentro da administração municipal para melhorar a gestão pública, facilitar a vida de quem tem empresa e abrir oportunidades de renda. A assinatura veio poucos dias depois de o Sebrae Amazonas abrir o edital do novo ciclo, em 4 de agosto: Benjamin Constant é o segundo município do estado a aderir ao 2027/2028, e as inscrições seguem abertas até 18 de setembro. "Mais do que um documento, esse passo representa um compromisso firme com o desenvolvimento econômico do nosso município", escreveu o prefeito ao anunciar a adesão, citando o fortalecimento do ambiente de negócios, a simplificação de processos, a capacitação de empreendedores e a geração de emprego e renda. O novo ciclo é executado em um plano de trabalho de 18 a 24 meses, desenhado sob medida para o município, com investimento compartilhado — metade subsidiada pelo Sebrae, metade como contrapartida da Prefeitura. A metodologia está organizada em dez eixos: Gestão e Políticas Públicas, Lideranças Locais e Governança, Simplificação, Sala do Empreendedor, Compras Públicas e Acesso a Crédito, Empreendedorismo na Escola, Inclusão Socioprodutiva, Identidade, Vocações e Mercado, Inovação, e Resiliência Climática e Sustentabilidade. A adesão dá sequência a um trabalho que já tem resultado em casa: no ciclo anterior, o programa executou 122 ações em 7 eixos e alcançou mais de 2.400 pessoas no município, percurso que levou Benjamin Constant ao Prêmio Sebrae Prefeitura Empreendedora, em nível nacional, no eixo Gestão Inovadora. "Com a assinatura do Termo de Adesão para 2027-2028, daremos sequência ao ciclo de crescimento do empreendedorismo em Benjamin Constant. O Cidade Empreendedora trará novas soluções e oportunidades concretas para o desenvolvimento dos pequenos negócios no município", afirmou o secretário de Empreendedorismo e Emprego, Fred Deivyd Monteiro Cabral. Para a SEMEE, é a base sobre a qual seguem a Sala do Empreendedor, o SIME e a plataforma ContrataBC.',
    meta: 'GABINETE DO PREFEITO · SEBRAE/AM · CICLO 2027/2028',
    badge: { label: 'Programa', cls: 'badge-green' },
    links: [
      { href: 'https://am.agenciasebrae.com.br/cultura-empreendedora/benjamin-constant-adere-ao-cidade-empreendedora-2027-2028-e-renova-parceria-com-sebrae/', label: 'Leia na Agência Sebrae de Notícias →' },
      { href: 'https://www.instagram.com/reel/DbtT8DMxQdi/', label: 'Assista no Instagram →' },
    ],
  },
  {
    id: 'encontro-agentes-alto-solimoes',
    dia: '05', mes: 'AGO', ano: '2026',
    titulo: 'Benjamin Constant sedia o Encontro Regional dos Agentes de Desenvolvimento das Salas do Empreendedor do Alto Solimões',
    curto: 'Benjamin Constant sedia o Encontro Regional dos Agentes de Desenvolvimento do Alto Solimões',
    texto: 'Benjamin Constant recebeu, nesta quarta-feira (5), o Encontro Regional dos Agentes de Desenvolvimento das Salas do Empreendedor do Polo Alto Solimões. Sentaram na mesma sala as equipes de Tabatinga, Atalaia do Norte, São Paulo de Olivença, Santo Antônio do Içá, Amaturá e do próprio município — todas nascidas da parceria entre o Sebrae e as prefeituras, que mantêm em cada cidade um espaço dedicado a orientar quem empreende. A capacitação é bem prática: como emitir e ler certidões, manter o MEI regular, resolver o que trava o atendimento no balcão. A lógica é direta — quanto melhor preparado o agente de desenvolvimento, melhor o atendimento que chega ao microempreendedor. Sediar o encontro em 2026 também diz algo sobre o município: Benjamin Constant vem sendo reconhecido pelo trabalho com os pequenos negócios, com o 2º lugar nacional no eixo Gestão Inovadora do Prêmio Sebrae Prefeitura Empreendedora. Para além da agenda, encontros como este aproximam os municípios, fazem circular o que deu certo em cada um e ajudam a construir soluções para o desenvolvimento de toda a região do Alto Solimões.',
    meta: 'SALA DO EMPREENDEDOR · POLO ALTO SOLIMÕES · SEBRAE',
    badge: { label: 'Capacitação', cls: 'badge-green' },
    videos: [
      {
        src: '/noticias/encontro-agentes-alto-solimoes.mp4',
        poster: '/noticias/encontro-agentes-alto-solimoes.jpg',
        thumb: '/noticias/encontro-agentes-alto-solimoes-thumb.jpg',
        titulo: 'Encontro Regional dos Agentes de Desenvolvimento — Polo Alto Solimões',
      },
    ],
  },
  {
    id: 'semee-no-foro-microcosmos',
    dia: '30', mes: 'JUL', ano: '2026',
    titulo: 'SEMEE marca presença no I Foro de Microcosmos de Inovação',
    curto: 'SEMEE marca presença no I Foro de Microcosmos de Inovação',
    texto: 'A equipe da Secretaria Municipal de Empreendedorismo e Emprego participou do I Foro de Microcosmos de Inovação, realizado em Benjamin Constant nos dias 30 e 31 de julho, no INC/UFAM. O Foro reuniu instituições de dentro e de fora do Amazonas para discutir como se faz inovação no interior da Amazônia — e a SEMEE esteve lá com a equipe da Sala do Empreendedor, acompanhando as mesas e apresentando as políticas municipais de empreendedorismo e emprego. Fortalecer conexões, promover ideias e impulsionar o desenvolvimento por meio da inovação e do empreendedorismo é exatamente o caminho que o município vem trilhando desde o Capital Semente. Juntos, construímos oportunidades e transformamos realidades.',
    meta: 'SEMEE EM AÇÃO · I FORO DE MICROCOSMOS · INC/UFAM',
    badge: { label: 'Ação', cls: 'badge-green' },
    imagem: {
      src: '/noticias/semee-foro-microcosmos.jpg',
      alt: 'Card de participação da SEMEE no 1º Foro de Microcosmos de Inovação, com a equipe da Secretaria e da Sala do Empreendedor reunida no evento',
      thumb: '/noticias/semee-foro-microcosmos-thumb.jpg',
    },
  },
  {
    id: 'reuniao-staff-foro-microcosmos',
    dia: '28', mes: 'JUL', ano: '2026',
    titulo: 'Prefeito Semeide Bermeguy reúne todo o secretariado para alinhar o I Foro de Inovação Microcosmos',
    curto: 'Prefeito reúne o secretariado para alinhar o I Foro de Inovação Microcosmos (30 e 31/07)',
    texto: 'No dia 28 de julho, o prefeito Semeide Bermeguy reuniu no gabinete todo o staff da Prefeitura de Benjamin Constant — com cada secretário representando a sua pasta — para o alinhamento final do I Foro de Inovação Microcosmos, que acontece nos dias 30 e 31 de julho, na UFAM (INC). O secretário de Ciência, Tecnologia e Inovação conduziu a reunião apresentando os pontos principais e a programação completa do evento. O prefeito reforçou a importância do Foro para o município e para toda a região do Alto Solimões, e pediu a participação em massa de todas as secretarias — cada uma presente e representando a sua respectiva pasta.',
    meta: 'GABINETE DO PREFEITO · I FORO MICROCOSMOS · 30 E 31/07',
    badge: { label: 'Governo', cls: 'badge-blue' },
    imagem: {
      src: '/noticias/reuniao-staff-foro.jpg',
      alt: 'Card da reunião do I Foro de Microcosmos de Inovação: prefeito Semeide Bermeguy e secretariado reunidos no gabinete da Prefeitura de Benjamin Constant',
      thumb: '/noticias/reuniao-staff-foro-thumb.jpg',
    },
  },
  {
    id: 'mapeamento-microcosmos',
    dia: '28', mes: 'JUL', ano: '2026',
    titulo: 'Chamada aberta: Mapeamento do Microcosmos de Inovação de Atalaia do Norte e Benjamin Constant',
    curto: 'Chamada aberta: Mapeamento do Microcosmos de Inovação — 29/07, 8h, Miniauditório do INC/UFAM',
    texto: 'Se você faz inovação no Alto Solimões, o mapa começa por você. Benjamin Constant e Atalaia do Norte abrem o Mapeamento do Microcosmos de Inovação — o desenho, feito de dentro, de quem produz inovação no território: startups de base tecnológica e de impacto, empreendedores locais (negócios formais e informais), a Sala do Empreendedor e os órgãos de apoio ao MEI, universidades e pesquisadores (UFAM, UEA, IFAM e institutos) e o setor público. O encontro de abertura acontece nesta quarta-feira, 29 de julho, das 08h às 12h, no Miniauditório do INC/UFAM, em Benjamin Constant, na semana do I Foro de Inovação Microcosmos.',
    meta: 'CHAMADA ABERTA · ATALAIA DO NORTE + BENJAMIN CONSTANT · SEBRAE',
    badge: { label: 'Chamada', cls: 'badge-blue' },
    imagem: {
      src: '/noticias/mapeamento-microcosmos.jpg',
      alt: 'Cartaz do Mapeamento do Microcosmos de Inovação de Atalaia do Norte e Benjamin Constant — 29 de julho, 08h às 12h, Miniauditório do INC/UFAM',
      thumb: '/noticias/mapeamento-microcosmos-thumb.jpg',
    },
  },
  {
    id: 'foro-microcosmos',
    dia: '30', mes: 'JUL', ano: '2026',
    titulo: 'I Foro de Inovação Microcosmos reúne instituições de todo o país em Benjamin Constant',
    curto: 'I Foro de Inovação Microcosmos: 30 e 31 de julho em Benjamin Constant',
    texto: 'Nos dias 30 e 31 de julho, Benjamin Constant recebeu o I Foro de Inovação Microcosmos, com 26 instituições convidadas para discutir inovação, empreendedorismo e desenvolvimento no interior da Amazônia. A SEMEE participou apresentando as políticas municipais de empreendedorismo e emprego.',
    meta: 'EVENTO · BENJAMIN CONSTANT/AM',
    badge: { label: 'Evento', cls: 'badge-blue' },
  },
  {
    id: 'festival-de-oportunidades',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: 'Festival de Oportunidades: crédito para MEIs e autônomos venderem no XXXI Festival Folclórico Benjaminense',
    curto: 'Festival de Oportunidades: financiamento para MEIs e autônomos venderem no XXXI Festival Folclórico',
    texto: 'Quem vai vender no XXXI Festival Folclórico Benjaminense pode chegar ao evento com o estoque reforçado. A Prefeitura de Benjamin Constant, por meio da SEMEE e em parceria com o Sebrae e a AFEAM, está disponibilizando oportunidades de financiamento para MEIs e autônomos que irão comercializar produtos e serviços durante o festival — a maior janela de vendas do calendário cultural do Alto Solimões. O atendimento é presencial na Sala do Empreendedor, na Rua José Ferreira da Rocha Primo, nº 99, bairro Coimbra, onde a equipe apresenta as linhas de crédito disponíveis e ajuda a escolher a que cabe no tamanho de cada negócio.',
    meta: 'SALA DO EMPREENDEDOR · SEBRAE · AFEAM',
    badge: { label: 'Oportunidade', cls: 'badge-yellow' },
    imagem: {
      src: '/noticias/festival-oportunidades.jpg',
      alt: 'Cartaz do Festival de Oportunidades: financiamentos para MEI e autônomos no XXXI Festival Folclórico Benjaminense, na Sala do Empreendedor',
      thumb: '/noticias/festival-oportunidades-thumb.jpg',
    },
  },
  {
    id: 'feirao-de-credito',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: '1º Feirão de Crédito aproxima quem empreende das instituições financeiras',
    curto: '1º Feirão de Crédito de Benjamin Constant',
    texto: 'Benjamin Constant realizou o seu primeiro Feirão de Crédito, reunindo empreendedores e instituições financeiras em um só lugar para orientar, tirar dúvidas e abrir caminho até as linhas de crédito. De auditório cheio, a ação atacou um dos gargalos mais citados por quem empreende no Alto Solimões: o acesso a financiamento para abrir ou fazer crescer o próprio negócio.',
    meta: 'SEMEE EM AÇÃO · CRÉDITO E FOMENTO',
    badge: { label: 'Ação', cls: 'badge-green' },
    videos: [
      { src: '/noticias/feirao-credito.mp4', poster: '/noticias/feirao-credito.jpg', thumb: '/noticias/feirao-credito-thumb.jpg', titulo: '1º Feirão de Crédito de Benjamin Constant' },
    ],
    links: [
      { href: 'https://www.instagram.com/reel/DVyGnetgibL/', label: 'Assista no Instagram →' },
    ],
  },
  {
    id: 'ig-artesanato-ticuna',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: 'Artesanato Ticuna de Benjamin Constant caminha para ser a primeira Indicação Geográfica indígena do Amazonas',
    curto: 'Artesanato Ticuna rumo à 1ª Indicação Geográfica indígena do Amazonas',
    texto: 'O Artesanato Ticuna deu um passo decisivo rumo ao reconhecimento oficial: já foi assinada a documentação que compõe o Instrumento Oficial da Indicação Geográfica (IG), etapa necessária para protocolar o registro no INPI. Com apoio do Sebrae, será a primeira IG voltada ao artesanato indígena no Amazonas — um selo que valoriza a origem, protege o saber tradicional e agrega valor ao trabalho das artesãs e dos artesãos do território.',
    meta: 'CULTURA EMPREENDEDORA · SEBRAE/AM · INPI',
    badge: { label: 'Reconhecimento', cls: 'badge-yellow' },
    links: [
      { href: 'https://am.agenciasebrae.com.br/cultura-empreendedora/sebrae-apoia-processo-da-indicacao-geografica-do-artesanato-ticuna-de-benjamin-constant/', label: 'Leia na Agência Sebrae de Notícias →' },
    ],
  },
  {
    id: 'polo-artesanato',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: 'Um encontro para tecer negócios: polo regional de artesanato une cultura e renda',
    curto: 'Polo regional de artesanato: difundindo a cultura e gerando renda',
    texto: 'Artesãs e artesãos do território expuseram e venderam sua produção no polo regional de artesanato, em um encontro que uniu cultura e negócio. Cestarias, cerâmicas e peças tradicionais ganharam vitrine — e a renda gerada fica onde importa: na mão de quem produz.',
    meta: 'SEMEE EM AÇÃO · ARTESANATO',
    badge: { label: 'Cultura', cls: 'badge-blue' },
    videos: [
      { src: '/noticias/tecer-negocios.mp4', poster: '/noticias/tecer-negocios.jpg', thumb: '/noticias/tecer-negocios-thumb.jpg', titulo: 'Um Encontro Para Tecer Negócios' },
      { src: '/noticias/cultura-renda.mp4', poster: '/noticias/cultura-renda.jpg', thumb: '/noticias/cultura-renda-thumb.jpg', titulo: 'Difundindo a Cultura e Gerando Renda' },
    ],
  },
  {
    id: 'feirao-do-mei',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: 'Feirão do MEI leva capacitação e apoio a quem quer desenvolver o próprio negócio',
    curto: 'Feirão do MEI: capacitação para pequenos empreendedores',
    texto: 'Formalização, gestão e crescimento: o Feirão do MEI ofereceu capacitação para microempreendedores individuais e atendimento de apoio ao desenvolvimento de negócios. As turmas cheias mostram o tamanho da demanda — e a disposição de quem empreende em Benjamin Constant para se qualificar.',
    meta: 'SEMEE EM AÇÃO · CAPACITAÇÃO · MEI',
    badge: { label: 'Capacitação', cls: 'badge-green' },
    videos: [
      { src: '/noticias/feirao-mei.mp4', poster: '/noticias/feirao-mei.jpg', thumb: '/noticias/feirao-mei-thumb.jpg', titulo: 'Feirão do MEI — Capacitação' },
      { src: '/noticias/apoio-negocios.mp4', poster: '/noticias/apoio-negocios.jpg', thumb: '/noticias/apoio-negocios-thumb.jpg', titulo: 'Apoio para Desenvolver Negócios' },
    ],
  },
  {
    id: 'workshop-diversidade',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: 'I Workshop "Diversidade que Empreende" promove inclusão e autonomia',
    curto: 'I Workshop Diversidade que Empreende: empreendedorismo para todos',
    texto: 'Empreendedorismo para todos: o I Workshop Diversidade que Empreende reuniu participantes para discutir inclusão produtiva e autonomia econômica, mostrando que empreender também é porta de entrada para quem historicamente ficou de fora. A ação foi realizada com participação da SEMEE e de parceiros do Alto Solimões.',
    meta: 'SEMEE EM AÇÃO · INCLUSÃO PRODUTIVA',
    badge: { label: 'Inclusão', cls: 'badge-blue' },
    videos: [
      { src: '/noticias/workshop-diversidade.mp4', poster: '/noticias/workshop-diversidade.jpg', thumb: '/noticias/workshop-diversidade-thumb.jpg', titulo: 'I Workshop: Diversidade que Empreende' },
    ],
  },
  {
    id: 'jeas-2026',
    dia: '26', mes: 'JUL', ano: '2026',
    titulo: 'XXX JEAS 2026: quando o esporte entra em campo, a economia também vence',
    curto: 'XXX JEAS 2026: esporte movimentando a economia local',
    texto: 'A 30ª edição dos Jogos Estudantis do Alto Solimões (JEAS) movimenta muito mais do que as quadras: delegações de toda a região aquecem hospedagem, alimentação, transporte e o comércio local. Para a SEMEE, grandes eventos como o JEAS também são política econômica — oportunidade de renda para quem empreende na cidade.',
    meta: 'SEMEE EM AÇÃO · ESPORTE E ECONOMIA',
    badge: { label: 'Economia', cls: 'badge-yellow' },
    videos: [
      { src: '/noticias/jeas-2026.mp4', poster: '/noticias/jeas-2026.jpg', thumb: '/noticias/jeas-2026-thumb.jpg', titulo: 'XXX JEAS 2026' },
    ],
  },
  {
    id: 'premio-sebrae-2026',
    dia: '18', mes: 'MAI', ano: '2026',
    titulo: 'Benjamin Constant é vice-campeã nacional do Prêmio Sebrae Prefeitura Empreendedora',
    curto: 'Benjamin Constant: vice-campeã nacional do Prêmio Sebrae Prefeitura Empreendedora',
    texto: 'O projeto "Benjamin Constant Inovadora: Capital Semente e Feiras Indígenas" venceu a etapa estadual do Amazonas, liderou a Região Norte e conquistou o 2º lugar do Brasil na categoria Gestão Inovadora do XIII Prêmio Sebrae Prefeitura Empreendedora, entre mais de 5,5 mil municípios. A entrega aconteceu em cerimônia nacional em Brasília.',
    meta: 'RECONHECIMENTO · XIII PSPE · BRASÍLIA/DF',
    badge: { label: 'Prêmio', cls: 'badge-yellow' },
    links: [
      { href: 'https://agenciasebrae.com.br/economia-e-politica/conheca-os-municipios-reconhecidos-por-apoiar-o-empreendedorismo-brasileiro/', label: 'Veja a lista dos municípios premiados →' },
    ],
  },
  {
    id: 'capital-semente',
    dia: '03', mes: 'OUT', ano: '2025',
    titulo: 'Capital Semente: R$ 66 mil investidos e 11 startups selecionadas em edital histórico',
    texto: 'Benjamin Constant tornou-se um dos primeiros municípios do interior do Amazonas a investir recursos próprios em startups locais. O edital Capital Semente selecionou 11 negócios inovadores, que receberam aporte e acompanhamento para desenvolver suas soluções.',
    meta: 'FOMENTO · EDITAL CAPITAL SEMENTE',
    badge: { label: 'Edital', cls: 'badge-green' },
  },
  {
    id: 'lei-1433-2025',
    dia: '29', mes: 'SET', ano: '2025',
    titulo: 'Lei nº 1.433/2025 cria a Secretaria Municipal de Empreendedorismo e Emprego',
    texto: 'Sancionada pelo prefeito Semeide Bermeguy Porto, a Lei Municipal nº 1.433, de 26 de setembro de 2025, desmembrou a antiga SEMET e criou a SEMEE, com a missão de planejar e executar as políticas de empreendedorismo, emprego e apoio aos micro e pequenos negócios do município.',
    meta: 'INSTITUCIONAL · DOM/AM EDIÇÃO 3.950',
    badge: { label: 'Lei', cls: 'badge-green' },
  },
  {
    id: 'cidade-empreendedora-2025',
    dia: '12', mes: 'MAR', ano: '2025',
    titulo: 'Município renova com o Sebrae e adere ao ciclo 2025 do Cidade Empreendedora',
    texto: 'Ao longo de 16 meses, o programa Cidade Empreendedora executou 122 ações em 7 eixos e alcançou mais de 2.400 pessoas em Benjamin Constant — da desburocratização às compras públicas de pequenos negócios. O município renovou a parceria para o novo ciclo.',
    meta: 'PARCERIA · SEBRAE/AM',
    badge: { label: 'Programa', cls: 'badge-green' },
  },
];

export interface Manchete {
  texto: string;
  /** Miniatura da notícia, quando ela tem imagem ou vídeo. */
  thumb?: string;
}

/** Manchetes do ticker: as notícias mais recentes, em versão curta. */
export const manchetes: Manchete[] = noticias.slice(0, 8).map((n) => ({
  texto: n.curto ?? n.titulo,
  thumb:
    n.imagem?.thumb ?? n.imagem?.src ?? n.videos?.[0]?.thumb ?? n.videos?.[0]?.poster,
}));
