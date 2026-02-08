export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number;
}

export const questions: Question[] = [
  // ==================== FÁCILES (30 preguntas - 15 segundos) ====================
  
  // Geografía Fácil
  {
    id: 1,
    question: "¿Cuál es la capital de Francia?",
    options: ["Londres", "Berlín", "París", "Madrid"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 2,
    question: "¿En qué continente está Egipto?",
    options: ["Asia", "África", "Europa", "América"],
    correctAnswer: 1,
    category: "Geografía",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 3,
    question: "¿Cuál es el océano más grande?",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 4,
    question: "¿Cuántos continentes hay?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 5,
    question: "¿En qué país está la Torre Eiffel?",
    options: ["Italia", "España", "Francia", "Alemania"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'easy',
    timeLimit: 15
  },

  // Historia Fácil
  {
    id: 6,
    question: "¿Quién descubrió América?",
    options: ["Magallanes", "Cristóbal Colón", "Vespucio", "Cortés"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 7,
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1965", "1969", "1972", "1975"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 8,
    question: "¿Qué civilización construyó las pirámides de Giza?",
    options: ["Romanos", "Griegos", "Egipcios", "Mayas"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 9,
    question: "¿En qué siglo ocurrió la Revolución Francesa?",
    options: ["Siglo XVI", "Siglo XVII", "Siglo XVIII", "Siglo XIX"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 10,
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    options: ["Lincoln", "Washington", "Jefferson", "Roosevelt"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'easy',
    timeLimit: 15
  },

  // Ciencia Fácil
  {
    id: 11,
    question: "¿Cuál es el planeta más cercano al Sol?",
    options: ["Venus", "Mercurio", "Marte", "Tierra"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 12,
    question: "¿Qué gas respiramos principalmente?",
    options: ["Oxígeno", "Nitrógeno", "CO2", "Hidrógeno"],
    correctAnswer: 0,
    category: "Ciencia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 13,
    question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 14,
    question: "¿Qué órgano bombea la sangre?",
    options: ["Pulmón", "Hígado", "Corazón", "Cerebro"],
    correctAnswer: 2,
    category: "Ciencia",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 15,
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Saturno", "Júpiter", "Urano", "Neptuno"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'easy',
    timeLimit: 15
  },

  // Arte y Cultura Fácil
  {
    id: 16,
    question: "¿Quién pintó la Mona Lisa?",
    options: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Dalí"],
    correctAnswer: 2,
    category: "Arte",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 17,
    question: "¿Quién escribió Don Quijote?",
    options: ["Lope de Vega", "Cervantes", "Góngora", "Quevedo"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 18,
    question: "¿De qué país es originario el tango?",
    options: ["Brasil", "Argentina", "España", "Cuba"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 19,
    question: "¿Qué instrumento tiene 88 teclas?",
    options: ["Guitarra", "Piano", "Violín", "Flauta"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 20,
    question: "¿Quién pintó 'La noche estrellada'?",
    options: ["Monet", "Van Gogh", "Picasso", "Rembrandt"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'easy',
    timeLimit: 15
  },

  // Deportes Fácil
  {
    id: 21,
    question: "¿Cada cuántos años son los Juegos Olímpicos?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 22,
    question: "¿Cuántos jugadores hay en un equipo de fútbol?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 23,
    question: "¿En qué deporte destaca Rafa Nadal?",
    options: ["Fútbol", "Tenis", "Baloncesto", "Golf"],
    correctAnswer: 1,
    category: "Deportes",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 24,
    question: "¿Qué deporte practica Lionel Messi?",
    options: ["Tenis", "Baloncesto", "Fútbol", "Golf"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 25,
    question: "¿Cuántos puntos vale un touchdown en fútbol americano?",
    options: ["3", "6", "7", "10"],
    correctAnswer: 1,
    category: "Deportes",
    difficulty: 'easy',
    timeLimit: 15
  },

  // Entretenimiento Fácil
  {
    id: 26,
    question: "¿Qué superhéroe es conocido como el 'Hombre Araña'?",
    options: ["Batman", "Superman", "Spider-Man", "Iron Man"],
    correctAnswer: 2,
    category: "Entretenimiento",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 27,
    question: "¿En qué película aparece el personaje Jack Sparrow?",
    options: ["Titanic", "Piratas del Caribe", "Avatar", "Matrix"],
    correctAnswer: 1,
    category: "Entretenimiento",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 28,
    question: "¿Qué compañía creó Mickey Mouse?",
    options: ["Warner", "Disney", "Pixar", "DreamWorks"],
    correctAnswer: 1,
    category: "Entretenimiento",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 29,
    question: "¿Cómo se llama el león de 'El Rey León'?",
    options: ["Mufasa", "Simba", "Scar", "Timón"],
    correctAnswer: 1,
    category: "Entretenimiento",
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 30,
    question: "¿Qué saga incluye 'La Amenaza Fantasma'?",
    options: ["Harry Potter", "Star Wars", "El Señor de los Anillos", "Matrix"],
    correctAnswer: 1,
    category: "Entretenimiento",
    difficulty: 'easy',
    timeLimit: 15
  },

  // ==================== MEDIAS (30 preguntas - 10 segundos) ====================

  // Geografía Media
  {
    id: 31,
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    correctAnswer: 1,
    category: "Geografía",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 32,
    question: "¿Qué país tiene más habitantes?",
    options: ["India", "China", "Estados Unidos", "Indonesia"],
    correctAnswer: 0,
    category: "Geografía",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 33,
    question: "¿En qué ciudad se encuentra el Coliseo?",
    options: ["Atenas", "Roma", "París", "Madrid"],
    correctAnswer: 1,
    category: "Geografía",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 34,
    question: "¿Cuál es la capital de Australia?",
    options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 35,
    question: "¿Qué país tiene forma de bota?",
    options: ["Grecia", "España", "Italia", "Portugal"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'medium',
    timeLimit: 10
  },

  // Historia Media
  {
    id: 36,
    question: "¿En qué año cayó el Muro de Berlín?",
    options: ["1985", "1987", "1989", "1991"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 37,
    question: "¿Quién fue el líder de la Alemania Nazi?",
    options: ["Mussolini", "Hitler", "Stalin", "Churchill"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 38,
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    options: ["1912", "1914", "1916", "1918"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 39,
    question: "¿Quién fue el emperador de Roma durante el gran incendio del año 64?",
    options: ["Augusto", "Julio César", "Nerón", "Calígula"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 40,
    question: "¿Qué civilización inventó la escritura cuneiforme?",
    options: ["Egipcia", "Sumeria", "China", "Maya"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'medium',
    timeLimit: 10
  },

  // Ciencia Media
  {
    id: 41,
    question: "¿Cuál es la velocidad de la luz?",
    options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "200.000 km/s"],
    correctAnswer: 0,
    category: "Ciencia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 42,
    question: "¿Qué elemento tiene el símbolo químico 'Au'?",
    options: ["Plata", "Oro", "Aluminio", "Hierro"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 43,
    question: "¿Quién formuló la teoría de la relatividad?",
    options: ["Newton", "Einstein", "Galileo", "Hawking"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 44,
    question: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
    options: ["Oxígeno", "Nitrógeno", "CO2", "Argón"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 45,
    question: "¿Cuántos cromosomas tiene el ser humano?",
    options: ["23", "46", "48", "44"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'medium',
    timeLimit: 10
  },

  // Tecnología Media
  {
    id: 46,
    question: "¿Quién fundó Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
    correctAnswer: 1,
    category: "Tecnología",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 47,
    question: "¿En qué año se lanzó el primer iPhone?",
    options: ["2005", "2007", "2009", "2010"],
    correctAnswer: 1,
    category: "Tecnología",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 48,
    question: "¿Qué significa CPU?",
    options: ["Computer Personal Unit", "Central Processing Unit", "Central Program Unit", "Computer Process Unit"],
    correctAnswer: 1,
    category: "Tecnología",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 49,
    question: "¿Qué empresa creó el sistema operativo Android?",
    options: ["Apple", "Microsoft", "Google", "Samsung"],
    correctAnswer: 2,
    category: "Tecnología",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 50,
    question: "¿Cuántos bits tiene un byte?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 1,
    category: "Tecnología",
    difficulty: 'medium',
    timeLimit: 10
  },

  // Arte Media
  {
    id: 51,
    question: "¿Qué artista cortó parte de su oreja?",
    options: ["Picasso", "Van Gogh", "Dalí", "Monet"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 52,
    question: "¿Quién compuso 'Las Cuatro Estaciones'?",
    options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
    correctAnswer: 2,
    category: "Arte",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 53,
    question: "¿Qué movimiento artístico fundó Pablo Picasso?",
    options: ["Surrealismo", "Cubismo", "Impresionismo", "Expresionismo"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 54,
    question: "¿Quién escribió 'Cien Años de Soledad'?",
    options: ["Borges", "García Márquez", "Cortázar", "Vargas Llosa"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 55,
    question: "¿En qué museo se encuentra 'La Gioconda'?",
    options: ["Prado", "Louvre", "British Museum", "MoMA"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'medium',
    timeLimit: 10
  },

  // Deportes Media
  {
    id: 56,
    question: "¿En qué país se inventó el baloncesto?",
    options: ["Canadá", "Estados Unidos", "Reino Unido", "España"],
    correctAnswer: 1,
    category: "Deportes",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 57,
    question: "¿Cuántos Grand Slams de tenis hay al año?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 58,
    question: "¿Qué país ha ganado más Copas del Mundo de fútbol?",
    options: ["Alemania", "Argentina", "Brasil", "Italia"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 59,
    question: "¿En qué deporte se usa un 'birdie'?",
    options: ["Golf", "Tenis", "Bádminton", "Cricket"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'medium',
    timeLimit: 10
  },
  {
    id: 60,
    question: "¿Cuántos anillos hay en el símbolo olímpico?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    category: "Deportes",
    difficulty: 'medium',
    timeLimit: 10
  },

  // ==================== DIFÍCILES (20 preguntas - 7 segundos) ====================

  // Historia Difícil
  {
    id: 61,
    question: "¿En qué año se firmó el Tratado de Versalles?",
    options: ["1917", "1918", "1919", "1920"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 62,
    question: "¿Quién fue el último emperador de Bizancio?",
    options: ["Constantino IX", "Constantino XI", "Justiniano II", "Miguel VIII"],
    correctAnswer: 1,
    category: "Historia",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 63,
    question: "¿En qué batalla fue derrotado definitivamente Napoleón?",
    options: ["Austerlitz", "Leipzig", "Waterloo", "Jena"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 64,
    question: "¿Qué faraón construyó la Gran Pirámide de Giza?",
    options: ["Ramsés II", "Tutankamón", "Keops", "Kefrén"],
    correctAnswer: 2,
    category: "Historia",
    difficulty: 'hard',
    timeLimit: 7
  },

  // Ciencia Difícil
  {
    id: 65,
    question: "¿Cuál es la partícula subatómica descubierta en 2012 en el CERN?",
    options: ["Neutrino", "Bosón de Higgs", "Quark Top", "Gravitón"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 66,
    question: "¿Qué número atómico tiene el Uranio?",
    options: ["88", "90", "92", "94"],
    correctAnswer: 2,
    category: "Ciencia",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 67,
    question: "¿Cuántos pares de nervios craneales tiene el ser humano?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 68,
    question: "¿Qué científico propuso el principio de incertidumbre?",
    options: ["Schrödinger", "Heisenberg", "Bohr", "Planck"],
    correctAnswer: 1,
    category: "Ciencia",
    difficulty: 'hard',
    timeLimit: 7
  },

  // Geografía Difícil
  {
    id: 69,
    question: "¿Cuál es la capital de Kazajistán?",
    options: ["Almaty", "Astaná", "Taskent", "Bishkek"],
    correctAnswer: 1,
    category: "Geografía",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 70,
    question: "¿Qué país tiene más husos horarios?",
    options: ["Rusia", "Estados Unidos", "Francia", "China"],
    correctAnswer: 2,
    category: "Geografía",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 71,
    question: "¿Cuál es el punto más bajo de la Tierra?",
    options: ["Valle de la Muerte", "Mar Muerto", "Fosa de las Marianas", "Lago Assal"],
    correctAnswer: 1,
    category: "Geografía",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 72,
    question: "¿En qué océano están las Islas Malvinas?",
    options: ["Pacífico", "Atlántico", "Índico", "Ártico"],
    correctAnswer: 1,
    category: "Geografía",
    difficulty: 'hard',
    timeLimit: 7
  },

  // Arte Difícil
  {
    id: 73,
    question: "¿Quién compuso 'El Mesías'?",
    options: ["Bach", "Händel", "Vivaldi", "Mozart"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 74,
    question: "¿Qué autor escribió 'En busca del tiempo perdido'?",
    options: ["Proust", "Joyce", "Kafka", "Mann"],
    correctAnswer: 0,
    category: "Arte",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 75,
    question: "¿En qué año se estrenó '2001: Una Odisea del Espacio'?",
    options: ["1966", "1968", "1970", "1972"],
    correctAnswer: 1,
    category: "Arte",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 76,
    question: "¿Quién pintó 'El Jardín de las Delicias'?",
    options: ["El Bosco", "Brueghel", "Van Eyck", "Memling"],
    correctAnswer: 0,
    category: "Arte",
    difficulty: 'hard',
    timeLimit: 7
  },

  // Tecnología Difícil
  {
    id: 77,
    question: "¿Qué significa ARPANET?",
    options: ["Advanced Research Projects Agency Network", "American Research Protocol Agency Network", "Automated Research Projects Access Network", "Applied Research Program Agency Network"],
    correctAnswer: 0,
    category: "Tecnología",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 78,
    question: "¿Quién inventó el lenguaje de programación Python?",
    options: ["Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup", "James Gosling"],
    correctAnswer: 1,
    category: "Tecnología",
    difficulty: 'hard',
    timeLimit: 7
  },

  // Deportes Difícil
  {
    id: 79,
    question: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
    options: ["1892", "1894", "1896", "1900"],
    correctAnswer: 2,
    category: "Deportes",
    difficulty: 'hard',
    timeLimit: 7
  },
  {
    id: 80,
    question: "¿Cuántos puntos vale un try en rugby?",
    options: ["3", "5", "7", "4"],
    correctAnswer: 1,
    category: "Deportes",
    difficulty: 'hard',
    timeLimit: 7
  }
];

// Función helper para filtrar por dificultad
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => {
  if (difficulty === 'mixed') {
    return [...questions].sort(() => Math.random() - 0.5); // Mezcla todas aleatoriamente
  }
  return questions.filter(q => q.difficulty === difficulty).sort(() => Math.random() - 0.5);
};