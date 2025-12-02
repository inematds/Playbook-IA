import React from 'react';
import { chaptersData, getChapterProgress, getOverallProgress, getTotalPoints } from '../data/chapters';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = ({ currentView, onNavigate, onBack, focusMode, onToggleFocus }) => {
  const { isDark, toggleTheme } = useTheme();

  const handleExportProgress = () => {
    try {
      // Coletar todos os dados de progresso
      const exportData = {
        exportDate: new Date().toISOString(),
        overallProgress: getOverallProgress(),
        totalPoints: getTotalPoints(),
        chapters: chaptersData.map(chapter => {
          const progress = getChapterProgress(chapter.id);
          return {
            id: chapter.id,
            title: chapter.title,
            number: chapter.number,
            completed: progress.completed,
            sectionsRead: progress.sectionsRead,
            exercisesCompleted: progress.exercisesCompleted || [],
            quizScore: progress.quizScore || 0,
            videoWatched: progress.videoWatched || false,
            notes: localStorage.getItem(`chapter_${chapter.id}_notes`) || ''
          };
        })
      };

      // Criar e baixar arquivo JSON
      const jsonString = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `playbook-consultoria-ia-progresso-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      // Mostrar feedback de sucesso (opcional)
      console.log('Progresso exportado com sucesso');
    } catch (error) {
      console.error('Falha ao exportar progresso:', error);
      alert('Falha ao exportar progresso. Por favor, tente novamente.');
    }
  };

  return (
    <header className="bg-navy-800 dark:bg-gray-800 text-white sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <i className="fas fa-book text-2xl"></i>
              <h1 className="text-xl font-bold">Playbook de Consultoria em IA</h1>
            </div>

            {currentView === 'chapter' && (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-silver-300 hover:text-white transition-colors"
              >
                <i className="fas fa-arrow-left"></i>
                <span>Voltar ao Painel</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-lg bg-navy-700 dark:bg-gray-700 hover:bg-navy-600 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
              title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
              <span className="text-sm">{isDark ? 'Claro' : 'Escuro'}</span>
            </button>

            <button
              onClick={onToggleFocus}
              className="px-3 py-1 rounded-lg bg-navy-700 dark:bg-gray-700 hover:bg-navy-600 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
              title={focusMode ? "Sair do Modo Foco" : "Entrar no Modo Foco"}
            >
              <i className={`fas ${focusMode ? 'fa-expand' : 'fa-compress'}`}></i>
              <span className="text-sm">{focusMode ? 'Sair do ' : ''} Modo Foco</span>
            </button>

            <button
              onClick={handleExportProgress}
              className="px-3 py-1 rounded-lg bg-navy-700 dark:bg-gray-700 hover:bg-navy-600 dark:hover:bg-gray-600 transition-colors"
              title="Exportar seu progresso de aprendizado como arquivo JSON"
            >
              <i className="fas fa-download mr-2"></i>
              Exportar Progresso
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
