export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const questions: Question[] = [
  // Geografía
  {
    id: 1,
    question: "¿Cuál es la capital de Francia?",
    options: ["Londres", "Berlín", "París", "Madrid"],
    correctAnswer: 2,
    category: "Geografía"
  },
  {
    id: 2,
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    correctAnswer: 1,
    category: "Geografía"
  },
  {
    id: 3,
    question: "¿Cuántos continentes hay en la Tierra?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Geografía"
  },
  {
    id: 4,
    question: "¿En qué país se encuentra la Torre Eiffel?",
    options: ["Italia", "España", "Francia", "Alemania"],
    correctAnswer: 2,
    category: "Geografía"
  },
  
  // Historia
  {
    id: 5,
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1965", "1969", "1972", "1975"],
    correctAnswer: 1,
    category: "Historia"
  },
  {
    id: 6,
    question: "¿Quién descubrió América?",
    options: ["Magallanes", "Colón", "Vespucio", "Cortés"],
    correctAnswer: 1,
    category: "Historia"
  },
  {
    id: 7,
    question: "¿En qué año cayó el Muro de Berlín?",
    options: ["1985", "1987", "1989", "1991"],
    correctAnswer: 2,
    category: "Historia"
  },
  {
    id: 8,
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    options: ["Jefferson", "Washington", "Lincoln", "Adams"],
    correctAnswer: 1,
    category: "Historia"
  },

  // Arte y Cultura
  {
    id: 9,
    question: "¿Quién pintó 'La Gioconda' (Mona Lisa)?",
    options: ["Picasso", "Van Gogh", "Da Vinci", "Dalí"],
    correctAnswer: 2,
    category: "Arte"
  },
  {
    id: 10,
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    options: ["Lope de Vega", "Cervantes", "Góngora", "Quevedo"],
    correctAnswer: 1,
    category: "Arte"
  },
  {
    id: 11,
    question: "¿Qué instrumento tocaba Mozart?",
    options: ["Violín", "Piano", "Flauta", "Todos los anteriores"],
    correctAnswer: 3,
    category: "Arte"
  },
  {
    id: 12,
    question: "¿Quién pintó 'La noche estrellada'?",
    options: ["Monet", "Van Gogh", "Picasso", "Rembrandt"],
    correctAnswer: 1,
    category: "Arte"
  },

  // Ciencia
  {
    id: 13,
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Saturno", "Júpiter", "Urano", "Neptuno"],
    correctAnswer: 1,
    category: "Ciencia"
  },
  {
    id: 14,
    question: "¿Cuál es la velocidad de la luz?",
    options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "200.000 km/s"],
    correctAnswer: 0,
    category: "Ciencia"
  },
  {
    id: 15,
    question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    category: "Ciencia"
  },
  {
    id: 16,
    question: "¿Qué gas respiran las plantas?",
    options: ["Oxígeno", "Nitrógeno", "CO2", "Hidrógeno"],
    correctAnswer: 2,
    category: "Ciencia"
  },

  // Deportes
  {
    id: 17,
    question: "¿En qué deporte destaca Rafa Nadal?",
    options: ["Fútbol", "Tenis", "Baloncesto", "Golf"],
    correctAnswer: 1,
    category: "Deportes"
  },
  {
    id: 18,
    question: "¿Cada cuántos años se celebran los Juegos Olímpicos?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    correctAnswer: 2,
    category: "Deportes"
  },
  {
    id: 19,
    question: "¿Cuántos jugadores hay en un equipo de fútbol?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    category: "Deportes"
  },
  {
    id: 20,
    question: "¿En qué país se inventó el baloncesto?",
    options: ["Canadá", "Estados Unidos", "Reino Unido", "España"],
    correctAnswer: 1,
    category: "Deportes"
  }
];