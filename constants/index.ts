export const subjects = [
  "mathématiques",
  "français",
  "sciences",
  "histoire",
  "programmation",
  "économie",
];

export const subjectsColors = {
  sciences: "#E5D0FF",
  mathématiques: "#FFDA6E",
  français: "#BDE7FF",
  programmation: "#FFC8E4",
  histoire: "#FFECC8",
  économie: "#C8FFDF",
};

export const voices = {
  male: { 
    provider: "cartesia",
    casual: "0418348a-0ca2-4e90-9986-800fb8b3bbc0", 
    formal: "0418348a-0ca2-4e90-9986-800fb8b3bbc0",
    model: "sonic-2" 
  },
  female: { 
    provider: "openai",
    casual: "fable", 
    formal: "fable",
    model: "tts-1"
     
  },
};

export const recentSessions = [
  {
    id: "1",
    subject: "sciences",
    name: "Ceuvra, l'exploratrice du cerveau",
    topic: "Réseaux neuronaux du cerveau",
    
    color: "#E5D0FF",
  },
  {
    id: "2",
    subject: "mathématiques",
    name: "Compta, la magicienne des nombres",
    topic: "Dérivées et intégrales",
    
    color: "#FFDA6E",
  },
  {
    id: "3",
    subject: "français",
    name: "Vocala, la bâtisseuse de vocabulaire",
    topic: "Littérature française",
    
    color: "#BDE7FF",
  },
  {
    id: "4",
    subject: "programmation",
    name: "Logik, le pirate du raisonnement",
    topic: "Introduction aux conditions If-Else",
    
    color: "#FFC8E4",
  },
  {
    id: "5",
    subject: "histoire",
    name: "Mémo, le gardien de l'histoire",
    topic: "Guerres mondiales : causes et conséquences",
    duration: 15,
    color: "#FFECC8",
  },
  {
    id: "6",
    subject: "économie",
    name: "Écono, le chef du marché",
    topic: "Les bases de l'offre et la demande",
    
    color: "#C8FFDF",
  },

  
]
export const myfavorite = [
  {
    id: "1",
    subject: "sciences",
    name: "Ceuvra, l'exploratrice du cerveau",
    topic: "Réseaux neuronaux du cerveau",
    duration : 20, 
    color: "#E5D0FF",
  },
  {
    id: "2",
    subject: "mathématiques",
    name: "Compta, la magicienne des nombres",
    topic: "Dérivées et intégrales",
    duration: 15,
    color: "#FFDA6E",
  },
  {
    id: "3",
    subject: "français",
    name: "Vocala, la bâtisseuse de vocabulaire",
    topic: "Littérature française",
    duration: 30,
    color: "#BDE7FF",
  },
  
];