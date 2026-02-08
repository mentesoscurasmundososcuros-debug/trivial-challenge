export interface RankingEntry {
  name: string;
  score: number;
  date: string;
  totalQuestions: number;
}

const RANKING_KEY = 'trivial-ranking';
const MAX_ENTRIES = 5;

export const getRanking = (): RankingEntry[] => {
  const stored = localStorage.getItem(RANKING_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const addToRanking = (name: string, score: number, totalQuestions: number): boolean => {
  const ranking = getRanking();
  
  const newEntry: RankingEntry = {
    name,
    score,
    date: new Date().toLocaleDateString('es-ES'),
    totalQuestions
  };
  
  ranking.push(newEntry);
  
  // Ordenar por puntuación (mayor a menor)
  ranking.sort((a, b) => b.score - a.score);
  
  // Mantener solo top 5
  const newRanking = ranking.slice(0, MAX_ENTRIES);
  
  localStorage.setItem(RANKING_KEY, JSON.stringify(newRanking));
  
  // Retorna true si entró en el top 5
  return newRanking.includes(newEntry);
};

export const isTopScore = (score: number): boolean => {
  const ranking = getRanking();
  
  // Si hay menos de 5 entradas, siempre entra
  if (ranking.length < MAX_ENTRIES) return true;
  
  // Si la puntuación es mayor que la última del ranking
  const lowestScore = ranking[ranking.length - 1].score;
  return score > lowestScore;
};

export const clearRanking = (): void => {
  localStorage.removeItem(RANKING_KEY);
};