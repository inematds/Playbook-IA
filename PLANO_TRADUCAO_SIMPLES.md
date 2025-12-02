# Plano de Tradução: Português Brasileiro (Apenas PT-BR)

## 🎯 Objetivo

Traduzir **100% da aplicação** para português brasileiro, substituindo todo o conteúdo em inglês.

---

## 📊 Escopo Total

| Arquivo | Linhas | Conteúdo |
|---------|--------|----------|
| `src/data/chapters.js` | 748 | Títulos, exercícios, quizzes |
| `src/data/fullChapters.js` | 3.756 | Conteúdo completo dos 15 capítulos |
| `src/components/*.jsx` | ~1.200 | Labels, botões, mensagens da UI |
| `src/utils/storage.ts` | 547 | Achievements, mensagens |
| `README.md` + docs | ~500 | Documentação |
| **TOTAL** | **~6.751 linhas** | |

---

## 📝 Etapas de Execução

### **ETAPA 1: Conteúdo dos Capítulos** (Prioridade Alta)

#### 1.1 Traduzir Metadados (`chapters.js`)
- [ ] Capítulo 1: Título, overview, exercícios, quiz
- [ ] Capítulo 2: Título, overview, exercícios, quiz
- [ ] Capítulo 3: Título, overview, exercícios, quiz
- [ ] Capítulo 4: Título, overview, exercícios, quiz
- [ ] Capítulo 5: Título, overview, exercícios, quiz
- [ ] Capítulo 6: Título, overview, exercícios, quiz
- [ ] Capítulo 7: Título, overview, exercícios, quiz
- [ ] Capítulo 8: Título, overview, exercícios, quiz
- [ ] Capítulo 9: Título, overview, exercícios, quiz
- [ ] Capítulo 10: Título, overview, exercícios, quiz
- [ ] Capítulo 11: Título, overview, exercícios, quiz
- [ ] Capítulo 12: Título, overview, exercícios, quiz
- [ ] Capítulo 13: Título, overview, exercícios, quiz
- [ ] Capítulo 14: Título, overview, exercícios, quiz
- [ ] Capítulo 15: Título, overview, exercícios, quiz

#### 1.2 Traduzir Conteúdo Completo (`fullChapters.js`)
- [ ] Capítulo 1: Todas as seções
- [ ] Capítulo 2: Todas as seções
- [ ] Capítulo 3: Todas as seções
- [ ] Capítulo 4: Todas as seções
- [ ] Capítulo 5: Todas as seções
- [ ] Capítulo 6: Todas as seções
- [ ] Capítulo 7: Todas as seções
- [ ] Capítulo 8: Todas as seções
- [ ] Capítulo 9: Todas as seções
- [ ] Capítulo 10: Todas as seções
- [ ] Capítulo 11: Todas as seções
- [ ] Capítulo 12: Todas as seções
- [ ] Capítulo 13: Todas as seções
- [ ] Capítulo 14: Todas as seções
- [ ] Capítulo 15: Todas as seções

### **ETAPA 2: Interface do Usuário** (Prioridade Média)

- [ ] `Dashboard.jsx` - Títulos, botões, mensagens
- [ ] `Navigation.jsx` - Menu, links
- [ ] `ChapterView.jsx` - "Anterior/Próximo", "Marcar como completo"
- [ ] `ProgressTracker.jsx` - Labels de progresso
- [ ] `AICoach.jsx` - Mensagens de boas-vindas, prompts
- [ ] `ChapterContent.jsx` - Mensagens de erro, avisos
- [ ] `LoomVideoPlayer.jsx` - Labels do player

### **ETAPA 3: Sistema de Armazenamento** (Prioridade Baixa)

- [ ] `storage.ts` - Achievements (títulos e descrições)
- [ ] `storage.ts` - Mensagens do sistema
- [ ] `aiCoach.ts` - Contextos e prompts

### **ETAPA 4: Documentação** (Prioridade Baixa)

