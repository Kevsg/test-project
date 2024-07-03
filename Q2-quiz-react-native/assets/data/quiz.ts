export type QuestionType = {
    question: string;
    choices: string[];
    correctAnswer: number;
};

const questions: QuestionType[] = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Venus"],
        correctAnswer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Jupiter", "Mars", "Venus"],
        correctAnswer: 2
    },
    {
        question: "Who wrote Romeo and Juliet?",
        choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Gold", "Silver", "Helium"],
        correctAnswer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Cluade Monet"],
        correctAnswer: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical formula for water?",
        choices: ["H2O", "CO2", "O2", "H2SO4"],
        correctAnswer: 0
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        correctAnswer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Diamond", "Silver", "Iron"],
        correctAnswer: 1
    },
    {
        question: "Which element is said to keep bones strong?",
        choices: ["Calcium", "Potassium", "Sodium", "Magnesium"],
        correctAnswer: 0
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        correctAnswer: 2
    },
    {
        question: "Who wrote the novel 1984?",
        choices: ["George Orwell", "Aldous Huxley", "F. Scott Fitzgerald", "J.D. Salinger"],
        correctAnswer: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2
    },
    {
        question: "Who is the Greek god of the sea?",
        choices: ["Zeus", "Hades", "Hermes", "Poseidon"],
        correctAnswer: 3
    },
    {
        question: "What is the name of the process by which plants make their food?",
        choices: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
        correctAnswer: 0
    },
    {
        question: "Which language is the most spoken worldwide?",
        choices: ["Spanish", "English", "Hindi", "Mandarin Chinese"],
        correctAnswer: 3
    },
];

function shuffleArray(array: QuestionType[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


export const generateQuiz = () => {
    //TODOS: Random the quiz
    return shuffleArray(questions)
}


