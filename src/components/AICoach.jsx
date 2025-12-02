import React, { useState } from 'react';

const AICoach = ({ isVisible, onToggle, currentChapter }) => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    {
      role: 'coach',
      message: "👋 Olá! Sou seu Coach de IA. Estou aqui para ajudá-lo a dominar o Playbook de Consultoria em IA. Pergunte-me qualquer coisa sobre os conceitos, exercícios ou como aplicar o que você está aprendendo!"
    }
  ]);

  const coachResponses = {
    greeting: [
      "Ótimo ver você progredindo! O que gostaria de explorar hoje?",
      "Olá! Pronto para elevar suas habilidades de consultoria?",
      "Bem-vindo de volta! Com quais perguntas posso ajudá-lo?"
    ],
    encouragement: [
      "Você está indo muito bem! Continue com esse ritmo.",
      "Excelente progresso! Cada capítulo se constrói sobre o anterior.",
      "Lembre-se: o verdadeiro aprendizado acontece quando você aplica esses conceitos com clientes reais."
    ],
    tips: [
      "Dica profissional: Foque em entender o 'porquê' por trás de cada framework, não apenas em memorizar os passos.",
      "Tente aplicar o que você aprende imediatamente - mesmo de pequenas formas com clientes atuais.",
      "Os consultores mais bem-sucedidos são aqueles que adaptam esses frameworks ao seu estilo único."
    ],
    chapterSpecific: {
      1: "A chave do Capítulo 1 é entender que dizer 'não' constrói mais confiança do que dizer 'sim' para tudo.",
      2: "Nas chamadas de descoberta, lembre-se: diagnostique antes de prescrever. Seja o médico, não o traficante.",
      3: "Sinais de alerta não são apenas avisos - são oportunidades para qualificar maus clientes antes que desperdicem seu tempo.",
      4: "O preço baseado em valor começa com a compreensão do impacto no negócio do cliente, não do seu investimento de tempo.",
      5: "Gravar suas chamadas é desconfortável no início, mas é a maneira mais rápida de melhorar sua comunicação.",
      6: "A auditoria de $20k funciona porque fornece valor imediato enquanto o posiciona como especialista.",
      7: "Habilidades técnicas abrem a porta, mas habilidades de comunicação mantêm você na sala.",
      8: "A técnica do Menu Chinês dá aos clientes controle enquanto mantém seu posicionamento premium.",
      9: "Cada engajamento 'fracassado' é mensalidade para sua educação. Extraia a lição e siga em frente.",
      10: "Velocidade vem de sistemas. Construa seus templates e frameworks uma vez, use-os para sempre.",
      11: "Compreender os fundamentos de ML diferencia você de 90% dos 'consultores de IA' que só conhecem ChatGPT.",
      12: "Torne-se a calma na tempestade do seu cliente. Eles estão se afogando no hype da IA - seja sua boia salva-vidas.",
      13: "Introvertidos podem se destacar em consultoria construindo sistemas que atraem clientes em vez de persegui-los.",
      14: "Ótimos workshops não são sobre transferência de informação - são sobre transformação e engajamento."
    }
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newUserMessage = { role: 'user', message };
    let coachReply = '';

    // Simple keyword-based responses
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      coachReply = getRandomResponse(coachResponses.greeting);
    } else if (lowerMessage.includes('ajuda') || lowerMessage.includes('help') || lowerMessage.includes('preso') || lowerMessage.includes('stuck')) {
      coachReply = "Vejo que você está procurando ajuda. Com qual conceito ou exercício específico você está tendo dificuldades? Lembre-se, confusão é apenas clareza esperando para acontecer.";
    } else if (lowerMessage.includes('exercício') || lowerMessage.includes('exercise') || lowerMessage.includes('prática') || lowerMessage.includes('practice')) {
      coachReply = "Ótima pergunta sobre exercícios! A melhor abordagem é completá-los imediatamente após ler cada seção. Tente relacionar cada exercício a uma situação real de cliente que você enfrentou.";
    } else if (lowerMessage.includes('cliente') || lowerMessage.includes('client') || lowerMessage.includes('descoberta') || lowerMessage.includes('discovery')) {
      coachReply = "Interações com clientes são onde teoria encontra realidade. Foque em fazer perguntas 'por quê' e ouvir mais do que falar. A regra 80/20 se aplica: eles devem falar 80% do tempo.";
    } else if (lowerMessage.includes('preço') || lowerMessage.includes('pricing') || lowerMessage.includes('dinheiro') || lowerMessage.includes('money')) {
      coachReply = "Precificação é sobre valor, não tempo. Calcule o impacto no negócio da sua solução, depois precifique entre 10-20% desse valor. Nunca compita por preço - compita por expertise.";
    } else if (currentChapter && (lowerMessage.includes('capítulo') || lowerMessage.includes('chapter'))) {
      coachReply = coachResponses.chapterSpecific[currentChapter.id] || getRandomResponse(coachResponses.tips);
    } else {
      coachReply = getRandomResponse([...coachResponses.encouragement, ...coachResponses.tips]);
    }

    setConversation([
      ...conversation,
      newUserMessage,
      { role: 'coach', message: coachReply }
    ]);
    setMessage('');
  };

  if (!isVisible) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-14 h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 transition-all hover:scale-110"
      >
        <i className="fas fa-comments text-xl"></i>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-2xl z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-500 text-white p-4 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3 className="font-semibold">Coach de IA</h3>
              <p className="text-xs text-silver-300">Sempre aqui para ajudar</p>
            </div>
          </div>
          <button onClick={onToggle} className="text-white/80 hover:text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {/* Conversation */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-navy-700 text-white'
                  : 'bg-silver-100 text-navy-800'
              }`}
            >
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-silver-200">
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => setMessage("Em que devo focar neste capítulo?")}
            className="text-xs px-3 py-1 bg-silver-100 rounded-full hover:bg-silver-200"
          >
            Dicas do Capítulo
          </button>
          <button
            onClick={() => setMessage("Como aplico isso na vida real?")}
            className="text-xs px-3 py-1 bg-silver-100 rounded-full hover:bg-silver-200"
          >
            Aplicação Prática
          </button>
          <button
            onClick={() => setMessage("Estou me sentindo travado")}
            className="text-xs px-3 py-1 bg-silver-100 rounded-full hover:bg-silver-200"
          >
            Sair do Bloqueio
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-silver-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Pergunte-me qualquer coisa..."
            className="flex-1 px-3 py-2 border border-silver-300 rounded-lg text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-navy-700 text-white rounded-lg hover:bg-navy-800"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