- [ ] `README.md` - Traduzir documentação principal
- [ ] `CLAUDE.md` - Atualizar instruções
- [ ] `package.json` - Atualizar description

### **ETAPA 5: Testes e Deploy**

- [ ] Build local: `npm run build`
- [ ] Testar navegação completa
- [ ] Verificar formatação markdown
- [ ] Testar exercícios e quizzes
- [ ] Commit e push
- [ ] Verificar deploy no GitHub Pages

---

## ⏱️ Estimativa de Tempo

| Etapa | Tempo | Método |
|-------|-------|--------|
| 1.1 Metadados (chapters.js) | 2-3 horas | IA + revisão manual |
| 1.2 Conteúdo completo (fullChapters.js) | 4-5 horas | IA + revisão manual |
| 2. Interface UI | 1-2 horas | Manual (menos texto) |
| 3. Storage/Sistema | 30 min | Manual |
| 4. Documentação | 30 min | Manual |
| 5. Testes e Deploy | 1 hora | Manual |
| **TOTAL** | **9-12 horas** | |

---

## 🚀 Estratégia de Execução

### Abordagem: **Tradução por IA + Revisão Manual**

1. **IA traduz** todo o conteúdo (~80% qualidade)
2. **Revisão humana** de termos técnicos:
   - AI → IA
   - Consulting → Consultoria
   - Framework → Framework (manter)
   - Prompt → Prompt (manter)
   - Stakeholder → Parte interessada / Stakeholder
   - ROI → ROI (manter sigla)

### Ordem de Execução

```
1º → chapters.js (metadados) - Base para navegação
2º → Dashboard + Navigation - Interface visível
3º → fullChapters.js Caps 1-5 - Primeiros conteúdos
4º → fullChapters.js Caps 6-10
5º → fullChapters.js Caps 11-15
6º → Componentes restantes
7º → Storage + Documentação
8º → Testes finais
```

---

## 📌 Regras de Tradução

### ✅ Traduzir:
- Títulos, descrições, conteúdo educacional
- Labels de botões ("Start", "Continue" → "Iniciar", "Continuar")
- Mensagens de erro/sucesso
- Achievements

### ❌ NÃO Traduzir:
- Nomes próprios (Dr. Lutfiya Miller)
- URLs e links
- Código e comandos técnicos
- Termos consagrados: "Playbook", "Framework", "Prompt"
- IDs e chaves técnicas (`chapter-1`, `quiz-id`, etc.)

### 🔄 Manter Formatação:
- Markdown: `**negrito**`, `*itálico*`, `### títulos`
- Listas: `- item`, `- [ ] checklist`
- Callouts: `🎓`, `🔧`, `⚠️`, `💎`
- Code blocks: `` `código` ``

---

## ✅ Critérios de Sucesso

- [ ] 100% do conteúdo em português
- [ ] Zero erros de renderização
- [ ] Formatação markdown preservada
- [ ] Quizzes funcionando
- [ ] Exercícios funcionando
- [ ] Build sem erros
- [ ] Site deployado

---

## 🔄 Próximos Passos

### Agora:
1. ✅ Plano aprovado
2. ⏳ Começar tradução de `chapters.js`
3. ⏳ Traduzir componentes principais

### Depois:
4. ⏳ Traduzir `fullChapters.js` (por lotes)
5. ⏳ Revisar e testar
6. ⏳ Deploy

---

## 💡 Método de Trabalho

### Por Lotes (Batches):
- **Lote 1**: chapters.js completo
- **Lote 2**: Dashboard + Navigation
- **Lote 3**: fullChapters caps 1-5
- **Lote 4**: fullChapters caps 6-10
- **Lote 5**: fullChapters caps 11-15
- **Lote 6**: Componentes restantes
- **Lote 7**: Finalização

**Commit após cada lote** para não perder progresso!

---

**Data:** 2025-12-02
**Status:** 📋 Pronto para executar
**Idioma Final:** 🇧🇷 Português Brasileiro (100%)
