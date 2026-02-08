interface GameStatsProps {
  answerHistory: {
    question: any;
    correct: boolean;
    timeUsed: number;
  }[];
}

export default function GameStats({ answerHistory }: GameStatsProps) {
  if (answerHistory.length === 0) return null;

  // Calcular estadísticas
  const totalAnswered = answerHistory.length;
  const correctAnswers = answerHistory.filter(a => a.correct).length;
  const accuracy = Math.round((correctAnswers / totalAnswered) * 100);
  
  // Tiempo promedio
  const avgTime = answerHistory.reduce((sum, a) => sum + a.timeUsed, 0) / totalAnswered;
  
  // Respuesta más rápida (solo correctas)
  const correctAnswersWithTime = answerHistory.filter(a => a.correct);
  const fastestAnswer = correctAnswersWithTime.length > 0 
    ? Math.min(...correctAnswersWithTime.map(a => a.timeUsed))
    : 0;
  
  // Estadísticas por categoría
  const categories = [...new Set(answerHistory.map(a => a.question.category))];
  const categoryStats = categories.map(cat => {
    const catAnswers = answerHistory.filter(a => a.question.category === cat);
    const catCorrect = catAnswers.filter(a => a.correct).length;
    const catAccuracy = Math.round((catCorrect / catAnswers.length) * 100);
    
    return { category: cat, accuracy: catAccuracy, total: catAnswers.length };
  });

  return (
    <div className="mb-6 bg-blue-50 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        📊 Estadísticas Detalladas
      </h3>
      
      {/* Stats generales */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-3 rounded-lg text-center">
          <p className="text-sm text-gray-600">Precisión</p>
          <p className="text-2xl font-bold text-blue-600">{accuracy}%</p>
        </div>
        <div className="bg-white p-3 rounded-lg text-center">
          <p className="text-sm text-gray-600">Tiempo Promedio</p>
          <p className="text-2xl font-bold text-blue-600">{avgTime.toFixed(1)}s</p>
        </div>
        <div className="bg-white p-3 rounded-lg text-center">
          <p className="text-sm text-gray-600">Más Rápida</p>
          <p className="text-2xl font-bold text-blue-600">
            {fastestAnswer > 0 ? `${fastestAnswer.toFixed(1)}s` : '-'}
          </p>
        </div>
      </div>

      {/* Stats por categoría */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-blue-800 mb-2">Por Categoría:</p>
        {categoryStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-3 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-gray-700">{stat.category}</span>
              <span className="text-blue-600 font-bold">{stat.accuracy}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  stat.accuracy >= 70 ? 'bg-green-500' : 
                  stat.accuracy >= 50 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`}
                style={{ width: `${stat.accuracy}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{stat.total} preguntas</p>
          </div>
        ))}
      </div>
    </div>
  );
}