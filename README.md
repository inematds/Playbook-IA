# AI Consulting Playbook - Plataforma de Aprendizado Interativa

## Visão Geral do Projeto
- **Nome**: AI Consulting Playbook
- **Objetivo**: Transformar 15 capítulos de conhecimento em consultoria de IA em uma experiência de aprendizado imersiva e interativa
- **Recursos**:
  - 📚 15 capítulos abrangentes com trilhas de aprendizado estruturadas
  - 🎯 Exercícios interativos e quizzes
  - 📊 Acompanhamento de progresso com gamificação
  - 🤖 AI Coach - mentor virtual
  - 📝 Ferramentas de anotações e reflexão
  - 🏆 Sistema de conquistas com pontos e badges
  - 📱 Design responsivo com modo foco
  - 💾 Armazenamento local para persistência de progresso

## URLs
- **Aplicação Ativa**: https://3000-ipxioi0x16zdyte00malr-d0b9e1e2.sandbox.novita.ai/
- **Repositório GitHub**: https://github.com/Drfiya/Playbook

## Recursos Principais

### 📖 Sistema de Navegação por Capítulos
- **15 Módulos de Aprendizado**: Cada capítulo do AI Consulting Playbook transformado em um módulo interativo
- **Desbloqueio Progressivo**: Capítulos desbloqueiam sequencialmente para garantir conhecimento fundamental
- **Conteúdo Multi-Seção**: Cada capítulo dividido em seções digestíveis
- **Principais Aprendizados**: Objetivos de aprendizado claros para cada módulo

### 🎮 Componentes de Aprendizado Interativo

#### Exercícios (3 Tipos)
1. **Exercícios de Avaliação**: Pratique avaliar clientes usando frameworks
2. **Exercícios de Escrita**: Elabore declarações de posicionamento e propostas
3. **Simulações de Role-Play**: Pratique chamadas de descoberta e apresentações

#### Quizzes
- Questões de múltipla escolha com explicações
- 80% de pontuação necessária para completar o capítulo
- Feedback imediato com reforço de aprendizado

#### Prompts de Reflexão
- Perguntas instigantes para internalizar conceitos
- Cenários de aplicação pessoal

### 📊 Progresso e Gamificação

#### Acompanhamento de Progresso
- Porcentagem de conclusão geral do curso
- Indicadores de progresso capítulo por capítulo
- Rastreamento de conclusão de seções
- Status de conclusão de exercícios

#### Sistema de Pontos e Conquistas
- **Pontos**: Ganhe 100-250 pontos por exercício
- **Badges**:
  - Aprendiz (0-499 pontos)
  - Estrela em Ascensão (500-999 pontos)
  - Consultor Sênior (1000-1999 pontos)
  - Consultor Master (2000+ pontos)
- **Sequências de Aprendizado**: Acompanhe dias consecutivos de aprendizado

### 🤖 AI Coach - Mentor Virtual
- **Orientação Contextual**: Fornece dicas específicas por capítulo
- **Ações Rápidas**: Perguntas de ajuda pré-formatadas
- **Sistema de Encorajamento**: Mensagens motivacionais baseadas no progresso
- **Disponibilidade 24/7**: Assistente sempre disponível no canto da tela

### 🎯 Recursos Inteligentes

#### Modo Foco
- Ambiente de leitura sem distrações
- Esconde barra lateral e AI Coach
- Conteúdo centralizado para melhor concentração

#### Tooltips Contextuais
- Destaque texto para obter definições
- Conexões entre capítulos
- Exibição de conceitos relacionados

#### Funcionalidade de Exportação
- Download do resumo de progresso como PDF
- Exportar notas e reflexões
- Certificado de conclusão (quando todos os capítulos forem concluídos)

## Arquitetura de Dados

### Estrutura de Dados dos Capítulos
```javascript
{
  id: number,
  title: string,
  subtitle: string,
  icon: string,
  duration: string,
  keyTakeaways: string[],
  overview: string,
  sections: Section[],
  exercises: Exercise[],
  quiz: Question[],
  reflection: string
}
```

### Serviços de Armazenamento
- **Local Storage**: Acompanhamento de progresso, notas e preferências do usuário
- **Session Storage**: Gerenciamento de estado temporário
- **IndexedDB**: (Futuro) Capacidade offline e armazenamento de grandes dados

### Modelo de Dados de Progresso
- Status de conclusão do capítulo
- Array de seções lidas
- Array de exercícios completados
- Pontuações de quizzes
- Notas por capítulo
- Total de pontos ganhos
- Conquistas desbloqueadas

## Guia do Usuário

### Começando
1. **Visão do Dashboard**: Comece no dashboard principal mostrando todos os 15 capítulos
2. **Inicie o Aprendizado**: Clique no Capítulo 1 para iniciar sua jornada
3. **Leia as Seções**: Trabalhe em cada seção sistematicamente
4. **Complete os Exercícios**: Aplique conceitos através de exercícios interativos
5. **Faça os Quizzes**: Teste seu conhecimento com quizzes de capítulo
6. **Acompanhe o Progresso**: Monitore seu avanço através do rastreador na barra lateral

