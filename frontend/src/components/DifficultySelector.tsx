interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => void;
}

export default function DifficultySelector({ onSelectDifficulty }: DifficultySelectorProps) {
  const difficulties = [
    {
      id: 'easy',
      name: 'Fácil',
      icon: '🌱',
      description: '15 segundos por pregunta',
      points: '10 puntos base',
      color: 'from-green-400 to-green-600',
      hoverColor: 'hover:from-green-500 hover:to-green-700'
    },
    {
      id: 'medium',
      name: 'Media',
      icon: '⚡',
      description: '10 segundos por pregunta',
      points: '25 puntos base',
      color: 'from-yellow-400 to-orange-500',
      hoverColor: 'hover:from-yellow-500 hover:to-orange-600'
    },
    {
      id: 'hard',
      name: 'Difícil',
      icon: '🔥',
      description: '7 segundos por pregunta',
      points: '50 puntos base',
      color: 'from-red-500 to-pink-600',
      hoverColor: 'hover:from-red-600 hover:to-pink-700'
    },
    {
      id: 'mixed',
      name: 'Mixto',
      icon: '🎲',
      description: 'Todas las dificultades',
      points: 'Puntos variables',
      color: 'from-purple-500 to-indigo-600',
      hoverColor: 'hover:from-purple-600 hover:to-indigo-700'
    }
  ];

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
        Elige tu Dificultad
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Tienes 3 vidas ❤️ | Gana rachas para multiplicar puntos 🔥
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {difficulties.map((diff) => (
          <button
            key={diff.id}
            onClick={() => onSelectDifficulty(diff.id as 'easy' | 'medium' | 'hard' | 'mixed')}
            className={`bg-gradient-to-r ${diff.color} ${diff.hoverColor} text-white p-6 rounded-xl shadow-lg transition duration-200 transform hover:scale-105`}
          >
            <div className="text-5xl mb-2">{diff.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{diff.name}</h3>
            <p className="text-sm opacity-90 mb-1">{diff.description}</p>
            <p className="text-sm font-semibold">{diff.points}</p>
          </button>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-4">
        <h4 className="font-bold text-blue-900 mb-2">💡 Sistema de Puntuación:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>✨ <strong>Rachas:</strong> 3 seguidas x1.5 | 5 seguidas x2 | 10 seguidas x3</li>
          <li>⚠️ <strong>Vidas:</strong> Pierdes 1 vida por error | Sin vidas = Game Over</li>
          <li>⏱️ <strong>Tiempo:</strong> Si se acaba el tiempo = respuesta incorrecta</li>
        </ul>
      </div>
    </div>
  );
}