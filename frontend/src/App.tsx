import { useState, useEffect } from 'react';
import { getQuestionsByDifficulty } from './data/questions';
import { getRanking, addToRanking, isTopScore, type RankingEntry } from './utils/ranking';
import DifficultySelector from './components/DifficultySelector';

type Difficulty = 'easy' | 'medium' | 'hard' | 'mixed';

function App() {
  // Estados del juego
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [ranking, setRanking] = useState<RankingEntry[]>(getRanking());
  const [bestStreak, setBestStreak] = useState(0);

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const isGameFinished = currentQuestionIndex >= gameQuestions.length || lives === 0;

  // Temporizador
  useEffect(() => {
    if (!gameStarted || !currentQuestion || showResult || isGameFinished) return;

    setTimeLeft(currentQuestion.timeLimit);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Tiempo agotado = respuesta incorrecta
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, gameStarted, showResult, isGameFinished]);

  // Calcular puntos según dificultad
  const getBasePoints = (diff: string) => {
    switch (diff) {
      case 'easy': return 10;
      case 'medium': return 25;
      case 'hard': return 50;
      default: return 10;
    }
  };

  // Calcular multiplicador de racha
  const getStreakMultiplier = (currentStreak: number) => {
    if (currentStreak >= 10) return 3;
    if (currentStreak >= 5) return 2;
    if (currentStreak >= 3) return 1.5;
    return 1;
  };

  // Función para cuando se acaba el tiempo
  const handleTimeOut = () => {
  setSelectedAnswer(-1);
  setShowResult(true);
  setLives(lives - 1);
  
  // Guardar la mejor racha antes de resetear
  if (streak > bestStreak) {
    setBestStreak(streak);
  }
  
  setStreak(0);
  setBestStreak(0);
  };

  // Función para iniciar el juego con dificultad
  const startGame = (selectedDifficulty: Difficulty) => {
    const questions = getQuestionsByDifficulty(selectedDifficulty);
    const shuffled = [...questions].sort(() => Math.random() - 0.5); // Mezclar preguntas
    
    setDifficulty(selectedDifficulty);
    setGameQuestions(shuffled);
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setTotalScore(0);
    setLives(3);
    setStreak(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowNameInput(false);
    setPlayerName('');
  };

  // Función para volver al selector de dificultad
  const backToMenu = () => {
    setGameStarted(false);
    setDifficulty(null);
    setGameQuestions([]);
  };

  // Función para seleccionar respuesta
  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
  // Calcular puntos
  const basePoints = getBasePoints(currentQuestion.difficulty);
  const newStreak = streak + 1;
  const multiplier = getStreakMultiplier(newStreak);
  const points = Math.round(basePoints * multiplier);
  
  setTotalScore(totalScore + points);
  setStreak(newStreak);
  
  // Actualizar mejor racha si es necesario
  if (newStreak > bestStreak) {
    setBestStreak(newStreak);
  }
} else {
  // Respuesta incorrecta
  setLives(lives - 1);
  setStreak(0);
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
      addToRanking(playerName.trim(), totalScore, gameQuestions.length);
      setRanking(getRanking());
      setShowNameInput(false);
    }
  };

  // Pantalla de selector de dificultad
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            🎯 Trivial Challenge
          </h1>
          
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
                        {entry.score} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <DifficultySelector onSelectDifficulty={startGame} />
        </div>
      </div>
    );
  }

  // Pantalla de fin del juego
  if (isGameFinished) {
    const canEnterRanking = isTopScore(totalScore);
    const questionsAnswered = currentQuestionIndex;
    const correctAnswers = gameQuestions.slice(0, currentQuestionIndex).filter((q, idx) => {
      // Esta es una aproximación, podrías guardar las respuestas para ser más preciso
      return true; // Simplificado
    }).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            {lives === 0 ? "💔 Game Over" : "🎉 ¡Completado!"}
          </h2>
          <p className="text-6xl font-bold text-purple-600 mb-2 text-center">
            {totalScore}
          </p>
          <p className="text-2xl text-gray-500 mb-6 text-center">
            puntos totales
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">Preguntas</p>
              <p className="text-2xl font-bold text-purple-600">{questionsAnswered}/{gameQuestions.length}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">Mejor Racha</p>
              <p className="text-2xl font-bold text-purple-600">{bestStreak} 🔥</p>
            </div>
          </div>

          {/* Input de nombre si entra en ranking */}
          {canEnterRanking && !showNameInput && (
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
                        {entry.score} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={backToMenu}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            🏠 Volver al Menú
          </button>
        </div>
      </div>
    );
  }

  // Pantalla del juego
  const streakMultiplier = getStreakMultiplier(streak);
  const basePoints = getBasePoints(currentQuestion.difficulty);
  const potentialPoints = Math.round(basePoints * streakMultiplier);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header con stats */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-sm font-semibold text-purple-600">
                Pregunta {currentQuestionIndex + 1}/{gameQuestions.length}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-2xl">
                    {i < lives ? '❤️' : '🖤'}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">{totalScore}</p>
                <p className="text-xs text-gray-500">puntos</p>
              </div>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / gameQuestions.length) * 100}%` }}
            />
          </div>

          {/* Temporizador */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                timeLeft <= 3 ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${(timeLeft / currentQuestion.timeLimit) * 100}%` }}
            />
          </div>
          <p className={`text-center mt-1 font-bold ${timeLeft <= 3 ? 'text-red-500' : 'text-gray-600'}`}>
            ⏱️ {timeLeft}s
          </p>
        </div>

        {/* Racha y puntos potenciales */}
        {streak >= 3 && (
          <div className="mb-4 text-center bg-orange-100 p-3 rounded-lg">
            <p className="text-orange-800 font-bold">
              🔥 Racha: {streak} | Multiplicador: x{streakMultiplier} | Puntos: {potentialPoints}
            </p>
          </div>
        )}

        {/* Categoría y dificultad */}
        <div className="mb-4 flex gap-2">
          <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
            {currentQuestion.category}
          </span>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
            currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
            currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            {currentQuestion.difficulty === 'easy' ? '🌱 Fácil' :
             currentQuestion.difficulty === 'medium' ? '⚡ Media' :
             '🔥 Difícil'}
          </span>
        </div>

        {/* Pregunta */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Opciones */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option: string, index: number) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showColors = showResult;
            const isTimeOut = selectedAnswer === -1;

            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition duration-200 ";
            
            if (!showColors) {
              buttonClass += "border-gray-300 hover:border-purple-500 hover:bg-purple-50 cursor-pointer";
            } else if (isCorrect) {
              buttonClass += "border-green-500 bg-green-50";
            } else if (isSelected && !isCorrect) {
              buttonClass += "border-red-500 bg-red-50";
            } else if (isTimeOut && isCorrect) {
              buttonClass += "border-green-500 bg-green-50";
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

        {/* Mensaje de tiempo agotado */}
        {showResult && selectedAnswer === -1 && (
          <div className="mb-4 p-4 bg-red-100 border-2 border-red-400 rounded-lg text-center">
            <p className="text-red-800 font-bold">⏰ ¡Tiempo agotado!</p>
          </div>
        )}

        {/* Botón siguiente */}
        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            {currentQuestionIndex < gameQuestions.length - 1 ? "Siguiente Pregunta →" : "Ver Resultados"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;