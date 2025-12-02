// Dados dos Capítulos do Playbook de Consultoria em IA
export const chaptersData = [
  {
    id: 1,
    number: "01",
    title: "Por Que a Maioria dos Consultores de IA Vai Falhar",
    subtitle: "E Como Você Pode Vencer",
    icon: "fa-compass",
    color: "from-navy-700 to-navy-500",
    duration: "45 min",
    videoUrl: "https://www.loom.com/share/b44905d90bee4eea9194a5da81e38a11",
    keyTakeaways: [
      "O Mal-Entendido de $30.000 - Por que dizer 'não' constrói confiança",
      "IA é um luxo, não um direito - O posicionamento que vence",
      "O framework de Avaliação de Prontidão em 4 Pontos",
      "A Estratégia de Três Níveis: Educação, Preparação, Implementação"
    ],
    overview: "Domine a fundação da consultoria premium em IA entendendo por que a maioria dos consultores falha e como se posicionar como um conselheiro honesto em vez de um vendedor de hype.",
    sections: [
      {
        title: "O Gancho de Abertura",
        content: "Aprenda o poder de recusar dinheiro para construir confiança e por que o consultor premium dá aos clientes o que eles precisam, não o que eles querem."
      },
      {
        title: "Mudança de Posicionamento Central",
        content: "Entenda por que 'IA é um luxo, não um direito' e como esta postura provocativa filtra clientes ruins enquanto atrai clientes premium."
      },
      {
        title: "O Teste Decisivo",
        content: "Domine a Avaliação de Prontidão em 4 pontos: Processos, Dados, Adesão e Sistemas. Aprenda a diagnosticar se os clientes conquistaram o direito de usar IA."
      },
      {
        title: "Framework de Três Níveis",
        content: "Estruture suas ofertas em Educação (Nível 3), Preparação (Nível 2) e Implementação (Nível 1). Descubra por que o Nível 2 é onde está o dinheiro real."
      }
    ],
    exercises: [
      {
        type: "assessment",
        title: "Verificador de Prontidão do Cliente",
        description: "Pratique avaliar um cliente fictício usando o framework de 4 pontos",
        points: 100
      },
      {
        type: "writing",
        title: "Crie Sua Declaração de Posicionamento",
        description: "Escreva seu próprio posicionamento provocativo que filtra clientes",
        points: 150
      }
    ],
    quiz: [
      {
        question: "Qual porcentagem do mercado está realmente pronta para implementação de IA (Nível 1)?",
        options: ["90%", "50%", "10%", "25%"],
        correct: 2,
        explanation: "Apenas cerca de 10% das empresas passam nos 4 pontos de verificação de prontidão e estão verdadeiramente prontas para implementação de IA."
      },
      {
        question: "Qual nível tipicamente gera a receita mais sustentável?",
        options: ["Nível 1 (Implementação)", "Nível 2 (Preparação)", "Nível 3 (Educação)", "Todos igualmente"],
        correct: 1,
        explanation: "O trabalho de Nível 2 (Preparação) - corrigir fundações, organizar dados, documentar processos - cria valor a longo prazo e receita sustentável."
      }
    ],
    reflection: "Pense em uma ocasião em que você disse 'sim' quando deveria ter dito 'não' a um cliente. O que você faria diferente usando este framework?"
  },
  {
    id: 2,
    number: "02",
    title: "A Arte da Chamada de Descoberta",
    subtitle: "Seja o Médico, Não o Traficante",
    icon: "fa-phone",
    color: "from-navy-600 to-navy-400",
    duration: "50 min",
    videoUrl: "https://www.loom.com/share/cafb8f16cd2540efbf0fd5767a3aefb1",
    keyTakeaways: [
      "O posicionamento de Médico vs Traficante",
      "Perguntas essenciais de descoberta que diagnosticam problemas reais",
      "Como lidar com o pedido 'me mostre a mágica'",
      "Convertendo descoberta em confiança e autoridade"
    ],
    overview: "Transforme suas chamadas de descoberta de demos de produto em sessões diagnósticas que posicionam você como um conselheiro confiável e filtram clientes problemáticos.",
    sections: [
      {
        title: "A Escolha Fundamental",
        content: "Aprenda por que ser o 'Traficante de IA' que empurra soluções leva ao fracasso, enquanto ser o 'Médico' que diagnostica problemas leva a engajamentos premium."
      },
      {
        title: "Framework de Descoberta",
        content: "Domine a abordagem sistemática para descobrir problemas reais de negócio, não apenas desejos superficiais de IA."
      },
      {
        title: "Lidando com Objeções",
        content: "Scripts e técnicas para abordar ceticismo, preocupações com orçamento e o temido pedido 'apenas me mostre o que a IA pode fazer'."
      },
      {
        title: "Construindo Confiança",
        content: "Converta uma chamada de descoberta em confiança imediata através de vulnerabilidade estratégica e avaliação honesta."
      }
    ],
    exercises: [
      {
        type: "roleplay",
        title: "Simulação de Chamada de Descoberta",
        description: "Pratique conduzir uma chamada de descoberta com um cliente simulado por IA",
        points: 200
      },
      {
        type: "template",
        title: "Construa Seu Template de Descoberta",
        description: "Crie seu banco de perguntas personalizado para chamadas de descoberta",
        points: 100
      }
    ],
    quiz: [
      {
        question: "Qual é a primeira coisa que você deve fazer quando um cliente diz 'Me mostre a mágica da IA'?",
        options: ["Demonstrar suas melhores ferramentas", "Perguntar sobre o orçamento", "Diagnosticar a prontidão", "Agendar outra chamada"],
        correct: 2,
        explanation: "Sempre diagnostique antes de demonstrar. Entender a prontidão deles previne demos desperdiçadas e projetos fracassados."
      }
    ],
    reflection: "Como você pode mudar de vender recursos para diagnosticar problemas na sua próxima interação com cliente?"
  },
  {
    id: 3,
    number: "03",
    title: "Lendo o Ambiente e Sinais de Alerta",
    subtitle: "A Manhã Depois da Chamada",
    icon: "fa-flag",
    color: "from-red-600 to-red-400",
    duration: "40 min",
    videoUrl: "https://www.loom.com/share/4f7231640af94846aff7fa2aecb59eea",
    keyTakeaways: [
      "Identificando o cliente 'Cavalo de Troia'",
      "Sinais de alerta que predizem falha de projeto",
      "O problema do 'Back-End Espaguete'",
      "Quando se afastar do dinheiro"
    ],
    overview: "Desenvolva a intuição para identificar clientes e situações problemáticas antes que eles descarrilem seus projetos e reputação.",
    sections: [
      {
        title: "A Manhã Depois da Chamada",
        content: "As consequências caóticas das chamadas de descoberta e o framework mental para transformar caos em diagnóstico claro."
      },
      {
        title: "A Triagem: Reconhecimento de Padrões no Cliente",
        content: "Desenvolva o sexto sentido de consultor para diagnosticar clientes em 90 segundos usando reconhecimento de padrões."
      },
      {
        title: "O Diretor Sobrecarregado (Cenário B: 21-100 Pessoas)",
        content: "Domine a estratégia 'entrar e expandir' com empresas de médio porte usando priorização com framework RICE."
      },
      {
        title: "O Labirinto Corporativo (Cenário C: 100+ Pessoas)",
        content: "Navegue a política corporativa e construa vitórias rápidas fora de sua arquitetura de sistema complexa."
      },
      {
        title: "A Prescrição: Sendo o Médico 'Educadamente Implacável'",
        content: "Escolha a plataforma certa e entregue recomendações honestas que constroem confiança através de amor duro."
      },
      {
        title: "Quando Pisar no Freio: Os Sinais de Alerta",
        content: "Reconheça sinais de aviso e desenvolva planos de backup para quando clientes se tornam pesadelos."
      }
    ],
    exercises: [
      {
        type: "analysis",
        title: "Detector de Sinais de Alerta",
        description: "Analise cenários reais de clientes e identifique os sinais de alerta",
        points: 150
      }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Design de Soluções e Precificação Escalável",
    subtitle: "Do Caos à Calma",
    icon: "fa-dollar-sign",
    color: "from-green-600 to-green-400",
    duration: "55 min",
    videoUrl: "https://www.loom.com/share/663789411f214ff685fb51a0c3a17e03",
    keyTakeaways: [
      "Tornando-se a 'calma na tempestade' para clientes sobrecarregados",
      "Precificação baseada em valor vs cobrança por hora",
      "O posicionamento de parceiro vs fornecedor",
      "Escalando através de produtização"
    ],
    overview: "Projete soluções que abordam problemas reais de negócio e as precifique pelo valor, não pelo tempo.",
    sections: [
      {
        title: "Do Caos à Calma: O Princípio da Confiança",
        content: "Posicione-se como a calma na tempestade através de processos sistemáticos que reduzem a ansiedade do cliente."
      },
      {
        title: "O Framework Mistério de Assassinato: Diagnosticando o Estado Atual",
        content: "Investigue ineficiências usando quatro planilhas forenses para mapear ferramentas, fontes de conhecimento, processos e stakeholders."
      },
      {
        title: "Tornando Tangível: A Avaliação de Baseline Que Prova Seu Valor",
        content: "Estabeleça métricas mensuráveis de antes/depois usando frameworks de KPI para demonstrar valor concreto."
      },
      {
        title: "A Implantação em 3 Atos: Do Piloto à Otimização",
        content: "Execute implementação sistemática através das fases Piloto, Escala e Otimização para sucesso a longo prazo."
      },
      {
        title: "A Estratégia Centralizada: Encontrando o Primeiro Dominó",
        content: "Priorize projetos adjacentes à receita para máximo impacto e construção de capital político."
      },
      {
        title: "O Ecossistema: Uma Estratégia de Precificação Que Escala",
        content: "Construa uma escada de engajamento em camadas desde acesso à comunidade até parcerias corporativas que captura cada tipo de cliente."
      }
    ],
    exercises: [
      {
        type: "calculator",
        title: "Calculadora de Precificação por Valor",
        description: "Calcule o valor real de suas soluções",
        points: 100
      }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "O Protocolo de Autópsia da Chamada",
    subtitle: "Seu Espelho Incansável",
    icon: "fa-microscope",
    color: "from-purple-600 to-purple-400",
    duration: "45 min",
    videoUrl: "https://www.loom.com/share/88f1c1679f38445c8305c25c8c335462",
    keyTakeaways: [
      "Por que feedback humano desencadeia reações defensivas",
      "O Protocolo de IA 'Arya' para análise imparcial de chamadas",
      "O scorecard das Seis Dimensões de Presença Executiva",
      "Melhoria sistemática: de 47 vícios de linguagem a 'articulado'"
    ],
    overview: "Domine o uso sistemático de IA para dissecar suas chamadas e eliminar fraquezas através de feedback imparcial que contorna o ego.",
    sections: [
      {
        title: "Por Que Você Não Pode Confiar em um Humano (Nem em Você Mesmo)",
        content: "A psicologia da autoavaliação enviesada e por que feedback humano desencadeia reações defensivas que previnem melhoria."
      },
      {
        title: "O Protocolo 'Arya': Um Espelho Incansável",
        content: "Processo passo a passo para usar IA para analisar suas chamadas, incluindo prompts exatos e configuração técnica."
      },
      {
        title: "As Seis Dimensões de Presença Executiva",
        content: "Framework completo de scorecard analisando clareza, entrega vocal, autoridade, linguagem corporal, habilidades de questionamento e engajamento do cliente."
      },
      {
        title: "Anatomia de uma Autópsia (Um Estudo de Caso)",
        content: "Exemplo do mundo real de análise de chamada por IA mostrando o problema da 'Mangueira de Incêndio', vícios de linguagem e proporções distorcidas de fala."
      },
      {
        title: "O Loop de Sinergia IA-Humano",
        content: "Como combinar observações de IA com contexto e estratégia humanos, além de ler linguagem corporal do cliente através de análise de IA."
      },
      {
        title: "O Efeito Cumulativo: De 47 Vícios de Linguagem a 'Articulado'",
        content: "Construindo um loop de melhoria sistemática que transforma fraquezas em forças percebidas através de correções pequenas e compostas."
      }
    ],
    exercises: [
      {
        type: "review",
        title: "Prática de Análise de Chamada",
        description: "Revise uma chamada de exemplo e identifique oportunidades de melhoria",
        points: 150
      }
    ]
  },
  {
    id: 6,
    number: "06",
    title: "O Raio-X de $20.000",
    subtitle: "Construindo a Automação de Auditoria",
    icon: "fa-x-ray",
    color: "from-blue-600 to-blue-400",
    duration: "60 min",
    videoUrl: "https://www.loom.com/share/b5d8cce59e834fd39f742a8d9362909e",
    keyTakeaways: [
      "Por que o 'Raio-X' de $20.000 vira toda a dinâmica de vendas",
      "Modelos de negócio: Armadilha do Especialista vs Ativo do Arquiteto",
      "Construindo o sistema de automação de auditoria de 4 componentes",
      "A abordagem 'Caixa Preta' para proteção de propriedade intelectual"
    ],
    overview: "Construa a Automação de Auditoria de $20.000 - um sistema escalável que converte prospects céticos em clientes de alto valor provando problemas com os próprios dados deles.",
    sections: [
      {
        title: "A Pergunta de $20.000",
        content: "O momento crucial que transforma consultores de fornecedores em arquitetos, e como posicionar a auditoria como uma ferramenta diagnóstica estratégica."
      },
      {
        title: "A 'Armadilha do Especialista' vs. O 'Ativo do Arquiteto'",
        content: "Entendendo a diferença fundamental entre trocar tempo por dinheiro e construir sistemas escaláveis que manufaturam autoridade."
      },
      {
        title: "A Anatomia do Seu 'Raio-X' de $20K",
        content: "Os quatro componentes cruciais: Problema Específico (Nicho), Inputs (Alimentação de Dados), Motor (Molho Secreto) e Output (Momento Aha!)."
      },
      {
        title: "A Primeira Passagem Manual: Destilando Seu Gênio",
        content: "O processo passo a passo de externalizar expertise em um 'Livro de Receitas' de regras através da metodologia Cliente Beta."
      },
      {
        title: "Da Lógica ao 'Motor': A Stack 'Caixa Preta'",
        content: "Construindo o sistema de automação de três camadas: Porta da Frente (Ingestão de Dados), Cérebro (Motor de Análise) e Impressora (Camada de Apresentação)."
      },
      {
        title: "Entregando o 'Momento Aha!': O Pitch Pago de $20k",
        content: "A reunião masterclass onde consultores são pagos $20.000 para apresentar seu engajamento principal de $200.000 usando o relatório bombástico de uma página."
      },
      {
        title: "Seu Primeiro Ativo Verdadeiro",
        content: "Transição de especialista para arquiteto e desbloqueio do modelo de consultoria de alto valor através da máquina de 'Raio-X'."
      }
    ],
    exercises: [
      {
        type: "template",
        title: "Construa Seu Template de Auditoria",
        description: "Crie seu framework de auditoria personalizado",
        points: 200
      }
    ]
  },
  {
    id: 7,
    number: "07",
    title: "O Multiplicador Humano",
    subtitle: "Por Que Comunicação É Tudo",
    icon: "fa-comments",
    color: "from-indigo-600 to-indigo-400",
    duration: "45 min",
    videoUrl: "https://www.loom.com/share/04b13a497f404ab0a7fef1797ab9a26e",
    keyTakeaways: [
      "Comunicação supera habilidade técnica sempre",
      "A linguagem apropriada para diferentes audiências",
      "Técnicas de escuta ativa",
      "Construindo confiança através de clareza"
    ],
    overview: "Domine as habilidades de comunicação que separam consultores de seis dígitos de implementadores técnicos.",
    sections: [
      {
        title: "A Verdade Brutal",
        content: "Por que habilidades técnicas perfeitas não significam nada sem capacidade de comunicação."
      },
      {
        title: "Calibração de Audiência",
        content: "Adaptando sua mensagem para C-suite, gerentes e equipes técnicas."
      },
      {
        title: "Confiança Através de Transparência",
        content: "Construindo relacionamentos duradouros através de comunicação honesta e clara."
      }
    ]
  },
  {
    id: 8,
    number: "08",
    title: "A Técnica do Menu Chinês",
    subtitle: "Empacotando Serviços para Fortune 500",
    icon: "fa-list",
    color: "from-orange-600 to-orange-400",
    duration: "50 min",
    videoUrl: "https://www.loom.com/share/d7137e15b89f4e00ac76c82960d6b972",
    keyTakeaways: [
      "A abordagem de empacotamento modular de serviços",
      "Como empresas Fortune 500 compram serviços",
      "Psicologia da 'versão light de 8'",
      "Criando ofertas flexíveis e escaláveis"
    ],
    overview: "Aprenda a técnica sofisticada de empacotamento que empresas Fortune 500 esperam de seus fornecedores.",
    sections: [
      {
        title: "A História de Origem",
        content: "Como uma educação de cliente levou a uma transformação completa no empacotamento de serviços."
      },
      {
        title: "Arquitetura de Menu",
        content: "Construindo serviços modulares que podem ser misturados e combinados."
      },
      {
        title: "Psicologia Corporativa",
        content: "Entendendo como grandes organizações tomam decisões de compra."
      }
    ],
    exercises: [
      {
        type: "design",
        title: "Crie Seu Menu de Serviços",
        description: "Projete suas próprias ofertas de serviço estilo Menu Chinês",
        points: 175
      }
    ]
  },
  {
    id: 9,
    number: "09",
    title: "O Papagaio Dourado",
    subtitle: "A Taxa de Matrícula de $300",
    icon: "fa-graduation-cap",
    color: "from-yellow-600 to-yellow-400",
    duration: "45 min",
    videoUrl: "https://www.loom.com/share/db419f57adc14de99a2d654b01c23908",
    keyTakeaways: [
      "Aprendendo com erros e engajamentos de baixo valor",
      "A armadilha do Fiverr e graduação de plataforma",
      "Extraindo lições de cada interação",
      "Construindo limites e padrões"
    ],
    overview: "Transforme cada interação com cliente, até desastres, em experiências valiosas de aprendizado.",
    sections: [
      {
        title: "O Desastre Dominicano",
        content: "Uma história de advertência sobre o que acontece quando os padrões caem."
      },
      {
        title: "Mentalidade de Taxa de Matrícula",
        content: "Reenquadrando fracassos como investimentos em educação."
      },
      {
        title: "Evolução de Plataforma",
        content: "Graduando de plataformas de baixo valor para posicionamento premium."
      }
    ]
  },
  {
    id: 10,
    number: "10",
    title: "A Apresentação das 23h",
    subtitle: "O Código de Trapaça do Consultor",
    icon: "fa-clock",
    color: "from-teal-600 to-teal-400",
    duration: "55 min",
    videoUrl: "https://www.loom.com/share/6c03f2acef6f4a05a732d020033a82e0",
    keyTakeaways: [
      "Criando workshops prontos para cliente em menos de uma hora",
      "A abordagem sistemática para criação rápida de conteúdo",
      "Alavancando IA para pesquisa e estrutura",
      "Apresentação profissional em tempo mínimo"
    ],
    overview: "Domine o sistema para criar workshops convincentes e personalizados em velocidade relâmpago.",
    sections: [
      {
        title: "O Milagre da Meia-Noite",
        content: "Como lidar com solicitações urgentes e de alto risco sem pânico."
      },
      {
        title: "O Sistema",
        content: "Framework passo a passo para criação rápida de workshop."
      },
      {
        title: "Qualidade em Velocidade",
        content: "Mantendo excelência enquanto trabalha sob pressão extrema de tempo."
      }
    ],
    exercises: [
      {
        type: "timed",
        title: "Desafio de Workshop de 60 Minutos",
        description: "Crie um esboço completo de workshop em uma hora",
        points: 250
      }
    ]
  },
  {
    id: 11,
    number: "11",
    title: "A IA Que 90% Não Conhecem",
    subtitle: "Além da IA Generativa",
    icon: "fa-brain",
    color: "from-pink-600 to-pink-400",
    duration: "60 min",
    videoUrl: "https://www.loom.com/share/4b29adcb768a4da9bfdf25c75532d61b",
    keyTakeaways: [
      "Fundamentos de aprendizado de máquina que ainda importam",
      "A diferença entre ML e IA Generativa",
      "Quando usar ML tradicional vs IA generativa",
      "Construindo credibilidade através de conhecimento profundo"
    ],
    overview: "Separe-se dos engenheiros de prompt entendendo as fundações técnicas mais profundas.",
    sections: [
      {
        title: "A Lacuna de Conhecimento",
        content: "O que a maioria dos consultores de IA não entende sobre aprendizado de máquina."
      },
      {
        title: "Fundações Técnicas",
        content: "Conceitos essenciais de ML que todo consultor deveria conhecer."
      },
      {
        title: "Estratégia de Aplicação",
        content: "Escolhendo a ferramenta certa para o problema certo."
      }
    ]
  },
  {
    id: 12,
    number: "12",
    title: "O Arquiteto e o Campo Minado",
    subtitle: "Tornando-se Insubstituível",
    icon: "fa-shield",
    color: "from-red-700 to-red-500",
    duration: "50 min",
    videoUrl: "https://www.loom.com/share/ca4b1379754847ada35316929620895e",
    keyTakeaways: [
      "Navegando a paisagem esmagadora de IA",
      "Tornando-se a calma na tempestade do cliente",
      "Construindo valor insubstituível",
      "A estratégia antídoto do FOMO"
    ],
    overview: "Posicione-se como o guia insubstituível através da caótica paisagem de IA.",
    sections: [
      {
        title: "O Consultor Afogado",
        content: "Entendendo a sobrecarga que tanto você quanto os clientes enfrentam."
      },
      {
        title: "A Mentalidade do Arquiteto",
        content: "Elevando-se acima do ruído para fornecer clareza estratégica."
      },
      {
        title: "Valor Insubstituível",
        content: "Construindo relacionamentos e expertise que não podem ser commoditizados."
      }
    ]
  },
  {
    id: 13,
    number: "13",
    title: "O Playbook do Introvertido",
    subtitle: "Como Fazer Clientes Te Perseguirem",
    icon: "fa-magnet",
    color: "from-purple-700 to-purple-500",
    duration: "55 min",
    videoUrl: "https://www.loom.com/share/447a4bc56af34e2585e601c5251806f6",
    keyTakeaways: [
      "Construindo um sistema de clientes inbound",
      "Estratégia de conteúdo para introvertidos",
      "A solução 'Eu odeio incomodar pessoas'",
      "Criando posicionamento magnético"
    ],
    overview: "Construa um sistema de aquisição de clientes que funcione com sua personalidade, não contra ela.",
    sections: [
      {
        title: "A Confissão",
        content: "Por que táticas de vendas tradicionais falham para introvertidos."
      },
      {
        title: "Arquitetura Inbound",
        content: "Construindo sistemas que atraem clientes sem prospecção fria."
      },
      {
        title: "Construção de Autoridade",
        content: "Estabelecendo expertise que faz clientes te procurarem."
      }
    ]
  },
  {
    id: 14,
    number: "14",
    title: "A Arte do Workshop",
    subtitle: "De Papagaio Entediante a Humano 3D",
    icon: "fa-chalkboard-teacher",
    color: "from-green-700 to-green-500",
    duration: "60 min",
    videoUrl: "https://www.loom.com/share/9c99092606974ebfaa6dba9f45e90657",
    keyTakeaways: [
      "Transformando de apresentador para facilitador",
      "O sistema de Checklist Pré-Voo",
      "Engajando até audiências hostis",
      "Ensinar como uma habilidade adquirida"
    ],
    overview: "Domine a arte de entregar workshops que transformam céticos em crentes.",
    sections: [
      {
        title: "A Sala de Olhares Vazios",
        content: "Diagnosticando e corrigindo problemas de engajamento em tempo real."
      },
      {
        title: "Design Pré-Voo",
        content: "Preparação sistemática que garante sucesso do workshop."
      },
      {
        title: "Técnica do Humano 3D",
        content: "Movendo de apresentação robótica para conexão autêntica."
      }
    ],
    exercises: [
      {
        type: "presentation",
        title: "Design de Abertura de Workshop",
        description: "Crie sua abertura de workshop que fisgue qualquer audiência",
        points: 200
      }
    ]
  },
  {
    id: 15,
    number: "15",
    title: "A Jogada de Comunidade Mina de Ouro B2B",
    subtitle: "Construindo Ecossistemas Pegajosos Que Imprimem Dinheiro",
    icon: "fa-users",
    color: "from-purple-700 to-purple-500",
    duration: "33 min",
    videoUrl: "https://www.loom.com/share/4fbe7cc87e4c453085933db596f6dbc0",
    keyTakeaways: [
      "Por que comunidades de 7-10 pessoas vencem cemitérios de cursos de 700 pessoas",
      "A escada de upsell/downsell que previne churn de clientes",
      "Retainer Light: psicologia de posicionamento $99/mês vs $2K/mês",
      "Os 4 hacks para construir seu ecossistema de funil B2B"
    ],
    overview: "Transforme seu negócio de consultoria de um balde furado em um ecossistema fortificado onde você nunca realmente perde um cliente—você apenas faz downsell, nutre e ascende novamente depois.",
    sections: [
      {
        title: "O Segredo de $10.000 por Mês",
        content: "Por que comunidades B2C de IA estão falhando e o modelo íntimo B2B que está imprimindo dinheiro."
      },
      {
        title: "A Jogada do Ecossistema",
        content: "Terminando o relacionamento de cliente de uma noite com a escada de upsell/downsell."
      },
      {
        title: "Quatro Hacks de Funil",
        content: "Roteamento Calendly, efeitos de reciprocidade, QR codes e a estratégia da serragem."
      },
      {
        title: "Design do Retainer Light",
        content: "Psicologia de precificação e o modelo de ascensão em camadas que mantém clientes fisgados."
      },
      {
        title: "O Roteiro Mina de Ouro de 90 Dias",
        content: "Plano de implementação fase por fase com scripts para cada cenário."
      }
    ],
    exercises: [
      {
        type: "assessment",
        title: "Auditoria de Plataforma de Comunidade",
        description: "Avalie comunidades B2C existentes e projete sua alternativa B2B",
        points: 150
      },
      {
        type: "strategy",
        title: "Design de Funil de Ecossistema",
        description: "Mapeie sua escada completa de upsell/downsell com níveis de preço",
        points: 200
      },
      {
        type: "writing",
        title: "Criação de Biblioteca de Scripts",
        description: "Escreva scripts para chamadas de descoberta, auditorias e transições de comunidade",
        points: 175
      }
    ],
    quiz: [
      {
        question: "Qual é o principal problema com comunidades B2C de IA de 700 pessoas?",
        options: [
          "Muito caras para manter",
          "Impossível escalar intimidade e altas taxas de churn",
          "Não há conteúdo suficiente para preencher",
          "Muito difícil de comercializar"
        ],
        correct: 1,
        explanation: "O problema central é que intimidade não pode ser escalada para 700+ pessoas, levando a alto churn. O conhecimento também está se tornando commoditizado, e o mercado está saturado com experiências decepcionantes."
      },
      {
        question: "O que é 'Retainer Light' no modelo de comunidade B2B?",
        options: [
          "Um pacote de consultoria de escopo reduzido",
          "Acesso fracionado de $99/mês como proteção de downsell",
          "Um teste grátis de serviços de consultoria",
          "Um programa de coaching em grupo"
        ],
        correct: 1,
        explanation: "Retainer Light é um nível de $99/mês que fornece acesso fracionado à sua expertise, servindo como proteção de downsell para manter clientes em seu ecossistema quando não podem pagar retainers completos."
      },
      {
        question: "O que é a 'Estratégia da Serragem' para conteúdo de comunidade?",
        options: [
          "Reciclando conteúdo antigo em novos formatos",
          "Gravando você fazendo trabalho de cliente e compartilhando artefatos como valor da comunidade",
          "Quebrando tópicos complexos em partes simples",
          "Usando IA para gerar posts de comunidade"
        ],
        correct: 1,
        explanation: "A Estratégia da Serragem envolve gravar você fazendo trabalho real de cliente pago e compartilhar esses artefatos (a 'serragem') com sua comunidade, fornecendo conteúdo de esforço zero que também constrói uma biblioteca de curso."
      },
      {
        question: "Como o hack de roteamento Calendly captura clientes 'quase'?",
        options: [
          "Agendando-os automaticamente em chamadas mais baratas",
          "Rastreando quem visita mas não agenda devido ao preço, então oferecendo Retainer Light",
          "Enviando e-mails de acompanhamento para todos os visitantes",
          "Reduzindo preços para prospects hesitantes"
        ],
        correct: 1,
        explanation: "O hack envolve verificar a aba 'respostas' no Calendly para ver quem 'não agendou um evento quando apresentado com a página de reserva' (geralmente devido ao preço), então oferecer pessoalmente a comunidade Retainer Light de $99/mês como alternativa."
      }
    ],
    reflection: "Como você pode transformar seus relacionamentos atuais com clientes de 'casos de uma noite' transacionais em um ecossistema pegajoso? Como seria sua estrutura de comunidade de três níveis, e qual valor específico você forneceria em cada nível para justificar as mudanças psicológicas de preço de 'algumas xícaras de café por mês' para status de retainer VIP?"
  }
];

// Funções auxiliares para rastreamento de progresso
export const getChapterProgress = (chapterId) => {
  const stored = localStorage.getItem(`chapter_${chapterId}_progress`);
  return stored ? JSON.parse(stored) : { completed: false, sectionsRead: [], exercisesCompleted: [], quizScore: 0 };
};

export const updateChapterProgress = (chapterId, progressData) => {
  localStorage.setItem(`chapter_${chapterId}_progress`, JSON.stringify(progressData));
};

export const getOverallProgress = () => {
  const totalChapters = chaptersData.length;
  let completedChapters = 0;

  chaptersData.forEach(chapter => {
    const progress = getChapterProgress(chapter.id);
    if (progress.completed) completedChapters++;
  });

  return Math.round((completedChapters / totalChapters) * 100);
};

export const getTotalPoints = () => {
  let totalPoints = 0;

  chaptersData.forEach(chapter => {
    const progress = getChapterProgress(chapter.id);
    if (progress.exercisesCompleted) {
      progress.exercisesCompleted.forEach(exerciseId => {
        const exercise = chapter.exercises?.find(e => e.title === exerciseId);
        if (exercise) totalPoints += exercise.points;
      });
    }
  });

  return totalPoints;
};
