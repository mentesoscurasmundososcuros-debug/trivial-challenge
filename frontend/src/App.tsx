import { useState } from 'react';
import { questions } from './data/questions';
import { getRanking, addToRanking, isTopScore, type RankingEntry } from './utils/ranking';

function App() {
  // Estados del juego
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [ranking, setRanking] = useState<RankingEntry[]>(getRanking());

  const currentQuestion = questions[currentQuestionIndex];
  const isGameFinished = currentQuestionIndex >= questions.length;

  // Función para iniciar el juego
  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowNameInput(false);
    setPlayerName('');
  };

  // Función para seleccionar respuesta
  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  // Función para siguiente pregunta
  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  // Función para guardar puntuación
  const handleSaveScore = () => {
    if (playerName.trim()) {
      addToRanking(playerName.trim(), score, questions.length);
      setRanking(getRanking());
      setShowNameInput(false);
    }
  };

  // Pantalla de inicio
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            🎯 Trivial Challenge
          </h1>
          <p className="text-center text-gray-600 mb-8">
            ¡Bienvenido! Prepárate para poner a prueba tus conocimientos.
          </p>
          
          {/* Mostrar ranking si existe */}
          {ranking.length > 0 && (
            <div className="mb-8 bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                🏆 Hall of Fame
              </h2>
              <div className="space-y-2">
                {ranking.map((entry, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center bg-white p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-purple-600">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-800">{entry.name}</p>
                        <p className="text-xs text-gray-500">{entry.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-purple-600">
                        {entry.score}/{entry.totalQuestions}
                      </p>
                      <p className="text-xs text-gray-500">
                        {Math.round((entry.score / entry.totalQuestions) * 100)}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={startGame}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            🚀 Comenzar Juego
          </button>
        </div>
      </div>
    );
  }

  // Pantalla de fin del juego
  if (isGameFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const canEnterRanking = isTopScore(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            ¡Juego Terminado! 🎉
          </h2>
          <p className="text-6xl font-bold text-purple-600 mb-2 text-center">
            {score}/{questions.length}
          </p>
          <p className="text-2xl text-gray-500 mb-6 text-center">
            {percentage}% correcto
          </p>
          <p className="text-xl text-gray-600 mb-8 text-center">
            {percentage === 100 ? "¡Perfecto! 🌟" : 
             percentage >= 70 ? "¡Muy bien! 👏" : 
             "¡Sigue practicando! 💪"}
          </p>

          {/* Input de nombre si entra en ranking */}
          {canEnterRanking && !showNameInput && ranking.findIndex(r => r.score === score) === -1 && (
            <div className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
              <p className="text-center text-yellow-800 font-semibold mb-4">
                🎊 ¡Entraste en el Top 5! Guarda tu puntuación
              </p>
              <button
                onClick={() => setShowNameInput(true)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                💾 Guardar Puntuación
              </button>
            </div>
          )}

          {showNameInput && (
            <div className="mb-6 p-4 bg-purple-50 rounded-lg">
              <input
                type="text"
                placeholder="Tu nombre..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSaveScore()}
                className="w-full p-3 border-2 border-purple-300 rounded-lg mb-3 focus:outline-none focus:border-purple-500"
                maxLength={20}
                autoFocus
              />
              <button
                onClick={handleSaveScore}
                disabled={!playerName.trim()}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                ✅ Confirmar
              </button>
            </div>
          )}

          {/* Mostrar ranking */}
          {ranking.length > 0 && (
            <div className="mb-6 bg-purple-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                🏆 Top 5
              </h3>
              <div className="space-y-2">
                {ranking.map((entry, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center bg-white p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-purple-600">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-800">{entry.name}</p>
                        <p className="text-xs text-gray-500">{entry.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-purple-600">
                        {entry.score}/{entry.totalQuestions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={startGame}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            🔄 Jugar de Nuevo
          </button>
        </div>
      </div>
    );
  }

  // Pantalla del juego
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header con progreso */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-purple-600">
              Pregunta {currentQuestionIndex + 1}/{questions.length}
            </span>
            <span className="text-sm font-semibold text-purple-600">
              Puntos: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Categoría */}
        <div className="mb-4">
          <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
            {currentQuestion.category}
          </span>
        </div>

        {/* Pregunta */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Opciones */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showColors = showResult;

            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition duration-200 ";
            
            if (!showColors) {
              buttonClass += "border-gray-300 hover:border-purple-500 hover:bg-purple-50";
            } else if (isCorrect) {
              buttonClass += "border-green-500 bg-green-50";
            } else if (isSelected && !isCorrect) {
              buttonClass += "border-red-500 bg-red-50";
            } else {
              buttonClass += "border-gray-300 opacity-50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={buttonClass}
              >
                <span className="font-semibold">{option}</span>
                {showColors && isCorrect && <span className="ml-2">✓</span>}
                {showColors && isSelected && !isCorrect && <span className="ml-2">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Botón siguiente */}
        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            {currentQuestionIndex < questions.length - 1 ? "Siguiente Pregunta →" : "Ver Resultados"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;