### Dicas de Navegação
- Use o **Modo Foco** para leitura sem distrações
- Clique no ícone do **AI Coach** para ajuda instantânea
- **Marque** seções importantes para revisão posterior
- Use **atalhos de teclado** (em breve):
  - `Space` - Próxima seção
  - `Shift+Space` - Seção anterior
  - `F` - Alternar modo foco

### Trilha de Aprendizado
1. **Fundamentos** (Capítulos 1-3): Posicionamento central e descoberta
2. **Habilidades** (Capítulos 4-7): Precificação, comunicação e auditorias
3. **Avançado** (Capítulos 8-11): Técnicas especializadas e frameworks
4. **Maestria** (Capítulos 12-15): Tornando-se insubstituível e escalando

## Stack Técnico
- **Frontend**: React 18 + TypeScript
- **Estilização**: Tailwind CSS com tema customizado
- **Ferramenta de Build**: Vite
- **Gerenciamento de Estado**: React hooks + Local Storage
- **Ícones**: Font Awesome 6
- **Deployment**: Gerenciador de processos PM2

## Deployment
- **Plataforma**: Servidor de desenvolvimento local
- **Status**: ✅ Ativo
- **Tech Stack**: React + Vite + Tailwind CSS
- **Última Atualização**: Novembro 2025

## Recursos Atualmente Completos ✅
- Estrutura completa de conteúdo de 15 capítulos com modelo de dados
- **Sistema de conteúdo rich text** com formatação estilo markdown
- **Todos os 15 capítulos completos** com conteúdo completo extraído (múltiplas seções detalhadas)
- Dashboard interativo com visualização de progresso
- Visualização de capítulo com navegação multi-seção
- Sistema de exercícios com 3 tipos de atividades
- Funcionalidade de quiz com pontuação
- Acompanhamento de progresso com persistência em local storage
- Assistente virtual AI Coach
- Sistema de conquistas/badges
- Modo foco para aprendizado sem distrações
- Design responsivo para todos os dispositivos
- Capacidade de fazer anotações por capítulo
- **Formatação de conteúdo**: Negrito, itálico, cabeçalhos, listas, callouts, checklists
- **Integração de vídeo**: Vídeos Loom incorporados para cada capítulo

## Recursos Ainda Não Implementados 🚧
- Funcionalidade de exportação PDF
- Atalhos de teclado
- Toggle de modo escuro
- Busca em todo o conteúdo
- Sistema de marcadores
- Compartilhamento social de conquistas
- Geração de certificados
- API backend para sincronização na nuvem
- Versão de aplicativo móvel
- Recursos de aprendizado colaborativo

## Próximos Passos Recomendados 📋
1. **Aprimoramento de Conteúdo**: Adicionar tabelas, diagramas e elementos visuais dos documentos originais
2. **Integração Backend**: Construir API para contas de usuário e sincronização de progresso na nuvem
3. **Analytics Avançado**: Rastrear padrões de aprendizado e fornecer recomendações personalizadas
4. **Recursos de Comunidade**: Adicionar fóruns de discussão ou aprendizado entre pares
5. **Otimização Mobile**: Criar PWA ou aplicativos móveis nativos
6. **Sistema de Certificação**: Implementar certificação formal ao concluir o curso
7. **Atualizações de Conteúdo**: Atualizações regulares com novas tendências de consultoria de IA
8. **Integração**: Conectar com ferramentas e plataformas reais de consultoria

### Como Adicionar Mais Conteúdo

A aplicação foi projetada para aceitar facilmente conteúdo completo de capítulos. Veja **`CONTENT_UPDATE_GUIDE.md`** para:
- Instruções passo a passo para adicionar conteúdo de capítulos
- Diretrizes de formatação para rich text
- Exemplos de estrutura de conteúdo
- Procedimentos de teste

**Status Atual**: Todos os 15 capítulos possuem conteúdo completo extraído dos arquivos DOCX originais.

## Instalação e Configuração

```bash
# Clone o repositório
git clone [repository-url]

# Instale as dependências
cd webapp
npm install

# Faça o build da aplicação
npm run build

# Inicie a aplicação
npm run serve

# Ou use PM2
pm2 start ecosystem.config.cjs
```

### Notas de Configuração
- O `vite.config.js` inclui configuração `preview.allowedHosts` para deployment em sandbox
- Atualize o array de hosts permitidos se fizer deploy em domínios diferentes
- Configuração atual suporta: `3000-ipxioi0x16zdyte00malr-d0b9e1e2.sandbox.novita.ai`

## Variáveis de Ambiente
Atualmente nenhuma variável de ambiente é necessária. Versões futuras podem precisar:
- `VITE_API_URL` - Endpoint da API backend
- `VITE_AUTH_TOKEN` - Token de autenticação
- `VITE_ANALYTICS_ID` - ID de rastreamento de analytics

## Contribuindo
Esta é uma plataforma educacional projetada para ajudar consultores a dominar habilidades de consultoria de IA. Contribuições para melhorias de conteúdo e aprimoramento de recursos são bem-vindas.

## Licença
Proprietário - Todos os direitos reservados

---

**Construído com ❤️ para Consultores de IA**
